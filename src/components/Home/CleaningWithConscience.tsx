import React, { useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import cleaningCon from "../assets/images/image-conscienc.jpeg";
import AOS from "aos"; // Importer AOS
import "aos/dist/aos.css"; // Importer le CSS d'AOS

const CleaningWithConscience: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation en millisecondes
      once: true, // Activer l'animation seulement lors du premier défilement
    });
  }, []);

  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-between py-16 bg-custom-gradient"
      data-aos="fade-up" // Appliquer l'animation fade-up
    >
      {/* Bloc de gauche */}
      <div
        className="relative flex justify-center items-center lg:w-1/2 mb-10 lg:mb-0"
        data-aos="fade-right" // Animation spécifique pour ce bloc
      >
        <div className="w-80 h-80 bg-custom-gradient rounded-full flex justify-center items-center overflow-hidden">
          <div className="w-full h-full relative ">
            <div className="absolute top-0 left-0 w-full h-full bg-custom-gradient clip-path-custom"></div>
            <img
              src={cleaningCon}
              alt="Person"
              className="absolute w-full h-full  "
            />
          </div>
        </div>
      </div>

      {/* Bloc de droite */}
      <div
        className="lg:w-1/2 flex flex-col px-6"
        data-aos="fade-left" // Animation pour le bloc de droite
      >
        <h3 className="text-xl text-customGreen mb-6">
          Votre partenaire pour un environnement sain
        </h3>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Nettoyage en Conscience
        </h2>
        <p className="text-gray-500 mb-10">
          Nous croyons en un nettoyage responsable qui prend en compte la santé
          de nos clients et l'environnement.
        </p>

        {/* Ligne verticale */}
        <div className="border-l-2 border-gray-300 pl-6">
          {[
            "Visites ponctuelles, hebdomadaires ou bimensuelles",
            "Réservez, gérez et payez en ligne",
            "Gardez le même nettoyeur à chaque visite",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center mb-6"
              data-aos="zoom-in" // Animation pour chaque item
            >
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg mr-4">
                <FaCheck className="text-customGreen" />
              </div>
              <h4 className="text-lg text-gray-700">{item}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CleaningWithConscience;
