import ProductsCards from "./producs-cards";

const LandingMoreProducts = ({ products }) => {
  return (
    <>
      <section className="products-section secondary-products">
        <div className="products-section-intro">
          <div className="products-intro-text">
            <p>Hard to choose right products for your pets?</p>
            <h3>Our Products</h3>
          </div>
          <button className="products-intro-btn btn">
            View more
            <img src="../../public/arrow-icon.svg" alt="play-circle" />
          </button>
        </div>
        <div className="products-cards-wrapper">
          {products.map((product, index) => (
            <ProductsCards
              key={index}
              img={product.img}
              name={product.name}
              type={product.type}
              size={product.size}
              price={product.price}
              free={product.free}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default LandingMoreProducts;
