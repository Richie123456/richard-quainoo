import { Mail, Linkedin, Youtube, Github, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="glass-card p-12 md:p-16 relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none"></div>
          
          <span className="section-subtitle relative z-10">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10">
            Let's build with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Data & AI</span>
          </h2>
          
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto mb-10 relative z-10">
            Whether you require a robust data solution, a Senior Data Analyst, an Analytics Engineer, or a scalable ETL pipeline, I bring the technical expertise and strategic vision to deliver exceptional results.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <a href="mailto:RichardQuainoo123@gmail.com" className="btn-primary w-full sm:w-auto group">
              <Mail className="w-4 h-4 mr-2" />
              Email Me
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://www.linkedin.com/in/richardquainoo/" target="_blank" rel="noreferrer" className="btn-secondary w-full sm:w-auto">
              <Linkedin className="w-4 h-4 mr-2" />
              Connect on LinkedIn
            </a>
          </div>
          
          <div className="flex items-center justify-center gap-6 mt-12 relative z-10">
            <a href="https://www.linkedin.com/in/richardquainoo/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[var(--color-text-secondary)] hover:text-white hover:bg-blue-500/20 transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://www.youtube.com/@TheRQStudio" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[var(--color-text-secondary)] hover:text-white hover:bg-red-500/20 transition-all">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="https://github.com/Richie123456" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[var(--color-text-secondary)] hover:text-white hover:bg-white/20 transition-all">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
