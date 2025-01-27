import React, { useEffect, useRef } from 'react';
import Snakehead from "../../assets/images/thumbnails/Snakehead.webp";
import Kafesa from "../../assets/images/thumbnails/Kafesa.webp";
import Nopea from "../../assets/images/thumbnails/Nopea.webp";
import vases from "../../assets/images/thumbnails/fam.webp";
import tapedispenser from "../../assets/images/thumbnails/Tapedispenser.webp";
import Horizon from "../../assets/images/thumbnails/Horizon.webp";
import Retrowrap from "../../assets/images/thumbnails/Retrowrap.webp";
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const products = [

  {
    id: 1,
    name: "Tape Dispenser",
    description: "2025",
    color: "White/Navy",
    imageUrl: tapedispenser
  },
  
  {
    id: 2,
    name: "Nopea",
    description: "2024",
    color: "White/Silver",
    imageUrl: Nopea
  },

  {
    id: 3,
    name: "Snake Head",
    description: "2024",
    color: "White/Silver",
    imageUrl: Snakehead
  },

  {
    id: 4,
    name: "Kafesa",
    description: "2023",
    color: "White/Silver",
    imageUrl: Kafesa
  },
  
  {
    id: 5,
    name: "Horizon",
    description: "2023",
    color: "White/Silver",
    imageUrl: Horizon
  },

  {
    id: 6,
    name: "Retrowrap",
    description: "2023",
    color: "Silver/White",
    imageUrl: Retrowrap
  },
  
  
];

const Work = () => {
  const navigate = useNavigate();
  const productsRef = useRef(null); // Reference for product container

  const handleProjectRoute = (title) => {
    navigate(`/project/${title}`);
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Adds smooth scrolling
    });
  };

  useEffect(() => {
    const options = {
      threshold: 0.1, // Trigger when 10% of the image is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;

          // Show fade-in animation only after the image is fully loaded
          img.onload = () => {
            img.classList.add("fade-in-visible");
          };

          // If the image is already cached (loaded), trigger the animation immediately
          if (img.complete) {
            img.classList.add("fade-in-visible");
          }

          observer.unobserve(img); // Stop observing once it's handled
        }
      });
    }, options);

    const images = productsRef.current.querySelectorAll("img"); // Get all images in the products section
    images.forEach((image) => {
      observer.observe(image);
    });

    return () => {
      observer.disconnect(); // Clean up the observer when the component unmounts
    };
  }, []);

  return (
    <section className="w-full">
  <Helmet>
    <title>Vikas Kumar | ID Portfolio</title>
    <meta name="description" content="Welcome to the portfolio of Vikas Kumar." />
  </Helmet>
  <div ref={productsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
    {products.map((product, index) => (
      <div
        onClick={() => handleProjectRoute(product?.name)}
        key={index}
        className="relative group overflow-hidden aspect-[3.7/4] cursor-pointer"
      >
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full fade-in"
        />

      

        {/* Optional additional overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col text-gray-800 md:pl-24 pl-4 pt-10">
          <h3 className="text-sm text-gray-800 font-bold mb-2 ">{product.name}</h3>
          <p className="text-sm text-gray-800">{product.description}</p>
        </div>
      </div>
    ))}
  </div>
</section>

  );
};

export default Work;
