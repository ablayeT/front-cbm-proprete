import React, { useState } from "react";
import whyToChooseUs from "../../data/whyToChooseUs.data";
import testImage from "../assets/images/image-conscienc.jpeg"; // Assurez-vous d'utiliser le bon chemin d'image

const WhyToChooseUs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleContent = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center py-16 px-4">
      {/* Image à gauche */}
      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <img
          src={testImage}
          alt="Why Choose Us"
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Bloc à droite */}
      <div className="lg:w-1/2 lg:pl-8">
        <h2 className="text-3xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <h3 className="text-xl font-semibold mb-4">Nos Avantages</h3>
        <p className="mb-8">
          Chez CBM Propreté, nous nous engageons à fournir des services de
          nettoyage de haute qualité avec une attention particulière aux détails
          et à la satisfaction de nos clients. Découvrez ce qui nous distingue.
        </p>

        {/* Boutons interactifs */}
        {whyToChooseUs.map((item, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleContent(index)}
              className="flex items-center w-full text-white bg-customBlue py-2 px-4 rounded-lg focus:outline-none"
            >
              <span className="flex-1 text-left">{item.title}</span>
              <span className="ml-2">{openIndex === index ? "-" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="mt-2 p-4 bg-white rounded-lg shadow-md">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyToChooseUs;
