import React from "react";

const projects = [
  {
    title: "Power BI Dashboard - Global Inflation Analysis",
    summary: "Designed a professional Power BI dashboard to track inflation trends, compare country-level performance, and surface key economic insights.",
    highlights: [
      "Built interactive visualizations with filters and drill-through insights.",
      "Applied DAX calculations to compare temporal and spatial inflation patterns.",
      "Presented actionable recommendations for stakeholders.",
    ],
    tools: ["Power BI", "DAX", "Excel", "SQL"],
  },
  {
    title: "Soil Quality Recommendation System",
    summary: "Created a full-stack ML application that predicts soil quality and recommends fertilizer strategies through an intuitive web dashboard.",
    highlights: [
      "Trained models on soil and environmental data for high accuracy.",
      "Delivered a Flask-based interface for recommendation delivery.",
      "Integrated farm-level analytics for real-world usability.",
    ],
    tools: ["Python", "Flask", "scikit-learn", "Pandas"],
  },
  {
    title: "Modern Digital Banking Dashboard",
    summary: "Developed a polished banking dashboard prototype with role-based UI, transaction summaries, and account management components.",
    highlights: [
      "Designed a clean financial interface for users and admins.",
      "Included authentication-ready layout and reporting sections.",
      "Built responsive dashboard modules for account oversight.",
    ],
    tools: ["React", "JavaScript", "Tailwind CSS", "CSS"],
  },
  {
    title: "AI Quiz Generator",
    summary: "Implemented an AI-powered quiz creation tool that generates topic-based questions for fast learning and practice.",
    highlights: [
      "Generated quiz content from user-provided prompts.",
      "Streamlined content creation with AI assistance.",
      "Delivered a user-friendly quiz preview workflow.",
    ],
    tools: ["React", "OpenAI API", "JavaScript", "Node.js"],
  },
  {
    title: "Heart Disease Prediction App",
    summary: "Built a predictive model to assess heart disease risk using patient data, with a focus on accuracy and medical insights.",
    highlights: [
      "Designed a Random Forest model for risk classification.",
      "Evaluated model performance with clear metrics.",
      "Enabled data-driven predictions for early detection support.",
    ],
    tools: ["Python", "scikit-learn", "NumPy", "Pandas"],
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section min-h-screen px-4 py-20 sm:px-6 sm:py-24 text-white">
      <div className="projects-decorations pointer-events-none">
        <div className="projects-glow projects-glow-1"></div>
        <div className="projects-glow projects-glow-2"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-300 mb-3">Portfolio</p>
          <h2 className="text-4xl font-bold text-white">Projects & Professional Work</h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            A selection of real-world projects demonstrating my ability to deliver analytics solutions, intelligent applications, and modern web experiences.
          </p>
        </div>

        <div className="grid gap-8 xl:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-[32px] border border-slate-700 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40 transition duration-300 hover:-translate-y-1 hover:border-cyan-400"
            >
              <h3 className="text-2xl font-semibold text-white mb-3">{project.title}</h3>
              <p className="text-slate-300 mb-5">{project.summary}</p>
              <div className="space-y-3 mb-6">
                {project.highlights.map((highlight, highlightIndex) => (
                  <p key={highlightIndex} className="flex gap-3 text-slate-300">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300"></span>
                    {highlight}
                  </p>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                {project.tools.map((tool, toolIndex) => (
                  <span key={toolIndex} className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-200">
                    {tool}
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

export default Projects;
