import { Github, Linkedin, Youtube, ArrowRight, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full pt-20 pb-16 relative z-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Text Section (Now on the Left) */}
        <div className="flex-1 flex flex-col items-start gap-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Available for consulting
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
            Hi, I'm Richard <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Quainoo</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] font-medium max-w-2xl">
            Analytics Engineer | AI & Data Consultant | AI Trainer & Speaker
          </p>
          
          <p className="text-[var(--color-text-secondary)] max-w-xl leading-relaxed">
            I help organisations build scalable data pipelines, implement AI & Data Analytics solutions, and train teams to leverage data for sustainable growth.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-4">
            <a href="#portfolio" className="btn-primary group">
              View My Work
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="btn-secondary">
              <Calendar className="w-4 h-4 mr-2" />
              Book Me to Speak
            </a>
            <a href="https://www.linkedin.com/in/richardquainoo/" target="_blank" rel="noreferrer" className="btn-secondary">
              <Linkedin className="w-4 h-4 mr-2" />
              Connect
            </a>
          </div>
          
          <div className="flex items-center gap-6 mt-8">
            <a href="https://www.linkedin.com/in/richardquainoo/" target="_blank" rel="noreferrer" className="text-[var(--color-text-secondary)] hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://www.youtube.com/@TheRQStudio" target="_blank" rel="noreferrer" className="text-[var(--color-text-secondary)] hover:text-white transition-colors">
              <Youtube className="w-6 h-6" />
            </a>
            <a href="https://github.com/Richie123456" target="_blank" rel="noreferrer" className="text-[var(--color-text-secondary)] hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Image Section (Now on the Right) */}
        <div className="flex-1 flex justify-center md:justify-end relative">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Glowing Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-[-10px] rounded-full border border-blue-400/10 animate-[spin_15s_linear_infinite_reverse]"></div>
            
            {/* Gradient Glow */}
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl"></div>
            
            {/* Image Container */}
            <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-[var(--color-bg)] z-10 bg-[var(--color-card-bg)]">
              <img 
                src="https://github.com/Richie123456/Website-images/blob/main/Gemini_Generated_Image_x33lwtx33lwtx33l.png?raw=true" 
                alt="Richard Quainoo" 
                className="w-full h-full object-cover -scale-x-100"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
