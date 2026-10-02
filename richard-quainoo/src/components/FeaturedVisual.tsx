import { ArrowRight, Calendar, Presentation, Lightbulb, TrendingUp } from "lucide-react";

export default function FeaturedVisual() {
  return (
    <section className="w-full py-20 relative z-10" id="expertise">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative rounded-[32px] overflow-hidden border border-[var(--color-border)] bg-[var(--color-bg)] shadow-[0_0_50px_rgba(59,130,246,0.05)] group">
          
          {/* Background Image & Gradient Overlays */}
          <div className="absolute inset-0 z-0 bg-black">
            <img 
              src="https://github.com/Richie123456/Website-images/blob/main/Gemini_Generated_Image_x33lwtx33lwtx33l.png?raw=true" 
              alt="Enterprise AI" 
              className="w-full h-full object-cover object-center md:object-right opacity-30 transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Dark gradient sweeping from left to ensure text is fully readable */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg)] via-[#05050a]/90 to-transparent w-full md:w-[75%] z-10"></div>
            {/* Bottom fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent z-10"></div>
            {/* Deep blue color overlay */}
            <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay z-10"></div>
          </div>

          {/* Content Container */}
          <div className="relative z-20 flex flex-col p-6 sm:p-10 md:p-12 lg:p-16">
            
            {/* Headline & Subtext */}
            <div className="max-w-3xl mb-12 relative">
               {/* Soft glow behind text */}
              <div className="absolute -inset-4 bg-blue-600/10 blur-3xl rounded-full z-[-1]"></div>
              
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                Turning Data into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">Business Value</span> with AI
              </h2>
              <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-2xl font-medium">
                I help organizations design data-driven solutions and deliver AI training that empowers teams to work smarter, make better decisions, and scale intelligently.
              </p>
            </div>

            {/* 3 Pillars - Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Pillar 1 */}
              <div className="glass-card !bg-black/40 border border-white/5 p-8 rounded-[20px] hover:-translate-y-2 hover:bg-blue-900/10 hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20 text-[var(--color-accent)] group/icon">
                  <TrendingUp className="w-7 h-7 group-hover/icon:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-wide">Consulting</h3>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                  Data analytics, dashboards, data pipelines, and AI-powered solutions for business growth.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="glass-card !bg-black/40 border border-white/5 p-8 rounded-[20px] hover:-translate-y-2 hover:bg-blue-900/10 hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20 text-[var(--color-accent)] group/icon">
                  <Lightbulb className="w-7 h-7 group-hover/icon:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-wide">Training</h3>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                  AI & Data training sessions, prompt engineering workshops, and enterprise AI adoption programs.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="glass-card !bg-black/40 border border-white/5 p-8 rounded-[20px] hover:-translate-y-2 hover:bg-blue-900/10 hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-yellow-500/10 flex items-center justify-center mb-6 border border-yellow-500/20 text-[var(--color-gold)] group/icon">
                  <Presentation className="w-7 h-7 group-hover/icon:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-wide">Speaking</h3>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                  Conference talks, webinars, and industry sessions on AI, data strategy, and digital transformation.
                </p>
              </div>
            </div>

            {/* Optional Line & Buttons */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pt-8 border-t border-white/10 relative">
               {/* Decorative glow line */}
              <div className="absolute top-0 left-0 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
              
              <p className="text-[14px] text-[var(--color-text-secondary)] max-w-lg">
                <span className="text-white font-medium">Trusted Experience:</span> Worked with organizations including Deloitte, Trade Depot, and leading financial institutions across Africa.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
                <a href="#contact" className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-8 py-3.5 rounded-full text-sm font-semibold inline-flex items-center justify-center transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:-translate-y-1 w-full sm:w-auto">
                  Work With Me
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
                <a href="#contact" className="bg-transparent border border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-black px-8 py-3.5 rounded-full text-sm font-semibold inline-flex items-center justify-center transition-all hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(251,191,36,0.3)] w-full sm:w-auto">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Me to Speak
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
