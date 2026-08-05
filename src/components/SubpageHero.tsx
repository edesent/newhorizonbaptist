interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export default function SubpageHero({ eyebrow, title, subtitle }: Props) {
  return (
    <header className="relative pt-36 pb-20 bg-brown-deep overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,166,35,0.20),transparent_62%)]" />
      {/* Sunrise rays from the logo */}
      <div className="absolute inset-0 sun-rays-dark" aria-hidden="true" />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {eyebrow && (
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-gold-light mb-3">
            {eyebrow}
          </p>
        )}
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="font-serif italic text-lg md:text-xl text-white/75 mt-5 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
        <div className="horizon-rule-dark w-28 mx-auto mt-8" />
      </div>
    </header>
  );
}
