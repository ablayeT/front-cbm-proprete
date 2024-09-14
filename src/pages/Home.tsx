import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "../components/Home/Banner";
import CleaningWithConscience from "../components/Home/CleaningWithConscience";
import HomeService from "../components/Home/HomeService";
import HowItWorks from "../components/Home/HowItWorks";
import SaveTimeMoney from "../components/Home/SaveTimeMoney";
import WhyChooseUs from "../components/Home/WhyChooseUs";

const Home: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation en millisecondes
      once: true, // L'animation ne se déclenche qu'une fois
    });
  }, []);

  return (
    <div>
      <div data-aos="fade-up">
        <Banner />
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <HomeService />
      </div>
      <div data-aos="fade-up" data-aos-delay="400">
        <WhyChooseUs />
      </div>
      <div data-aos="fade-up" data-aos-delay="600">
        <HowItWorks />
      </div>
      <div data-aos="fade-up" data-aos-delay="800">
        <CleaningWithConscience />
      </div>
      <div data-aos="fade-up" data-aos-delay="1000">
        <SaveTimeMoney />
      </div>
    </div>
  );
};

export default Home;
