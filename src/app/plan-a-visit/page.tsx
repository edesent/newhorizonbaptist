import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import VisitForm from "./visit-form";

export const metadata: Metadata = {
  title: "Plan a Visit",
  description:
    "Planning your first Sunday at New Horizon Baptist Church in Port Byron, NY? Let us know you're coming and we'll be watching for you at the door.",
  alternates: { canonical: "/plan-a-visit" },
  openGraph: {
    title: "Plan a Visit | New Horizon Baptist Church",
    description:
      "Tell us you're coming and we'll be watching for you at the door.",
    url: "/plan-a-visit",
    type: "website",
  },
};

const whatToExpect = [
  {
    title: "Come as you are",
    body: "Some wear a suit, some wear jeans. Nobody is going to look you up and down — we're just glad you came.",
  },
  {
    title: "Nobody will single you out",
    body: "You won't be asked to stand, introduce yourself, or put anything in the plate. You can simply sit and listen.",
  },
  {
    title: "About an hour and fifteen",
    body: "Hymns, prayer, and preaching straight from the King James Bible. Sunday School is the hour before, if you'd like to come early.",
  },
  {
    title: "Your children are welcome",
    body: "Tell us their ages below and we'll have someone ready to help you find where they'll be most comfortable.",
  },
];

const times = [
  { label: "Sunday School", time: "10:00 AM" },
  { label: "Morning Worship", time: "11:00 AM" },
  { label: "Thursday Bible Study", time: "6:30 PM" },
];

export default function PlanAVisitPage() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHero
          eyebrow="Plan a Visit"
          title="We’ll Be Watching For You"
          subtitle="Tell us you're coming and we'll make sure you're not walking in alone"
        />

        <section className="py-24 bg-warm-white">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-start">
            {/* The form */}
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark leading-snug mb-3">
                Let Us Know You&rsquo;re <em className="text-brown-light italic">Coming</em>
              </h2>
              <p className="text-text-body leading-relaxed mb-8">
                Filling this out is not a commitment — it just means someone will
                be at the door expecting you, and you&rsquo;ll have a name and a
                face before you ever walk in.
              </p>
              <VisitForm />
            </div>

            {/* What to expect */}
            <aside className="lg:sticky lg:top-28">
              <div className="p-8 bg-cream rounded-2xl border border-cream-dark mb-6">
                <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-2">
                  When We Gather
                </span>
                <ul className="mt-3 space-y-3">
                  {times.map((t) => (
                    <li
                      key={t.label}
                      className="flex items-baseline justify-between gap-4 pb-3 border-b border-cream-dark last:border-0 last:pb-0"
                    >
                      <span className="text-text-dark font-medium">{t.label}</span>
                      <span className="font-serif text-lg text-brown-light font-bold whitespace-nowrap">
                        {t.time}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="horizon-rule w-20 my-6" />
                <p className="text-sm text-text-body leading-relaxed">
                  8505 S Street Rd
                  <br />
                  Port Byron, NY 13140
                </p>
                <a
                  href="https://maps.google.com/?q=8505+S+Street+Rd+Port+Byron+NY+13140"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sm font-semibold text-brown-light hover:text-brown transition-colors"
                >
                  Get directions →
                </a>
              </div>

              <h3 className="font-serif text-2xl font-bold text-text-dark mb-5">
                What to expect
              </h3>
              <ul className="space-y-5">
                {whatToExpect.map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <span
                      aria-hidden="true"
                      className="mt-2 w-2 h-2 rounded-full bg-gold flex-shrink-0"
                    />
                    <div>
                      <p className="font-serif text-lg font-bold text-text-dark leading-snug mb-1">
                        {item.title}
                      </p>
                      <p className="text-sm text-text-body leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <p className="text-sm text-text-body leading-relaxed mt-8 pt-8 border-t border-cream-dark">
                Would you rather just ask a question first? Call or text Pastor
                Fincham at{" "}
                <a
                  href="tel:+15407182334"
                  className="text-brown-light font-semibold hover:text-brown transition-colors"
                >
                  (540) 718-2334
                </a>
                , or use the chat bubble in the corner — it goes straight to his
                phone.
              </p>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
