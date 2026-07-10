'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GitHubRepo, getLanguageColor } from '@/lib/github';
import { PERSONAL } from '@/lib/constants';
import { itemVariants } from '@/components/SectionWrapper';

function RepoSkeleton() {
  return (
    <div className="rounded-xl border border-border bg-surface p-5 animate-pulse">
      <div className="h-5 w-2/3 bg-border rounded mb-3" />
      <div className="h-4 w-full bg-border/50 rounded mb-2" />
      <div className="h-4 w-4/5 bg-border/50 rounded mb-4" />
      <div className="flex gap-3">
        <div className="h-3 w-16 bg-border rounded" />
        <div className="h-3 w-12 bg-border rounded" />
      </div>
    </div>
  );
}

export default function GitHubRepos() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/users/${PERSONAL.githubUsername}/repos?sort=updated&per_page=30`)
      .then((res) => {
        if (!res.ok) throw new Error('API error');
        return res.json();
      })
      .then((data: GitHubRepo[]) => {
        const filtered = data
          .filter((r) => !r.fork && r.name !== PERSONAL.githubUsername)
          .slice(0, 6);
        setRepos(filtered);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 mt-16">
      <motion.div variants={itemVariants} className="flex items-center justify-between mb-8">
        <div>
          <h3 className="font-display text-2xl font-bold">More on GitHub</h3>
          <p className="text-muted text-sm mt-1">Live from the API — always up to date</p>
        </div>
        <a
          href={PERSONAL.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline text-sm font-medium hidden sm:block"
        >
          View all repos →
        </a>
      </motion.div>

      {error ? (
        <p className="text-muted text-center py-8">Could not load repos. Check back later.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <RepoSkeleton key={i} />)
            : repos.map((repo, i) => (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="block rounded-xl border border-border bg-surface hover:border-accent/40
                    p-5 transition-colors duration-300 group"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-4 h-4 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-5l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                    <h4 className="font-display font-semibold text-sm group-hover:text-accent transition-colors truncate">
                      {repo.name}
                    </h4>
                  </div>
                  <p className="text-muted text-xs leading-relaxed mb-4 line-clamp-2 min-h-[2.5rem]">
                    {repo.description || 'No description available'}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted">
                    {repo.language && (
                      <span className="flex items-center gap-1">
                        <span
                          className="w-2.5 h-2.5 rounded-full inline-block"
                          style={{ backgroundColor: getLanguageColor(repo.language) }}
                        />
                        {repo.language}
                      </span>
                    )}
                    {repo.stargazers_count > 0 && (
                      <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        {repo.stargazers_count}
                      </span>
                    )}
                  </div>
                </motion.a>
              ))}
        </div>
      )}

      <div className="text-center mt-6 sm:hidden">
        <a
          href={PERSONAL.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline text-sm font-medium"
        >
          View all repos →
        </a>
      </div>
    </div>
  );
}
