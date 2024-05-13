import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";

function Services() {
  const [services, setServices] = useState([]);
  useEffect(() => {}, []);

  useEffect(() => {
    appwriteService.getServices().then((service) => {
      if (service) {
        setServices(service.documents);
      }
    });
  }, []);

  return (
    <div className="services">
      <h2 className="text-5xl font-bold text-center text-cyan-600 mb-20 pt-10">
        Our Services
      </h2>
      <section className="services-section container">
        {services.map((service) => (
          <div
            key={service.name}
            className="service-card relative"
            style={{
              backgroundImage: `url(${appwriteService.getFilePreview(
                service.image
              )})`,
            }}>
            <div className="absolute inset-0 bg-opacity-20 bg-gray-900 blur-lg p-10" />
            <div className="relative z-10">
              <h3 className="text-red-600">{service.name}</h3>
              <p className="text-sky-50 font-semibold">{service.description}</p>
              <button
                className="services-button mt-4"
                onClick={() => window.open(service.url, "_blank")}>
                Inquire Now
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Services;
