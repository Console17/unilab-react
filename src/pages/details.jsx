import Header from "../components/Header";
import DetailsDogs from "../components/details/details-dogs";
import DetailsCustomers from "../components/details/details-customers";
import DetailsMoreDogs from "../components/details/details-more-dogs";
import Footer from "../components/Footer";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import dogsData from "../../public/json/dogs.json";

const details = () => {
  const location = useLocation();
  const { dog } = location.state || {};

  const [randomDogs, setRandomDogs] = useState([]);
  useEffect(() => {
    const getRandomDogs = () => {
      const shuffledDogs = [...dogsData].sort(() => 0.5 - Math.random());
      return shuffledDogs.slice(0, 4);
    };

    setRandomDogs(getRandomDogs());
  }, []); //

  return (
    <>
      <div className="details-header">
        <Header />
      </div>
      <DetailsDogs dog={dog} />
      <DetailsCustomers />
      <DetailsMoreDogs dogs={randomDogs} />
      <Footer />
    </>
  );
};

export default details;
