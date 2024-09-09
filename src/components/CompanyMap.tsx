import React from "react";

function CompanyMap() {
  return (
    <div className="w-full mt-8">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.405688187969!2d2.3369033759525304!3d48.869542299922394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e3b85b96639%3A0x132d4d89c023736c!2sRue%20des%20Colonnes%2C%2075002%20Paris!5e0!3m2!1sfr!2sfr!4v1725841193411!5m2!1sfr!2sfr"
        width="100%" // 100% de la largeur du conteneur
        height="450"
        style={{ border: 0 }}
        allowFullScreen // L'attribut sans valeur pour le boolean
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Company Location"
      ></iframe>
    </div>
  );
}

export default CompanyMap;
