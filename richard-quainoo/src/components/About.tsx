export default function About() {
  return (
    <div className="bento-card w-full">
      <div className="bento-label">About</div>
      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
        A Data Enthusiast with a strong passion for the world of data and the transformation, analysis, prediction and prescription of solutions to business problems. I am deeply committed to educating the next generation of data professionals.
      </p>
      <div className="flex gap-4 mt-auto pt-4">
        <div>
          <div className="text-xl font-bold text-white">5+</div>
          <div className="text-[10px] text-[var(--color-text-secondary)] uppercase">Years Exp.</div>
        </div>
        <div>
          <div className="text-xl font-bold text-white">50+</div>
          <div className="text-[10px] text-[var(--color-text-secondary)] uppercase">Projects</div>
        </div>
        <div>
          <div className="text-xl font-bold text-white">10k+</div>
          <div className="text-[10px] text-[var(--color-text-secondary)] uppercase">Students</div>
        </div>
      </div>
    </div>
  );
}
