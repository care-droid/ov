export function OriginSection() {
  const points = [
    "Sales teams spent more time writing orders than building relationships.",
    "Distributors struggled with outdated product catalogues.",
    "Dealers often waited for sales representatives to collect routine orders.",
    "Management had limited visibility into business performance."
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center">
      <div className="grid grid-cols-2 gap-4 order-2 lg:order-1">
        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600" className="rounded-2xl shadow-lg mt-12" alt="Meeting" />
        <img src="CTA1.jpg" className="rounded-2xl shadow-lg" alt="App" />
      </div>
      <div className="order-1 lg:order-2">
        <p className="text-[12px] font-bold tracking-widest uppercase text-[#7A1428] mb-4">The Origin</p>
        <h2 className="text-4xl font-bold text-[#4A0E1A] mb-8">The idea behind OVENTRA came from a simple observation.</h2>
        <div className="space-y-4">
          {points.map((text, i) => (
            <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-white transition-all border border-transparent hover:border-[#7A1428]/10">
              <div className="w-6 h-6 rounded-full bg-[#7A1428] flex-shrink-0 flex items-center justify-center mt-1">
                <div className="w-1.5 h-1.5 bg-white rotate-45" />
              </div>
              <p className="text-[#4b4243]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}