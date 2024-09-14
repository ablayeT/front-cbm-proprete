import React from "react";
import ServiceList from "../components/services/ServiceList";
import WhyToChooseUs from "../components/services/WhyToChooseUs";

const Services: React.FC = () => {
  return (
    <div className="bg-custom-gradient">
      <ServiceList />
      <WhyToChooseUs />
    </div>
  );
};

export default Services;
