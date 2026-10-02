import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      name: "data-pipeline-framework",
      description: "A robust, scalable framework for building ETL pipelines with automated testing and deployment.",
      stack: ["Python", "SQL", "Airflow"],
      link: "https://github.com/Richie123456"
    },
    {
      name: "powerbi-finance-dashboard",
      description: "Interactive financial reporting dashboard with advanced DAX measures and custom visuals.",
      stack: ["Power BI", "DAX", "SQL Server"],
      link: "https://github.com/Richie123456"
    },
    {
      name: "aws-glue-etl-scripts",
      description: "Collection of PySpark scripts for serverless data integration and transformation on AWS.",
      stack: ["AWS Glue", "PySpark", "S3"],
      link: "https://github.com/Richie123456"
    }
  ];

  return (
    <section className="w-full py-16 relative z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="section-subtitle">Open Source</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="glass-card p-8 flex flex-col hover:-translate-y-2 group">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-[var(--color-accent)]">
                  <Github className="w-6 h-6" />
                </div>
                <a href={project.link} target="_blank" rel="noreferrer" className="text-[var(--color-text-secondary)] hover:text-white transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--color-accent)] transition-colors">{project.name}</h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.stack.map((tech, i) => (
                  <span key={i} className="text-[11px] font-medium px-3 py-1 rounded-full bg-white/5 text-[var(--color-text-secondary)] border border-white/10">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a href="https://github.com/Richie123456" target="_blank" rel="noreferrer" className="btn-secondary">
            <Github className="w-4 h-4 mr-2" />
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
