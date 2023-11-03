import React from 'react'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup'

const About = () => {
  return (
    <section className="jm-about-area-2 pt-85 pb-60">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6 order-1 order-lg-0">
                    <div className="jm-about-wrap-2 mr-40 mb-40">
                        <div className="jm-section-title mb-25">
                            <h2 className="title mb-20">Suits jobs for you.
                            </h2>
                            <p className="text jm-about-desc mt-15">There are many variations of passages of Lorem Ipsum Fasts Fastsby humour, by injected humour, or coved ceilings.</p>
                        </div>
                        <div className="jm-about-content-2 mb-25">
                            <ul className="jm-about-content-items-2">
                                <li className="jm-about-content-item-2">
                                    <span className="jm-about-icon-2"><i className="fal fa-bookmark"></i></span>
                                    <span className="jm-about-text-2">Bookmark Jobs</span>
                                </li>
                                <li className="jm-about-content-item-2">
                                    <span className="jm-about-icon-2"><i className="fal fa-address-card"></i></span>
                                    <span className="jm-about-text-2">Apply with your Resume</span>
                                </li>
                                <li className="jm-about-content-item-2">
                                    <span className="jm-about-icon-2"><i className="fal fa-envelope"></i></span>
                                    <span className="jm-about-text-2">Get notified
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="jm-about-content-btn-2">
                            <Link to="/jobPage" className="jm-theme-btn">Browse Jobs</Link>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6  order-0 order-lg-1">
                    <div className="jm-about-img-2 jm-about-img-relative w_img mb-40">
                        <img src="assets/img/about/home-2-about-1.png" alt="Image Not Found"/>
                        <div className="jm-about-experience-year">
                            <span className="jm-about-experience-number"><span className="odometer aboutCount"  data-count="25"><CountUp duration={8} end={25}/></span><span className="jm-about-experience-plus">+</span></span>
                            <span className="jm-about-experience-number-text">Years Of <span className="jm-about-experience-number-text-big">Experience</span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About