import React from 'react';
import { Project, projectsData } from '../data/projects';
import { ProjectPreview } from './ProjectPreview';
import { ExternalLink, Check, Sparkles } from 'lucide-react';

interface ProjectShowcaseProps {
  onOpenFullModal: (projectId: string) => void;
  onOpenInquiry: () => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  onOpenFullModal,
  onOpenInquiry
}) => {
  return (
    <section id="work" className="py-28 sm:py-36 border-b border-border-subtle bg-dark relative">
      <div className="max-w-[1340px] mx-auto px-5 sm:px-8">
        
        {/* Section Header (Marijana Pav Structural & Nobl Typography Feel) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-8 border-b border-border-subtle gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                / SELECTED WORK
              </span>
              <span className="text-[10px] font-mono bg-cream-warm/15 text-cream-warm border border-cream-warm/30 px-2.5 py-0.5 rounded tracking-wider">
                02 FEATURED EXHIBITIONS
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-text-main tracking-tight leading-[1.1]">
              A small selection of websites <br />
              <span className="text-cream-warm italic font-serif font-normal">built around the businesses they represent.</span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end justify-between gap-3 max-w-md">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono text-accent bg-surface-2 px-3 py-1.5 rounded-md border border-border-subtle">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span className="uppercase tracking-widest font-semibold">100% INTERACTIVE DEMOS</span>
            </div>
            <p className="text-sm text-text-muted leading-relaxed">
              Real live website applications. Interact with menus, test responsive viewports, click forms, and experience the actual digital architecture.
            </p>
          </div>
        </div>

        {/* Projects Exhibition List */}
        <div className="space-y-32 sm:space-y-40">
          {projectsData.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={project.id} 
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-6 border-t border-white/5 first:border-0"
              >
                
                {/* Project Metadata & Description (4 cols) */}
                <div className={`lg:col-span-4 flex flex-col justify-between ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div>
                    {/* Number & Category */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-4xl font-extrabold text-accent">
                        {project.number}
                      </span>
                      <span className="font-mono text-[10px] uppercase text-text-muted bg-surface-2 px-3 py-1 rounded-full border border-border-subtle tracking-widest">
                        {project.industry}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-text-main mb-4 tracking-tight">
                      {project.name}
                    </h3>

                    {/* Services Badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.services.map((service, i) => (
                        <span 
                          key={i} 
                          className="text-[10px] font-mono text-cream-warm/90 bg-cream-warm/10 px-2.5 py-1 rounded border border-cream-warm/20 tracking-wider"
                        >
                          {service}
                        </span>
                      ))}
                    </div>

                    {/* Project Description */}
                    <p className="text-sm sm:text-base text-text-muted leading-relaxed mb-6 font-normal">
                      {project.description}
                    </p>

                    {/* Key Interactive Features */}
                    <div className="space-y-2.5 mb-8 bg-surface-2/60 p-5 rounded-xl border border-border-subtle">
                      <span className="text-xs font-mono uppercase tracking-wider text-text-main block mb-2 font-semibold">
                        Key Interactive Features:
                      </span>
                      {project.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-text-muted">
                          <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border-subtle">
                    <button
                      onClick={() => onOpenFullModal(project.id)}
                      className="flex items-center gap-2 bg-cream-warm hover:bg-cream-soft text-dark font-semibold px-5 py-3 rounded-lg text-xs font-mono uppercase tracking-wider transition shadow-sm"
                    >
                      <span>View Full Website</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={onOpenInquiry}
                      className="flex items-center gap-1.5 text-xs text-text-muted hover:text-text-main font-mono px-3 py-2 transition"
                    >
                      <span>Request concept like this →</span>
                    </button>
                  </div>
                </div>

                {/* Live Interactive Project Window (8 cols) */}
                <div className={`lg:col-span-8 w-full ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <ProjectPreview
                    projectId={project.id}
                    projectName={project.name}
                    domain={project.domain}
                    accentColor={project.accentColor}
                    projectUrl={project.url}
                    onOpenFullModal={onOpenFullModal}
                  />
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
