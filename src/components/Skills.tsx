'use client';
import { motion } from 'framer-motion';
import SectionWrapper, { itemVariants } from '@/components/SectionWrapper';
import { SKILLS } from '@/lib/constants';

const colorMap: Record<string, { bg: string; text: string; border: string; glow: string }> = {
  orange: {
    bg: 'bg-orange-500/10 dark:bg-orange-500/5',
    text: 'text-orange-600 dark:text-orange-400',
    border: 'border-orange-500/20 dark:border-orange-500/10',
    glow: 'hover:shadow-orange-500/10',
  },
  red: {
    bg: 'bg-red-500/10 dark:bg-red-500/5',
    text: 'text-red-600 dark:text-red-400',
    border: 'border-red-500/20 dark:border-red-500/10',
    glow: 'hover:shadow-red-500/10',
  },
  green: {
    bg: 'bg-emerald-500/10 dark:bg-emerald-500/5',
    text: 'text-emerald-600 dark:text-emerald-400',
    border: 'border-emerald-500/20 dark:border-emerald-500/10',
    glow: 'hover:shadow-emerald-500/10',
  },
};

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={itemVariants} className="mb-16">
          <span className="text-accent font-mono text-sm tracking-wider">02.</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-2">Skills & Tools</h2>
          <p className="text-muted mt-4 max-w-lg">
            Technologies I work with daily to build intelligent systems.
          </p>
        </motion.div>

        <div className="space-y-10">
          {SKILLS.map((group) => {
            const colors = colorMap[group.color] || colorMap.orange;
            return (
              <motion.div key={group.category} variants={itemVariants}>
                <h3 className={`font-display text-lg font-semibold mb-4 ${colors.text}`}>
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.4 }}
                      whileHover={{
                        scale: 1.1,
                        y: -4,
                        transition: { duration: 0.2 },
                      }}
                      className={`px-4 py-2 rounded-lg text-sm font-medium border cursor-default
                        transition-shadow duration-300 hover:shadow-lg
                        ${colors.bg} ${colors.text} ${colors.border} ${colors.glow}
                      `}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
