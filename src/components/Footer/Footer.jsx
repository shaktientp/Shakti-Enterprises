import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../Logo";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-2xl">
              &copy; {new Date().getFullYear()} Shakti Enterprises
            </p>
            <p className="text-xl mt-2">
              Designed and developed by{" "}
              <a
                href="https://www.linkedin.com/in/gauravsinghgkp/"
                className="text-blue-400">
                Gaurav Singh
              </a>
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <a href="#" className="text-white mr-4 hover:text-blue-400">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="#" className="text-white mr-4 hover:text-blue-400">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="#" className="text-white mr-4 hover:text-blue-400">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="https://wa.me/919999671281"
              className="text-white hover:text-blue-400">
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-2xl text-center mb-5 font-bold">
            Contact Information
          </p>
          <div className="flex flex-col items-center">
            <p className="text-xl mb-2">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              <span>Phone: </span>
              <a href="tel:9999671281" className="text-blue-400">
                9999671281
              </a>
            </p>
            <p className="text-xl mb-2">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              <span>Email: </span>
              <a href="mailto:info@example.com" className="text-blue-400">
                customercare@shaktientp.com
              </a>
            </p>
            <p className="text-xl mb-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
              <span>Address: </span>
              <a
                href="https://goo.gl/maps/gLYbs4Z9WZ4yQxCW6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400">
                550C, Ganga Nagar, Ramjanki Nagar, Gorakhpur, Uttar Pradesh
                273004, India
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
