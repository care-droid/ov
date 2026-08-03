export function FooterCTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-[#4A0E1A] text-center">
      <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600" className="absolute inset-0 w-full h-full object-cover opacity-20" alt="BG" />
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <p className="text-[12px] font-bold tracking-widest uppercase text-[#E8B4BE] mb-6">The Future</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Our Journey is Just Beginning.</h2>
        <p className="text-xl text-white/80 mb-12">OVENTRA represents the next generation of B2B ordering—making ordering faster, smarter, and completely digital.</p>
       <a
  href="https://wa.me/919716016012?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20OVENTRA."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center px-10 py-4 bg-white text-[#4A0E1A] font-bold rounded-full hover:bg-[#E8B4BE] transition-all transform hover:scale-105"
>
  Book a Demo
</a>  </div>
    </section>
  );
}