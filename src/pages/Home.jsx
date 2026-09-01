import HeroSlider from '../components/sections/HeroSlider/HeroSlider.jsx'
import BusinessSetup from '../components/sections/BusinessSetup/BusinessSetup.jsx'
import OurStory from '../components/sections/OurStory/OurStory.jsx'
import WhatSetsUsApart from '../components/sections/WhatSetsUsApart/WhatSetsUsApart.jsx'
import WhoWeWorkWith from '../components/sections/WhoWeWorkWith/WhoWeWorkWith.jsx'
import Testimonials from '../components/sections/Testimonials/Testimonials.jsx'
import OurServices from '../components/sections/OurServices/OurServices.jsx'
import Commitment from '../components/sections/Commitment/Commitment.jsx'
import Founder from '../components/sections/Founder/Founder.jsx'
import CoreValues from '../components/sections/CoreValues/CoreValues.jsx'
import CtaBanner from '../components/sections/CtaBanner/CtaBanner.jsx'
import CallbackForm from '../components/sections/CallbackForm/CallbackForm.jsx'
import GetInTouch from '../components/sections/GetInTouch/GetInTouch.jsx'

/** Vision Business Setup — homepage sections, in order. */
export default function Home() {
  return (
    <>
      <HeroSlider />       {/* 1  hero: "Every Business starts with Vision" */}
      <BusinessSetup />    {/* 2  Mainland / Free Zone / Offshore           */}
      <OurStory />         {/* 3  Why Vision / Our Story (est. 2015)        */}
      <WhatSetsUsApart />  {/* 4  four differentiators                      */}
      <WhoWeWorkWith />    {/* 5  five industries                          */}
      <Testimonials />     {/* 5b Trusted by some Biggest Names            */}
      <OurServices />      {/* 6  Licence / Visa / Finance / Other          */}
      <Commitment />       {/* 7  Our Approach / Commitment                 */}
      <Founder />          {/* 8  Viekram Sadwani                          */}
      <CoreValues />       {/* 9  seven core values                        */}
      <CtaBanner />        {/* 10 strong CTA                               */}
      <CallbackForm />     {/* 11 Request a Callback form                  */}
      <GetInTouch />       {/* 12 Get in Touch — map + contact panel       */}
    </>
  )
}
