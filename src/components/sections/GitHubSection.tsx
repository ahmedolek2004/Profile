import { useEffect, useState } from 'react';
import { Github, Star, GitFork, BookOpen, ExternalLink, Loader2 } from 'lucide-react';
import { getGitHubConfig } from '@/lib/content';
import { fetchGitHubRepos, fetchGitHubUser, GitHubRepo, GitHubUser } from '@/lib/github';

export function GitHubSection() {
  const config = getGitHubConfig();
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadGitHubData() {
      if (!config.username) {
        setLoading(false);
        return;
      }

      setLoading(true);
      const [userData, reposData] = await Promise.all([
        fetchGitHubUser(config.username),
        fetchGitHubRepos(config.username, config.repoCount || 6),
      ]);

      setUser(userData);
      setRepos(reposData);
      setLoading(false);
    }

    loadGitHubData();
  }, [config.username, config.repoCount]);

  // No GitHub username configured yet — hide the section rather than show
  // a "connect the API" message meant for developers, not visitors.
  if (!config.username) {
    return null;
  }

  return (
    <section className="py-24 px-4 bg-slate-950/40 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-sky-400 uppercase bg-sky-500/10 border border-sky-500/20 px-3 py-1 rounded-full">
            Open Source
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-100 mt-4 mb-4">
            GitHub Activity & Public Repositories
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Live integration with my GitHub profile displaying recent repositories and contribution metrics.
          </p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-16 text-slate-400">
            <Loader2 className="w-8 h-8 animate-spin text-sky-400 mb-3" />
            <p className="text-xs font-mono">Fetching live GitHub repositories...</p>
          </div>
        ) : (
          <div>
            {/* User Profile Card */}
            {user && (
              <div className="mb-12 p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <img
                    src={user.avatar_url}
                    alt={user.name || user.login}
                    className="w-16 h-16 rounded-full border-2 border-sky-500/40"
                  />
                  <div>
                    <h3 className="font-bold text-slate-100 text-lg">{user.name || user.login}</h3>
                    <p className="text-xs font-mono text-sky-400">@{user.login}</p>
                    {user.bio && <p className="text-xs text-slate-400 mt-1 max-w-md">{user.bio}</p>}
                  </div>
                </div>

                <div className="flex items-center gap-6 text-center">
                  <div>
                    <span className="block text-xl font-bold font-mono text-sky-400">{user.public_repos}</span>
                    <span className="text-xs text-slate-400">Repositories</span>
                  </div>
                  <div>
                    <span className="block text-xl font-bold font-mono text-sky-400">{user.followers}</span>
                    <span className="text-xs text-slate-400">Followers</span>
                  </div>

                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-xs transition-colors flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Profile</span>
                  </a>
                </div>
              </div>
            )}

            {/* Repositories Grid */}
            {repos.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {repos.map((repo) => (
                  <div
                    key={repo.id}
                    className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm flex flex-col justify-between hover:border-slate-700 transition-all"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2 text-slate-200 font-bold text-sm">
                          <BookOpen className="w-4 h-4 text-sky-400" />
                          <span className="truncate">{repo.name}</span>
                        </div>
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-sky-400"
                          aria-label={`Open repository ${repo.name}`}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>

                      <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-2">
                        {repo.description || 'No description available.'}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-slate-800/60 text-xs text-slate-400 font-mono">
                      {repo.language ? (
                        <span className="text-sky-400 font-medium">{repo.language}</span>
                      ) : (
                        <span>Code</span>
                      )}

                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-amber-400" />
                          {repo.stargazers_count}
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork className="w-3 h-3 text-slate-400" />
                          {repo.forks_count}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
                <Github className="w-8 h-8 text-slate-500 mx-auto mb-3" />
                <p className="text-slate-300 text-sm font-medium">Repositories unavailable right now</p>
                <p className="text-xs text-slate-400 mt-1">
                  You can view all public repositories directly on GitHub.
                </p>
                <a
                  href={config.username ? `https://github.com/${config.username}` : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 text-sky-400 text-xs font-semibold hover:bg-slate-700 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>Visit GitHub Profile directly</span>
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
