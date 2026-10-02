export default function Experience() {
  const experiences = [
    {
      role: "Analytics Engineer",
      company: "Deloitte Ghana",
      period: "Present",
      description: "Leading data architecture and analytics engineering for enterprise clients across Banking, Telecom, and Energy sectors."
    },
    {
      role: "Lead Data & Growth Analyst",
      company: "Trade Depot",
      period: "Previous",
      description: "Spearheaded data initiatives, built scalable pipelines, and delivered actionable insights for FMCG supply chain optimization."
    }
  ];

  return (
    <section className="w-full py-16 relative z-10">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="section-subtitle">Career Journey</span>
          <h2 className="section-title">My Work Experience</h2>
        </div>
        
        <div className="relative border-l border-white/10 ml-4 md:ml-1/2 md:left-1/2 md:-translate-x-1/2">
          {experiences.map((exp, idx) => (
            <div key={idx} className={`mb-12 relative flex flex-col md:flex-row items-center justify-between w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-[var(--color-accent)] shadow-[0_0_10px_var(--color-accent)] z-10"></div>
              
              {/* Content Card */}
              <div className={`w-full md:w-5/12 pl-8 md:pl-0 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                <div className="glass-card p-6 hover:-translate-y-1">
                  <div className="text-[var(--color-accent)] text-xs font-bold tracking-wider uppercase mb-2">{exp.period}</div>
                  <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                  <div className="text-[var(--color-gold)] font-medium mb-3">{exp.company}</div>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Industry Expertise Node */}
          <div className="relative flex flex-col md:flex-row items-center justify-between w-full md:flex-row-reverse">
            <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-[var(--color-gold)] shadow-[0_0_10px_var(--color-gold)] z-10"></div>
            <div className="w-full md:w-5/12 pl-8 md:pl-0 md:text-left">
              <div className="glass-card p-6 hover:-translate-y-1">
                <h3 className="text-xl font-bold text-white mb-1">Industry Expertise</h3>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mt-2">
                  Banking, Telecommunications, Energy, and FMCG Supply Chain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
