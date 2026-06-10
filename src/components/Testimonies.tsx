import AnimateOnScroll from "./AnimateOnScroll";
import SectionBadge from "./SectionBadge";

const testimonies = [
  {
    name: "The [Last Name] Family",
    body:
      "We visited one Sunday looking for a church that still preached the Bible. From the first hymn we knew this was home. Our kids love it here.",
  },
  {
    name: "[First Name] [Last Name]",
    body:
      "I got saved in this church at age 47. The pastor took time to sit down with me and walk through the Scriptures. My life has not been the same since.",
  },
  {
    name: "[First Name] [Last Name]",
    body:
      "After my husband passed, this church became my family. They prayed for me, brought meals, and checked on me every week.",
  },
];

export default function Testimonies() {
  return (
    <section id="testimonies" className="py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <SectionBadge
          number={10}
          name="Member Testimonies"
          purpose="Real life-change stories from church members in their own words"
        />

        <AnimateOnScroll>
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark leading-snug">
              Life-Change <em className="text-brown-light italic">Stories</em>
            </h2>
            <p className="text-text-body mt-3 max-w-2xl mx-auto">
              The best ad for our church is the people who already call it home.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonies.map((t, i) => (
            <AnimateOnScroll key={t.name} delay={i * 120}>
              <figure className="h-full p-8 bg-warm-white rounded-2xl border border-cream-dark shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <svg className="w-8 h-8 text-gold mb-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.583 17.321C8.553 16.227 8 15 8 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm-8 0C.553 16.227 0 15 0 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                </svg>
                <blockquote className="font-serif italic text-lg text-text-body leading-relaxed flex-grow mb-6">
                  &ldquo;{t.body}&rdquo;
                </blockquote>
                <figcaption className="text-xs font-bold tracking-[0.2em] uppercase text-gold-dark border-t border-cream-dark pt-4">
                  — {t.name}
                </figcaption>
              </figure>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
