import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const source =
  "https://raw.githubusercontent.com/devicons/devicon/master/icons";

function get_url(lang) {
  let lName = get_name(lang);
  if (lName) return `${source}/${lName}/${lName}-original.svg`;
  else return "";
}

function get_name(lang) {
  lang = String(lang);
  if (lang == "null" || lang == "undefined") return "";

  lang = lang.replace("#", "sharp");
  lang = lang.replace("css", "css3")
  lang = lang.toLowerCase();
  return lang;
}

const GitHubRepos = ({ username }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}/repos?sort=updated`)
      .then((response) => {
        const reposWithAboutAndCommits = response.data.map((repo) => {
          // fetch the repository information
          axios
            .get(`https://api.github.com/repos/${username}/${repo.name}`)
            .then((response) => {
              const about = response.data.description;
              // set the repository information along with the 'about' field
              setRepos((prevRepos) => {
                return prevRepos.map((r) => {
                  if (r.id === repo.id) {
                    return { ...r, about };
                  }
                  return r;
                });
              });
            })
            .catch((error) => {
              console.log(error);
            });
          // fetch the date of the latest commit for the repository
          axios
            .get(
              `https://api.github.com/repos/${username}/${repo.name}/commits`
            )
            .then((response) => {
              const latestCommitDate =
                response.data.length > 0
                  ? new Date(
                      response.data[0].commit.author.date
                    ).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })
                  : "No commits yet";
              // set the repository information along with the 'latestCommitDate' field
              setRepos((prevRepos) => {
                return prevRepos.map((r) => {
                  if (r.id === repo.id) {
                    return { ...r, latestCommitDate };
                  }
                  return r;
                });
              });
            })
            .catch((error) => {
              console.log(error);
            });
          // return the repository object with null values for 'about' and 'latestCommitDate'
          return { ...repo, about: null, latestCommitDate: null };
        });
        setRepos(reposWithAboutAndCommits);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [username]);

  return (
    <div className="repos-grid">
      {repos.slice(0, 6).map((repo) => (
        <div key={repo.id} className="repo-item">
          <h3>
            <a href={repo.html_url} target="_blank">
              {repo.name}
            </a>
            {repo.language && (
              <img
                className="language-icon"
                src={get_url(repo.language)}
                alt={repo.language}
                title={repo.language}
              />
            )}
          </h3>
          <p>{repo.description}</p>
          {/* <p>Language: {repo.language}</p> */}
          <p>Latest commit: {repo.latestCommitDate || "No commits yet"}</p>
          {/* {repo.about && <p>About: {repo.about}</p>} */}
        </div>
      ))}
    </div>
  );
};

export default GitHubRepos;
