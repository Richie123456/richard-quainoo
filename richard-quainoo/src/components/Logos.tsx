export default function Logos() {
  const companies = [
    { name: "Deloitte", logo: "https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg" },
    { name: "Trade Depot", logo: "https://tradedepot.co/wp-content/uploads/2021/04/TradeDepot-Logo-White.png" },
    { name: "GCB", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/GCB_Bank_logo.svg/512px-GCB_Bank_logo.svg.png" },
    { name: "Société Générale", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Societe_Generale_logo.svg/512px-Societe_Generale_logo.svg.png" },
    { name: "Prudential Insurance", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Prudential_plc_logo.svg/512px-Prudential_plc_logo.svg.png" },
    { name: "Bank of Africa (BOA)", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Bank_of_Africa_logo.svg/512px-Bank_of_Africa_logo.svg.png" },
    { name: "New Crystal Hospital", logo: "https://logo.clearbit.com/newcrystalhealth.org" },
    { name: "MTN Ghana", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/MTN_Logo.svg/512px-MTN_Logo.svg.png" },
    { name: "MTN Nigeria", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/MTN_Logo.svg/512px-MTN_Logo.svg.png" },
    { name: "CHAMPS Healthcare", logo: "https://logo.clearbit.com/champshealthcare.com" },
    { name: "GHIPSS", logo: "https://ghipss.net/images/ghipss_logo.png" },
    { name: "EDSA", logo: "https://logo.clearbit.com/edsa.sl" },
    { name: "DTA", logo: "https://logo.clearbit.com/dtassociatesgm.com" }
  ];

  return (
    <section className="w-full py-16 relative z-10 border-y border-[var(--color-border)] bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-[var(--color-text-secondary)] text-sm font-medium tracking-widest uppercase">Trusted By Industry Leaders</span>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
          {companies.map((company, idx) => (
            <div key={`img-${idx}`} className="h-12 md:h-16 flex items-center justify-center grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img 
                src={company.logo} 
                alt={company.name} 
                className="max-h-full max-w-[120px] md:max-w-[160px] object-contain brightness-0 invert"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = `<span class="text-sm md:text-base font-bold text-white/50 hover:text-white/80 transition-colors uppercase tracking-wide text-center leading-tight whitespace-nowrap">${company.name}</span>`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
