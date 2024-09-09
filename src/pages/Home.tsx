import React from "react";
import Banner from "../components/Home/Banner";
import HomeService from "../components/Home/HomeService";
import WhyChooseUs from "../components/Home/WhyChooseUs";

const Home: React.FC = () => {
  return (
    <div>
      <Banner />
      <HomeService />
      <WhyChooseUs />
      <h1>Bienvenue chez Nom de votre entreprise de nettoyage</h1>
      <p>
        Nous offrons des services de nettoyage professionnels pour tous vos
        besoins.
      </p>
    </div>
  );
};

export default Home;
