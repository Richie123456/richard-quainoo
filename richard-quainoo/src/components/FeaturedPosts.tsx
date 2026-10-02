import { Linkedin } from "lucide-react";

export default function FeaturedPosts() {
  return (
    <div className="bento-card w-full bg-[#0a192f] border-[#007bff]/30">
      <div className="bento-label">Featured Posts</div>
      <a href="https://www.linkedin.com/posts/richardquainoo_deloitte-ai-sustainabledevelopment-activity-7308760094161203200-f2Js" target="_blank" rel="noreferrer" className="block bg-white/5 rounded-xl p-3 border-l-[3px] border-[#007bff] mb-3 hover:bg-white/10 transition-colors">
        <div className="font-semibold text-sm mb-1">AI & Sustainable Development</div>
        <div className="text-[11px] text-[var(--color-text-secondary)] line-clamp-2">
          Deloitte AI sustainable development activity and how we are leveraging data for impact...
        </div>
      </a>
      <a href="https://www.linkedin.com/in/richardquainoo/" target="_blank" rel="noreferrer" className="block bg-white/5 rounded-xl p-3 border-l-[3px] border-[#007bff] mb-3 hover:bg-white/10 transition-colors">
        <div className="font-semibold text-sm mb-1">Analytics Engineering Best Practices</div>
        <div className="text-[11px] text-[var(--color-text-secondary)] line-clamp-2">
          Bridging the gap between data engineering and data analysis using modern data stack tools like dbt and Snowflake.
        </div>
      </a>
      <a href="https://www.linkedin.com/in/richardquainoo/" target="_blank" rel="noreferrer" className="block bg-white/5 rounded-xl p-3 border-l-[3px] border-[#007bff] hover:bg-white/10 transition-colors">
        <div className="font-semibold text-sm mb-1">The Future of AI in Enterprise</div>
        <div className="text-[11px] text-[var(--color-text-secondary)] line-clamp-2">
          Exploring how AI is reshaping the way we process and understand large datasets in enterprise environments.
        </div>
      </a>
      <a 
        href="https://www.linkedin.com/in/richardquainoo/" 
        target="_blank" 
        rel="noreferrer"
        className="mt-auto text-xs text-[#4db8ff] text-right pt-4 flex items-center justify-end gap-1 hover:text-white transition-colors"
      >
        <Linkedin className="w-3 h-3" />
        Read more on LinkedIn →
      </a>
    </div>
  );
}
