export function PromiseSection() {
  const promises = [
    { title: "Simplicity", body: "Technology that is intuitive and easy to adopt." },
    { title: "Reliability", body: "A platform businesses can depend on every day." },
    { title: "Innovation", body: "Continuous improvements that help customers stay ahead." },
  ];
  return (
    <section className="py-24 bg-white border-t border-[#7A1428]/10 text-center">
      <p className="text-[12px] font-bold tracking-widest uppercase text-[#7A1428] mb-4">Our Promise</p>
      <h2 className="text-4xl font-bold text-[#4A0E1A] mb-16">Technology that simplifies business.</h2>
      <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto px-6">
        {promises.map((p, i) => (
          <div key={i} className="p-8 group relative">
            <span className="text-5xl font-black text-[#7A1428]/10 mb-4 block">0{i+1}</span>
            <h3 className="text-2xl font-bold text-[#4A0E1A] mb-4">{p.title}</h3>
            <p className="text-[#4b4243]">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}