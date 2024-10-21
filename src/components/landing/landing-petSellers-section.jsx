const LandingPetSerlersSection = ({ sellers }) => {
  return (
    <>
      <section className="pet-sellers-section">
        <div className="pet-sellers-intro">
          <div className="pet-sellers-text">
            <p>Proud to be part of</p>
            <h3>Pet Sellers</h3>
          </div>
          <button className="pet-intro-btn ">
            View all our sellers
            <img src="../../public/arrow-icon.svg" alt="play-circle" />
          </button>
        </div>
        <div className="pet-sellers-logos">
          {sellers.map((seller, index) => (
            <img
              key={index}
              src={seller.img}
              alt={`Pet Seller ${index + 1}`}
              className="pet-seller-logo"
            />
          ))}
        </div>
      </section>
      <section className="adoption-section">
        <div className="adoption-wrapper">
          <div className="adoption-info">
            <div className="adoption-head">
              <h2>Adoption</h2>
              <img src="../../../public/paw-icon.svg" alt="paw-icon" />
            </div>
            <h3>We need help. so do they.</h3>
            <p>
              Adopt a pet and give it a home, it will be love you back
              unconditionally.
            </p>
            <div className="moreFriends-btns">
              <button className="btn btn-first">Explore Now</button>
              <button className="btn btn-second">
                View Intro
                <img src="../../public/play-circle.svg" alt="play-circle" />
              </button>
            </div>
          </div>
          <div className="adoption-img">
            <img
              src="../../../public/adoption-photo.png"
              alt="moreFriend-image"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPetSerlersSection;
