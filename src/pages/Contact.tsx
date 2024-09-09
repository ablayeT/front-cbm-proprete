import React, { useState, useEffect } from "react";
import axios from "axios";
import { contactFormFields } from "../data/formFields";
import CompanyInfoCards from "../components/CompanyInfoCards";
import CompanyMap from "../components/CompanyMap";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.first_name ||
      !formData.last_name ||
      !formData.phone_number ||
      !formData.email ||
      !formData.message
    ) {
      setResponseMessage({
        message: "Tous les champs sont requis.",
        type: "error",
      });
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/contact",
        formData
      );
      setResponseMessage({ message: response.data.message, type: "success" });
    } catch (error) {
      setResponseMessage({
        message: "Une erreur est survenue lors de l'envoi du formulaire.",
        type: "error",
      });
      console.error(error);
    }
  };

  useEffect(() => {
    if (responseMessage) {
      const timer = setTimeout(() => {
        setResponseMessage(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [responseMessage]);

  return (
    <div>
      <div className="relative sm:mb-0 md:mb-48 lg:mb-48">
        {/* Bloc en haut de la page */}
        <div className="bg-blue-500 text-white py-8 flex justify-center items-center h-32 relative">
          <h1 className="text-4xl font-bold  z-10">Contact</h1>
        </div>

        {/* CompanyInfoCards au-dessus du formulaire pour les écrans md et plus */}
        <div
          className="absolute w-full flex mb-40 justify-center hidden md:flex"
          style={{ top: "35%" }}
        >
          <div className="w-4/5 lg:w-3/5">
            <CompanyInfoCards />
          </div>
        </div>
      </div>

      {/* Formulaire */}
      <div className="max-w-2xl mx-auto p-4 sm:mt-2  lg:mt-48">
        {responseMessage && (
          <div
            className={`fixed top-16 left-1/2 transform -translate-x-1/2 p-4 w-80 text-center rounded-md ${
              responseMessage.type === "error"
                ? "bg-red-500 text-white"
                : "bg-green-500 text-white"
            }`}
          >
            {responseMessage.message}
          </div>
        )}
        <h1 className="text-2xl font-bold mb-4 text-center">Contactez-nous</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {contactFormFields.map((field) => {
            if (field.type === "textarea") {
              return (
                <div key={field.name} className="relative">
                  <textarea
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              );
            }

            return (
              <div key={field.name} className="relative">
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name as keyof typeof formData]}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            );
          })}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 sm:w-50 focus:ring-blue-500"
          >
            Envoyer
          </button>
        </form>
      </div>

      {/* CompanyInfoCards en dessous du formulaire pour les petits écrans */}
      <div className="md:hidden">
        <CompanyInfoCards />
      </div>
      <div>
        <CompanyMap />
      </div>
    </div>
  );
};

export default Contact;
