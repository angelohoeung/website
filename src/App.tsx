import { useEffect } from "react";
import Navbar from "./components/Navbar";
import GitHubRepos from "./components/GitHubRepos";
import ContactForm from "./components/ContactForm";

const useAdjustScrollPadding = () => {
  useEffect(() => {
    const adjustScrollPadding = () => {
      const navigationHeight = document.querySelector("nav")?.offsetHeight || 0;
      document.documentElement.style.setProperty(
        "--scroll-padding",
        `${navigationHeight}px`,
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
      <div className="flex min-h-[calc(100dvh-var(--scroll-padding))] items-center justify-center">
        <section className="max-w-2xl px-5 text-center md:px-0">
          <p className="text-base font-extralight">Hi, my name is</p>
          <h1 className="py-4 text-6xl">Angelo Hoeung</h1>
          <p className="py-4 text-xl font-light">
            I'm a third year computer science student and teaching assistant at
            the University of Windsor. I have a passion for software development
            and am always hoping to learn more.
          </p>
        </section>
      </div>
      <section className="mx-auto mb-24 max-w-screen-xl px-5 xl:px-0">
        <h1 id="projects" className="mb-12 text-5xl">
          Projects
        </h1>
        <GitHubRepos username="angelohoeung" />
      </section>
      <section className="mx-auto mb-12 max-w-screen-xl px-5 xl:px-0">
        <h1 id="contact" className="mb-12 text-5xl">
          Contact
        </h1>
        <ContactForm />
      </section>
      <footer className="pb-12 pt-24 text-center text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Angelo Hoeung
      </footer>
    </>
  );
}

export default App;
