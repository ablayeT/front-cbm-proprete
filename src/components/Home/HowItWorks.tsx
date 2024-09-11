import React from "react";
import { FaRegLightbulb, FaCogs, FaCheckCircle } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <section className="bg-custom-gradient py-16">
      {/* Bloc du haut */}
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Comment ça marche
        </h2>
        <h3 className="text-xl font-semibold text-customGreen mb-2">
          Simple et efficace
        </h3>
        <p className="text-lg text-gray-600">
          Voici comment notre processus de travail se déroule, de l'initiation à
          la finalisation.
        </p>
      </div>

      {/* Bloc des cartes */}
      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-6">
        {/* Carte 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-white p-6 rounded-full shadow-lg mb-4 w-24 h-24 flex items-center justify-center">
            <FaRegLightbulb className="text-4xl text-blue-500" />
          </div>
          <h4 className="text-xl font-semibold text-gray-800">Étape 1</h4>
          <p className="text-gray-600">Nous analysons vos besoins.</p>
        </div>

        {/* Flèche */}
        <div className="hidden lg:block lg:text-2xl text-gray-400">➡️</div>

        {/* Carte 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-white p-6 rounded-full shadow-lg mb-4 w-24 h-24 flex items-center justify-center">
            <FaCogs className="text-4xl text-green-500" />
          </div>
          <h4 className="text-xl font-semibold text-gray-800">Étape 2</h4>
          <p className="text-gray-600">
            Nous mettons en œuvre les solutions adaptées.
          </p>
        </div>

        {/* Flèche */}
        <div className="hidden lg:block lg:text-2xl text-gray-400">➡️</div>

        {/* Carte 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-white p-6 rounded-full shadow-lg mb-4 w-24 h-24 flex items-center justify-center">
            <FaCheckCircle className="text-4xl text-red-500" />
          </div>
          <h4 className="text-xl font-semibold text-gray-800">Étape 3</h4>
          <p className="text-gray-600">Nous validons la réussite du projet.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
