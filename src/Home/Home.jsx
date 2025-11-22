import React from "react";
import HeroSlider from "../Components/HeroSlider.jsx";
import Choose from "../Components/Choose.jsx";
import ChooseUsCard from "../Components/ChooseUsCard.jsx";
import About from "../Components/About.jsx";
import CounterSection from "../Components/CounterSection.jsx";
import Services from "../Components/Services.jsx";

function LandingPage() {
  return (
    <>
      <HeroSlider />
      <Choose />
      <ChooseUsCard />
      <About />
      <CounterSection />
      <Services />
    </>
  );
}

export default LandingPage;
