import React, { useState } from "react";
import profile from "../assets/profile.png";

import {
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Navbar({ activeSection, setActiveSection, theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const themeStyles = {
    professional: {
      navActive: "bg-blue-500/20 border-blue-400 text-blue-300 shadow-[0_0_10px_#3b82f6]",
      navHover: "hover:bg-blue-600/20 hover:border-blue-400 hover:shadow-[0_0_8px_#3b82f6]",
      indicator: "bg-blue-400",
    },
    corporate: {
      navActive: "bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-[0_0_10px_#34d399]",
      navHover: "hover:bg-emerald-600/20 hover:border-emerald-400 hover:shadow-[0_0_8px_#34d399]",
      indicator: "bg-emerald-400",
    },
    modern: {
      navActive: "bg-pink-500/20 border-pink-400 text-pink-300 shadow-[0_0_10px_#fb7185]",
      navHover: "hover:bg-pink-600/20 hover:border-pink-400 hover:shadow-[0_0_8px_#fb7185]",
      indicator: "bg-pink-400",
    },
  };

  const navItem = (id, icon, label) => (
    <li className="relative group cursor-pointer">
      <span
        className={`absolute left-0 top-0 h-full w-1 rounded-r-lg transition-all duration-300 ${
          activeSection === id
            ? themeStyles[theme].indicator
            : "bg-transparent group-hover:bg-blue-400"
        }`}
      ></span>

      <div
        onClick={() => {
          setActiveSection(id);
          setMenuOpen(false);
        }}
        className={`flex items-center gap-3 px-5 py-3 rounded-xl border transition-all duration-300 ml-2 ${
          activeSection === id
            ? themeStyles[theme].navActive
            : `${themeStyles[theme].navHover} bg-[#1e293b] border-gray-700`
        }`}
      >
        {icon}
        {label}
      </div>
    </li>
  );

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 md:hidden bg-[#0f172a] border-b border-slate-800 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={profile}
            alt="Khalik Khan"
            className="w-12 h-12 rounded-full border-2 border-blue-500"
          />
          <div>
            <p className="text-sm font-semibold text-white">Khalik Khan</p>
            <p className="text-[11px] text-slate-400">Data Science Developer</p>
          </div>
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-slate-700 px-3 py-2 text-sm text-white hover:bg-slate-800 transition"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {menuOpen && (
        <div className="fixed top-16 left-0 right-0 bottom-0 z-40 overflow-auto bg-[#0f172a] px-4 py-6 md:hidden">
          <ul className="flex flex-col gap-4">
            {navItem("hero", <FaHome />, "Home")}
            {navItem("about", <FaUser />, "About")}
            {navItem("skills", <FaCode />, "Skills")}
            {navItem("projects", <FaProjectDiagram />, "Projects")}
            {navItem("contact", <FaEnvelope />, "Contact")}
          </ul>

          <div className="mt-8 space-y-4">
            <div className="flex justify-center gap-5 text-xl">
              <a
                href="https://github.com/Khalikhan25"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://in.linkedin.com/in/khalik-khan-b54a89315"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 transition"
              >
                <FaLinkedin />
              </a>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm uppercase tracking-[0.3em] text-slate-400">Theme</h4>
              <div className="flex gap-3">
                {[
                  { id: "professional", label: "Pro" },
                  { id: "corporate", label: "Corp" },
                  { id: "modern", label: "Modern" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setTheme(item.id)}
                    className={`rounded-full px-3 py-2 text-xs font-semibold transition ${
                      theme === item.id
                        ? "bg-white text-slate-950"
                        : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            <a
              href="/src/assets/Khalik_Khan25_Resume.pdf"
              download
              className="block rounded-lg bg-blue-500 py-2 text-center text-sm hover:bg-blue-600 transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}

      <aside className="hidden md:flex fixed left-0 top-0 h-screen w-64 bg-[#0f172a] text-white flex-col justify-between py-8 px-6 shadow-2xl z-50">
        <div className="text-center">
          <img
            src={profile}
            alt="Khalik Khan"
            className="w-28 h-28 rounded-full mx-auto border-4 border-blue-500 shadow-lg"
          />

          <h2 className="mt-4 text-xl font-semibold">Khalik Khan</h2>
          <p className="text-sm text-gray-400">Data Science Developer</p>
        </div>

        <ul className="flex flex-col gap-4 mt-10 text-lg">
          {navItem("hero", <FaHome />, "Home")}
          {navItem("about", <FaUser />, "About")}
          {navItem("skills", <FaCode />, "Skills")}
          {navItem("projects", <FaProjectDiagram />, "Projects")}
          {navItem("contact", <FaEnvelope />, "Contact")}
        </ul>

        <div className="text-center space-y-4">
          <div className="flex justify-center gap-5 text-xl">
            <a
              href="https://github.com/KhalikKhan25"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/Khalik-khan-b54a89315"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm uppercase tracking-[0.3em] text-slate-400">Theme</h4>
            <div className="flex gap-3 justify-center">
              {[
                { id: "professional", label: "Pro" },
                { id: "corporate", label: "Corp" },
                { id: "modern", label: "Modern" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setTheme(item.id)}
                  className={`rounded-full px-3 py-2 text-xs font-semibold transition ${
                    theme === item.id
                      ? "bg-white text-slate-950"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <a
            href="/src/assets/Khalik_Khan_Resume.pdf"
            download
            className="block bg-blue-500 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Download Resume
          </a>
        </div>
      </aside>
    </>
  );
}

export default Navbar;
