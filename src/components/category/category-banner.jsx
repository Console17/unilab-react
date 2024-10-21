const categoryBanner = () => {
  return (
    <section className="category-banner">
      <div className="category-current-page">
        <p> Home</p>
        <img src="../../../public/arrow-icon.svg" />
        <p>Category</p>
      </div>
      <div className="category-wrapper">
        <div className="category-img-wrapper">
          <img
            src="../../../public/category-page-photos/category-image.png"
            alt="dogs-image"
            className="category-banner-img"
          />
        </div>
        <div className="category-banner-info">
          <h1>One More Friend</h1>
          <h2>Thousands More Fun!</h2>
          <p>
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun.
          </p>
          <div className="category-banner-btns">
            <button className="btn btn-first">
              View Intro
              <img src="../../public/play-circle-white.svg" alt="play-circle" />
            </button>
            <button className="btn btn-second">Explore Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default categoryBanner;
