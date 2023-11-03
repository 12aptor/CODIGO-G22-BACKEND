import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Autoplay, Navigation]);

const Category2 = () => {
  const sliders = [
    {
      id: 1,
      icon: 'fa-thin fa-computer',
      title: 'IT Software',
      jobsPosted: 10293,
    },
    {
      id: 2,
      icon: 'fa-thin fa-truck',
      title: 'Delivery Jobs',
      jobsPosted: 2012,
    },
    {
      id: 3,
      icon: 'fa-thin fa-chart-line',
      title: 'Sales',
      jobsPosted: 3213,
    },
    {
      id: 4,
      icon: 'fa-thin fa-user-headset',
      title: 'Call Centers',
      jobsPosted: 4312,
    },
    {
      id: 5,
      icon: 'fa-thin fa-person-chalkboard',
      title: 'Teacher/lecturer',
      jobsPosted: 20122,
    },
  ];

  const [slides, setSlides] = useState(0);

  const setSlidesPerView = () => {
    setSlides(
      window.innerWidth <= 420
        ? 1
        : window.innerWidth <= 1000
        ? 3
        : window.innerWidth > 1000
        ? 4
        : 0
    );
  };

  useEffect(() => {
    // Initially set the amount of slides on page load
    setSlidesPerView();

    // Add the event listener on component mount
    window.addEventListener('resize', setSlidesPerView);

    // Remove the listener when component unmounts
    return () => {
      window.removeEventListener('resize', setSlidesPerView);
    };
  }, []);

  return (
    <section className="jm-category-area-3 pt-100 pb-100">
      <div className="container">
        <div className="jm-cateogry-wrap-3">
          <Swiper
            slidesPerView={slides}
            effect="slide"
            spaceBetween={25}
            centeredSlides={false}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: '.jm-category-3-prev',
              nextEl: '.jm-category-3-next',
            }}
            className="jm-category-active"
          >
            {sliders.map((slider) => (
              <SwiperSlide key={slider.id}>
                <div className="jm-category-item-3">
                  <div className="jm-category-item-icon-3">
                    <Link to="/jobDetailsPage">
                      <i className={slider.icon}></i>
                    </Link>
                  </div>
                  <div className="jm-category-item-content-3">
                    <h5 className="title">
                      <Link to="/jobDetailsPage">{slider.title}</Link>
                    </h5>
                    <span className="text">
                      <span>{slider.jobsPosted}</span> Jobs are posted
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Category2;
