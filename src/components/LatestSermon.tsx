import AnimateOnScroll from "./AnimateOnScroll";
import SectionBadge from "./SectionBadge";

export default function LatestSermon() {
  return (
    <section id="sermon" className="py-28 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionBadge
          number={11}
          name="Latest Sermon"
          purpose="A featured most-recent sermon — embeddable from YouTube/Vimeo"
        />

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
          <AnimateOnScroll>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl bg-brown-deep group">
              <div className="absolute inset-0 bg-gradient-to-br from-brown to-brown-deep" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.15),transparent_70%)]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <div className="w-20 h-20 rounded-full bg-gold flex items-center justify-center mb-4 shadow-2xl group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-brown-deep ml-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-light">
                  Latest Sermon Video
                </p>
                <p className="text-xs text-white/40 mt-2 normal-case tracking-normal">
                  Embed your YouTube/SermonAudio player here
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div>
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
                Sunday Morning, [Date]
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark leading-snug mb-4">
                The Sufficiency of <em className="text-brown-light italic">Scripture</em>
              </h2>
              <p className="text-text-body leading-relaxed mb-2">
                <strong className="text-text-dark">Text:</strong> 2 Timothy 3:16–17
              </p>
              <p className="text-text-body leading-relaxed mb-6">
                <strong className="text-text-dark">Preacher:</strong> Pastor [Last Name]
              </p>
              <p className="text-text-body leading-relaxed mb-8">
                A reminder that the Word of God is enough — for salvation, for instruction in
                righteousness, and for every good work the Lord has called us to.
              </p>
              <a
                href="/messages"
                className="inline-block bg-brown-light text-white font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full border-2 border-brown-light hover:bg-brown hover:border-brown hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                Browse Sermon Library
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
