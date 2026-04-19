import React from "react";

function Skills() {
  const skills = [
    {
      title: "Programming & Languages",
      description: "Core languages used for data processing, automation, and backend systems.",
      items: ["Python", "C++", "C", "JavaScript", "SQL"],
    },
    {
      title: "Web & API Development",
      description: "Building responsive UIs and fast, reliable APIs for modern applications.",
      items: ["React", "HTML", "CSS", "Tailwind CSS", "Flask", "FastAPI"],
    },
    {
      title: "Data Science & Analytics",
      description: "Developing predictive models, analytics workflows, and data-driven insights.",
      items: ["Machine Learning", "Data Analytics", "Pandas", "NumPy", "scikit-learn"],
    },
    {
      title: "Databases & BI",
      description: "Managing data with relational and NoSQL systems plus business intelligence tools.",
      items: ["PostgreSQL", "MySQL", "Power BI", "Tableau"],
    },
    {
      title: "Tools & Technologies",
      description: "Productivity and collaboration tools for professional development workflows.",
      items: ["Git", "GitHub", "VS Code"],
    },
  ];

  return (
    <section id="skills" className="skills-section min-h-screen px-4 py-20 sm:px-6 sm:py-24 text-white">
      <div className="skills-decorations pointer-events-none">
        <div className="skills-glow skills-glow-1"></div>
        <div className="skills-glow skills-glow-2"></div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-300 mb-3">Expertise</p>
          <h2 className="text-4xl font-bold text-white">Skills & Technologies</h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Practical skills and tools I use to deliver intelligent systems, scalable applications, and powerful analytics.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group rounded-[28px] border border-slate-700 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/40 transition duration-300 hover:-translate-y-1 hover:border-cyan-400"
            >
              <h3 className="text-xl font-semibold text-cyan-300 mb-3">{skill.title}</h3>
              <p className="text-slate-300 mb-5">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
