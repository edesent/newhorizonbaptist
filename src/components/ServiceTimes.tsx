import AnimateOnScroll from "./AnimateOnScroll";
import SectionBadge from "./SectionBadge";

const services = [
  {
    day: "Sunday",
    title: "Sunday School",
    time: "10:00 AM",
    detail: "Classes for all ages",
  },
  {
    day: "Sunday",
    title: "Morning Worship",
    time: "11:00 AM",
    detail: "Singing, prayer, & preaching",
  },
  {
    day: "Sunday",
    title: "Evening Service",
    time: "6:00 PM",
    detail: "A relaxed second service",
  },
  {
    day: "Wednesday",
    title: "Bible Study & Prayer",
    time: "7:00 PM",
    detail: "Mid-week verse-by-verse study",
  },
];

export default function ServiceTimes() {
  return (
    <section id="services" className="py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <SectionBadge
          number={6}
          name="Service Times"
          purpose="When you meet — easy to find near the top of the page"
        />

        <AnimateOnScroll>
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark leading-snug">
              Join Us This <em className="text-brown-light italic">Week</em>
            </h2>
            <p className="text-text-body mt-3 max-w-2xl mx-auto">
              Doors open 20 minutes before each service. Dress is casual — come as you are.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <AnimateOnScroll key={s.title} delay={i * 100}>
              <div className="h-full p-7 bg-warm-white rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all border border-cream-dark">
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-2">
                  {s.day}
                </p>
                <h3 className="font-serif text-xl font-semibold text-text-dark mb-1">
                  {s.title}
                </h3>
                <p className="font-serif text-3xl font-bold text-brown-light mb-3">
                  {s.time}
                </p>
                <p className="text-sm text-text-light leading-relaxed">{s.detail}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
