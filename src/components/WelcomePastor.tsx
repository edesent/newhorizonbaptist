import AnimateOnScroll from "./AnimateOnScroll";
import SectionBadge from "./SectionBadge";

export default function WelcomePastor() {
  return (
    <section id="welcome" className="py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <SectionBadge
          number={3}
          name="Welcome from the Pastor"
          purpose="A warm, personal invitation in the pastor's own voice"
        />

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Pastor photo */}
          <AnimateOnScroll>
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5] bg-brown-deep">
              <img
                src="/pastor-family.jpg"
                alt="Pastor Evan Fincham and his wife"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </div>
          </AnimateOnScroll>

          {/* Text */}
          <AnimateOnScroll delay={200}>
            <div>
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-2">
                A Message From Our Pastor
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark leading-snug mb-6">
                You&rsquo;re Invited to <em className="text-brown-light italic">Visit Us</em>
              </h2>
              <p className="text-lg text-text-body leading-relaxed mb-4">
                Hello friend — I&rsquo;m Pastor Evan Fincham, and on behalf of our church family
                here in Port Byron I want to personally invite you to join us this Sunday.
              </p>
              <p className="text-lg text-text-body leading-relaxed mb-6">
                We&rsquo;re an old-fashioned, Bible-believing church that loves the Lord, preaches
                the King James Bible, and loves people. Whether you&rsquo;ve been in church your
                whole life or you&rsquo;ve never set foot in one, you&rsquo;ll find a warm welcome here.
              </p>
              <p className="font-serif italic text-text-light mb-8">
                — Pastor Fincham
              </p>
              <a
                href="/pastor"
                className="inline-block bg-brown-light text-white font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full border-2 border-brown-light hover:bg-brown hover:border-brown hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                Meet Pastor Fincham
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
