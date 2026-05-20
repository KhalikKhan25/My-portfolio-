import React from "react";
const soilQualityVideo = "/videos/soil-quality-analysis.mp4";
const modernBankingVideo = "/videos/modern-digital-banking.mp4";
const heartVideo = "/videos/heart-deseas.mp4";
const inflationAnalysis = "/videos/inflation-analysis.mp4";
const QuizGenerator = "/videos/quiz-generator.mp4";
const projects = [
  {
    title: "Power BI Dashboard - Global Inflation Analysis",
    summary: "Interactive Power BI dashboard delivering comparative inflation analysis across countries with clear KPI tracking and stakeholder-ready insights.",
    highlights: [
      "Interactive visuals with slicers, drill-through and custom tooltips.",
      "Advanced DAX measures for comparative time-series and index calculations.",
      "Packaged insights and recommendations for executive stakeholders.",
    ],
    tools: ["Power BI", "DAX", "Excel", "SQL"],
  },
  {
    title: "Soil Quality Recommendation System",
    summary: "Full-stack ML system that predicts soil health and recommends optimized fertilizer strategies via a responsive web dashboard.",
    highlights: [
      "Trained and validated models on multi-source agronomic datasets.",
      "Served recommendations through a Flask API and interactive dashboard.",
      "Enabled farm-level insights and exportable advisory reports.",
    ],
    tools: ["Python", "Flask", "scikit-learn", "Pandas"],
  },
  {
    title: "Modern Digital Banking Dashboard",
    summary: "Responsive banking dashboard prototype showcasing role-based views, transaction analytics, and account management workflows.",
    highlights: [
      "Role-aware interfaces for customers and administrators.",
      "Integrated analytics panels for transaction trends and reporting.",
      "Responsive components optimized for desktop and tablet use.",
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

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

const videoMap = {
  "Soil Quality Recommendation System": soilQualityVideo,
  "Modern Digital Banking Dashboard": modernBankingVideo,
  "Heart Disease Prediction App": heartVideo,
  "Power BI Dashboard - Global Inflation Analysis": inflationAnalysis,
  "AI Quiz Generator": QuizGenerator,
};

function Projects() {
  const [videoAvailable, setVideoAvailable] = React.useState(() => projects.map((p) => !!videoMap[p.title]));

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

        <div className="grid gap-8">
          {projects.map((project, index) => {
            const videoSrc = videoMap[project.title] || `/videos/${slugify(project.title)}.mp4`;

            return (
              <div
                key={index}
                className="group rounded-[24px] border border-slate-700 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/40 transition duration-300 hover:-translate-y-1 hover:border-cyan-400"
              >
                <div className="flex flex-col lg:flex-row items-start gap-6">
                  {videoAvailable[index] && (
                    <div className="w-full lg:w-1/2">
                      <div className="overflow-hidden rounded-[24px] bg-black shadow-inner">
                        <video
                          src={videoSrc}
                          autoPlay
                          muted
                          playsInline
                          loop
                          preload="metadata"
                          className="block w-full h-[240px] min-h-[220px] object-cover"
                          onError={() =>
                            setVideoAvailable((prev) => {
                              const copy = [...prev];
                              copy[index] = false;
                              return copy;
                            })
                          }
                        />
                      </div>
                    </div>
                  )}

                  <div className={`flex-1 ${videoAvailable[index] ? "lg:w-1/2" : "w-full"}`}>
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
