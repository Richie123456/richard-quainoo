import { useEffect, useRef, useState } from "react";

export default function Gallery() {
  const images = [
    { src: "https://raw.githubusercontent.com/Richie123456/Website-images/main/Ghana%20AI%20Summit.jpeg", label: "Ghana AI Summit" },
    { src: "https://raw.githubusercontent.com/Richie123456/Website-images/main/Pan%20African%20AI%20Summit.jpeg", label: "Pan African AI Summit" },
    { src: "https://raw.githubusercontent.com/Richie123456/Website-images/main/AI%20Skills%20Fest.jpeg", label: "AI Skills Fest" },
    { src: "https://raw.githubusercontent.com/Richie123456/Website-images/main/Tanzania%20AI%20in%20Internal%20Audit.jpeg", label: "AI in Internal Audit" },
    { src: "https://raw.githubusercontent.com/Richie123456/Website-images/main/Frnds%20of%20Ireland%201.jpeg", label: "Friends of Ireland" },
    { src: "https://raw.githubusercontent.com/Richie123456/Website-images/main/AFRIMAA%20World%20Radio%20day.jpeg", label: "World Radio Day" },
    { src: "https://raw.githubusercontent.com/Richie123456/Website-images/main/AI%20Driven%20Org.jpeg", label: "AI-Driven Organisations" },
    { src: "https://raw.githubusercontent.com/Richie123456/Website-images/main/Africon.jpeg", label: "Africon" },
    { src: "https://raw.githubusercontent.com/Richie123456/Website-images/main/Ghana%20AI%20Summit%202.jpeg", label: "Ghana AI Summit" },
    { src: "https://raw.githubusercontent.com/Richie123456/Website-images/main/AI%20Webinar.jpeg", label: "AI Webinar" },
    { src: "https://raw.githubusercontent.com/Richie123456/Website-images/main/Pan%20African%20AI%20Summit%202.jpeg", label: "Pan African AI Summit" },
    { src: "https://raw.githubusercontent.com/Richie123456/Website-images/main/Frnds%20of%20Ireland%202.jpeg", label: "Friends of Ireland" },
    { src: "https://raw.githubusercontent.com/Richie123456/Website-images/main/TAN.jpeg", label: "Tanzania" },
    { src: "https://raw.githubusercontent.com/Richie123456/Website-images/main/AI%20SKILLS.png", label: "AI Skills" },
    { src: "https://raw.githubusercontent.com/Richie123456/Website-images/main/Friends%20of%20Ireland%203.jpeg", label: "Friends of Ireland" },
    { src: "https://raw.githubusercontent.com/Richie123456/Website-images/main/GOVERNMENT%20.png", label: "Government" }
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const firstHalfRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const scroll = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      if (!isPaused && scrollRef.current && firstHalfRef.current) {
        // Scroll speed: ~0.08 pixels per ms
        scrollRef.current.scrollLeft += delta * 0.08;
        
        // Gap is 24px (gap-6)
        const gap = 24;
        const resetPoint = firstHalfRef.current.offsetWidth + gap;

        // Loop back smoothly without jumping
        if (scrollRef.current.scrollLeft >= resetPoint) {
           scrollRef.current.scrollLeft -= resetPoint;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  // A reusable block rendering all images
  const RenderImages = () => (
    <>
      {images.map((img, idx) => (
        <div key={idx} className="shrink-0 w-[300px] md:w-[400px] h-[400px] md:h-[500px] glass-card p-2 group overflow-hidden">
          <div className="w-full h-full rounded-[16px] overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity"></div>
            <img 
              src={img.src} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
              alt={img.label} 
              referrerPolicy="no-referrer" 
            />
            <div className="absolute bottom-6 left-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <div className="text-sm font-bold tracking-wider text-white bg-blue-600/80 backdrop-blur-md px-4 py-2 rounded-full inline-block shadow-lg">
                {img.label}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );

  return (
    <section className="w-full py-16 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 mb-10">
        <div className="flex justify-between items-end">
          <div>
            <span className="section-subtitle">Moments</span>
            <h2 className="section-title">Let's Have a Look At<br/>My <span className="text-[var(--color-accent)]">Portfolio</span></h2>
          </div>
          <p className="hidden md:block text-[var(--color-text-secondary)] max-w-md text-sm">
            A collection of moments from speaking engagements, workshops, and industry events where I share knowledge on AI and Data.
          </p>
        </div>
      </div>
      
      {/* Scrollable Container replacing CSS Marquee */}
      <div 
        className="w-full relative overflow-x-auto hide-scrollbar cursor-grab active:cursor-grabbing snap-mandatory"
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex gap-6 px-4 w-max">
          {/* First block of images (we track its width to reset perfectly) */}
          <div className="flex gap-6" ref={firstHalfRef}>
            <RenderImages />
          </div>
          {/* Second identical block for continuous infinite scroll */}
          <div className="flex gap-6">
            <RenderImages />
          </div>
        </div>
      </div>
    </section>
  );
}
