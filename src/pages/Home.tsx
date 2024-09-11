import React from "react";
import Banner from "../components/Home/Banner";
import CleaningWithConscience from "../components/Home/CleaningWithConscience";
import HomeService from "../components/Home/HomeService";
import HowItWorks from "../components/Home/HowItWorks";
import SaveTimeMoney from "../components/Home/SaveTimeMoney";
import WhyChooseUs from "../components/Home/WhyChooseUs";

const Home: React.FC = () => {
  return (
    <div>
      <Banner />
      <HomeService />
      <WhyChooseUs />
      <HowItWorks />
      <CleaningWithConscience />
      <SaveTimeMoney />
      {/* <h1>Bienvenue chez Nom de votre entreprise de nettoyage</h1>
      <p>
        Nous offrons des services de nettoyage professionnels pour tous vos
        besoins.
      </p> */}
    </div>
  );
};

export default Home;
