import { Play, Youtube as YoutubeIcon } from "lucide-react";

export default function YouTube() {
  const videos = [
    { id: "-NLTZlCkgvw", title: "Connect AWS S3 to Power BI with Athena + ODBC" },
    { id: "TmUrclnwj2A", title: "Power BI Financial Dashboard Tutorial" },
    { id: "mVImPTXZ0T0", title: "Complete Guide to AWS Glue ETL Jobs" },
    { id: "XLVoKR8ENuI", title: "How to Upload Excel/CSV Dataset to AWS S3" }
  ];

  return (
    <section className="w-full py-16 relative z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="section-subtitle">Content</span>
            <h2 className="section-title">Top Youtube Videos</h2>
          </div>
          <a href="https://www.youtube.com/@TheRQStudio" target="_blank" rel="noreferrer" className="btn-primary py-2 px-6 bg-gradient-to-r from-red-600 to-red-500 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]">
            <YoutubeIcon className="w-4 h-4 mr-2" />
            Visit My Channel
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video, idx) => (
            <a 
              key={idx}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noreferrer"
              className="glass-card p-4 group flex flex-col sm:flex-row gap-4 items-center hover:-translate-y-1"
            >
              <div className="w-full sm:w-48 aspect-video rounded-xl overflow-hidden relative shrink-0">
                <img 
                  src={`https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`} 
                  onError={(e) => { e.currentTarget.src = `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`; }} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  alt={video.title} 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors flex items-center justify-center">
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-4 h-4 text-white ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
              <div className="flex-1 py-2">
                <h3 className="text-white font-bold text-lg leading-tight mb-2 group-hover:text-red-400 transition-colors line-clamp-2">{video.title}</h3>
                <p className="text-[var(--color-text-secondary)] text-sm">Watch on YouTube</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
