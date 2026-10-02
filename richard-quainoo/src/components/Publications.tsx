import { ArrowRight } from "lucide-react";

export default function Publications() {
  const articles = [
    {
      title: "AI Skills Fest: Prompt engineering is key in communicating effectively with AI systems",
      publisher: "MyJoyOnline",
      date: "Recent",
      link: "https://www.myjoyonline.com/ai-skills-fest-prompt-engineering-is-key-in-communicating-effectively-with-ai-systems-deloitte-data-analytics-professional/",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Broadcasting in AI era: Adapt ethically or be left out",
      publisher: "MyJoyOnline",
      date: "02/20/2024",
      link: "https://www.myjoyonline.com/broadcasting-in-ai-era-adapt-ethically-or-be-left-out-deloitte-consultant/",
      image: "https://github.com/Richie123456/Website-images/blob/main/AI%20IN%20BROADCASTING.png?raw=true"
    },
    {
      title: "Government urged to invest heavily in data infrastructure",
      publisher: "MyJoyOnline",
      date: "01/15/2024",
      link: "https://www.myjoyonline.com/government-urged-to-invest-heavily-in-data-infrastructure-and-governance/",
      image: "https://github.com/Richie123456/Website-images/blob/main/pan%20african.jpg?raw=true"
    },
    {
      title: "Loan Default Prediction using Machine Learning",
      publisher: "IGI Global",
      date: "11/05/2023",
      link: "https://www.igi-global.com/gateway/article/318672",
      image: "https://github.com/Richie123456/Website-images/blob/main/Publication.png?raw=true"
    }
  ];

  return (
    <section className="w-full py-16 relative z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="section-title">Blogs & Articles</h2>
          </div>
          <a href="#" className="btn-primary py-2 px-6">
            See All <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article, idx) => (
            <a key={idx} href={article.link} target="_blank" rel="noreferrer" className="group block">
              <div className="glass-card p-0 h-full flex flex-col hover:-translate-y-2">
                <div className="w-full aspect-[16/9] overflow-hidden relative">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      if (e.currentTarget.src.endsWith('.png')) {
                        e.currentTarget.src = e.currentTarget.src.replace('.png', '.jpg');
                      } else if (e.currentTarget.src.endsWith('.jpg')) {
                        e.currentTarget.src = e.currentTarget.src.replace('.jpg', '.jpeg');
                      }
                    }}
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-[var(--color-gold)] text-xs font-bold mb-2">{article.date}</div>
                  <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-[var(--color-accent)] transition-colors">{article.title}</h3>
                  <p className="text-[var(--color-text-secondary)] text-sm line-clamp-2 mt-auto">
                    Published on {article.publisher}. Read the full article to learn more about my thoughts on this topic.
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
