import React, { useState, useRef } from 'react';
import { Monitor, Tablet, Smartphone, Lock, RotateCw, ExternalLink, Sparkles } from 'lucide-react';
import { CedarStoneCafeDemo } from '../projects/CedarStoneCafe';
import { RiversideDentalDemo } from '../projects/RiversideDental';

interface ProjectPreviewProps {
  projectId: string;
  projectName: string;
  domain: string;
  accentColor: string;
  projectUrl: string;
  onOpenFullModal: (projectId: string) => void;
}

export const ProjectPreview: React.FC<ProjectPreviewProps> = ({
  projectId,
  projectName,
  domain,
  accentColor,
  projectUrl,
  onOpenFullModal
}) => {
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [refreshKey, setRefreshKey] = useState<number>(0);
  const [iframeError, setIframeError] = useState<boolean>(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleRefresh = () => {
    setRefreshKey((prev) => prev + 1);
    if (iframeRef.current) {
      iframeRef.current.src = `${projectUrl}?reload=${Date.now()}`;
    }
  };

  // Dynamic container dimensions based on selected device view
  const getDeviceContainerStyle = () => {
    switch (device) {
      case 'mobile':
        return 'w-[375px] max-w-full h-[660px] shadow-2xl rounded-xl border border-white/20 my-4';
      case 'tablet':
        return 'w-[768px] max-w-full h-[700px] shadow-2xl rounded-xl border border-white/15 my-4';
      case 'desktop':
      default:
        return 'w-full h-[640px] sm:h-[720px] rounded-lg';
    }
  };

  const renderFallbackComponent = () => {
    switch (projectId) {
      case 'cedar-stone-cafe':
        return <CedarStoneCafeDemo key={refreshKey} />;
      case 'riverside-dental':
        return <RiversideDentalDemo key={refreshKey} />;
      default:
        return <CedarStoneCafeDemo key={refreshKey} />;
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Top Device Switcher Controls */}
      <div className="w-full flex flex-wrap items-center justify-between gap-3 bg-surface-2/90 backdrop-blur border border-border-subtle p-2.5 rounded-t-xl">
        
        {/* Left: Device View Controls */}
        <div className="flex items-center gap-1 bg-dark/80 p-1 rounded-lg border border-white/5">
          <button
            onClick={() => setDevice('desktop')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono transition ${
              device === 'desktop'
                ? 'bg-cream-warm/15 text-cream-warm border border-cream-warm/30 shadow-sm font-semibold'
                : 'text-text-muted hover:text-text-main'
            }`}
            title="Desktop View"
          >
            <Monitor className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">DESKTOP</span>
          </button>
          
          <button
            onClick={() => setDevice('tablet')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono transition ${
              device === 'tablet'
                ? 'bg-cream-warm/15 text-cream-warm border border-cream-warm/30 shadow-sm font-semibold'
                : 'text-text-muted hover:text-text-main'
            }`}
            title="Tablet View (768px)"
          >
            <Tablet className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">TABLET</span>
          </button>
          
          <button
            onClick={() => setDevice('mobile')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono transition ${
              device === 'mobile'
                ? 'bg-cream-warm/15 text-cream-warm border border-cream-warm/30 shadow-sm font-semibold'
                : 'text-text-muted hover:text-text-main'
            }`}
            title="Mobile View (375px)"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">MOBILE</span>
          </button>
        </div>

        {/* Center: Live Interactive Badge */}
        <div className="hidden md:flex items-center gap-2 text-[11px] text-text-muted font-mono bg-dark/50 px-3 py-1 rounded-full border border-white/5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>FULL INTERACTIVE EXPERIENCE</span>
        </div>

        {/* Right: Full Website Trigger Button */}
        <button
          onClick={() => onOpenFullModal(projectId)}
          className="flex items-center gap-1.5 bg-cream-warm/10 hover:bg-cream-warm/20 text-cream-warm border border-cream-warm/25 text-xs font-semibold px-3 py-1.5 rounded-lg transition"
        >
          <span>VIEW FULL WEBSITE</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Outer Device Frame Container */}
      <div className="w-full bg-dark/95 border-x border-b border-border-subtle rounded-b-xl p-2 sm:p-4 flex items-center justify-center overflow-x-auto min-h-[660px]">
        <div className={`transition-all duration-300 ease-out flex flex-col bg-dark overflow-hidden border border-white/10 shadow-preview ${getDeviceContainerStyle()}`}>
          
          {/* Browser Chrome Header */}
          <div className="bg-[#18191E] border-b border-white/10 px-3.5 py-2.5 flex items-center justify-between select-none">
            {/* Window Controls Dots */}
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
            </div>

            {/* URL Address Bar */}
            <div className="flex-1 max-w-sm mx-3 bg-[#0E0F12] border border-white/10 rounded-md px-2.5 py-1 flex items-center justify-between text-xs text-text-muted">
              <div className="flex items-center gap-1.5 overflow-hidden">
                <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                <span className="truncate text-[11px] font-mono text-slate-300">https://{domain}</span>
              </div>
              <button 
                onClick={handleRefresh}
                className="text-text-muted hover:text-white p-0.5 transition"
                title="Reload Preview"
              >
                <RotateCw className="w-3 h-3" />
              </button>
            </div>

            {/* Device tag */}
            <span className="text-[10px] uppercase font-mono text-accent/80 tracking-wider hidden sm:inline">
              {device}
            </span>
          </div>

          {/* Interactive Project Body */}
          <div className="flex-1 relative bg-dark overflow-hidden">
            {!iframeError ? (
              <iframe
                ref={iframeRef}
                key={`${projectUrl}-${refreshKey}`}
                src={projectUrl}
                title={projectName}
                onError={() => setIframeError(true)}
                className="w-full h-full border-0 bg-dark pointer-events-auto"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            ) : (
              <div className="w-full h-full overflow-y-auto custom-scrollbar">
                {renderFallbackComponent()}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
