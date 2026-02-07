import React, { useState, useEffect } from 'react';
import {
  verifyPassword,
  recordFailedAttempt,
  resetAttempts,
  isLockedOut,
  getRemainingAttempts,
  formatRemainingTime
} from '../utils/settingsAuth';
import './PasswordGate.css';

interface PasswordGateProps {
  children: React.ReactNode;
}

/**
 * Password-protected gate component.
 * Allows max 3 attempts per hour before locking out the user.
 */
const PasswordGate: React.FC<PasswordGateProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [lockout, setLockout] = useState(isLockedOut());
  const [remainingAttempts, setRemainingAttempts] = useState(getRemainingAttempts());

  // Check lockout status on mount and set up timer
  useEffect(() => {
    const checkLockout = () => {
      const status = isLockedOut();
      setLockout(status);
      if (!status.locked) {
        setRemainingAttempts(getRemainingAttempts());
      }
    };

    // Check immediately
    checkLockout();

    // Set up interval to update lockout status
    const interval = setInterval(checkLockout, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear any previous error
    setError(null);

    // Check if locked out
    if (lockout.locked) {
      setError(`Too many attempts. Try again in ${formatRemainingTime(lockout.remainingTime!)}`);
      return;
    }

    // Verify password
    if (verifyPassword(password)) {
      resetAttempts();
      setIsAuthenticated(true);
      setError(null);
    } else {
      const result = recordFailedAttempt();
      
      if (result.locked) {
        setLockout({ locked: true, remainingTime: result.remainingTime });
        setError(`Too many failed attempts. Locked for 1 hour.`);
      } else {
        setError(`Incorrect password. ${result.remainingAttempts} attempt${result.remainingAttempts !== 1 ? 's' : ''} remaining.`);
        setRemainingAttempts(result.remainingAttempts);
      }
      
      setPassword('');
    }
  };

  // If authenticated, show the protected content
  if (isAuthenticated) {
    return <>{children}</>;
  }

  // Otherwise, show the password prompt
  return (
    <div className="password-gate">
      <div className="password-gate-container">
        <div className="password-gate-icon">🔒</div>
        <h2>Settings Access</h2>
        <p>Enter password to access settings</p>

        {lockout.locked ? (
          <div className="lockout-message">
            <p className="error-text">
              🚫 Too many failed attempts
            </p>
            <p className="lockout-time">
              Locked for {formatRemainingTime(lockout.remainingTime!)}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="password-form">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="password-input"
              autoFocus
              disabled={lockout.locked}
            />
            
            <button
              type="submit"
              className="password-submit"
              disabled={lockout.locked || !password}
            >
              Unlock
            </button>

            {error && (
              <div className="password-error">
                {error}
              </div>
            )}

            {!error && remainingAttempts < 3 && (
              <div className="attempts-warning">
                {remainingAttempts} attempt{remainingAttempts !== 1 ? 's' : ''} remaining
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default PasswordGate;
