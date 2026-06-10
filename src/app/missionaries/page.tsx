import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";

export const metadata: Metadata = {
  title: "Missionaries We Support",
  description:
    "Meet the missionary families and ministries our church family supports prayerfully and financially around the world.",
  alternates: { canonical: "/missionaries" },
  openGraph: {
    title: "Missionaries | New Horizon Baptist Church",
    description: "Families and ministries we support around the world.",
    url: "/missionaries",
    type: "website",
  },
};

const missionaries = [
  { family: "The [Last Name] Family", field: "Philippines", focus: "Church planting & national pastor training" },
  { family: "The [Last Name] Family", field: "Papua New Guinea", focus: "Bible translation in an unreached people group" },
  { family: "The [Last Name] Family", field: "Mexico", focus: "Children's ministry & Bible institute" },
  { family: "The [Last Name] Family", field: "Eastern Europe", focus: "Discipleship & church strengthening" },
  { family: "The [Last Name] Family", field: "Brazil", focus: "Inner-city church planting" },
  { family: "The [Last Name] Family", field: "Native American Reservations (USA)", focus: "Outreach & discipleship" },
];

export default function MissionariesPage() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHero
          eyebrow="Around the World"
          title="Missionaries We Support"
          subtitle="&ldquo;Go ye therefore, and teach all nations.&rdquo; — Matthew 28:19"
        />
        <section className="py-24 bg-warm-white">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-5">
            {missionaries.map((m, i) => (
              <article
                key={`${m.family}-${i}`}
                className="p-7 bg-cream rounded-2xl border border-cream-dark hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3 mb-3">
                  <svg className="w-6 h-6 text-gold-dark flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
                  </svg>
                  <div>
                    <h2 className="font-serif text-lg font-semibold text-text-dark leading-tight">
                      {m.family}
                    </h2>
                    <p className="text-sm font-semibold text-brown-light">{m.field}</p>
                  </div>
                </div>
                <p className="text-sm text-text-body leading-relaxed">{m.focus}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
