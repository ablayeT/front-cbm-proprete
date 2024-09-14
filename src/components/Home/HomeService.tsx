import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBusinessTime, FaBoxOpen, FaHome, FaBuilding } from "react-icons/fa";

const HomeService: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée des animations
      easing: "ease-in-out", // Type d'animation
      once: true, // N'exécute l'animation qu'une seule fois
    });
  }, []);

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col items-center">
        {/* Titre et sous-titre */}
        <div className="text-center mb-12" data-aos="fade-up">
          <p className="text-xl text-customGreen">Commercial & Résidentiel</p>
          <h2 className="text-3xl font-bold px-0 text-gray-800 mb-2">
            Nos services de nettoyage
          </h2>
        </div>

        {/* Cartes des services */}
        <div className="flex flex-col md:flex-row md:space-x-6">
          {/* Carte 1: Commercial Cleaning */}
          <div
            className="bg-white p-6 justify-center rounded-lg shadow-lg mb-6 md:mb-0 flex h-60 flex-col items-center text-center"
            data-aos="fade-right"
          >
            <FaBusinessTime className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Nettoyage de bureau</h3>
            <button className="bg-blue-500 text-white p-3 rounded-full flex items-center justify-center hover:bg-blue-600 transition duration-300">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14m-7-7l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Carte 2: Move In/Move Out Cleaning */}
          <div
            className="bg-white p-6 justify-center rounded-lg shadow-lg mb-6 md:mb-0 flex flex-col items-center text-center"
            data-aos="fade-up"
          >
            <FaBoxOpen className="text-4xl text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-4">
              Nettoyage d'emménagement/de déménagement
            </h3>
            <button className="bg-green-500 text-white p-3 rounded-full flex items-center justify-center hover:bg-green-600 transition duration-300">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14m-7-7l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Carte 3: Residential Cleaning */}
          <div
            className="bg-white p-6 justify-center rounded-lg shadow-lg mb-6 md:mb-0 flex flex-col items-center text-center"
            data-aos="fade-up"
          >
            <FaHome className="text-4xl text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-4">
              Nettoyage résidentiel
            </h3>
            <button className="bg-yellow-500 text-white p-3 rounded-full flex items-center justify-center hover:bg-yellow-600 transition duration-300">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14m-7-7l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Carte 4: Apartment Cleaning */}
          <div
            className="bg-white p-6 justify-center rounded-lg shadow-lg mb-6 md:mb-0 flex flex-col items-center text-center"
            data-aos="fade-left"
          >
            <FaBuilding className="text-4xl text-red-500 mb-4" />
            <h3 className="text-xl font-semibold mb-4">
              Nettoyage d'appartement
            </h3>
            <button className="bg-red-500 text-white p-3 rounded-full flex items-center justify-center hover:bg-red-600 transition duration-300">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14m-7-7l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeService;
