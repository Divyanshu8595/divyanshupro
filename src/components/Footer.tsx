'use client';
import { motion } from 'framer-motion';
import { PERSONAL } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display font-semibold">
              {PERSONAL.name.split(' ')[0]}
              <span className="text-accent">.</span>
            </p>
            <p className="text-muted text-sm mt-1">
              Built with Next.js, Tailwind CSS & Framer Motion
            </p>
          </div>

          <div className="flex items-center gap-6">
            <motion.a
              href={PERSONAL.resumePath}
              download
              whileHover={{ y: -2 }}
              className="text-sm text-muted hover:text-accent transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
              Resume
            </motion.a>
            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-accent transition-colors"
            >
              GitHub
            </a>
            <a
              href={PERSONAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="text-center mt-8 text-xs text-muted">
          © {new Date().getFullYear()} {PERSONAL.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
