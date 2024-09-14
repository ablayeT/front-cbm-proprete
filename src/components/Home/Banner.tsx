import React, { useEffect } from "react";
import bannerImage from "../assets/images/cbmPropretéBureau.jpeg";
import AOS from "aos"; // Importer AOS
import "aos/dist/aos.css"; // Importer le CSS d'AOS

const Banner: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation
      once: true, // Ne pas répéter l'animation à chaque défilement
    });
  }, []);

  return (
    <div className="py-16 bg-custom-gradient">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center p-4 justify-between">
        {/* Bloc de gauche */}
        <div
          className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0"
          data-aos="fade-right" // Animation AOS pour ce bloc
        >
          <h1 className="text-4xl lg:text-5xl font-bold font-inter text-gray-800 mb-4">
            <span>Une équipe professionnelle</span>
            <br />
            <span className="text-customGreen">des meilleurs nettoyeurs</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Nous vous offrons des services de qualité pour répondre à tous vos
            besoins. Contactez-nous pour plus d'informations.
          </p>
          <div className="flex items-center space-x-4 justify-left">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-customBlue transition duration-300"
              data-aos="zoom-in-up" // Animation pour le bouton de contact
            >
              Nous Contacter
            </a>
            <a
              href="https://www.youtube.com/watch?v=VIDEO_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-600 text-white hover:bg-customGreen transition duration-300"
              data-aos="zoom-in-up" // Animation pour le bouton vidéo
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 8l10 4-10 4V8z"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Bloc de droite avec l'image */}
        <div
          className="lg:w-1/2 mt-4 lg:mt-0 mb-10"
          data-aos="fade-left" // Animation AOS pour l'image
        >
          <img
            src={bannerImage}
            alt="BannerImg"
            className="w-full lg:h-120 rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
