'use client';
import { motion } from 'framer-motion';
import SectionWrapper, { itemVariants } from '@/components/SectionWrapper';
import { ACHIEVEMENTS } from '@/lib/constants';

export default function Achievements() {
  return (
    <SectionWrapper id="achievements">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={itemVariants} className="mb-16">
          <span className="text-accent font-mono text-sm tracking-wider">05.</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-2">Achievements</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
      </div>
    </SectionWrapper>
  );
}
