import React from 'react'
import { Link } from 'react-router-dom'
import JobVideoModal from './JobVideoModal'
import AccordionSection from './AccordionSection'

const SingleJobDetails = () => {
  return (
    <div className="container">
                <div className="jm-job-wrap pt-100 pb-60">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8">
                            <div className="jm-job-content-wrapp">
                                <img className="w-100 mb-40" src="assets/img/blog/5.jpg" alt="img"/>
                                <div className="jm-job-content-title-wrapper mb-35">
                                    <div className="jm-job-content-title-text-wrapp">
                                        <div className="jm-job-content-title-text">
                                            <div className="jm-job-content-title-img">
                                                <img src="assets/img/job/meta.png" alt="img"/>
                                            </div>
                                            <div className="jm-job-content-title-bottom">
                                                <h4 className="jm-job-content-title">PHP/Laravel Developer</h4>
                                                <span className="jm-job-content-title-meta"><i className="fa-thin fa-user"></i> 11 Vacancies</span>
                                                <span className="jm-job-content-title-rating">
                                                    <span className="jm-job-rating-text">5</span>
                                                    <i className="fa-thin fa-star"></i>
                                                    <i className="fa-thin fa-star"></i>
                                                    <i className="fa-thin fa-star"></i>
                                                    <i className="fa-thin fa-star"></i>
                                                    <i className="fa-thin fa-star"></i>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="jm-job-content-title-favour-icon">
                                            <Link to="#"><i className="fa-thin fa-heart"></i></Link>
                                            <Link to="#"><i className="fa-thin fa-gear"></i></Link>
                                        </div>
                                    </div>

                                </div>
                                <div className="jm-job-content-bottom-info-wrapper mb-25">
                                    <div className="jm-job-content-bottom-info-single">
                                        <label>Experience : </label>
                                        <span>Minimum 1 Year</span>
                                    </div>
                                    <div className="jm-job-content-bottom-info-single">
                                        <label>Employee Type : </label>
                                        <span>Full Time</span>
                                    </div>
                                    <div className="jm-job-content-bottom-info-single">
                                        <label>Position : </label>
                                        <span>Senior</span>
                                    </div>
                                    <div className="jm-job-content-bottom-info-single">
                                        <label>Offer Salary : </label>
                                        <span>$1500 - $2500</span>
                                    </div>

                                </div>

                                <div className="jm-job-content-informations-wrapper "> 
                                    <AccordionSection/>
                                    <div className="row align-items-center mb-15">
                                        <div className="col-xl-7 col-lg-7 col-md-7">
                                            <div className="jm-job-content-info-skill-meta text-center text-md-start mb-15">
                                                <label>Skills :</label>
                                                <Link to="#">WordPress</Link>
                                                <Link to="#">PHP</Link>
                                            </div>
                                        </div>
                                        <div className="col-xl-5 col-lg-5 col-md-5">
                                            <div className="jm-job-content-share text-center text-md-end mb-15">
                                                <label>Share :</label>
                                                <Link to="#"><i className="fa-brands fa-facebook-f"></i></Link>
                                                <Link to="#"><i className="fa-brands fa-twitter"></i></Link>
                                                <Link to="#"><i className="fa-brands fa-linkedin-in"></i></Link>
                                                <Link to="#"><i className="fa-brands fa-instagram"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="jm-related-jobs-inner mb-40">
                                    <h4 className="jm-related-job-title">Related Jobs</h4>
                                    <div className="jm-latest-job-layout-3">
                                        <div className="jm-latest-job-layout-3-wrapper">
                                            <div className="jm-latest-job-layout-3-img">
                                                <img src="assets/img/job/starbuck.png" alt="apple"/>
                                            </div>
                                            <div className="jm-latest-job-layout-3-info">
                                                <h4 className="jm-latest-job-layout-3-info-title"><Link to="/jobDetailsPage">Software Solution Ltd</Link></h4>
                                                <div className="jm-latest-job-layout-3-info-meta">
                                                    <span><i className="fa-thin fa-tags"></i>WordPress, Java</span>
                                                    <span><i className="fa-thin fa-location-dot"></i>Cupertino, USA</span>
                                                    <span><i className="fa-thin fa-money-bill-1"></i>$35000 - $40000</span>
                                                    <span><i className="fa-thin fa-clock"></i>Full Time</span>
                                                    
                                                </div>
                                            </div>
                                            <div className="jm-latest-job-layout-3-submit">
                                                <Link to="/postJobPage" className="jm-latest-job-layout-3-btn">Apply Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="jm-latest-job-layout-3">
                                        <div className="jm-latest-job-layout-3-wrapper">
                                            <div className="jm-latest-job-layout-3-img">
                                                <img src="assets/img/job/apple.png" alt="apple"/>
                                            </div>
                                            <div className="jm-latest-job-layout-3-info">
                                                <h4 className="jm-latest-job-layout-3-info-title"><Link to="/jobDetailsPage">IT Technology Company</Link></h4>
                                                <div className="jm-latest-job-layout-3-info-meta">
                                                    <span><i className="fa-thin fa-tags"></i>WordPress, Java</span>
                                                    <span><i className="fa-thin fa-location-dot"></i>Cupertino, USA</span>
                                                    <span><i className="fa-thin fa-money-bill-1"></i>$35000 - $40000</span>
                                                    <span><i className="fa-thin fa-clock"></i>Full Time</span>
                                                    
                                                </div>
                                            </div>
                                            <div className="jm-latest-job-layout-3-submit">
                                                <Link to="/postJobPage" className="jm-latest-job-layout-3-btn">Apply Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="jm-latest-job-layout-3">
                                        <div className="jm-latest-job-layout-3-wrapper">
                                            <div className="jm-latest-job-layout-3-img">
                                                <img src="assets/img/job/nike.png" alt="apple"/>
                                            </div>
                                            <div className="jm-latest-job-layout-3-info">
                                                <h4 className="jm-latest-job-layout-3-info-title"><Link to="/jobDetailsPage">Shoe Industry Limited</Link></h4>
                                                <div className="jm-latest-job-layout-3-info-meta">
                                                    <span><i className="fa-thin fa-tags"></i>WordPress, Java</span>
                                                    <span><i className="fa-thin fa-location-dot"></i>Cupertino, USA</span>
                                                    <span><i className="fa-thin fa-money-bill-1"></i>$35000 - $40000</span>
                                                    <span><i className="fa-thin fa-clock"></i>Full Time</span>
                                                    
                                                </div>
                                            </div>
                                            <div className="jm-latest-job-layout-3-submit">
                                                <Link to="/postJobPage" className="jm-latest-job-layout-3-btn">Apply Now</Link>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4">
                            <div className="jm-job-sidebar ml-40">
                                <div className="jm-job-sidebar-widget mb-40">
                                    <div className="jm-job-sidebar-inner">
                                        <h3 className="jm-job-sidebar-widget-title">Job Overview</h3>
                                    </div>
                                    <div className="jm-job-sidebar-inner-content">
                                        <JobVideoModal/>
                                        <ul className="jm-job-sidebar-review-list mb-15">
                                            <li><i className="fa-thin fa-house-blank"></i> <span className="jm-job-review-label">Title : </span> UI Designer</li>
                                            <li><i className="fa-thin fa-heart"></i> <span className="jm-job-review-label">Experience : </span> 02 Years</li>
                                            <li><i className="fa-thin fa-location-crosshairs"></i> <span className="jm-job-review-label">Location : </span> New York, USA</li>
                                            <li><i className="fa-thin fa-sack-dollar"></i> <span className="jm-job-review-label">Salary : </span> $15000 - $30000</li>
                                            <li><i className="fa-thin fa-graduation-cap"></i> <span className="jm-job-review-label">Qualification : </span> Bachelor Degree</li>
                                            <li><i className="fa-thin fa-building"></i> <span className="jm-job-review-label">Industry : </span> Private</li>
                                            <li><i className="fa-thin fa-timer"></i> <span className="jm-job-review-label">Posted : </span> 2 Hours Ago</li>
                                        </ul>
                                        <div className="jm-job-sidebar-overview-buttons">
                                            <Link to="/postJobPage" className="jm-job-overview-btn">Apply Now <i className="fa-thin fa-arrow-right-long"></i></Link>
                                            <Link to="#" className="jm-job-overview-btn job-bookmark"><i className="fa-thin fa-bookmark"></i> Add Bookmark</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="jm-job-sidebar-widget mb-40">
                                    <div className="jm-job-sidebar-inner">
                                        <h3 className="jm-job-sidebar-widget-title">Job Location</h3>
                                    </div>
                                    <div className="jm-job-sidebar-inner-content">
                                        <div className="jm-job-siderbar-map">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830894612!2d-74.11976383964465!3d40.69766374865766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z4Kao4Ka_4KaJIOCmh-Cmr-CmvOCmsOCnjeCmlSwg4Kau4Ka-4Kaw4KeN4KaV4Ka_4KaoIOCmr-CngeCmleCnjeCmpOCmsOCmvuCmt-CnjeCmn-CnjeCmsA!5e0!3m2!1sbn!2sbd!4v1671262618334!5m2!1sbn!2sbd"></iframe>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default SingleJobDetails