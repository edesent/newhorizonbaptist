import AnimateOnScroll from "./AnimateOnScroll";
import SectionBadge from "./SectionBadge";

const missionaries = [
  { family: "The [Last Name] Family", field: "Philippines", focus: "Church Planting" },
  { family: "The [Last Name] Family", field: "Papua New Guinea", focus: "Bible Translation" },
  { family: "The [Last Name] Family", field: "Mexico", focus: "Children's Ministry" },
  { family: "The [Last Name] Family", field: "Eastern Europe", focus: "Discipleship" },
];

export default function Missionaries() {
  return (
    <section id="missionaries" className="py-28 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionBadge
          number={15}
          name="Missionaries We Support"
          purpose="The families and ministries your church supports around the world"
        />

        <AnimateOnScroll>
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark leading-snug">
              Reaching the World With <em className="text-brown-light italic">the Gospel</em>
            </h2>
            <p className="text-text-body mt-3 max-w-2xl mx-auto">
              We&rsquo;re prayerfully and financially partnered with these missionary families.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {missionaries.map((m, i) => (
            <AnimateOnScroll key={`${m.family}-${m.field}`} delay={i * 100}>
              <div className="h-full p-6 bg-cream rounded-2xl border border-cream-dark hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gold-dark flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
                  </svg>
                  <div>
                    <h3 className="font-serif text-base font-semibold text-text-dark leading-tight mb-1">
                      {m.family}
                    </h3>
                    <p className="text-sm font-semibold text-brown-light">{m.field}</p>
                    <p className="text-xs text-text-light mt-1.5">{m.focus}</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll>
          <div className="text-center">
            <a
              href="/missionaries"
              className="inline-block text-brown-light font-semibold text-sm tracking-wide uppercase border-b-2 border-brown-light/40 hover:border-brown-light pb-1 transition-colors"
            >
              See all the missionaries we support →
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
