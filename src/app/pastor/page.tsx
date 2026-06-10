import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";

export const metadata: Metadata = {
  title: "Meet Our Pastor",
  description:
    "Get to know Pastor Evan Fincham of New Horizon Baptist Church in Port Byron, NY — his family and the heart behind his ministry.",
  alternates: { canonical: "/pastor" },
  openGraph: {
    title: "Meet Our Pastor | New Horizon Baptist Church",
    description: "Get to know our pastor and the heart behind his ministry.",
    url: "/pastor",
    type: "profile",
  },
};

export default function PastorPage() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHero
          eyebrow="Our Pastor"
          title="Meet Pastor Evan Fincham"
          subtitle="Husband and shepherd of our church family"
        />
        <section className="py-24 bg-warm-white">
          <div className="max-w-3xl mx-auto px-6">
            <div className="float-none sm:float-right sm:ml-8 mb-8 w-full sm:w-72">
              <img
                src="/pastor-family.jpg"
                alt="Pastor Evan Fincham and his wife"
                className="w-full rounded-2xl shadow-lg object-cover"
              />
            </div>
            <p className="text-lg text-text-body leading-relaxed mb-6">
              Pastor Evan Fincham serves New Horizon Baptist Church here in Port Byron, New York.
              He and his wife have a heart to see this community reached with the Gospel of Jesus
              Christ and to see God&rsquo;s people grow in His Word.
            </p>
            <h2 className="font-serif text-2xl font-bold text-text-dark mt-10 mb-4">
              His Heart for Ministry
            </h2>
            <p className="text-text-body leading-relaxed mb-6">
              Pastor Fincham believes in old-fashioned, Book-centered ministry — preaching the
              King James Bible verse by verse, loving people, and faithfully shepherding the church
              family God has entrusted to him. Whether you have walked with the Lord for years or
              are just beginning to ask questions, you are welcome here.
            </p>
            <h2 className="font-serif text-2xl font-bold text-text-dark mt-10 mb-4">
              How to Reach Him
            </h2>
            <p className="text-text-body leading-relaxed">
              Pastor Fincham loves hearing from members and visitors alike. Call the church
              at <a href="tel:+17174195777" className="text-brown-light font-semibold">(717) 419-5777</a>,
              or email <a href="mailto:kingjamesgang@gmail.com" className="text-brown-light font-semibold">kingjamesgang@gmail.com</a>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
