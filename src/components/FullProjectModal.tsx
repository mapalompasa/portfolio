import React, { useState, useRef } from 'react';
import { X, RotateCw, Monitor, Tablet, Smartphone, Lock, Sparkles } from 'lucide-react';
import { Project } from '../data/projects';
import { CedarStoneCafeDemo } from '../projects/CedarStoneCafe';
import { RiversideDentalDemo } from '../projects/RiversideDental';

interface FullProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onRequestConcept: () => void;
}

export const FullProjectModal: React.FC<FullProjectModalProps> = ({
  project,
  isOpen,
  onClose,
  onRequestConcept
}) => {
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [refreshKey, setRefreshKey] = useState<number>(0);
  const [iframeError, setIframeError] = useState<boolean>(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  if (!isOpen || !project) return null;

  const handleRefresh = () => {
    setRefreshKey((prev) => prev + 1);
    if (iframeRef.current) {
      iframeRef.current.src = `${project.url}?reload=${Date.now()}`;
    }
  };

  const getWidthClass = () => {
    switch (device) {
      case 'mobile':
        return 'w-[375px] max-w-full h-full my-2 rounded-xl border border-white/20 shadow-2xl';
      case 'tablet':
        return 'w-[768px] max-w-full h-full my-2 rounded-xl border border-white/20 shadow-2xl';
      case 'desktop':
      default:
        return 'w-full h-full';
    }
  };

  const renderFallbackContent = () => {
    switch (project.id) {
      case 'cedar-stone-cafe':
        return <CedarStoneCafeDemo key={refreshKey} />;
      case 'riverside-dental':
        return <RiversideDentalDemo key={refreshKey} />;
      default:
        return <CedarStoneCafeDemo key={refreshKey} />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col animate-fadeIn">
      {/* Top Bar Controls */}
      <div className="bg-surface-2 border-b border-border-subtle px-4 py-3 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg bg-dark text-text-muted hover:text-white hover:bg-white/10 transition"
            title="Close Full Screen"
          >
            <X className="w-5 h-5" />
          </button>
          <div>
            <span className="text-xs font-mono text-accent block">{project.number} — {project.industry}</span>
            <h2 className="text-sm font-bold text-white tracking-tight">{project.name}</h2>
          </div>
        </div>

        {/* Device Controls */}
        <div className="hidden sm:flex items-center gap-1 bg-dark/80 p-1 rounded-lg border border-white/10">
          <button
            onClick={() => setDevice('desktop')}
            className={`p-1.5 rounded text-xs transition ${device === 'desktop' ? 'bg-cream-warm/20 text-cream-warm font-semibold' : 'text-text-muted hover:text-white'}`}
            title="Desktop View"
          >
            <Monitor className="w-4 h-4" />
          </button>
          <button
            onClick={() => setDevice('tablet')}
            className={`p-1.5 rounded text-xs transition ${device === 'tablet' ? 'bg-cream-warm/20 text-cream-warm font-semibold' : 'text-text-muted hover:text-white'}`}
            title="Tablet View (768px)"
          >
            <Tablet className="w-4 h-4" />
          </button>
          <button
            onClick={() => setDevice('mobile')}
            className={`p-1.5 rounded text-xs transition ${device === 'mobile' ? 'bg-cream-warm/20 text-cream-warm font-semibold' : 'text-text-muted hover:text-white'}`}
            title="Mobile View (375px)"
          >
            <Smartphone className="w-4 h-4" />
          </button>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              onClose();
              onRequestConcept();
            }}
            className="bg-cream-warm hover:bg-cream-soft text-dark font-semibold px-3 py-1.5 rounded-lg text-xs transition shadow-sm"
          >
            Get Concept Preview Like This →
          </button>
        </div>
      </div>

      {/* Main Full View Container */}
      <div className="flex-1 bg-dark/95 overflow-hidden flex items-center justify-center p-2 sm:p-4">
        <div className={`h-full flex flex-col bg-dark overflow-hidden border border-white/10 rounded-lg transition-all duration-300 ${getWidthClass()}`}>
          
          {/* Browser Address Bar */}
          <div className="bg-[#18191E] border-b border-white/10 px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="bg-[#0E0F12] border border-white/10 rounded px-3 py-1 text-xs text-text-muted flex items-center gap-2 max-w-xs w-full">
              <Lock className="w-3 h-3 text-emerald-400" />
              <span className="font-mono text-[11px] truncate">https://{project.domain}</span>
            </div>
            <button onClick={handleRefresh} className="text-text-muted hover:text-white">
              <RotateCw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Embedded Full View */}
          <div className="flex-1 relative bg-dark">
            {!iframeError ? (
              <iframe
                ref={iframeRef}
                key={`${project.url}-${refreshKey}`}
                src={project.url}
                title={project.name}
                onError={() => setIframeError(true)}
                className="w-full h-full border-0 bg-dark pointer-events-auto"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            ) : (
              <div className="w-full h-full overflow-y-auto custom-scrollbar">
                {renderFallbackContent()}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
