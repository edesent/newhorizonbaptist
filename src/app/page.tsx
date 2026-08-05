import Navbar from "@/components/Navbar";
import PreachingHero from "@/components/PreachingHero";
import WelcomePastor from "@/components/WelcomePastor";
import ScriptureBanner from "@/components/ScriptureBanner";
import ServiceTimes from "@/components/ServiceTimes";
import FirstTimeVisitor from "@/components/FirstTimeVisitor";
import AboutMission from "@/components/AboutMission";
import WhatWeBelieve from "@/components/WhatWeBelieve";
import MinistriesPreview from "@/components/MinistriesPreview";
import PlanOfSalvation from "@/components/PlanOfSalvation";
import Give from "@/components/Give";
import MapAddress from "@/components/MapAddress";
import Footer from "@/components/Footer";

const churchSchema = {
  "@context": "https://schema.org",
  "@type": "Church",
  name: "New Horizon Baptist Church",
  alternateName: "New Horizon Baptist of Port Byron NY",
  url: "https://newhorizonkjb.com",
  logo: "https://newhorizonkjb.com/logo.png",
  image: "https://newhorizonkjb.com/og-image.jpg",
  description:
    "A King James Bible Independent Baptist church in Port Byron, NY. Sunday School 10:00 AM, Morning Worship 11:00 AM, and Thursday Bible study 6:30 PM.",
  telephone: "+1-540-718-2334",
  email: "efincham95@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "8505 S Street Rd",
    addressLocality: "Port Byron",
    addressRegion: "NY",
    postalCode: "13140",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "12:15",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Thursday",
      opens: "18:30",
      closes: "19:30",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(churchSchema) }}
      />
      <Navbar />
      <main>
        <PreachingHero />
        <WelcomePastor />
        <ScriptureBanner />
        <ServiceTimes />
        <FirstTimeVisitor />
        <AboutMission />
        <WhatWeBelieve />
        <MinistriesPreview />
        <PlanOfSalvation />
        <Give />
        <MapAddress />
      </main>
      <Footer />
    </>
  );
}
