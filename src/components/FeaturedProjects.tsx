'use client';
import { useRef, MouseEvent, useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper, { itemVariants } from '@/components/SectionWrapper';
import { FEATURED_PROJECTS } from '@/lib/constants';

function ProjectCard({ project, index }: { project: typeof FEATURED_PROJECTS[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setRotateX((y - 0.5) * -10);
    setRotateY((x - 0.5) * 10);
    setGlarePos({ x: x * 100, y: y * 100 });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos({ x: 50, y: 50 });
  };

  const isLarge = index === 0;

  return (
    <motion.div
      variants={itemVariants}
      className={isLarge ? 'md:col-span-2' : ''}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: 'transform 0.15s ease-out',
        }}
        className="relative h-full rounded-2xl border border-border bg-surface p-6 md:p-8
          hover:border-accent/40 transition-colors duration-300 overflow-hidden group"
      >
        {/* Glare effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, var(--accent-muted) 0%, transparent 50%)`,
          }}
        />

        {/* Project number */}
        <span className="text-accent/30 font-display text-6xl font-bold absolute top-4 right-6 select-none">
          0{index + 1}
        </span>

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-display text-xl md:text-2xl font-bold group-hover:text-accent transition-colors">
                {project.name}
              </h3>
            </div>
            {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-accent/10 transition-colors text-muted hover:text-accent"
              aria-label={`View ${project.name} on GitHub`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            ) : null}
          </div>

          {/* Description */}
          <p className="text-muted leading-relaxed mb-4">
            {project.description}
          </p>

          {project.role ? (
            <p className="text-sm text-muted mb-2">
              <span className="text-foreground font-semibold">My contribution:</span> {project.role}
            </p>
          ) : null}

          {project.evidence ? (
            <p className="text-sm text-muted leading-relaxed mb-5">
              <span className="text-foreground font-semibold">User evidence:</span> {project.evidence}
            </p>
          ) : <div className="mb-5" />}

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs font-mono rounded-full bg-accent/10 text-accent border border-accent/20"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturedProjects() {
  return (
    <SectionWrapper id="projects">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={itemVariants} className="mb-16">
          <span className="text-accent font-mono text-sm tracking-wider">01.</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-2">Featured Products & Projects</h2>
          <p className="text-muted mt-4 max-w-lg">
            A selection of products and technical projects shaped by user problems, experimentation, data, and engineering.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {FEATURED_PROJECTS.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
