/**
 * Settings authentication utilities.
 * Tracks login attempts and provides rate limiting (max 3 attempts per hour).
 */

const STORAGE_KEY = 'settings-auth-attempts';
const MAX_ATTEMPTS = 3;
const LOCKOUT_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds

interface AuthAttempts {
  attempts: number;
  firstAttemptTime: number;
  lockedUntil?: number;
}

/** Load auth attempts from localStorage */
function loadAttempts(): AuthAttempts {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (err) {
    console.warn('Failed to load auth attempts:', err);
  }
  return { attempts: 0, firstAttemptTime: Date.now() };
}

/** Save auth attempts to localStorage */
function saveAttempts(data: AuthAttempts): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (err) {
    console.warn('Failed to save auth attempts:', err);
  }
}

/** Check if user is currently locked out */
export function isLockedOut(): { locked: boolean; remainingTime?: number } {
  const data = loadAttempts();
  
  if (data.lockedUntil && Date.now() < data.lockedUntil) {
    const remainingTime = data.lockedUntil - Date.now();
    return { locked: true, remainingTime };
  }
  
  return { locked: false };
}

/** Get remaining attempts before lockout */
export function getRemainingAttempts(): number {
  const data = loadAttempts();
  
  // Reset if more than 1 hour has passed since first attempt
  if (Date.now() - data.firstAttemptTime > LOCKOUT_DURATION) {
    return MAX_ATTEMPTS;
  }
  
  return Math.max(0, MAX_ATTEMPTS - data.attempts);
}

/** Record a failed attempt and return lockout info */
export function recordFailedAttempt(): { locked: boolean; remainingAttempts: number; remainingTime?: number } {
  let data = loadAttempts();
  
  // Reset attempts if more than 1 hour has passed since first attempt
  if (Date.now() - data.firstAttemptTime > LOCKOUT_DURATION) {
    data = { attempts: 0, firstAttemptTime: Date.now() };
  }
  
  data.attempts += 1;
  
  // Lock account if max attempts reached
  if (data.attempts >= MAX_ATTEMPTS) {
    data.lockedUntil = Date.now() + LOCKOUT_DURATION;
    saveAttempts(data);
    return {
      locked: true,
      remainingAttempts: 0,
      remainingTime: LOCKOUT_DURATION
    };
  }
  
  saveAttempts(data);
  return {
    locked: false,
    remainingAttempts: MAX_ATTEMPTS - data.attempts
  };
}

/** Reset auth attempts (on successful login) */
export function resetAttempts(): void {
  localStorage.removeItem(STORAGE_KEY);
}

/** Verify password against environment variable */
export function verifyPassword(inputPassword: string): boolean {
  const correctPassword = import.meta.env.VITE_SETTINGS_PASSWORD;
  
  if (!correctPassword) {
    console.warn('VITE_SETTINGS_PASSWORD not configured');
    return false;
  }
  
  return inputPassword === correctPassword;
}

/** Format remaining time for display */
export function formatRemainingTime(milliseconds: number): string {
  const minutes = Math.ceil(milliseconds / 60000);
  if (minutes < 60) {
    return `${minutes} minute${minutes !== 1 ? 's' : ''}`;
  }
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  if (remainingMinutes === 0) {
    return `${hours} hour${hours !== 1 ? 's' : ''}`;
  }
  return `${hours}h ${remainingMinutes}m`;
}
