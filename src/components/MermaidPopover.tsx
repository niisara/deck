import { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import mermaid from 'mermaid';
import { LiquidGlass } from '@liquidglass/react';
import SvgIcon from '../lib/icons/SvgIcon';

interface MermaidPopoverProps {
  diagram: string;
  title?: string;
}

const MIN_ZOOM = 0.1;
const MAX_ZOOM = 5;
const ZOOM_STEP = 0.15;

/* ── Button styles (no glass — container handles it) ── */
const glassBtn: React.CSSProperties = {
  width: '38px',
  height: '38px',
  padding: 0,
  background: 'rgba(255, 255, 255, 0.06)',
  color: 'rgba(255, 255, 255, 0.9)',
  border: '1px solid rgba(255, 255, 255, 0.14)',
  borderRadius: '10px',
  cursor: 'pointer',
  fontSize: '18px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'background 0.2s, border-color 0.2s, transform 0.15s',
  userSelect: 'none',
};

const glassBtnWide: React.CSSProperties = {
  ...glassBtn,
  width: 'auto',
  padding: '0 14px',
  fontSize: '13px',
  fontWeight: 500,
  letterSpacing: '0.3px',
};

export const MermaidPopover = ({ diagram, title }: MermaidPopoverProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [renderedSvg, setRenderedSvg] = useState<string>('');
  const mermaidRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Zoom & pan state
  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const isPanning = useRef(false);
  const panStart = useRef({ x: 0, y: 0 });
  const translateStart = useRef({ x: 0, y: 0 });

  // Reset zoom/pan when opening
  useEffect(() => {
    if (isOpen) {
      setScale(1);
      setTranslate({ x: 0, y: 0 });
    }
  }, [isOpen]);

  // Track whether we should auto-fit after first render
  const needsAutoFit = useRef(false);

  useEffect(() => {
    if (isOpen && diagram) {
      needsAutoFit.current = true;
      const renderDiagram = async () => {
        try {
          mermaid.initialize({
            startOnLoad: false,
            theme: 'dark',
            securityLevel: 'loose',
          });
          const id = `mermaid-${Date.now()}`;
          const { svg } = await mermaid.render(id, diagram);
          setRenderedSvg(svg);
        } catch (error) {
          console.error('Error rendering Mermaid diagram:', error);
          setRenderedSvg('<p style="color: #ff6b6b;">Error rendering diagram</p>');
        }
      };
      renderDiagram();
    }
  }, [isOpen, diagram]);

  // Handle ESC key to close modal and prevent other keyboard shortcuts
  useEffect(() => {
    if (isOpen) {
      const handleKeydown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          setIsOpen(false);
        }
        // Prevent all keyboard shortcuts from reaching Reveal.js
        event.stopPropagation();
      };
      
      document.addEventListener('keydown', handleKeydown, true);
      return () => {
        document.removeEventListener('keydown', handleKeydown, true);
      };
    }
  }, [isOpen]);

  // Hide slide navigation controls when modal is open
  useEffect(() => {
    if (isOpen) {
      const controls = document.querySelector('.reveal .controls') as HTMLElement;
      const progressBar = document.querySelector('.reveal .progress') as HTMLElement;
      const slideNumber = document.querySelector('.reveal .slide-number') as HTMLElement;
      const slideMenu = document.querySelector('.slide-menu-button') as HTMLElement;
      const slideMenuPanel = document.querySelector('.slide-menu') as HTMLElement;
      
      const restoreDisplay = (element: HTMLElement | null, originalValue: string) => {
        if (element) {
          if (originalValue === '') {
            element.style.removeProperty('display');
          } else {
            element.style.display = originalValue;
          }
        }
      };
      
      const originalDisplays = {
        controls: controls?.style.display || '',
        progressBar: progressBar?.style.display || '',
        slideNumber: slideNumber?.style.display || '',
        slideMenu: slideMenu?.style.display || '',
        slideMenuPanel: slideMenuPanel?.style.display || '',
      };
      
      if (controls) controls.style.display = 'none';
      if (progressBar) progressBar.style.display = 'none';
      if (slideNumber) slideNumber.style.display = 'none';
      if (slideMenu) slideMenu.style.display = 'none';
      if (slideMenuPanel) slideMenuPanel.style.display = 'none';
      
      return () => {
        restoreDisplay(controls, originalDisplays.controls);
        restoreDisplay(progressBar, originalDisplays.progressBar);
        restoreDisplay(slideNumber, originalDisplays.slideNumber);
        restoreDisplay(slideMenu, originalDisplays.slideMenu);
        restoreDisplay(slideMenuPanel, originalDisplays.slideMenuPanel);
      };
    }
  }, [isOpen]);

  // --- Zoom helpers ---
  const clampScale = (s: number) => Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, s));

  const zoomIn = useCallback(() => setScale((s) => clampScale(s + ZOOM_STEP)), []);
  const zoomOut = useCallback(() => setScale((s) => clampScale(s - ZOOM_STEP)), []);
  const resetZoom = useCallback(() => {
    setScale(1);
    setTranslate({ x: 0, y: 0 });
  }, []);
  const fitToScreen = useCallback(() => {
    if (!mermaidRef.current || !containerRef.current) return;
    const svg = mermaidRef.current.querySelector('svg');
    if (!svg) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    // Use intrinsic svg size (at scale=1) via viewBox or attribute dimensions
    const vb = svg.viewBox?.baseVal;
    let svgW: number, svgH: number;
    if (vb && vb.width > 0 && vb.height > 0) {
      svgW = vb.width;
      svgH = vb.height;
    } else {
      // fallback: measure actual rendered size divided by current scale
      const bbox = svg.getBoundingClientRect();
      svgW = bbox.width / scale;
      svgH = bbox.height / scale;
    }
    if (svgW === 0 || svgH === 0) return;
    const fitScale = Math.min(
      (containerRect.width - 64) / svgW,
      (containerRect.height - 64) / svgH,
      MAX_ZOOM
    );
    setScale(clampScale(fitScale));
    setTranslate({ x: 0, y: 0 });
  }, [scale]);

  // Auto-fit diagram after first render
  useEffect(() => {
    if (renderedSvg && needsAutoFit.current) {
      // Wait a frame for the SVG to be painted in the DOM
      const raf = requestAnimationFrame(() => {
        fitToScreen();
        needsAutoFit.current = false;
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [renderedSvg, fitToScreen]);

  // Mouse wheel zoom (zooms toward pointer)
  useEffect(() => {
    const container = containerRef.current;
    if (!isOpen || !container) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const rect = container.getBoundingClientRect();
      const pointerX = e.clientX - rect.left - rect.width / 2;
      const pointerY = e.clientY - rect.top - rect.height / 2;

      const direction = e.deltaY < 0 ? 1 : -1;
      const newScale = clampScale(scale + direction * ZOOM_STEP);
      const factor = newScale / scale;

      setTranslate((t) => ({
        x: pointerX - factor * (pointerX - t.x),
        y: pointerY - factor * (pointerY - t.y),
      }));
      setScale(newScale);
    };
    container.addEventListener('wheel', onWheel, { passive: false });
    return () => container.removeEventListener('wheel', onWheel);
  }, [isOpen, scale]);

  // Pan handlers
  const onPointerDown = useCallback((e: React.PointerEvent) => {
    if (e.button !== 0) return; // left button only
    isPanning.current = true;
    panStart.current = { x: e.clientX, y: e.clientY };
    translateStart.current = { ...translate };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }, [translate]);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!isPanning.current) return;
    setTranslate({
      x: translateStart.current.x + (e.clientX - panStart.current.x),
      y: translateStart.current.y + (e.clientY - panStart.current.y),
    });
  }, []);

  const onPointerUp = useCallback(() => {
    isPanning.current = false;
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const zoomPercent = Math.round(scale * 100);

  const modal = isOpen ? (
    <div
      onClick={handleClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.92)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2147483647,
        padding: 0,
        margin: 0,
      }}
    >
      {/* Full-screen diagram viewport */}
      <div
        ref={containerRef}
        onClick={(e) => e.stopPropagation()}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        style={{
          width: '100vw',
          height: '100vh',
          overflow: 'hidden',
          cursor: isPanning.current ? 'grabbing' : 'grab',
          position: 'relative',
          touchAction: 'none',
        }}
      >
        <div
          ref={mermaidRef}
          style={{
            transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})`,
            transformOrigin: 'center center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            padding: '32px',
            boxSizing: 'border-box',
            transition: isPanning.current ? 'none' : 'transform 0.1s ease-out',
          }}
          dangerouslySetInnerHTML={{ __html: renderedSvg }}
        />
      </div>

      {/* ── Floating liquid-glass title ── */}
      {title && (
        <div
          onClick={(e) => e.stopPropagation()}
          style={{ position: 'absolute', top: '20px', left: '20px', pointerEvents: 'none' }}
        >
          <LiquidGlass borderRadius={16} blur={3.5} contrast={1.05} brightness={1.22} saturation={0.85} shadowIntensity={0.5} elasticity={0.5}>
            <div style={{
              padding: '10px 28px',
              position: 'relative',
            }}>
              {/* frost veil */}
              <div style={{
                position: 'absolute', inset: 0, borderRadius: 16,
                background: 'rgba(255,255,255,0.13)',
                pointerEvents: 'none',
              }} />
              <span style={{ position: 'relative', color: 'rgba(255,255,255,0.95)', fontSize: '1.15em', fontWeight: 600, whiteSpace: 'nowrap', textShadow: '0 1px 8px rgba(0,0,0,0.35)' }}>
                {title}
              </span>
            </div>
          </LiquidGlass>
        </div>
      )}

      {/* ── Floating liquid-glass toolbar ── */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ position: 'absolute', top: '20px', right: '20px' }}
      >
      <LiquidGlass borderRadius={16} blur={3.5} contrast={1.05} brightness={1.22} saturation={0.85} shadowIntensity={0.5} elasticity={0.5}>
      <div style={{
          padding: '10px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          userSelect: 'none',
          position: 'relative',
        }}>
        {/* frost veil */}
        <div style={{
          position: 'absolute', inset: 0, borderRadius: 16,
          background: 'rgba(255,255,255,0.13)',
          pointerEvents: 'none',
        }} />
        {/* Zoom out */}
        <button
          onClick={zoomOut}
          style={glassBtn}
          title="Zoom out"
          aria-label="Zoom out"
          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; }}
        >
          −
        </button>

        {/* Zoom percentage */}
        <span style={{
          color: 'rgba(255,255,255,0.8)',
          fontSize: '13px',
          minWidth: '48px',
          textAlign: 'center',
          fontVariantNumeric: 'tabular-nums',
          fontWeight: 500,
        }}>
          {zoomPercent}%
        </span>

        {/* Zoom in */}
        <button
          onClick={zoomIn}
          style={glassBtn}
          title="Zoom in"
          aria-label="Zoom in"
          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; }}
        >
          +
        </button>

        {/* Divider */}
        <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.12)', margin: '0 4px' }} />

        {/* Fit */}
        <button
          onClick={fitToScreen}
          style={glassBtnWide}
          title="Fit diagram to screen"
          aria-label="Fit to screen"
          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; }}
        >
          Fit
        </button>

        {/* Reset */}
        <button
          onClick={resetZoom}
          style={glassBtnWide}
          title="Reset zoom & pan"
          aria-label="Reset view"
          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; }}
        >
          1:1
        </button>

        {/* Divider */}
        <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.12)', margin: '0 4px' }} />

        {/* Close */}
        <button
          onClick={handleClose}
          style={{
            ...glassBtn,
            background: 'rgba(255, 82, 82, 0.25)',
            borderColor: 'rgba(255, 82, 82, 0.4)',
            fontSize: '20px',
          }}
          title="Close (Esc)"
          aria-label="Close"
          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,82,82,0.45)'; e.currentTarget.style.borderColor = 'rgba(255,82,82,0.6)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,82,82,0.25)'; e.currentTarget.style.borderColor = 'rgba(255,82,82,0.4)'; }}
        >
          ×
        </button>
      </div>
      </LiquidGlass>
      </div>

      {/* ── Hint text ── */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          color: 'rgba(255,255,255,0.35)',
          fontSize: '12px',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        Scroll to zoom · Drag to pan · Esc to close
      </div>
    </div>
  ) : null;

  return (
    <>
      <span
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen(true);
        }}
        style={{
          marginLeft: '8px',
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          verticalAlign: 'middle',
          opacity: 0.7,
          transition: 'opacity 0.2s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.7')}
      >
        <SvgIcon iconName="duo-diagram-project" sizeName="2x" style={{ margin: '0px' }} darkModeInvert={true} />
      </span>
      {modal && createPortal(modal, document.body)}
    </>
  );
};
