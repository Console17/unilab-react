import ProductsCards from "./producs-cards";
import { useNavigate } from "react-router-dom";

const LandingDogsSection = ({ dogs }) => {
  const navigate = useNavigate();
  return (
    <>
      <section className="products-section">
        <div className="products-section-intro">
          <div className="products-intro-text">
            <p>Whats new?</p>
            <h3>Take a look at some of our pets</h3>
          </div>
          <button
            className="products-intro-btn btn"
            onClick={() => navigate("/category")}
          >
            View more
            <img src="/arrow-icon.svg" alt="play-circle" />
          </button>
        </div>
        <div className="dogs-cards-wrapper products-cards-wrapper">
          {dogs.map((dog, index) => (
            <ProductsCards
              key={index}
              img={dog.img}
              name={dog.name}
              gene={dog.gene}
              age={dog.age}
              price={dog.price}
              free={dog.free}
            />
          ))}
        </div>
        <button
          className="dogs-mobile-button"
          onClick={() => navigate("/category")}
        >
          View more
          <img src="/arrow-icon.svg" alt="play-circle" />
        </button>
      </section>
    </>
  );
};

export default LandingDogsSection;
