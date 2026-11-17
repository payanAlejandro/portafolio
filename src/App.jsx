import { useEffect, useState } from "react";

import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Stack } from "./components/Stack";

function App() {
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute("data-theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* el tema simplemente no se guarda */
    }
  }, [theme]);

  return (
    <>
      <a className="skip" href="#contenido">
        Saltar al contenido
      </a>
      <Header
        theme={theme}
        onToggleTheme={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      />
      <main id="contenido">
        <Hero />
        <Experience />
        <Projects />
        <Stack />
        <Education />
        <Contact />
      </main>
    </>
  );
}

export default App;
