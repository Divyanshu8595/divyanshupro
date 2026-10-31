'use client';
import { motion } from 'framer-motion';
import SectionWrapper, { itemVariants } from '@/components/SectionWrapper';
import { EXPERIENCE } from '@/lib/constants';

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={itemVariants} className="mb-16">
          <span className="text-accent font-mono text-sm tracking-wider">03.</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-2">Experience</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-12">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={exp.company}
                variants={itemVariants}
                className={`relative flex items-start gap-8 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
                    className="w-4 h-4 rounded-full bg-accent border-4 border-background"
                  />
                </div>

                {/* Spacer for left side on mobile */}
                <div className="w-8 md:hidden" />

                {/* Card */}
                <div className={`flex-1 md:w-1/2 ${
                  i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-2xl border border-border bg-surface p-6 hover:border-accent/40 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-accent font-mono text-xs px-2 py-1 rounded-md bg-accent/10">
                        {exp.period}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold mt-3">{exp.role}</h3>
                    <p className="text-accent font-medium mt-1">{exp.company}</p>
                    <ul className="mt-4 space-y-2">
                      {exp.description.map((point, j) => (
                        <li key={j} className="flex items-start gap-2 text-muted text-sm">
                          <span className="text-accent mt-1.5 text-xs">▹</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Hidden spacer for alternating layout on desktop */}
                <div className="hidden md:block flex-1 md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
