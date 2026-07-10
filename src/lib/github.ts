export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork: boolean;
  topics: string[];
}

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  Java: '#b07219',
  Dart: '#00B4AB',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Kotlin: '#A97BFF',
  Jupyter: '#DA5B0B',
  Shell: '#89e051',
};

export function getLanguageColor(lang: string | null): string {
  if (!lang) return '#6b7280';
  return LANGUAGE_COLORS[lang] || '#6b7280';
}

export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  const res = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=30`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) throw new Error('Failed to fetch repos');
  const repos: GitHubRepo[] = await res.json();
  return repos
    .filter(r => !r.fork && r.name !== username)
    .slice(0, 8);
}
