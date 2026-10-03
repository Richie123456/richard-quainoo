import { BarChart, Brain, Database, Presentation } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Data Analytics",
      description: "Transforming raw data into actionable insights to drive business growth.",
      icon: <BarChart className="w-8 h-8 text-[var(--color-accent)]" />
    },
    {
      title: "AI Consulting",
      description: "Strategic guidance on implementing AI solutions for enterprise efficiency.",
      icon: <Brain className="w-8 h-8 text-[var(--color-accent)]" />
    },
    {
      title: "Data Engineering",
      description: "Building robust, scalable data pipelines and infrastructure.",
      icon: <Database className="w-8 h-8 text-[var(--color-accent)]" />
    },
    {
      title: "AI & Data Trainings",
      description: "Empowering teams with the skills to leverage AI and data strategies & tools effectively.",
      icon: <Presentation className="w-8 h-8 text-[var(--color-accent)]" />
    }
  ];

  return (
    <section className="w-full py-16 relative z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="section-subtitle">My Services</span>
          <h2 className="section-title">What I Do</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="glass-card p-8 group hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
