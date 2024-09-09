import React from "react";
import bannerImage from "../assets/images/cbmPropretéBureau.jpeg";

const Banner: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center p-4 justify-between">
        {/* Bloc de gauche */}
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-4xl lg:text-5xl font-bold font-inter text-gray-800 mb-4">
            <span>Une équipe professionnelle</span>
            <br />
            <span className="text-customGreen">des meilleurs nettoyeurs</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Nous vous offrons des services de qualité pour répondre à tous vos
            besoins. Contactez-nous pour plus d'informations.
          </p>
          <div className="flex items-center  space-x-4 justify-left ">
            {/* Contact Button */}
            <a
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-customBlue transition duration-300"
            >
              Nous Contacter
            </a>
            {/* Video Button */}
            <a
              href="https://www.youtube.com/watch?v=VIDEO_ID" // Remplacez VIDEO_ID par l'identifiant de votre vidéo YouTube
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-600 text-white hover:bg-customGreen transition duration-300"
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
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <img
            src={bannerImage}
            alt="BannerImg"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
