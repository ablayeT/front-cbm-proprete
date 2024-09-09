import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const CompanyInfoCards: React.FC = () => {
  const companyInfo = [
    {
      icon: <FaMapMarkerAlt className="text-3xl text-blue-500" />,
      title: "Adresse",
      description: "09 rue des colonnes, 75003 Paris, France",
    },
    {
      icon: <FaPhone className="text-3xl text-blue-500" />,
      title: "Téléphone",
      description: "+33 06 44 93 26 27  ",
    },
    {
      icon: <FaEnvelope className="text-3xl text-blue-500" />,
      title: "Email",
      description: "cbmproprete@gmail.com",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto bg-white  rounded-xl p-4 my-12">
      {companyInfo.map((info, index) => (
        <div
          key={index}
          className="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-lg shadow-md"
        >
          <div className="mb-4">{info.icon}</div>
          <h3 className="text-xl font-bold mb-2">{info.title}</h3>
          <p className="text-gray-600 text-center">{info.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CompanyInfoCards;
