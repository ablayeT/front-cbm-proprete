import React from "react";
import { FaStar, FaThumbsUp, FaHandshake, FaShieldAlt } from "react-icons/fa";

const WhyChooseUs: React.FC = () => {
  return (
    <section className=" bg-customBlue-gradient py-16">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center lg:justify-between gap-8">
        {/* Bloc de gauche avec les cartes */}
        <div className="lg:w-1/2 flex flex-col space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-6">
          {/* Carte 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <FaStar className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Qualité</h3>
            <p className="text-gray-600">
              Nous garantissons un service de qualité supérieure pour chaque
              nettoyage.
            </p>
          </div>

          {/* Carte 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <FaThumbsUp className="text-4xl text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Satisfaction</h3>
            <p className="text-gray-600">
              Nos clients sont toujours satisfaits de notre service impeccable.
            </p>
          </div>

          {/* Carte 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <FaHandshake className="text-4xl text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Confiance</h3>
            <p className="text-gray-600">
              Nous établissons des relations de confiance avec nos clients à
              chaque intervention.
            </p>
          </div>

          {/* Carte 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <FaShieldAlt className="text-4xl text-red-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Sécurité</h3>
            <p className="text-gray-600">
              Nos procédures garantissent une sécurité maximale pour vous et vos
              biens.
            </p>
          </div>
        </div>

        {/* Bloc de droite avec le titre, sous-titre, description et bouton */}
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left mt-8 lg:mt-0">
          <h3 className="text-xl font-semibold text-customGreen mb-4">
            Nos atouts
          </h3>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Pourquoi nous choisir ?
          </h2>

          <p className="text-lg text-gray-600 mb-6">
            Découvrez pourquoi nous sommes le meilleur choix pour vos besoins de
            nettoyage et comment nous nous démarquons dans le secteur.
          </p>
          <a
            href="/get-quote"
            className="bg-white text-blue-500 border border-blue-500 px-6 py-3 rounded-full hover:bg-blue-50 transition duration-300"
          >
            Devis gratuit
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
