import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import services from "../../data/servicesList.data";

const ServiceList: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="py-16 px-4   ">
      <div className="container  mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {services.slice(0, 6).map(
          (
            service // Afficher seulement 6 cartes
          ) => (
            <div
              key={service.id}
              className="relative flex  justify-center flex-col group overflow-hidden rounded-[20px] shadow-lg transition-transform transform hover:scale-105 bg-custom-gradient"
              data-aos="fade-up"
            >
              <div className="w-full h-48">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform md:group-hover:scale-110"
                />
              </div>
              <p className="text-center bg-customgreen p-4 text-xl font-semibold ">
                {service.title}
              </p>
              <div className="absolute inset-0 bg-customGreen p-2 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-center mb-4 px-4">{service.description}</p>
                <a
                  href="#"
                  className="bg-white text-customGreen py-2 px-6 rounded-full transition-colors duration-300 hover:bg-customBlue hover:text-white"
                >
                  En savoir plus
                </a>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ServiceList;
