import React from 'react'
import Image from './Image';
import AboutUs from './AboutUs';
import AboutCard from './AboutCard';
import CounterSection from '../Components/CounterSection';
import FAQSection from './FAQSection';

function About() {
  return (
    <>
      <Image />
      <AboutUs />
      <AboutCard />
      <FAQSection />
      <div className='mb-20'>
        <CounterSection />
      </div>
    </>
  )
}

export default About