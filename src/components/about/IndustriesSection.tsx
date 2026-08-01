export function IndustriesSection() {
  const industries = ["Footwear", "Apparel", "Sports Goods", "Furniture", "Hardware", "Electricals", "Consumer Durables", "Manufacturing"];
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-16">
      <div className="lg:col-span-5">
        <p className="text-[12px] font-bold tracking-widest uppercase text-[#7A1428] mb-4">Versatility</p>
        <h2 className="text-4xl font-bold text-[#4A0E1A] mb-6">Industries We Serve</h2>
        <p className="text-[#4b4243] mb-8">OVENTRA's flexible architecture makes it suitable for any business managing large catalogues.</p>
        <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800" className="rounded-2xl shadow-2xl" alt="Industries" />
      </div>
      <div className="lg:col-span-7 flex flex-wrap gap-3 content-start">
        {industries.map((ind) => (
          <span key={ind} className="px-6 py-3 rounded-2xl bg-white border border-[#7A1428]/10 text-[#4A0E1A] font-semibold hover:bg-[#7A1428] hover:text-white transition-all shadow-sm">{ind}</span>
        ))}
        <div className="mt-12 p-8 rounded-3xl bg-[#7A1428]/5 border border-[#7A1428]/10 w-full">
          <h3 className="text-2xl font-bold text-[#4A0E1A] mb-4">Backed by Experience.</h3>
          <p className="text-[#4b4243]">Partnering with a company that has spent two decades solving complex challenges.</p>
        </div>
      </div>
    </section>
  );
}