import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [theme, setTheme] = useState("professional");

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <About />;
      case "skills":
        return <Skills />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="flex">
      {/* Sidebar Navbar */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        theme={theme}
        setTheme={setTheme}
      />

      {/* Dynamic Content */}
      <div
        className={`min-h-screen w-full text-white p-6 pt-24 md:p-10 md:pt-0 md:ml-64 theme-${theme}`}
      >
        {renderSection()}
      </div>
    </div>
  );
}

export default App;