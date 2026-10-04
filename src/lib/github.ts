export interface GitHubUser {
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  bio: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics?: string[];
  homepage?: string | null;
}

const CACHE_KEY_USER = 'portfolio_github_user';
const CACHE_KEY_REPOS = 'portfolio_github_repos';
const CACHE_TTL_MS = 30 * 60 * 1000; // 30 minutes cache

interface CacheContainer<T> {
  timestamp: number;
  data: T;
}

export async function fetchGitHubUser(username: string): Promise<GitHubUser | null> {
  if (!username) return null;

  try {
    const cached = localStorage.getItem(CACHE_KEY_USER);
    if (cached) {
      const parsed = JSON.parse(cached) as CacheContainer<GitHubUser>;
      if (Date.now() - parsed.timestamp < CACHE_TTL_MS) {
        return parsed.data;
      }
    }

    const headers: Record<string, string> = {
      Accept: 'application/vnd.github.v3+json',
    };
    const token = import.meta.env.VITE_GITHUB_TOKEN;
    if (token) {
      headers.Authorization = `token ${token}`;
    }

    const response = await fetch(`https://api.github.com/users/${username}`, { headers });
    if (!response.ok) {
      throw new Error(`GitHub user fetch failed: ${response.status}`);
    }

    const data = (await response.json()) as GitHubUser;
    localStorage.setItem(
      CACHE_KEY_USER,
      JSON.stringify({ timestamp: Date.now(), data })
    );
    return data;
  } catch (error) {
    console.warn('Unable to fetch GitHub user, using fallback/empty state:', error);
    return null;
  }
}

export async function fetchGitHubRepos(username: string, count = 6): Promise<GitHubRepo[]> {
  if (!username) return [];

  try {
    const cached = localStorage.getItem(CACHE_KEY_REPOS);
    if (cached) {
      const parsed = JSON.parse(cached) as CacheContainer<GitHubRepo[]>;
      if (Date.now() - parsed.timestamp < CACHE_TTL_MS) {
        return parsed.data.slice(0, count);
      }
    }

    const headers: Record<string, string> = {
      Accept: 'application/vnd.github.v3+json',
    };
    const token = import.meta.env.VITE_GITHUB_TOKEN;
    if (token) {
      headers.Authorization = `token ${token}`;
    }

    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=${count}`,
      { headers }
    );
    if (!response.ok) {
      throw new Error(`GitHub repos fetch failed: ${response.status}`);
    }

    const data = (await response.json()) as GitHubRepo[];
    localStorage.setItem(
      CACHE_KEY_REPOS,
      JSON.stringify({ timestamp: Date.now(), data })
    );
    return data;
  } catch (error) {
    console.warn('Unable to fetch GitHub repos, using fallback/empty state:', error);
    return [];
  }
}
