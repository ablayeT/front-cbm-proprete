import React, { useEffect } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

const SaveTimeMoney: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation
      once: true, // Animation se déclenche une seule fois
    });
  }, []);

  return (
    <div
      className="bg-customBlue p-8 rounded-3xl shadow-lg flex m-8 flex-col lg:flex-row lg:items-center lg:justify-between lg:h-[250px] space-y-4 lg:space-y-0 lg:space-x-8"
      data-aos="fade-up" // Animation de glissement vers le haut pour l'ensemble du bloc
    >
      {/* Section gauche */}
      <div
        className="text-white flex flex-col lg:flex-col lg:gap-8 lg:items-left"
        data-aos="fade-right" // Animation de glissement vers la droite pour le texte
      >
        <div className="text-2xl lg:text-4xl font-italic mb-4 lg:mb-0">
          Économisez du temps. Économisez de l'argent. <br /> Économisez-vous
          aussi !
        </div>
        <p className="text-base lg:text-lg">
          La vie est trop courte pour nettoyer vous-même votre propre maison.
        </p>
      </div>

      {/* Bouton à droite */}
      <div
        className="flex-shrink-0"
        data-aos="zoom-in" // Animation zoom pour le bouton
      >
        <a
          href="/get-quote"
          className="bg-white text-black py-3 px-8 rounded-3xl hover:bg-customGreen hover:text-white transition-colors duration-300"
        >
          Devis gratuit
        </a>
      </div>
    </div>
  );
};

export default SaveTimeMoney;
