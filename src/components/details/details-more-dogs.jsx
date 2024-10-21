import ProductsCards from "../landing/producs-cards";

const detailsMoreDogs = ({ dogs }) => {
  return (
    <section className="more-dogs-section">
      <p>what's new</p>
      <h2>See more puppies</h2>
      <div className="more-dogs-wrapper">
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
    </section>
  );
};

export default detailsMoreDogs;
