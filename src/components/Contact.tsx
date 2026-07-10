'use client';
import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper, { itemVariants } from '@/components/SectionWrapper';
import { PERSONAL } from '@/lib/constants';

const socialLinks = [
  {
    name: 'GitHub',
    href: PERSONAL.github,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: PERSONAL.linkedin,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'Kaggle',
    href: PERSONAL.kaggle,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.281.18.046.095.015.189-.093.281L12.01 15.08l6.907 8.44c.094.118.117.221.069.339h-.161z" />
      </svg>
    ),
  },
  {
    name: 'LeetCode',
    href: PERSONAL.leetcode,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
      </svg>
    ),
  },
  {
    name: 'HackerEarth',
    href: PERSONAL.hackerearth,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.477 20.942c-.586.586-1.267.879-2.044.879H7.567c-.777 0-1.458-.293-2.044-.879a2.788 2.788 0 01-.879-2.044V5.102c0-.777.293-1.458.879-2.044A2.788 2.788 0 017.567 2.18h8.866c.777 0 1.458.293 2.044.879s.879 1.267.879 2.044v13.796c0 .777-.293 1.458-.879 2.044zM7.567 3.602c-.422 0-.777.15-1.068.44s-.44.645-.44 1.068v13.796c0 .422.147.777.44 1.068s.645.44 1.068.44h8.866c.422 0 .777-.147 1.068-.44s.44-.645.44-1.068V5.102c0-.422-.15-.777-.44-1.068s-.645-.44-1.068-.44H7.567zm7.124 6.735a.61.61 0 01-.176.44l-3.443 3.443a.625.625 0 01-.44.183.625.625 0 01-.44-.183l-1.917-1.917a.61.61 0 01-.176-.44c0-.176.059-.322.176-.44l.44-.44a.61.61 0 01.44-.176c.176 0 .322.059.44.176l1.036 1.037 2.563-2.563a.61.61 0 01.44-.176c.176 0 .322.059.44.176l.44.44a.61.61 0 01.176.44z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const mailtoLink = `mailto:${PERSONAL.email}?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`;
      window.open(mailtoLink, '_blank');
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <SectionWrapper id="contact">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="text-accent font-mono text-sm tracking-wider">06.</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-2">Get In Touch</h2>
          <p className="text-muted mt-4 max-w-lg mx-auto">
            I&apos;m always open to interesting conversations, collaboration opportunities, or just a friendly hello.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact form — 3 cols */}
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="md:col-span-3 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  type="text"
                  id="contact-name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="peer w-full px-4 py-3 rounded-xl bg-surface border border-border
                    focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30
                    transition-all placeholder-transparent"
                  placeholder="Your Name"
                />
                <label
                  htmlFor="contact-name"
                  className="absolute left-4 -top-2.5 text-xs text-muted bg-surface px-1
                    peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm
                    peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-accent
                    transition-all cursor-text"
                >
                  Your Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="contact-email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="peer w-full px-4 py-3 rounded-xl bg-surface border border-border
                    focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30
                    transition-all placeholder-transparent"
                  placeholder="Email"
                />
                <label
                  htmlFor="contact-email"
                  className="absolute left-4 -top-2.5 text-xs text-muted bg-surface px-1
                    peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm
                    peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-accent
                    transition-all cursor-text"
                >
                  Email Address
                </label>
              </div>
            </div>

            <div className="relative">
              <textarea
                id="contact-message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="peer w-full px-4 py-3 rounded-xl bg-surface border border-border
                  focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30
                  transition-all placeholder-transparent resize-none"
                placeholder="Message"
              />
              <label
                htmlFor="contact-message"
                className="absolute left-4 -top-2.5 text-xs text-muted bg-surface px-1
                  peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm
                  peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-accent
                  transition-all cursor-text"
              >
                Your Message
              </label>
            </div>

            <motion.button
              type="submit"
              disabled={status === 'sending'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-accent hover:bg-accent-hover text-white rounded-xl
                font-medium transition-all duration-300 disabled:opacity-50
                hover:shadow-lg hover:shadow-accent/25"
            >
              {status === 'sending' ? 'Opening...' : status === 'sent' ? '✓ Done!' : status === 'error' ? 'Error' : 'Send Message'}
            </motion.button>
          </motion.form>

          {/* Social links + info — 2 cols */}
          <motion.div variants={itemVariants} className="md:col-span-2 space-y-8">
            <div>
              <h3 className="font-display text-lg font-semibold mb-4">Direct Contact</h3>
              <div className="space-y-3">
                <a
                  href={`mailto:${PERSONAL.email}`}
                  className="flex items-center gap-3 text-muted hover:text-accent transition-colors group"
                >
                  <span className="p-2 rounded-lg bg-surface border border-border group-hover:border-accent/40 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <span className="text-sm">{PERSONAL.email}</span>
                </a>
                <a
                  href={`tel:${PERSONAL.phone}`}
                  className="flex items-center gap-3 text-muted hover:text-accent transition-colors group"
                >
                  <span className="p-2 rounded-lg bg-surface border border-border group-hover:border-accent/40 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <span className="text-sm">{PERSONAL.phone}</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-display text-lg font-semibold mb-4">Find Me Online</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="p-3 rounded-xl bg-surface border border-border hover:border-accent/40
                      text-muted hover:text-accent transition-all duration-300
                      hover:shadow-lg hover:shadow-accent/10"
                    aria-label={link.name}
                    title={link.name}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-xl bg-accent/5 border border-accent/20">
              <p className="text-sm text-muted leading-relaxed">
                <span className="text-accent font-medium">Currently open to:</span> Full-time
                AI/ML Engineer roles, GenAI Developer positions, and interesting freelance projects.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
