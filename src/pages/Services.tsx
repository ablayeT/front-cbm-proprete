import React from "react";
// import { useState, useEffect } from 'react';
// import axios from "axios";

// interface Service {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
// }

const Services: React.FC = () => {
  //   const [services, setServices] = useState<Service[]>([]);

  //   useEffect(() => {
  //     axios
  //       .get("/api/services")
  //       .then((response) => setServices(response.data))
  //       .catch((error) => console.error(error));
  //   }, []);

  return (
    <div>
      <h1>Nos Services</h1>
      {/* <ul>
        {services.map((service) => (
          <li key={service._id}>
            <h2>{service.name}</h2>
            <p>{service.description}</p>
            <p>Prix: {service.price} €</p>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Services;
