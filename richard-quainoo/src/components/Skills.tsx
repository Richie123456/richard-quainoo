import { useState } from "react";

type Skill = { name: string; progress: number; icon: string; invert?: boolean };

export default function Skills() {
  const [tab, setTab] = useState<"data" | "ai">("data");

  const dataSkills: Skill[] = [
    { name: "Power BI", progress: 90, icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
    { name: "SQL", progress: 85, icon: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" },
    { name: "AWS", progress: 80, icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "Snowflake", progress: 75, icon: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg" },
    { name: "Python", progress: 85, icon: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
    { name: "Excel", progress: 95, icon: "https://github.com/Richie123456/Website-images/blob/main/excel%20logo.png?raw=true" }
  ];

  const aiSkills: Skill[] = [
    { name: "Claude", progress: 95, icon: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Claude_AI_symbol.svg" },
    { name: "Copilot", progress: 92, icon: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Microsoft-copilot-2026-seeklogo.svg" },
    { name: "ChatGPT", progress: 88, icon: "https://upload.wikimedia.org/wikipedia/commons/e/ef/ChatGPT-Logo.svg", invert: true },
    { name: "Gemini", progress: 85, icon: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Google_Gemini_icon_2025.svg" }
  ];

  const skills = tab === "data" ? dataSkills : aiSkills;

  return (
    <section className="w-full py-16 relative z-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <div className="glass-card p-10">
            <span className="section-subtitle">Skills And Tools</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Core <span className="text-[var(--color-accent)]">Competencies</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
              I leverage a modern data stack to extract insights, build scalable pipelines, and deliver impactful AI solutions. My expertise spans across data visualization, cloud architecture, and advanced analytics.
            </p>
          </div>
        </div>
        
        <div className="flex-1 w-full">
          <div className="flex justify-center mb-8">
            <div role="tablist" aria-label="Skill categories" className="inline-flex p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              {([["data", "Data & Cloud"], ["ai", "AI Tools"]] as const).map(([key, label]) => (
                <button
                  key={key}
                  role="tab"
                  aria-selected={tab === key}
                  onClick={() => setTab(key)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    tab === key
                      ? "bg-[var(--color-accent)] text-white shadow-lg shadow-blue-500/30"
                      : "text-[var(--color-text-secondary)] hover:text-white"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div key={tab} className={`grid grid-cols-2 ${tab === "data" ? "sm:grid-cols-3" : "max-w-md mx-auto"} gap-6 md:gap-8`}>
            {skills.map((skill, idx) => {
              const circumference = 2 * Math.PI * 40;
              const strokeDashoffset = circumference - (skill.progress / 100) * circumference;
              
              return (
                <div key={skill.name} className="flex flex-col items-center justify-center group">
                  <div className="relative w-28 h-28 mb-4 flex items-center justify-center">
                    {/* Background Circle */}
                    <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <circle 
                        cx="50" cy="50" r="40" 
                        fill="transparent" 
                        stroke="rgba(255,255,255,0.05)" 
                        strokeWidth="4" 
                      />
                      {/* Progress Circle */}
                      <circle 
                        cx="50" cy="50" r="40" 
                        fill="transparent" 
                        stroke="var(--color-accent)" 
                        strokeWidth="4" 
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        className="transition-all duration-1000 ease-out group-hover:stroke-[var(--color-gold)]"
                      />
                    </svg>
                    
                    {/* Inner Glow */}
                    <div className="absolute inset-2 rounded-full bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors blur-md"></div>
                    
                    {/* Icon */}
                    <div className="relative z-10 w-12 h-12 flex items-center justify-center">
                      <img src={skill.icon} alt={skill.name} className={`max-w-full max-h-full object-contain drop-shadow-lg group-hover:scale-110 transition-transform ${skill.invert ? "invert" : ""}`} />
                    </div>
                  </div>
                  <span className="text-sm font-medium text-[var(--color-text-secondary)] group-hover:text-white transition-colors">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
