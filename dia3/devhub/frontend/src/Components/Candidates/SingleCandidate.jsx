import React from 'react'
import { Link } from 'react-router-dom'

const SingleCandidate = () => {
  return (
    <div className="jm-candidate-area pt-100 pb-60">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 order-1 order-lg-0">
                    <div className="jm-candidate-author-wrapper mr-25 mb-40">
                        <div className="jm-candidate-avater-portion">
                            <img src="assets/img/blog/admin-3.jpg" alt="img"/>
                            <h4 className="jm-candidate-avater-name">Mikel Jackson</h4>
                            <span className="jm-candidate-designation">Creative Designer</span>
                            <div className="jm-candidate-favour-rating">
                                <span className="jm-candidate-rating">
                                    <i className="fa-thin fa-star"></i>
                                    <i className="fa-thin fa-star"></i>
                                    <i className="fa-thin fa-star"></i>
                                    <i className="fa-thin fa-star"></i>
                                    <i className="fa-thin fa-star"></i>
                                </span>
                                <Link to="#" className="jm-candidate-favour">
                                    <i className="fa-thin fa-heart"></i>
                                </Link>
                            </div>
                            <div className="jm-candidate-social-wrapper">
                                <Link to="#"><i className="fa-regular fa-envelope"></i></Link>
                                <Link to="#"><i className="fa-brands fa-twitter"></i></Link>
                                <Link to="#"><i className="fa-brands fa-linkedin-in"></i></Link>
                                <Link to="#"><i className="fa-light fa-phone-flip"></i></Link>
                            </div>
                        </div>
                        <div className="jm-proffessional-skills-portion">
                            <h4 className="jm-candidate-profile-overview-title">Professional Skills</h4>
                            <div className="jm-candidate-professional-skills-meta">
                                <Link to="#">Web Design</Link>
                                <Link to="#">Responsive Design</Link>
                                <Link to="#">Web Development</Link>
                                <Link to="#">UI Design</Link>
                                <Link to="#">UX Design</Link>
                                <Link to="#">Product Design</Link>
                            </div>
                        </div>
                        <div className="jm-candidate-profile-overview-portion">
                            <h4 className="jm-candidate-profile-overview-title">Profile Overview</h4>
                            <ul className="jm-job-sidebar-review-list mb-15">
                                <li><i className="fa-thin fa-house-blank"></i> <span className="jm-job-review-label">Title : </span> UI Designer</li>
                                <li><i className="fa-light fa-transgender"></i> <span className="jm-job-review-label">Gender : </span> Male</li>
                                <li><i className="fa-thin fa-heart"></i> <span className="jm-job-review-label">Experience : </span> 02 Years</li>
                                <li><i className="fa-thin fa-sack-dollar"></i> <span className="jm-job-review-label">Salary : </span> $15000 - $30000</li>
                                <li><i className="fa-thin fa-graduation-cap"></i> <span className="jm-job-review-label">Qualification : </span> Bachelor Degree</li>
                                <li><i className="fa-thin fa-building"></i> <span className="jm-job-review-label">Industry : </span> Private</li>
                                <li><i className="fa-thin fa-timer"></i> <span className="jm-job-review-label">Posted : </span> 2 Hours Ago</li>
                                <li><i className="fa-thin fa-location-crosshairs"></i> <span className="jm-job-review-label">Location : </span> New York, USA</li>
                            </ul>
                            <div className="jm-candidate-profile-buttons mt-25">
                                <Link to="#" className="jm-candidate-d-btn"><i className="fa-thin fa-phone"></i>Hire Me</Link>
                                <Link to="#" className="jm-candidate-d-btn"><i className="fa-thin fa-download"></i>Download CV</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 order-0 order-lg-1">
                    <div className="jm-candidate-content-wrapper mb-40">
                        <div className="jm-candidate-content-about mb-30">
                            <h4 className="jm-candidate-content-inner-title">About Me</h4>
                            <p>Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Patience. Infinite patience. No shortcuts. Even if the client is being careless. Some quick example text to build on the card title and bulk the card's content Moltin gives you platform.

                            As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience lies in successfully conceptualizing, designing, and modifying consumer products specific to interior design and home furnishings.</p>
                        </div>
                        <div className="jm-candidate-content-education">
                            <div className="jm-candidate-content-education-item">
                                <h4 className="jm-candidate-content-inner-title">Working Experience</h4>
                                <div className="jm-candidate-content-education-inner">
                                    <span className="jm-candidate-experience-date">Speeddigit Software Solution <span>(2012 - 2014)</span></span>
                                    <h5 className="jm-candidate-content-inner-sm-title">UI/UX Design Team Leader</h5>
                                    <p>There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.</p>
                                </div>
                                <div className="jm-candidate-content-education-inner">
                                    <span className="jm-candidate-experience-date">Speeddigit Software Solution <span>(2014 - 2018)</span></span>
                                    <h5 className="jm-candidate-content-inner-sm-title">Senior Engineer</h5>
                                    <p>One of the main areas that I work on with my clients is shedding these non-supportive beliefs and replacing them with beliefs that will help them to accomplish their desires.</p>
                                </div>
                                <div className="jm-candidate-content-education-inner">
                                    <span className="jm-candidate-experience-date">Speeddigit Software Solution <span>(2018 - 2022)</span></span>
                                    <h5 className="jm-candidate-content-inner-sm-title">Product Manager</h5>
                                    <p>One of the main areas that I work on with my clients is shedding these non-supportive beliefs and replacing them with beliefs that will help them to accomplish their desires.</p>
                                </div>
                            </div>

                            <div className="jm-candidate-content-education-item">
                                <h4 className="jm-candidate-content-inner-title">Education & Training</h4>
                                <div className="jm-candidate-content-education-inner">
                                    <span className="jm-candidate-experience-date">International University <span>(2008 - 2010)</span></span>
                                    <h5 className="jm-candidate-content-inner-sm-title">BCA - Bachelor of Computer Applications</h5>
                                    <p>There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.</p>
                                </div>
                                <div className="jm-candidate-content-education-inner">
                                    <span className="jm-candidate-experience-date">Middle East Technical University <span>(2010 - 2014)</span></span>
                                    <h5 className="jm-candidate-content-inner-sm-title">MCA - Master of Computer Application</h5>
                                    <p>One of the main areas that I work on with my clients is shedding these non-supportive beliefs and replacing them with beliefs that will help them to accomplish their desires.</p>
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

export default SingleCandidate