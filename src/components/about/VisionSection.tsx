export function VisionSection() {
  return (
    <section className="py-20 bg-white/40 backdrop-blur-md border-y border-[#7A1428]/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-1">
          <p className="text-[12px] font-bold tracking-widest uppercase text-[#7A1428]">Our Vision</p>
          <h2 className="mt-4 text-3xl font-bold text-[#4A0E1A]">To Become the World's Most Trusted B2B Ordering Platform</h2>
        </div>
        <div className="lg:col-span-2 space-y-6 text-lg text-[#4b4243]">
          <p>We envision a future where every manufacturer and dealer operates on a connected digital ecosystem—eliminating manual processes and enabling smarter business decisions.</p>
          <p className="text-base italic border-l-4 border-[#7A1428] pl-6 py-2 bg-[#7A1428]/5">
            "Our mission is to help businesses replace paperwork and disconnected communication with an intelligent platform that drives operational excellence."
          </p>
        </div>
      </div>
    </section>
  );
}