import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import mermaid from 'mermaid';
import SvgIcon from '../lib/icons/SvgIcon';

interface MermaidPopoverProps {
  diagram: string;
  title?: string;
}

export const MermaidPopover = ({ diagram, title }: MermaidPopoverProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [renderedSvg, setRenderedSvg] = useState<string>('');
  const mermaidRef = useRef<HTMLDivElement>(null);

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
      
      // Save original display values
      const originalDisplays = {
        controls: controls?.style.display || '',
        progressBar: progressBar?.style.display || '',
        slideNumber: slideNumber?.style.display || '',
        slideMenu: slideMenu?.style.display || '',
        slideMenuPanel: slideMenuPanel?.style.display || '',
      };
      
      // Hide controls
      if (controls) controls.style.display = 'none';
      if (progressBar) progressBar.style.display = 'none';
      if (slideNumber) slideNumber.style.display = 'none';
      if (slideMenu) slideMenu.style.display = 'none';
      if (slideMenuPanel) slideMenuPanel.style.display = 'none';
      
      // Cleanup function to restore original display values
      return () => {
        if (controls) controls.style.display = originalDisplays.controls;
        if (progressBar) progressBar.style.display = originalDisplays.progressBar;
        if (slideNumber) slideNumber.style.display = originalDisplays.slideNumber;
        if (slideMenu) slideMenu.style.display = originalDisplays.slideMenu;
        if (slideMenuPanel) slideMenuPanel.style.display = originalDisplays.slideMenuPanel;
      };
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

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
        zIndex: 2147483647, // Maximum z-index value
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
          overflow: 'auto',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.7)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
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
            zIndex: 1,
          }}
          aria-label="Close"
        >
          ×
        </button>
        {title && (
          <h3 style={{ marginTop: 0, marginBottom: '24px', marginRight: '60px', color: '#fff', fontSize: '1.5em' }}>
            {title}
          </h3>
        )}
        <div
          ref={mermaidRef}
          style={{
            backgroundColor: '#2d2d2d',
            padding: '32px',
            borderRadius: '4px',
            overflow: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            minHeight: 0,
          }}
          dangerouslySetInnerHTML={{ __html: renderedSvg }}
        />
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
        <SvgIcon iconName="duo-diagram-project" sizeName="2x" darkModeInvert={true} />
      </span>
      {modal && createPortal(modal, document.body)}
    </>
  );
};
