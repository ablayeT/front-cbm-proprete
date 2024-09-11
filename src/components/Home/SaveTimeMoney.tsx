import React from "react";

const SaveTimeMoney: React.FC = () => {
  return (
    <div className="bg-customBlue p-8 rounded-lg shadow-lg flex m-8 flex-col lg:flex-row lg:items-center lg:justify-between lg:h-[400px] space-y-4 lg:space-y-0 lg:space-x-8">
      {/* Section gauche */}
      <div className="text-white flex flex-col lg:flex-row lg:items-center">
        <div className="text-2xl lg:text-4xl font-bold mb-4 lg:mb-0">
          Économisez du temps. Économisez de l'argent. Économisez-vous aussi !
        </div>
        <p className="text-base lg:text-lg">
          La vie est trop courte pour nettoyer votre propre maison.
        </p>
      </div>

      {/* Bouton à droite */}
      <div className="flex-shrink-0">
        <a
          href="/get-quote"
          className="bg-white text-black py-2 px-6 rounded-lg hover:bg-customGreen hover:text-white transition-colors duration-300"
        >
          Devis gratuit
        </a>
      </div>
    </div>
  );
};

export default SaveTimeMoney;
