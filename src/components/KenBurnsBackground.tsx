import { useState, useEffect } from 'react';
import './KenBurnsBackground.css';

interface KenBurnsBackgroundProps {
  images: string[];
  /** How long each image is shown in ms before crossfading to the next. Default: 30000 */
  duration?: number;
  /** Crossfade duration in ms. Default: 4000 */
  fadeDuration?: number;
}

function KenBurnsBackground({ images, duration = 30000, fadeDuration = 4000 }: KenBurnsBackgroundProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, duration);
    return () => clearInterval(id);
  }, [images.length, duration]);

  return (
    <div className="ken-burns-bg" style={{ ['--kb-fade' as string]: `${fadeDuration}ms` }}>
      {images.map((src, i) => (
        <div
          key={src}
          className={`kb-layer${i === activeIndex ? ' kb-active' : ''}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
      {/* dark gradient overlay to ensure text contrast */}
      <div className="kb-overlay" />
    </div>
  );
}

export default KenBurnsBackground;
