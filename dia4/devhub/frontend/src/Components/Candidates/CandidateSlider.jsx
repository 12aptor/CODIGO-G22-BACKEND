import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay} from 'swiper'
import { candidates } from '../../Data/JobsData'
const CandidateSlider = () => {
  const [slides, setSlides] = useState(0);
  const setSlidesPerview = () => {
      setSlides(
          window.innerWidth <= 468
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
    <div className="row jm-team-area-2">
        <div className="col-xl-12">
            <div className="jm-candidate-wrapper jm-team-wrap-2">
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
                    {candidates.map((candidate)=>{
                        return(
                           <SwiperSlide className="swiper-slide" key={candidate.id}>
                            <div className="team-item-jm">
                                <div className="team-img-jm w_img">
                                    <Link to="/candidateDetailsPage"><img src={candidate.image} alt=""/></Link>	 
                                    <div className="preyantechnosys-team-icon">
                                        <Link to="#"><i className="fa-light fa-share-nodes"></i></Link>
                                        <div className="preyantechnosys-box-social-links">
                                            <div className="prt-team-social-links-wrapper">
                                                <ul className="prt-team-social-links">
                                                    <li><Link to="#" target="_blank"><i className="fa-brands fa-facebook-f"></i></Link></li>
                                                    <li><Link to="#" target="_blank"><i className="fa-brands fa-twitter"></i></Link></li>
                                                    <li><Link to="#" target="_blank"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                                                </ul> 
                                            </div>
                                        </div>	
                                    </div>  
                                </div>
                                <div className="team-content-jm">
                                    <h5 className="team-content-title-jm"><Link to="/candidateDetailsPage">{candidate.name}</Link></h5>
                                    <span className="team-content-subtitle-jm">{candidate.position}</span>
                                    <div className="middle-content-jm">
                                        <ul className="list-jm">
                                            <li><span className="list-jm-work">Work Exp:</span> {candidate.workExp}</li>
                                            <li><span className="list-jm-work">Loc:</span> {candidate.location}</li>
                                        </ul>
                                    </div>
                                    <div className="btn-box-jm">
                                        <Link className="read-more theme-btn-jm" to="/candidateDetailsPage">view Resume <i className="fa-light fa-arrow-right-long"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide> 
                        )
                    })}
                </Swiper>
            </div>
        </div>
    </div>
  )
}

export default CandidateSlider