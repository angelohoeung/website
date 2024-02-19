import { useEffect } from "react";
import Navbar from "./components/Navbar";
import GitHubRepos from "./components/GitHubRepos";

const useAdjustScrollPadding = () => {
  useEffect(() => {
    const adjustScrollPadding = () => {
      const navigationHeight = document.querySelector("nav")?.offsetHeight || 0;
      document.documentElement.style.setProperty(
        "--scroll-padding",
        `${navigationHeight}px`
      );
    };

    adjustScrollPadding();

    let resizeTimer: number | undefined;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        adjustScrollPadding();
      }, 250);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
};

function App() {
  useAdjustScrollPadding();

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen items-center justify-center">
        <section className="max-w-2xl px-5 md:px-0 mx-auto text-center">
          <p className="text-base font-extralight">Hi, my name is</p>
          <h1 className="text-6xl py-4">Angelo Hoeung</h1>
          <p className="text-xl py-4 font-light">
            I'm a third year computer science student and teaching assistant at
            the University of Windsor. I have a passion for software development
            and am always hoping to learn more.
          </p>
        </section>
      </div>
      <section className="max-w-screen-xl mx-auto px-5 md:px-0 pb-4">
        <h1 id="projects" className="text-5xl mb-12">
          Projects
        </h1>
        <GitHubRepos username="angelohoeung" />
      </section>
    </>
  );
}

export default App;
