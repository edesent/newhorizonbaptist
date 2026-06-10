import AnimateOnScroll from "./AnimateOnScroll";

export default function EditWithAI() {
  return (
    <section id="edit-with-ai" className="relative py-32 overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0 bg-brown-deep">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        >
          <source src="/website-editing-withai.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark gradient overlay so text stays readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-brown-deep/85 via-brown-deep/70 to-brown-deep/90 z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(44,24,16,0.4)_100%)] z-[1]" />

      {/* Inline dark-tone badge */}
      <div className="relative z-[2] flex justify-center mb-10">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-gold/40 bg-black/30 backdrop-blur-sm text-[11px] font-semibold tracking-[0.18em] uppercase text-gold-light">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gold text-brown-deep text-[10px] font-bold">
            22
          </span>
          <span className="whitespace-nowrap">Edit Your Site by Talking to AI</span>
          <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-gold/50" />
          <span className="hidden sm:inline-block normal-case tracking-normal text-[12px] font-normal text-white/70">
            How updates happen on this site — no developer required
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-[2] max-w-5xl mx-auto px-6 text-center text-white">
        <AnimateOnScroll>
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-gold-light mb-4">
            No code. No dashboards. No web designer to chase down.
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-6">
            Just <em className="text-gold-light italic">tell it what to change.</em>
          </h2>
          <div className="w-20 h-[3px] bg-gold mx-auto mb-8 rounded" />
          <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-3xl mx-auto mb-10">
            Open ChatGPT or Claude, say <em className="text-gold-light not-italic font-semibold">&ldquo;update the Sunday service to 11&nbsp;AM&rdquo;</em> or
            <em className="text-gold-light not-italic font-semibold"> &ldquo;swap the welcome photo&rdquo;</em> &mdash;
            and it ships to the live site in seconds. The video behind this text shows it happening in real time.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
            {[
              { num: "01", label: "You type a request" },
              { num: "02", label: "AI edits the right file" },
              { num: "03", label: "Site updates in ~30 sec" },
            ].map((step) => (
              <div
                key={step.num}
                className="p-5 rounded-2xl bg-white/[.06] border border-white/15 backdrop-blur-sm"
              >
                <p className="font-serif text-2xl font-bold text-gold-light mb-1">{step.num}</p>
                <p className="text-sm text-white/85 leading-snug">{step.label}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#contact"
              className="inline-block bg-gold text-brown-deep font-semibold text-sm tracking-wide uppercase px-9 py-3.5 rounded-full border-2 border-gold hover:bg-gold-light hover:border-gold-light hover:-translate-y-0.5 hover:shadow-lg transition-all"
            >
              See How It Works
            </a>
            <a
              href="/website-editing-withai.mp4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white font-semibold text-sm tracking-wide uppercase px-9 py-3.5 rounded-full border-2 border-white/50 hover:bg-white/10 hover:border-white hover:-translate-y-0.5 transition-all"
            >
              Watch Full Demo
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
