import { useState } from "react";
import "./App.css";
import GitHubRepos from "./components/GitHubRepos";
import emailLogo from "./assets/email.svg";
import githubLogo from "./assets/github.svg";
import linkedinLogo from "./assets/linkedin.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="mailto:hoeung@uwindsor.ca" title="Email" target="_blank">
          <img src={emailLogo} className="logo email" alt="Email logo" />
        </a>
        <a
          href="https://github.com/angelohoeung"
          title="GitHub"
          target="_blank"
        >
          <img src={githubLogo} className="logo github" alt="GitHub logo" />
        </a>
        <a
          href="https://www.linkedin.com/in/angelohoeung"
          title="LinkedIn"
          target="_blank"
        >
          <img
            src={linkedinLogo}
            className="logo linkedin"
            alt="LinkedIn logo"
          />
        </a>
      </div>
      <h1>Angelo Hoeung</h1>
      <p>Hi, this is my personal website made in React.js using Vite.</p>
      <h2>Projects</h2>
      <GitHubRepos username="angelohoeung" />
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  );
}

export default App;
