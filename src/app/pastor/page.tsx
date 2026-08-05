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
          subtitle="Husband, shepherd, and preacher of the Book"
        />
        <section className="py-24 bg-warm-white">
          <div className="max-w-3xl mx-auto px-6">
            <div className="float-none sm:float-right sm:ml-8 mb-8 w-full sm:w-64">
              <img
                src="/pastor-evan-kelsea.jpg"
                alt="Pastor Evan Fincham and his wife Kelsea"
                className="w-full rounded-2xl shadow-lg object-cover"
              />
              <p className="text-xs text-text-light text-center mt-3">
                Pastor Evan and Kelsea Fincham
              </p>
            </div>
            <p className="text-lg text-text-body leading-relaxed mb-6">
              Meet our pastor, Evan Fincham. Evan and his wife Kelsea are both originally from
              Virginia, and they came to Port Byron with a heart to see this community reached with
              the Gospel of Jesus Christ and to see God&rsquo;s people grow in His Word.
            </p>
            <h2 className="font-serif text-2xl font-bold text-text-dark mt-10 mb-4">
              Training and Ministry
            </h2>
            <p className="text-text-body leading-relaxed mb-6">
              In 2019, Evan received his Bachelor of Arts in Biblical Studies from Ambassador
              Baptist College in Lattimore, North Carolina. In the years since, he served as
              assistant pastor under his father, Pastor Bruce Fincham, at Heritage Baptist Church
              in Brandy Station, Virginia.
            </p>
            <h2 className="font-serif text-2xl font-bold text-text-dark mt-10 mb-4">
              His Heart for Ministry
            </h2>
            <p className="text-text-body leading-relaxed mb-6">
              Pastor Fincham believes in old-fashioned, Book-centered ministry — preaching the
              King James Bible verse by verse, loving people, and faithfully shepherding the church
              family God has entrusted to him. Both he and Kelsea are excited to be part of the
              Port Byron community and to see what God has in store. Whether you have walked with
              the Lord for years or are just beginning to ask questions, you are welcome here.
            </p>
            <h2 className="font-serif text-2xl font-bold text-text-dark mt-10 mb-4">
              How to Reach Him
            </h2>
            <p className="text-text-body leading-relaxed">
              Pastor Fincham loves hearing from members and visitors alike. Call or text him
              at <a href="tel:+15407182334" className="text-brown-light font-semibold">(540) 718-2334</a>,
              or email <a href="mailto:efincham95@gmail.com" className="text-brown-light font-semibold">efincham95@gmail.com</a>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
