import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef } from "react";

const landingKnowledgeSection = ({ knowledgeData }) => {
  const swiperRef = useRef(null);
  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };
  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <section className="knowledge-section">
      <div className="knowledge-intro">
        <div className="knowledge-intro-text">
          <p>You already know ?</p>
          <h3>Useful pet knowledge</h3>
        </div>
        <div className="knowledge-pagination">
          <img
            src="../arrow-icon.svg"
            alt="arrow-icon"
            className="arrow first-arrow"
            onClick={handlePrev}
          />
          <img
            src=".//arrow-icon.svg "
            className="arrow second-arrow"
            alt="arrow-icon"
            onClick={handleNext}
          />
        </div>
      </div>
      <Swiper
        ref={swiperRef}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          700: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 4,
          },
        }}
      >
        {knowledgeData.map((knowledge, index) => (
          <SwiperSlide key={index} className="knowledge-card ">
            <img
              src={knowledge.img}
              alt={`Knowledge ${index + 1}`}
              className="knowledge-img"
            />
            <p className="knowledge-type">{knowledge.type}</p>
            <h3>{knowledge.title}</h3>
            <p className="knowledge-text">{knowledge.text}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className="knowledge-cards-wrapper">
        {knowledgeData.map((knowledge, index) => (
          <div key={index} className="knowledge-card">
            <img
              src={knowledge.img}
              alt={`Knowledge ${index + 1}`}
              className="knowledge-img"
            />
            <p className="knowledge-type">{knowledge.type}</p>
            <h3>{knowledge.title}</h3>
            <p className="knowledge-text">{knowledge.text}</p>
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default landingKnowledgeSection;
