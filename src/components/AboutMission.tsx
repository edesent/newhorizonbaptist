import AnimateOnScroll from "./AnimateOnScroll";
import SectionBadge from "./SectionBadge";

const pillars = [
  { label: "The Word", text: "We preach the King James Bible — every verse, in context, without apology." },
  { label: "The Family", text: "We love each other, look out for each other, and grow together." },
  { label: "The Lost", text: "We share the Gospel locally and support missionaries around the world." },
];

export default function AboutMission() {
  return (
    <section id="about" className="py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <SectionBadge
          number={8}
          name="About / Our Mission"
          purpose="A short, mission-driven summary of who you are"
        />

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
          <AnimateOnScroll>
            <div>
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
                About Our Church
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark leading-snug mb-6">
                A Church That Still Believes <em className="text-brown-light italic">the Book.</em>
              </h2>
              <p className="text-lg text-text-body leading-relaxed mb-5">
                We&rsquo;re a small, family-oriented Independent Baptist church in Port Byron, New York.
                We gather to worship the Lord Jesus Christ, study His Word, and reach our
                community with the Gospel.
              </p>
              <p className="text-lg text-text-body leading-relaxed mb-8">
                Our mission is simple: to love God, love people, and preach the Word — the same way
                Baptists have for generations.
              </p>
              <a
                href="/statement-of-faith"
                className="inline-block text-brown-light font-semibold text-sm tracking-wide uppercase border-b-2 border-brown-light/40 hover:border-brown-light pb-1 transition-colors"
              >
                Read our full statement of faith →
              </a>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div className="space-y-5">
              {pillars.map((p) => (
                <div
                  key={p.label}
                  className="p-6 bg-warm-white rounded-2xl border border-cream-dark hover:shadow-md transition-shadow"
                >
                  <p className="text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-2">
                    {p.label}
                  </p>
                  <p className="text-text-body leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
