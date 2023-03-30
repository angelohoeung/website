import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const source =
  "https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/icons";

function get_url(lang) {
  const lName = get_name(lang);
  return lName ? `${source}/${lName}.svg` : "";
}

function get_name(lang) {
  lang = String(lang).toLowerCase().replace("#", "sharp");
  return lang == "null" || lang == "undefined" ? "" : lang;
}

const GitHubRepos = ({ username }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}/repos?sort=updated`
        );
        const repos = response.data.map((repo) => ({
          id: repo.id,
          name: repo.name,
          url: repo.html_url,
          description: repo.description,
          language: repo.language,
          latestCommitDate: repo.updated_at
            ? new Date(repo.updated_at).toLocaleDateString("en-CA")
            : "No commits yet",
        }));
        setRepos(repos);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRepos();
  }, [username]);

  return (
    <div className="repos-grid">
      {repos.slice(0, 6).map((repo) => (
        <div key={repo.id} className="repo-item">
          <h3>
            <a href={repo.url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
            {repo.language && (
              <img
                className="language-icon"
                src={get_url(repo.language)}
                alt={repo.language}
                title={repo.language}
                style={{ marginLeft: "auto" }}
              />
            )}
          </h3>
          <p>{repo.description}</p>
          <p>Latest commit: {repo.latestCommitDate}</p>
        </div>
      ))}
    </div>
  );
};

export default GitHubRepos;
