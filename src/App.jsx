import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/skills";
import Projects from "./components/Projects";
import Internship from "./components/Internship";
import Certifications from "./components/Certifications";
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
      case "internship":
        return <Internship />;
      case "certifications":
        return <Certifications />;
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
        <div className="page-bubble-wrapper pointer-events-none">
          <span className="page-bubble bubble-a"></span>
          <span className="page-bubble bubble-b"></span>
          <span className="page-bubble bubble-c"></span>
          <span className="page-bubble bubble-d"></span>
          <span className="page-bubble bubble-e"></span>
          <span className="page-bubble bubble-f"></span>
          <span className="page-bubble bubble-g"></span>
        </div>
        {renderSection()}
      </div>
    </div>
  );
}

export default App;