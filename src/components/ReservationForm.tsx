import React, { useState } from "react";
import axios from "axios";

const Reservation: React.FC = () => {
  const [formData, setFormData] = useState({
    clientName: "",
    address: "",
    email: "",
    phoneNumber: "",
    service: "",
    reservationDate: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/reservations/", formData);
      alert("Reservation successful");
    } catch (err) {
      alert("Error making reservation");
    }
  };

  return (
    <div>
      <h1>Make a Reservation</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="clientName"
          placeholder="Client Name"
          value={formData.clientName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <select name="service" value={formData.service} onChange={handleChange}>
          <option value="">Select Service</option>
          <option value="Nettoyage de maison">Nettoyage de maison</option>
          <option value="Nettoyage de bureau">Nettoyage de bureau</option>
          <option value="Nettoyage fin de chantier">
            Nettoyage fin de chantier
          </option>
        </select>
        <input
          type="date"
          name="reservationDate"
          value={formData.reservationDate}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <button type="submit">Submit Reservation</button>
      </form>
    </div>
  );
};

export default Reservation;
