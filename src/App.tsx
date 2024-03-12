import Navbar from "./components/Navbar";
import GitHubRepos from "./components/GitHubRepos";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen items-center justify-center pt-[--scroll-padding]">
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
