import Header from "../components/Header";
import CategoryBanner from "../components/category/category-banner";
import CategoryFilter from "../components/category/category-filter";
import CategoryDogs from "../components/category/category-dogs";
import Pagination from "../components/category/pagination";
import Footer from "../components/Footer";
import dogsData from "../../public/json/dogs.json";
import { useState } from "react";

const category = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage] = useState(15);

  const [filters, setFilters] = useState({
    gender: "",
    color: "",
    breed: "",
    minPrice: 0,
    maxPrice: Infinity,
  });

  const handleFilterChange = (newFilters) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
  };

  const filteredDogs = dogsData.filter((dog) => {
    const price = parseInt(dog.price.replace(/\D/g, ""));
    const isGenderMatch = !filters.gender || dog.gene === filters.gender;
    const isColorMatch = !filters.color || dog.color === filters.color;
    const isBreedMatch = !filters.breed || dog.breed === filters.breed;
    const isPriceMatch = price >= filters.minPrice && price <= filters.maxPrice;

    return isGenderMatch && isColorMatch && isBreedMatch && isPriceMatch;
  });

  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = filteredDogs.slice(indexOfFirstDog, indexOfLastDog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Header />
      <CategoryBanner />
      <div className="category-page-wrapper">
        <CategoryFilter onFilterChange={handleFilterChange} />
        <div className="category-full-products">
          <CategoryDogs dogs={currentDogs} />
          <Pagination
            dogsPerPage={dogsPerPage}
            totalDogs={filteredDogs.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default category;
