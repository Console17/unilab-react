const MoreFriendsSection = () => {
  return (
    <section className="moreFriends-section">
      <div className="moreFriends-wrapper">
        <img src="..//landing-girl-img.png" alt="moreFriend-image" />
        <div className="moreFriends-info">
          <h1>One More Friend</h1>
          <h2>Thousands More Fun!</h2>
          <p>
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>
          <div className="moreFriends-btns">
            <button className="btn btn-first">
              View Intro
              <img src="/play-circle.svg" alt="play-circle" />
            </button>
            <button className="btn btn-second">Explore Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreFriendsSection;
