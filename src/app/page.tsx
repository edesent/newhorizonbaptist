import Navbar from "@/components/Navbar";
import PreachingHero from "@/components/PreachingHero";
import WatchLive from "@/components/WatchLive";
import WelcomePastor from "@/components/WelcomePastor";
import ScriptureBanner from "@/components/ScriptureBanner";
import ServiceTimes from "@/components/ServiceTimes";
import FirstTimeVisitor from "@/components/FirstTimeVisitor";
import AboutMission from "@/components/AboutMission";
import WhatWeBelieve from "@/components/WhatWeBelieve";
import Testimonies from "@/components/Testimonies";
import LatestSermon from "@/components/LatestSermon";
import UpcomingEvents from "@/components/UpcomingEvents";
import MinistriesPreview from "@/components/MinistriesPreview";
import PlanOfSalvation from "@/components/PlanOfSalvation";
import Missionaries from "@/components/Missionaries";
import Give from "@/components/Give";
import PhotoGallery from "@/components/PhotoGallery";
import MapAddress from "@/components/MapAddress";
import PrayerRequest from "@/components/PrayerRequest";
import ChatPastor from "@/components/ChatPastor";
import MobileFriendly from "@/components/MobileFriendly";
import EditWithAI from "@/components/EditWithAI";
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
    "A King James Bible Independent Baptist church in Port Byron, NY. Sunday School 10:00 AM, Morning Worship 11:00 AM, evening service 6:00 PM, Wednesday Bible study 7:00 PM.",
  telephone: "+1-717-419-5777",
  email: "kingjamesgang@gmail.com",
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
      closes: "19:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Wednesday",
      opens: "19:00",
      closes: "20:30",
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
        <WatchLive />
        <WelcomePastor />
        <ScriptureBanner />
        <ServiceTimes />
        <FirstTimeVisitor />
        <AboutMission />
        <WhatWeBelieve />
        <Testimonies />
        <LatestSermon />
        <UpcomingEvents />
        <MinistriesPreview />
        <PlanOfSalvation />
        <Missionaries />
        <Give />
        <PhotoGallery />
        <MapAddress />
        <PrayerRequest />
        <ChatPastor />
        <MobileFriendly />
        <EditWithAI />
      </main>
      <Footer />
    </>
  );
}
