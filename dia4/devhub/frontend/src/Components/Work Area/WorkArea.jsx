import React from 'react'
import { Link } from 'react-router-dom'

const WorkArea = () => {
  return (
    <section className="jm-work-area-2 pt-100 pb-60 light-bg">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-3">
                    <div className="jm-work-left-2 mb-40 text-center text-xl-start">
                        <div className="jm-section-title mb-25">
                            <h2 className="title">Choose Your
                                work</h2>
                            <p className="text">Find jobs on the work that suits you the most.</p>
                        </div>
                        <div className="jm-work-btn-2">
                            <Link to="/jobCategoryPage" className="jm-theme-btn jm-theme-btn-black">View More Jobs</Link>
                        </div>
                    </div>
                </div>
                <div className="col-xl-9">
                    <div className="jm-work-wrap-2 ml-40 mb-40">
                        <div className="row g-0">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 jm-border-2">
                                <div className="jm-work-item-2">
                                    <div className="jm-work-item-icon-2">
                                        <i className="fa-thin fa-user"></i>
                                    </div>
                                    <div className="jm-work-item-content-2">
                                        <h4 className="title"><Link to="/serviceDetailsPage">Register</Link></h4>
                                        <p>Create a account as Employer or a Candidate for free.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 jm-border-2">
                                <div className="jm-work-item-2">
                                    <div className="jm-work-item-icon-2">
                                        <i className="fa-thin fa-magnifying-glass"></i>
                                    </div>
                                    <div className="jm-work-item-content-2">
                                        <h4 className="title"><Link to="/serviceDetailsPage">Search</Link></h4>
                                        <p>Browse throught positions to find the right job for you.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 jm-border-2">
                                <div className="jm-work-item-2">
                                    <div className="jm-work-item-icon-2">
                                        <i className="fa-thin fa-paper-plane"></i>
                                    </div>
                                    <div className="jm-work-item-content-2">
                                        <h4 className="title"><Link to="/serviceDetailsPage">Apply Jobs</Link></h4>
                                        <p>Apply to a job with your resume and change your Career.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 jm-border-2">
                                <div className="jm-work-item-2 ">
                                    <div className="jm-work-item-icon-2">
                                        <i className="fa-thin fa-microchip"></i>
                                    </div>
                                    <div className="jm-work-item-content-2">
                                        <h4 className="title"><Link to="/serviceDetailsPage">Creative Technologies</Link></h4>
                                        <p>Gain a business in the most advanced IoT solutions.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 jm-border-2">
                                <div className="jm-work-item-2 ">
                                    <div className="jm-work-item-icon-2">
                                        <i className="fa-thin fa-thumbs-up"></i>
                                    </div>
                                    <div className="jm-work-item-content-2">
                                        <h4 className="title"><Link to="/serviceDetailsPage">Top Rated Companies</Link></h4>
                                        <p>Find The Best Top Rated Companies in your Local area </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 jm-border-2">
                                <div className="jm-work-item-2">
                                    <div className="jm-work-item-icon-2">
                                        <i className="fa-thin fa-headset"></i>
                                    </div>
                                    <div className="jm-work-item-content-2">
                                        <h4 className="title"><Link to="/serviceDetailsPage">24/7 Customer Support</Link></h4>
                                        <p>self-service banking extending cash in you band.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WorkArea