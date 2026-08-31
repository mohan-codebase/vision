import CallbackCounters from '../components/sections/CallbackCounters/CallbackCounters.jsx'
import Cases from '../components/sections/Cases/Cases.jsx'
import ClientLogos from '../components/sections/ClientLogos/ClientLogos.jsx'
import ContactBar from '../components/sections/ContactBar/ContactBar.jsx'
import Experience from '../components/sections/Experience/Experience.jsx'
import HeroSlider from '../components/sections/HeroSlider/HeroSlider.jsx'
import Industries from '../components/sections/Industries/Industries.jsx'
import LatestNews from '../components/sections/LatestNews/LatestNews.jsx'
import MapEmbed from '../components/sections/MapEmbed/MapEmbed.jsx'
import QuoteBanner from '../components/sections/QuoteBanner/QuoteBanner.jsx'
import ServicesIntro from '../components/sections/ServicesIntro/ServicesIntro.jsx'
import Testimonials from '../components/sections/Testimonials/Testimonials.jsx'

/** Homepage — sections in the exact order of the reference page. */
export default function Home() {
  return (
    <>
      <HeroSlider />        {/* 1  hero carousel, dark, wide          */}
      <ServicesIntro />     {/* 2  three intro columns                */}
      <Industries />        {/* 3  Consultancy Industries             */}
      <Experience />        {/* 4  30 Years of Experience             */}
      <Testimonials />      {/* 5  Trusted by some Biggest Names      */}
      <ClientLogos />       {/* 6  client logo carousel               */}
      <CallbackCounters />  {/* 7  Right up There + counters          */}
      <Cases />             {/* 8  Consultancy Cases                  */}
      <QuoteBanner />       {/* 9  Searching for a First-Class...     */}
      <LatestNews />        {/* 10 Latest News                        */}
      <MapEmbed />          {/* 11 Google map                         */}
      <ContactBar />        {/* 12 Get in Touch (12+13 merged)        */}
    </>
  )
}
