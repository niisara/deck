import { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import mermaid from 'mermaid';
import SvgIcon from '../lib/icons/SvgIcon';

interface MermaidPopoverProps {
  diagram: string;
  title?: string;
}

const MIN_ZOOM = 0.1;
const MAX_ZOOM = 5;
const ZOOM_STEP = 0.15;

const zoomButtonStyle: React.CSSProperties = {
  width: '36px',
  height: '36px',
  padding: 0,
  backgroundColor: '#444',
  color: '#fff',
  border: '1px solid #666',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '18px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'background-color 0.15s',
  userSelect: 'none',
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

  useEffect(() => {
    if (isOpen && diagram) {
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
    const svgW = svg.getBoundingClientRect().width / scale;
    const svgH = svg.getBoundingClientRect().height / scale;
    if (svgW === 0 || svgH === 0) return;
    const fitScale = Math.min(
      (containerRect.width - 64) / svgW,
      (containerRect.height - 64) / svgH,
      MAX_ZOOM
    );
    setScale(clampScale(fitScale));
    setTranslate({ x: 0, y: 0 });
  }, [scale]);

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
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2147483647,
        padding: 0,
        margin: 0,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#1e1e1e',
          borderRadius: '8px',
          padding: '32px',
          width: '95vw',
          height: '95vh',
          overflow: 'hidden',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.7)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '40px',
            height: '40px',
            padding: 0,
            backgroundColor: '#ff5252',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
          }}
          aria-label="Close"
        >
          ×
        </button>

        {/* Title row */}
        {title && (
          <h3 style={{ marginTop: 0, marginBottom: '16px', marginRight: '60px', color: '#fff', fontSize: '1.5em' }}>
            {title}
          </h3>
        )}

        {/* Zoom toolbar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '12px',
            flexShrink: 0,
            userSelect: 'none',
          }}
        >
          <button onClick={zoomOut} style={zoomButtonStyle} title="Zoom out" aria-label="Zoom out">−</button>
          <span style={{ color: '#ccc', fontSize: '14px', minWidth: '48px', textAlign: 'center', fontVariantNumeric: 'tabular-nums' }}>
            {zoomPercent}%
          </span>
          <button onClick={zoomIn} style={zoomButtonStyle} title="Zoom in" aria-label="Zoom in">+</button>
          <div style={{ width: '1px', height: '24px', backgroundColor: '#555', margin: '0 4px' }} />
          <button onClick={resetZoom} style={{ ...zoomButtonStyle, width: 'auto', padding: '0 12px', fontSize: '13px' }} title="Reset zoom & pan" aria-label="Reset view">
            Reset
          </button>
          <button onClick={fitToScreen} style={{ ...zoomButtonStyle, width: 'auto', padding: '0 12px', fontSize: '13px' }} title="Fit diagram to screen" aria-label="Fit to screen">
            Fit
          </button>
          <span style={{ color: '#888', fontSize: '12px', marginLeft: '8px' }}>
            Scroll to zoom · Drag to pan
          </span>
        </div>

        {/* Diagram viewport (pan & zoom area) */}
        <div
          ref={containerRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          style={{
            backgroundColor: '#2d2d2d',
            borderRadius: '4px',
            overflow: 'hidden',
            flex: 1,
            minHeight: 0,
            cursor: isPanning.current ? 'grabbing' : 'grab',
            position: 'relative',
            touchAction: 'none', // prevent browser gestures so pointer events work
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
