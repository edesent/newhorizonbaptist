import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";

export const metadata: Metadata = {
  title: "Giving",
  description:
    "Give your tithes and offerings to New Horizon Baptist Church — in person on Sunday, or by mail.",
  alternates: { canonical: "/give" },
  openGraph: {
    title: "Giving | New Horizon Baptist Church",
    description: "Support the work of the Lord through your tithes and offerings.",
    url: "/give",
    type: "website",
  },
};

export default function GivePage() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHero
          eyebrow="Giving"
          title="Support the Lord's Work"
          subtitle="&ldquo;Every man according as he purposeth in his heart, so let him give.&rdquo; — 2 Cor 9:7"
        />
        <section className="py-24 bg-warm-white">
          <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-6">
            <div className="p-8 bg-cream rounded-2xl border border-cream-dark">
              <h2 className="font-serif text-2xl font-bold text-text-dark mb-3">Give in Person</h2>
              <p className="text-text-body leading-relaxed mb-4">
                Simply drop your tithe or offering in the plate during the morning
                service — no envelope or account needed.
              </p>
              <p className="text-sm text-text-light">
                Have a question about giving, or want to give toward a specific
                need? Call or text Pastor Fincham at{" "}
                <a
                  href="tel:+15407182334"
                  className="text-brown-light font-semibold hover:text-brown transition-colors"
                >
                  (540) 718-2334
                </a>
                .
              </p>
            </div>
            <div id="mail" className="p-8 bg-cream rounded-2xl border border-cream-dark">
              <h2 className="font-serif text-2xl font-bold text-text-dark mb-3">Give by Mail</h2>
              <p className="text-text-body leading-relaxed mb-4">
                Prefer the old-fashioned way? Mail your check to:
              </p>
              <address className="not-italic font-serif text-text-dark leading-relaxed mb-4">
                New Horizon Baptist Church<br />
                Attn: Treasurer<br />
                8505 S Street Rd<br />
                Port Byron, NY 13140
              </address>
              <p className="text-sm text-text-light">
                Make checks payable to <strong>New Horizon Baptist Church</strong>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
