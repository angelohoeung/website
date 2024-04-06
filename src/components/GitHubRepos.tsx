import { useState, useEffect } from "react";
import axios from "axios";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  language?: string;
  description?: string;
  pushed_at: string;
}

const iconUrl = (lang: string) => {
  const name = lang?.toLowerCase().replace("#", "sharp");
  return name
    ? `https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/icons/${name}.svg`
    : "";
};

const GitHubRepos = ({ username }: { username: string }) => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.github.com/users/${username}/repos?type=all&sort=pushed&per_page=9`,
      )
      .then((response) => {
        const filteredRepos = response.data.filter(
          (repo: Repo) => repo.language,
        );
        setRepos(filteredRepos);
      })
      .catch((error) => {
        console.error(error);
        setError("Error fetching data from the GitHub API");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [username]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-5 text-left md:grid-cols-2 lg:grid-cols-3">
      {repos.map((repo) => (
        <div
          key={repo.id}
          className="relative flex flex-col justify-between rounded-lg border border-gray-100 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-800"
        >
          <div>
            <h2 className="flex items-center justify-between">
              <a
                href={repo.html_url}
                rel="noopener noreferrer"
                target="_blank"
                className="hover:text-blue-400"
              >
                {repo.name}
              </a>
              {repo.language && (
                <img
                  className="h-7 w-7"
                  src={iconUrl(repo.language)}
                  alt={repo.language}
                  title={repo.language}
                />
              )}
            </h2>
            <p className="mb-4 mt-2 flex-grow text-gray-400">
              {repo.description}
            </p>
          </div>
          <div className="pt-4">
            <p className="text-gray-500">
              Latest commit:{" "}
              {new Date(repo.pushed_at).toLocaleDateString("en-CA") ||
                "No commits yet"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GitHubRepos;
