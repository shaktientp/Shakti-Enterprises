import React, { useEffect, useRef, useState, useCallback } from "react";
import appwriteService, { Service } from "../appwrite/config";
import { useNavigate } from "react-router-dom";
import "./Pages.css";
import Services from "./Services";
import Testimonials from "../components/Testimonials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [position, setPosition] = useState(0);
  const [products, setProducts] = useState([]);
  const sliderRef = useRef(null);

  const navigate = useNavigate();

  const itemWidth = 500;

  const visibleItems = useCallback(() => {
    return Math.floor(sliderRef.current?.offsetWidth / itemWidth);
  }, [itemWidth]);

  const hiddenItems = useCallback(() => {
    return products.length - visibleItems();
  }, [products.length, visibleItems]);

  const handlePrevClick = () => {
    if (position > 0) {
      setPosition(position - 1);
    }
  };

  const handleNextClick = () => {
    if (position < hiddenItems()) {
      setPosition(position + 1);
    }
  };

  useEffect(() => {
    async function fetchData() {
      const productRes = await appwriteService.getProducts();
      if (productRes) {
        setProducts(productRes.documents);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="home">
      <section className="section-hero ">
        <div className="hero container">
          <div className="hero-text-box">
            <h1 className="heading-primary">
              Shakti Enterprises: Affordable, High-Quality Construction
              Materials
            </h1>
            <p className="hero-description">
              At Shakti Enterprises, we're your go-to for all construction
              needs, offering a full range of top-quality materials like cement,
              bricks, gitti, and baalu at competitive prices. Choose us for
              budget-friendly, reliable solutions and exceptional service. Trust
              Shakti Enterprises for your project needs.
            </p>
            <div className="hero-buttons">
              <button
                className="hero-btn hero-btn-primary"
                onClick={() =>
                  window.open("https://wa.me/919999671281", "_blank")
                }>
                Inquire Now
              </button>
              <button
                className="hero-btn hero-btn-secondry"
                onClick={() => {
                  navigate("/about");
                }}>
                Learn more &darr;
              </button>
            </div>
          </div>
          <div className="hero-img-box">
            <img src="hero.jpg" alt="building" className="hero-img" />
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section-products bg-gray-100">
        <div className="products container">
          <h2 className="text-5xl font-bold text-center text-cyan-600  mb-20">
            Our Products
          </h2>
          <div className="slider" ref={sliderRef}>
            <div
              className="slide"
              style={{ transform: `translateX(-${position * itemWidth}px)` }}>
              {products.map((product) => (
                <div className="item" key={product.name}>
                  <img
                    src={appwriteService.getFilePreview(product.featuredimage)}
                    alt={`Product ${product.name}`}
                    style={{ width: itemWidth }}
                  />
                  <div className="item-lower pb-5 pt-5">
                    <div className="item-info ml-5">
                      <h3 className="text-2xl font-bold  text-cyan-600">
                        {product.name}
                      </h3>
                      <p>{product.category}</p>
                    </div>
                    <button
                      className="text-xl text-blue-500 ml-5"
                      onClick={() =>
                        window.open(product.productLink, "_blank")
                      }>
                      Inquire Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button className="ctrl-btn pro-prev" onClick={handlePrevClick}>
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="arrow-icon"
                size="3x"
              />
            </button>
            <button className="ctrl-btn pro-next" onClick={handleNextClick}>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="arrow-icon"
                size="3x"
              />
            </button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-services bg-gray-100">
        <Services />
      </section>

      {/* Testimonials */}
      <section className="section-testimonials bg-gray-100">
        <div className="testimonials container">
          <Testimonials />
        </div>
      </section>
    </div>
  );
}

export default Home;
