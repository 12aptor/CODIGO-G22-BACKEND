import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay} from 'swiper'
import { jobs } from '../../Data/JobsData'
const FeaturedJobs = () => {
      const [slides, setSlides] = useState(0);
      const setSlidesPerview = () => {
          setSlides(
            window.innerWidth <= 767
              ? 1
              : window.innerWidth <= 800
              ? 2
              : window.innerWidth <= 1000
              ? 3
              : window.innerWidth > 1000
              ? 4
              : 0
            );
        };
        useEffect(() => {
          //Initially set the amount of slides on page load
          setSlidesPerview();
          // Add the event listner on component mount
          window.addEventListener("resize", setSlidesPerview);
      
          // Remove the listner when component unmounts
          return () => {
            window.removeEventListener("resize", setSlidesPerview);
          };
        }, []);
      
  return (
    <section className="jm-job-area-3 pt-85 pb-100">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="jm-section-title mb-40 text-center">
                        <h2 className="title mb-10">Featured Jobs</h2>
                        <p className="text">Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula</p>
                    </div>
                </div>
            </div>
            <div className="jm-job-wrap-3">
            <Swiper
            slidesPerView={slides}
            effect={'slide'}
            spaceBetween={25}
            centeredSlides={false}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className='jm-job-active-3'
            >
                {jobs.map((job)=>{
                    return(
                        <SwiperSlide key={job.id}>
                            <div className="jm-job-item-3">
                                <div className="jm-job-item-img-3 y_img">
                                    <img src={job.imgSrc} alt=""/>
                                </div>
                                <div className="jm-job-item-head-3">
                                    <h4 className="title"><Link to="/jobDetailsPage">{job.title}</Link></h4>
                                    <Link to="#">{job.company}</Link>
                                </div>
                                <div className="jm-job-item-info-3">
                                    <div className="jm-job-item-info-inner-3">
                                        <div className="jm-job-location-3"><i className="fa-thin fa-location-dot"></i><span>{job.location}</span></div>
                                        <div className="jm-job-salary-3"><i className="fa-thin fa-money-bill-1"></i><span>{job.salary}</span></div>
                                    </div>
                                    <div className="jm-job-item-info-inner-3">
                                        <div className="jm-job-posttime-3"><i className="fa-thin fa-clock"></i><span>{job.postedTime}</span></div>
                                        <div className="jm-job-jobtime-3"><i className="fa-thin fa-business-time"></i><span>{job.jobTime}</span></div>
                                    </div>
                                </div>
                                <div className="jm-job-item-bottom-3">
                                    <div className="jm-job-item-btn-3"><Link to="/jobDetailsPage" className="jm-theme-btn jm-border-btn">{job.vacancies} vacancies</Link></div>
                                    <div className="jm-job-item-btn-3"><Link to="/addResumePage" className="jm-theme-btn jm-border-btn">Apply Now</Link></div>
                                </div>
                            </div>
                        </SwiperSlide>  
                    )
                })}
                
            </Swiper>
            </div>
        </div>
    </section>
  )
}

export default FeaturedJobs