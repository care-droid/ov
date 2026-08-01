export function AdvantageGrid() {
  const advantages = [
    { title: "Purpose-Built for B2B", body: "Designed specifically for manufacturers managing complex channel networks." },
    { title: "Mobile-First", body: "Empower distributors and sales teams with intuitive mobile applications." },
    { title: "Enterprise-Ready", body: "Scalable architecture capable of supporting businesses of every size." },
    { title: "Cloud-Based", body: "Secure, accessible, and always available from anywhere." },
    { title: "Real-Time Visibility", body: "Monitor orders and performance through centralized dashboards." },
    { title: "ERP Integration", body: "Synchronize order data with your existing ERP for faster operations." },
  ];

  return (
    <section className="py-24 bg-[#4A0E1A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 text-center mb-16">
        <p className="text-[12px] font-bold tracking-widest uppercase text-[#E8B4BE] mb-4">Why Choose Us</p>
        <h2 className="text-4xl font-bold text-white">The OVENTRA Advantage</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-12 text-left">
          {advantages.map((item, i) => (
            <div key={i} className="group bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white transition-all duration-500">
              <h3 className="text-xl font-bold text-[#E8B4BE] group-hover:text-[#4A0E1A]">{item.title}</h3>
              <p className="mt-4 text-white/70 group-hover:text-[#4b4243]">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}