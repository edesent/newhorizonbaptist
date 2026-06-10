import AnimateOnScroll from "./AnimateOnScroll";
import SectionBadge from "./SectionBadge";

const events = [
  {
    date: { month: "Jun", day: "07" },
    title: "Father & Son Breakfast",
    time: "Saturday • 8:00 AM",
    body: "Pancakes, devotional, and a short message in the fellowship hall.",
  },
  {
    date: { month: "Jun", day: "15" },
    title: "Vacation Bible School Kickoff",
    time: "Sun–Thu Evenings • 6:30 PM",
    body: "A week of Bible lessons, music, games, and snacks for kids K–6.",
  },
  {
    date: { month: "Jun", day: "29" },
    title: "Fifth Sunday Singspiration",
    time: "Sunday Evening • 6:00 PM",
    body: "An evening of old-fashioned congregational hymn singing.",
  },
];

export default function UpcomingEvents() {
  return (
    <section id="events" className="py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <SectionBadge
          number={12}
          name="Upcoming Events"
          purpose="The next 2–4 things on the church calendar"
        />

        <AnimateOnScroll>
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark leading-snug">
              Upcoming <em className="text-brown-light italic">Events</em>
            </h2>
            <p className="text-text-body mt-3 max-w-2xl mx-auto">
              Mark your calendar — and bring a friend.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-6">
          {events.map((e, i) => (
            <AnimateOnScroll key={e.title} delay={i * 120}>
              <article className="h-full bg-warm-white rounded-2xl border border-cream-dark overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                <div className="bg-brown-deep text-gold-light text-center py-4 px-6">
                  <p className="text-xs font-bold tracking-[0.25em] uppercase text-gold-light/80">
                    {e.date.month}
                  </p>
                  <p className="font-serif text-4xl font-bold text-white leading-none mt-1">
                    {e.date.day}
                  </p>
                </div>
                <div className="p-7">
                  <p className="text-xs font-semibold tracking-[0.15em] uppercase text-gold-dark mb-2">
                    {e.time}
                  </p>
                  <h3 className="font-serif text-xl font-semibold text-text-dark mb-3 leading-snug">
                    {e.title}
                  </h3>
                  <p className="text-sm text-text-body leading-relaxed">{e.body}</p>
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
