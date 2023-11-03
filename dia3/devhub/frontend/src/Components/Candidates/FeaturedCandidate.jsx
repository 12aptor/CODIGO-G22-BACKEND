import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay} from 'swiper'

const FeaturedCandidate = () => {
    const team = [
        {
          name: 'Dwayne Johnson',
          imgSrc: 'assets/img/team/8.jpg',
          position: 'Web Developer (6 Yrs Exp)',
        },
        {
          name: 'Jon William',
          imgSrc: 'assets/img/team/5.jpg',
          position: 'Web Developer (6 Yrs Exp)',
        },
        {
          name: 'Jennifer Blount',
          imgSrc: 'assets/img/team/10.jpg',
          position: 'UX/UI Designer (6 Yrs Exp)',
        },
        {
          name: 'Chris Henry',
          imgSrc: 'assets/img/team/11.jpg',
          position: 'Marketing Expert (8 Yrs Exp)',
        },
        {
          name: 'Alexander',
          imgSrc: 'assets/img/team/9.jpg',
          position: 'PHP Developer (5 Yrs Exp)',
        },
      ];
      
    const [slides, setSlides] = useState(0);
    const setSlidesPerview = () => {
        setSlides(
            window.innerWidth <= 420
            ? 1
            : window.innerWidth <= 768
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
    <section className="jm-team-area-2 pt-85 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="jm-section-title mb-40 text-center">
                                <h2 className="title mb-10">Featured Candidates</h2>
                                <p className="text">Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula</p>
                            </div>
                        </div>
                    </div>
                    <div className="jm-team-wrap-2">
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
                        className='jm-team-active-2'
                        >
                            {team.map((teamMembers)=>{
                                return(
                                 <SwiperSlide key={teamMembers.name}>
                                    <div className="jm-team-item-2">
                                        <div className="jm-team-item-body-2">
                                            <div className="jm-team-item-img-2 w_img">
                                                <img src={teamMembers.imgSrc} alt="Image Not Found"/>
                                            </div>
                                            <div className="jm-team-item-content-2">
                                                <h4 className="title"><Link to="/candidateDetailsPage">{teamMembers.name}</Link></h4>
                                                <span>{teamMembers.position}</span>
                                                <div className="jm-team-item-social-2">
                                                    <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                                                    <Link to="#"><i className="fab fa-pinterest-p"></i></Link>
                                                    <Link to="#"><i className="fab fa-twitter"></i></Link>
                                                    <Link to="#"><i className="fab fa-instagram"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="jm-team-item-btn-2">
                                            <Link className="jm-theme-btn jm-transparent-btn" to="/candidateDetailsPage">View Profile</Link>
                                        </div>
                                    </div>
                                </SwiperSlide>   
                                )
                            })}
                                
                        </Swiper>
                        {/* <div className="jm-team-navigation-2">
                            <div className="jm-team-2-prev"><i className="fa-thin fa-angle-left"></i></div>
                            <div className="jm-team-2-next"><i className="fa-thin fa-angle-right"></i></div>
                        </div> */}
                    </div>
                </div>
            </section>
  )
}

export default FeaturedCandidate