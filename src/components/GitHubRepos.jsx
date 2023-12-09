import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const iconUrl = (lang) => {
  const name = lang?.toLowerCase().replace("#", "sharp");
  return name
    ? `https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/icons/${name}.svg`
    : "";
};

const GitHubRepos = ({ username }) => {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.github.com/users/${username}/repos?sort=pushed&per_page=9`,
        { cache: true }
      )
      .then((response) => {
        setRepos(response.data);
        setError(null);
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
    <div className="repos-grid">
      {repos.map((repo) => (
        <div key={repo.id} className="repo-item">
          <h3>
            <a href={repo.html_url} rel="noopener noreferrer" target="_blank">
              {repo.name}
            </a>
            {repo.language && (
              <img
                className="language-icon"
                src={iconUrl(repo.language)}
                alt={repo.language}
                title={repo.language}
                style={{ marginLeft: "auto" }}
              />
            )}
          </h3>
          <p style={{ paddingBottom: "2.5rem" }}>{repo.description}</p>
          <div className="commit-date">
            <p>Latest commit: {new Date(repo.pushed_at).toLocaleDateString("en-CA") || "No commits yet"}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GitHubRepos;
