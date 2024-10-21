import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import ProductsCards from "../landing/producs-cards";

const categoryDogs = ({ dogs }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Popular");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleCardClick = (dog) => {
    navigate("/details", { state: { dog } });
  };
  return (
    <>
      <section className="category-dogs-section">
        <div className="category-dogs-info">
          <div className="dogs-amount">
            <h2>Small Dog</h2>
            <p>52 puppies</p>
          </div>
          <div className="dogs-dropdown">
            <button className="dropdown-button" onClick={toggleDropdown}>
              Sort by: {selectedOption} <img src="/arrow-icon.svg" alt="" />
            </button>
            {isOpen && (
              <ul className="dropdown-menu">
                <li onClick={() => selectOption("Popular")}>Popular</li>
                <li onClick={() => selectOption("Newest")}>Newest</li>
                <li onClick={() => selectOption("Oldest")}>Oldest</li>
              </ul>
            )}
          </div>
        </div>
        <div className="category-products-wrapper">
          {dogs.map((dog, index) => (
            <ProductsCards
              key={index}
              img={dog.img}
              name={dog.name}
              gene={dog.gene}
              age={dog.age}
              price={dog.price}
              free={dog.free}
              onClick={() => handleCardClick(dog)}
            />
          ))}
        </div>
        <div className="category-pagination"></div>
      </section>
    </>
  );
};

export default categoryDogs;
