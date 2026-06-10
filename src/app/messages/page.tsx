import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";

export const metadata: Metadata = {
  title: "Sermons & Messages",
  description:
    "Listen to recent sermons preached at New Horizon Baptist Church. Verse-by-verse exposition from the King James Bible.",
  alternates: { canonical: "/messages" },
  openGraph: {
    title: "Sermons & Messages | New Horizon Baptist Church",
    description: "Verse-by-verse preaching from the King James Bible.",
    url: "/messages",
    type: "website",
  },
};

const sermons = [
  { date: "May 18, 2026", title: "The Sufficiency of Scripture", text: "2 Timothy 3:16–17" },
  { date: "May 11, 2026", title: "Walking in the Spirit", text: "Galatians 5:16–26" },
  { date: "May 04, 2026", title: "The Power of Prayer", text: "James 5:13–18" },
  { date: "Apr 27, 2026", title: "Be Not Conformed", text: "Romans 12:1–2" },
];

export default function MessagesPage() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHero
          eyebrow="Sermons"
          title="Messages From Our Pulpit"
          subtitle="Verse-by-verse preaching from the King James Bible"
        />
        <section className="py-24 bg-warm-white">
          <div className="max-w-4xl mx-auto px-6 space-y-4">
            {sermons.map((s) => (
              <article
                key={s.title}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 bg-cream rounded-2xl border border-cream-dark hover:shadow-md transition-shadow"
              >
                <div>
                  <p className="text-xs font-bold tracking-[0.15em] uppercase text-gold-dark mb-1">
                    {s.date}
                  </p>
                  <h2 className="font-serif text-xl font-semibold text-text-dark mb-1">
                    {s.title}
                  </h2>
                  <p className="text-sm text-text-light">{s.text}</p>
                </div>
                <a
                  href="#"
                  className="self-start sm:self-auto inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase text-brown-light hover:text-brown transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Listen
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
