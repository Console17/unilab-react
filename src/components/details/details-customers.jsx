import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const detailsCustomers = () => {
  return (
    <section className="details-customers-section">
      <h2>Our lovely customers</h2>
      <Swiper
        slidesPerView={"1.5"}
        spaceBetween={20}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 1.5,
          },
          700: {
            slidesPerView: 2.5,
          },
          1024: {
            slidesPerView: 3.5,
          },
          1400: {
            slidesPerView: 4.5,
          },
        }}
      >
        <SwiperSlide>
          <img src="../../../public/details-page/customers/customer 1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../../public/details-page/customers/customer 2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../../public/details-page/customers/customer 3.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../../public/details-page/customers/customer 4.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../../public/details-page/customers/customer 1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../../public/details-page/customers/customer 2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../../public/details-page/customers/customer 3.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../../public/details-page/customers/customer 4.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../../public/details-page/customers/customer 1.png" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default detailsCustomers;
