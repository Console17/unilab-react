import { useState } from "react";

const categoryFilter = ({ onFilterChange }) => {
  const [gender, setGender] = useState("");
  const [color, setColor] = useState("");
  const [breed, setBreed] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);

  const handleGenderChange = (event) => {
    setGender(event.target.value);
    onFilterChange({ gender: event.target.value });
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
    onFilterChange({ color: event.target.value });
  };

  const handleBreedChange = (event) => {
    setBreed(event.target.value);
    onFilterChange({ breed: event.target.value });
  };

  const handleMinPriceChange = (event) => {
    const value = event.target.value ? parseInt(event.target.value) : 0;
    setMinPrice(value);
    onFilterChange({ minPrice: value });
  };

  const handleMaxPriceChange = (event) => {
    const value = event.target.value ? parseInt(event.target.value) : Infinity;
    setMaxPrice(value);
    onFilterChange({ maxPrice: value });
  };

  return (
    <>
      <section className="category-filter-section">
        <h2>Filter</h2>
        <div className="category-filters">
          <div className="category-filter">
            <h3>Gender</h3>
            <div className="input-wrapper">
              <input
                type="radio"
                id="gender-male"
                name="gender"
                value="Male"
                onChange={handleGenderChange}
              />
              <label htmlFor="gender-male">Male</label>
            </div>
            <div className="input-wrapper">
              <input
                type="radio"
                id="gender-female"
                name="gender"
                value="Female"
                onChange={handleGenderChange}
              />
              <label htmlFor="gender-female">Female</label>
            </div>
          </div>
          <div className="category-filter">
            <h3>Color</h3>
            <div className="input-wrapper color-option">
              <input
                type="radio"
                id="color-red"
                name="color"
                value="red"
                onChange={handleColorChange}
              />
              <label htmlFor="color-red">
                <span className="color-box red"></span>
                Red
              </label>
            </div>
            <div className="input-wrapper color-option">
              <input
                type="radio"
                id="color-black"
                name="color"
                value="black"
                onChange={handleColorChange}
              />
              <label htmlFor="color-black">
                <span className="color-box black"></span>
                Black
              </label>
            </div>
            <div className="input-wrapper color-option">
              <input
                type="radio"
                id="color-silver"
                name="color"
                value="silver"
                onChange={handleColorChange}
              />
              <label htmlFor="color-silver">
                <span className="color-box silver"></span>
                Silver
              </label>
            </div>
            <div className="input-wrapper color-option">
              <input
                type="radio"
                id="color-tan"
                name="color"
                value="tan"
                onChange={handleColorChange}
              />
              <label htmlFor="color-tan">
                <span className="color-box tan"></span>
                Tan
              </label>
            </div>
          </div>
          <div className="category-filter">
            <h3>Price</h3>
            <div className="category-price-inptus">
              <div>
                <input
                  type="number"
                  name="min-price"
                  placeholder="Min"
                  step="10000"
                  min={0}
                  onChange={handleMinPriceChange}
                />
              </div>
              <div>
                <input
                  type="number"
                  name="max-price"
                  placeholder="Max"
                  step="10000"
                  min={0}
                  onChange={handleMaxPriceChange}
                />
              </div>
            </div>
          </div>
          <div className="category-filter">
            <h3>Breed</h3>
            <div className="input-wrapper">
              <input
                type="radio"
                id="breed-small"
                name="breed"
                value="small"
                onChange={handleBreedChange}
              />
              <label htmlFor="breed-small">Small</label>
            </div>
            <div className="input-wrapper">
              <input
                type="radio"
                id="breed-medium"
                name="breed"
                value="medium"
                onChange={handleBreedChange}
              />
              <label htmlFor="breed-medium">Medium</label>
            </div>
            <div className="input-wrapper">
              <input
                type="radio"
                id="breed-large"
                name="breed"
                value="large"
                onChange={handleBreedChange}
              />
              <label htmlFor="breed-large">Large</label>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default categoryFilter;
