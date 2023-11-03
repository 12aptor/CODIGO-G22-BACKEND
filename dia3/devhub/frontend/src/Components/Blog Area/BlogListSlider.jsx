import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import { Link } from 'react-router-dom';
SwiperCore.use([Autoplay]);

const BlogListSlider = () => {
  return (
    <Swiper
      className="jm-blog-list-active"
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <div className="jm-blog-item-img-2 w_img">
          <Link to="/blogDetailsPage">
            <img src="assets/img/blog/blog-list-3.jpg" alt="" />
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="jm-blog-item-img-2 w_img">
          <Link to="/blogDetailsPage">
            <img src="assets/img/blog/blog-list-2.jpg" alt="" />
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="jm-blog-item-img-2 w_img">
          <Link to="/blogDetailsPage">
            <img src="assets/img/blog/blog-list-1.jpg" alt="" />
          </Link>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default BlogListSlider;
