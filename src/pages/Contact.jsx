import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const address =
    "550C, Ganga Nagar, Ramjanki Nagar, Gorakhpur, Uttar Pradesh 273004, India";
  const mapLink = "https://goo.gl/maps/gLYbs4Z9WZ4yQxCW6";
  const whatsappLink = "https://wa.me/+919999671281";

  return (
    <div className="bg-gray-100 flex flex-col items-center">
      <div className="bg-white p-16 rounded-lg shadow-2xl max-w-3xl mt-20">
        <h1 className="text-5xl font-bold">Contact Us</h1>
        <div className="mt-8">
          <div className="text-gray-800 text-2xl">
            <p className="font-bold text-3xl mb-2">Phone:</p>
            <p>9999671281</p>
          </div>
          <div className="mt-8 text-gray-800 text-2xl">
            <p className="font-bold text-3xl mb-2">Email:</p>
            <p>info@example.com</p>
          </div>
          <div className="mt-8 text-gray-800 text-2xl">
            <p className="font-bold text-3xl mb-2">Address:</p>
            <p>
              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline">
                {address}
              </a>
            </p>
          </div>
          <div className="mt-8 text-gray-800 text-2xl">
            <p className="font-bold text-3xl mb-2">WhatsApp:</p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-800">
              <FontAwesomeIcon icon={faWhatsapp} size="2x" /> Contact us on
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
