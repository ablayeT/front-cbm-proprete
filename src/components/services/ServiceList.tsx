import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import services from "../../data/servicesList.data";

const ServiceList: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.slice(0, 6).map((service) => (
          <div
            key={service.id}
            className="relative flex flex-col justify-center group overflow-hidden rounded-[20px] shadow-lg transition-transform transform hover:scale-105 bg-customBlue"
            data-aos="fade-up"
          >
            <div className="w-full h-full">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
                onError={(e) => console.error("Image failed to load", e)}
                onLoad={() => console.log("Image loaded successfully")}
                style={{ margin: "0", padding: "0" }}
              />
            </div>
            <p className="text-center text-white bg-customgreen p-4 text-xl font-semibold">
              {service.title}
            </p>
            <div className="absolute inset-0 bg-customGreen flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
