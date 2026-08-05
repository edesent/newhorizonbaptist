export default function PreachingHero() {
  return (
    <header id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background — photo of the church front */}
      <div className="absolute inset-0 z-0 bg-brown-deep">
        <img
          src="/church-front.jpg"
          alt="The front of New Horizon Baptist Church"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Gradient overlay — keeps the white headline readable over the photo */}
      <div className="absolute inset-0 bg-gradient-to-b from-brown-deep/70 via-brown-deep/55 to-brown-deep/85 z-[1]" />

      {/* Sunrise glow — the logo's rising sun, warming the type without fighting the photo */}
      <div
        className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_55%_45%_at_50%_38%,rgba(245,166,35,0.22),transparent_70%)]"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-[2] text-center text-white max-w-3xl px-5 py-10">
        <p className="text-sm font-semibold tracking-[0.25em] uppercase text-gold-light mb-3 animate-fade-up animation-delay-200">
          Welcome to
        </p>
        <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-5 animate-fade-up animation-delay-400">
          New Horizon<br />Baptist Church
        </h1>
        <div className="horizon-rule-dark w-28 mx-auto mb-6 animate-fade-up animation-delay-600" />
        <p className="font-serif text-lg md:text-xl italic text-white/85 leading-relaxed max-w-xl mx-auto mb-9 animate-fade-up animation-delay-800">
          &ldquo;Preach the word; be instant in season, out of season.&rdquo;
          <span className="block not-italic text-sm text-gold-light mt-2">— 2 Timothy 4:2 (KJV)</span>
        </p>
        <div className="flex gap-4 justify-center flex-wrap animate-fade-up animation-delay-1000">
          <a
            href="#services"
            className="inline-block bg-orange text-white font-semibold text-sm tracking-wide uppercase px-9 py-3.5 rounded-full border-2 border-orange hover:bg-orange-dark hover:border-orange-dark hover:-translate-y-0.5 hover:shadow-lg transition-all"
          >
            Plan Your Visit
          </a>
          <a
            href="/pastor"
            className="inline-block text-white font-semibold text-sm tracking-wide uppercase px-9 py-3.5 rounded-full border-2 border-white/50 hover:bg-white/10 hover:border-white hover:-translate-y-0.5 transition-all"
          >
            Meet Our Pastor
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[2] animate-fade-up animation-delay-1300">
        <a href="#welcome" className="flex flex-col items-center gap-2 text-white/50 text-xs tracking-[0.15em] uppercase">
          <span>Scroll</span>
          <div className="w-5 h-5 border-r-2 border-b-2 border-white/40 rotate-45 animate-scroll-bounce" />
        </a>
      </div>
    </header>
  );
}
