'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper, { itemVariants } from '@/components/SectionWrapper';
import { ACHIEVEMENTS, CERTIFICATIONS } from '@/lib/constants';

type FilterType = 'All' | 'Google Cloud' | 'AWS';

export default function Achievements() {
  const [filter, setFilter] = useState<FilterType>('All');
  const [showAll, setShowAll] = useState(false);

  // Normalize issuer names for filtering
  const getFilterCategory = (issuer: string): FilterType => {
    if (issuer.toLowerCase().includes('google')) return 'Google Cloud';
    if (issuer.toLowerCase().includes('amazon') || issuer.toLowerCase().includes('aws')) return 'AWS';
    return 'All';
  };

  const filteredCertifications = CERTIFICATIONS.filter(cert => {
    if (filter === 'All') return true;
    return getFilterCategory(cert.issuer) === filter;
  });

  const visibleCertifications = showAll 
    ? filteredCertifications 
    : filteredCertifications.slice(0, 6);

  const filterCounts = {
    All: CERTIFICATIONS.length,
    'Google Cloud': CERTIFICATIONS.filter(c => getFilterCategory(c.issuer) === 'Google Cloud').length,
    AWS: CERTIFICATIONS.filter(c => getFilterCategory(c.issuer) === 'AWS').length,
  };

  return (
    <SectionWrapper id="achievements">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Header */}
        <motion.div variants={itemVariants} className="mb-12">
          <span className="text-accent font-mono text-sm tracking-wider">05.</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-2">Achievements</h2>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-24">
          {ACHIEVEMENTS.map((ach, i) => (
            <motion.div
              key={ach.title}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="relative rounded-2xl border border-border bg-surface p-6
                hover:border-accent/40 transition-all duration-300 overflow-hidden group"
            >
              {/* Shimmer effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    'linear-gradient(105deg, transparent 40%, var(--accent-muted) 45%, var(--accent) 50%, var(--accent-muted) 55%, transparent 60%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 2s linear infinite',
                }}
              />

              <div className="relative z-10">
                <span className="text-4xl mb-4 block">{ach.icon}</span>
                <h3 className="font-display text-lg font-bold mb-2">{ach.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{ach.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Header */}
        <motion.div variants={itemVariants} className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-bold">Certifications & Badges</h3>
            <p className="text-muted text-sm mt-2">Verified credentials from official issuers</p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-2 p-1 rounded-xl bg-surface border border-border self-start md:self-end">
            {(['All', 'Google Cloud', 'AWS'] as FilterType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setFilter(tab);
                  setShowAll(false); // Reset showAll when filter changes
                }}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-300
                  ${filter === tab 
                    ? 'bg-accent text-white shadow-sm shadow-accent/20' 
                    : 'text-muted hover:text-foreground hover:bg-surface-hover'
                  }
                `}
              >
                {tab} ({filterCounts[tab]})
              </button>
            ))}
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {visibleCertifications.map((cert) => (
              <motion.a
                layout
                key={cert.name}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="flex items-center gap-4 rounded-xl border border-border bg-surface p-4 
                  hover:border-accent/40 transition-all duration-300 group"
              >
                {/* Badge Icon */}
                <div className="flex-shrink-0 w-16 h-16 relative bg-white/5 rounded-lg flex items-center justify-center p-1 overflow-hidden">
                  <img
                    src={cert.imageUrl}
                    alt={cert.name}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Details */}
                <div className="flex-grow min-w-0">
                  <h4 className="font-display font-bold text-sm text-foreground group-hover:text-accent transition-colors line-clamp-2 leading-snug">
                    {cert.name}
                  </h4>
                  <div className="flex items-center justify-between mt-2 text-[11px] text-muted">
                    <span>{cert.issuer}</span>
                    <span>
                      {new Date(cert.date).toLocaleDateString('en-US', {
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More / Show Less Toggle Button */}
        {filteredCertifications.length > 6 && (
          <motion.div variants={itemVariants} className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-accent 
                text-foreground hover:text-accent rounded-xl font-medium transition-all duration-300 text-sm"
            >
              <span>{showAll ? 'Show Less' : `Show All Badges (${filteredCertifications.length})`}</span>
              <svg 
                className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </motion.div>
        )}
      </div>
    </SectionWrapper>
  );
}
