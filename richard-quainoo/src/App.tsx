/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Services from "./components/Services";
import FeaturedVisual from "./components/FeaturedVisual";
import Experience from "./components/Experience";
import Gallery from "./components/Gallery";
import Publications from "./components/Publications";
import YouTube from "./components/YouTube";
import Projects from "./components/Projects";
import Logos from "./components/Logos";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-primary)] font-sans overflow-x-hidden relative">
      {/* Glow Backgrounds */}
      <div className="glow-bg top-[-200px] left-[-200px]"></div>
      <div className="glow-bg top-[40%] right-[-300px]"></div>
      <div className="glow-bg bottom-[-200px] left-[20%]"></div>

      <div className="relative z-10 flex flex-col w-full">
        <nav className="flex justify-between items-center px-6 py-6 max-w-6xl mx-auto w-full backdrop-blur-sm sticky top-0 z-50 border-b border-transparent transition-all">
          <div className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-sm">RQ</span>
            STUDIO
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-[var(--color-text-secondary)]">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
            <a href="#contact" className="px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">Let's Talk</a>
          </div>
        </nav>
        
        <main className="flex flex-col w-full">
          <Hero />
          <FeaturedVisual />
          <div id="services">
            <Services />
          </div>
          <div id="experience">
            <Experience />
          </div>
          <Skills />
          <div id="portfolio">
            <Gallery />
          </div>
          <YouTube />
          <Publications />
          <Projects />
          <div id="contact">
            <Contact />
          </div>
          <Logos />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}
