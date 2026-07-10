'use client';
import { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import MagneticButton from '@/components/MagneticButton';
import MeshGradient from '@/components/MeshGradient';
import { PERSONAL } from '@/lib/constants';

function useTypingEffect(words: string[], typingSpeed = 80, deletingSpeed = 40, pauseTime = 2000) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length + (isDeleting ? -1 : 1)));
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, wordIndex, isDeleting, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}

export default function Hero() {
  const typedText = useTypingEffect(PERSONAL.roles);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <MeshGradient />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Greeting */}
          <motion.p
            variants={itemVariants}
            className="text-accent font-mono text-sm md:text-base mb-4 tracking-wider"
          >
            Hi, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-4"
          >
            {PERSONAL.name.split(' ')[0]}
            <br />
            <span className="gradient-text">{PERSONAL.name.split(' ')[1]}</span>
          </motion.h1>

          {/* Rotating roles */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 mb-6 font-display text-xl md:text-2xl lg:text-3xl text-muted"
          >
            <span className="text-accent">&lt;</span>
            <span className="text-foreground">{typedText}</span>
            <span className="animate-typewriter-blink text-accent">|</span>
            <span className="text-accent">/&gt;</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-muted text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
          >
            {PERSONAL.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <MagneticButton
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
            >
              <span>View Projects</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </MagneticButton>

            <MagneticButton
              href={PERSONAL.resumePath}
              download
              className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-accent text-foreground rounded-lg font-medium transition-all duration-300 hover:text-accent"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" /></svg>
              <span>Resume</span>
            </MagneticButton>

            <MagneticButton
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-muted hover:text-foreground font-medium transition-colors"
            >
              <span>Let&apos;s Talk</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </MagneticButton>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-5 h-8 rounded-full border-2 border-muted flex items-start justify-center p-1"
            >
              <motion.div className="w-1 h-2 rounded-full bg-muted" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
