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
import { useEffect, useRef, useState } from "react";

export default function Gallery() {
  const images = [
    { src: "https://media.licdn.com/dms/image/v2/D4D22AQGhjmt-cN9nbg/feedshare-shrink_1280/B4DZ15lZs7JQAM-/0/1775861341243?e=1777507200&v=beta&t=6Dhm_6qV46m6yexuS3K9b2X7ArA_iU7B3O6WfFm-y5s", label: "Speaking" },
    { src: "https://media.licdn.com/dms/image/v2/D4E22AQGohhjkd8su8w/feedshare-shrink_2048_1536/B4EZmPZuTGIoAw-/0/1759047511693?e=1777507200&v=beta&t=CSuh5W-9f_w_vIQmMLbQF96kDgrHS6qAfLZwlOp9YMk", label: "Panel" },
    { src: "https://media.licdn.com/dms/image/v2/D4D22AQFOUhIHCF-Ftw/feedshare-shrink_2048_1536/B4DZ15lZtBLMAg-/0/1775861341249?e=1777507200&v=beta&t=ugoIGqpxoUSiymgUKBgnuDqXoJgfS7GNYQcBCHhJbFU", label: "Workshop" },
    { src: "https://media.licdn.com/dms/image/v2/D4D22AQGq7VgA8saRpw/feedshare-shrink_2048_1536/B4DZ15lZs0GUAg-/0/1775861341216?e=1777507200&v=beta&t=UIa5lsS6g0FSMCoVhZDNDD7Zkezbgw6nAm15PELgjrA", label: "Training" },
    { src: "https://media.licdn.com/dms/image/v2/D4D22AQHh6lFzDGRhIw/feedshare-shrink_1280/B4DZ15lZssGUAQ-/0/1775861341281?e=1777507200&v=beta&t=qXj6Os_OpeiVDHRN5Fw2Tj9KRjqUKccsa1REFJ9aWOw", label: "Event" },
    { src: "https://media.licdn.com/dms/image/v2/D4E22AQEK5FzI5gOL2w/feedshare-shrink_2048_1536/B4EZmPZuTkHoAw-/0/1759047511731?e=1777507200&v=beta&t=vIEOcVLHD9cYwlr4NgHonnmIW2_b-h_1nUlYQJzVSjs", label: "Conference" },
    { src: "https://media.licdn.com/dms/image/v2/D4E22AQFuPGWMt2IXnA/feedshare-shrink_2048_1536/B4EZmPZuTKKsAw-/0/1759047512367?e=1777507200&v=beta&t=bKI3g607ryCBouc9ypl1n9MEJBrjqv1exN5TSdcHEyQ", label: "Keynote" },
    { src: "https://media.licdn.com/dms/image/v2/D4D22AQHJCmUC9fQsoQ/feedshare-shrink_2048_1536/B4DZ15lZqVHIAk-/0/1775861341065?e=1777507200&v=beta&t=DgcBqjITbuskf1aCy3ZTIltTv4FIjHYpFs_IlypJsDw", label: "Mentoring" },
    { src: "https://media.licdn.com/dms/image/v2/D4E22AQETM62pJd-lsw/feedshare-shrink_2048_1536/B4EZmPZuSoKcAw-/0/1759047511426?e=1777507200&v=beta&t=IzeeoOWDpV-JJ7jGUhc38TpVCTBxo2Dv5kwZkh8_KyY", label: "Networking" },
    { src: "https://media.licdn.com/dms/image/v2/D4E22AQHeGZYg6h1g1w/feedshare-shrink_2048_1536/B4EZrVKp6dGoAw-/0/1764512943293?e=1777507200&v=beta&t=5laUVFWzrLs16LSORTIMiEJZpiO0Y_2Gsr23dA86GJU", label: "AI Summit" },
    { src: "https://media.licdn.com/dms/image/v2/D4E22AQH5j9yNToqvJw/feedshare-shrink_2048_1536/B4EZX8XKCmHcAo-/0/1743695686478?e=1777507200&v=beta&t=TGkW2x1CgCmIyhLb50szuQhSQZ48qtdaAjLgxWxmHSw", label: "Data Talk" },
    { src: "https://media.licdn.com/dms/image/v2/D4D22AQHfPq05jjgegQ/feedshare-shrink_1280/B4DZxc5shkKYAc-/0/1771085154826?e=1777507200&v=beta&t=6nTWHJV0OOqAfpETSNa8e2U-qV1AlakyGEaWHnsCdQQ", label: "Consulting" },
    { src: "https://media.licdn.com/dms/image/v2/D4D22AQHp_fYqLVUDOA/feedshare-shrink_1280/B4DZxc5skUI8Ac-/0/1771085155177?e=1777507200&v=beta&t=hu4cM7ypl5dkKova-AKkwk6X1UVUKtAUT8hcUu326rA", label: "Leadership" }
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
