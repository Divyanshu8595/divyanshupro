'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionWrapper, { itemVariants } from '@/components/SectionWrapper';
import { PERSONAL } from '@/lib/constants';

const stats = [
  { value: '20+', label: 'Projects Built' },
  { value: '350+', label: 'DSA Problems' },
  { value: '3', label: 'Internships' },
  { value: '30+', label: 'Community Event Led' },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={itemVariants} className="mb-12">
          <span className="text-accent font-mono text-sm tracking-wider">01.</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-2">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start">
          {/* Text content — takes 3 cols */}
          <motion.div variants={itemVariants} className="md:col-span-3 space-y-5">
            <p className="text-lg leading-relaxed text-muted">
              I&apos;m a Computer Science graduate{' '}
              <span className="text-foreground font-medium">(B.Tech, IoT — June 2026)</span>{' '}
              who&apos;s deeply curious about how AI can solve messy, real-world problems — not just
              toy demos, but things people actually use.
            </p>
            <p className="text-lg leading-relaxed text-muted">
              As{' '}
              <span className="text-accent font-medium">GDG on Campus Lead</span>{' '}
              (selected from 500+ applicants) and organizer at{' '}
              <span className="text-accent font-medium">Kotlin User Group Gurugram</span>,
              I&apos;ve built communities around the tech I care about. I ship things — from
              RAG-based teaching assistants to AI-driven farmer support platforms.
            </p>
            <p className="text-lg leading-relaxed text-muted">
              Right now I&apos;m focused on{' '}
              <span className="text-foreground font-medium">GenAI, RAG systems, and applied ML</span>
              . I like building end-to-end: from training pipelines to production UIs.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="text-center p-4 rounded-xl bg-surface border border-border"
                >
                  <div className="font-display text-2xl md:text-3xl font-bold text-accent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Avatar — takes 2 cols */}
          <motion.div variants={itemVariants} className="md:col-span-2 flex justify-center">
            <div className="relative group">
              {/* Glow behind */}
              <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-2xl overflow-hidden border-2 border-border group-hover:border-accent/50 transition-colors duration-300">
                <Image
                  src={`https://avatars.githubusercontent.com/u/204976223?v=4`}
                  alt={PERSONAL.name}
                  width={400}
                  height={400}
                  className="w-full max-w-xs md:max-w-sm aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={false}
                />
              </div>
              {/* Decorative accent corner */}
              <div className="absolute -bottom-3 -right-3 w-20 h-20 border-2 border-accent rounded-2xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
