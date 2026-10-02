export default function Footer() {
  return (
    <footer className="py-8 text-center border-t border-white/5 relative z-10 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-[var(--color-text-secondary)]">
          &copy; {new Date().getFullYear()} Richard Quainoo. All rights reserved.
        </div>
        <div className="flex gap-6 text-sm text-[var(--color-text-secondary)]">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
