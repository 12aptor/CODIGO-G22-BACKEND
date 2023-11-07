import React from 'react'
import { Link } from 'react-router-dom'

const Blog2 = () => {
  return (
    <section className="jm-blog-area pt-100 pb-70">
        <div className="container">
            <div className="row align-items-center mb-25">
                <div className="col-xl-6 col-lg-9">
                    <div className="jm-section-title mb-10">
                        <span className="subtitle">Our Latest Blog</span>
                        <h2 className="title">We Are Best About This 
                            Job Solution.</h2>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-9">
                    <div className="jm-section-title mb-10">
                        <p className="text">There are many variations of passages of Lorem Ipsum Fasts There are many variations of passages of Lorem Ipsum Fastsby injected humour, by injected humour, or randomised coved ceilings.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="jm-blog-item mb-30">
                        <div className="jm-blog-item-img w_img">
                            <Link to="/blogDetailsPage">
                                <img src="assets/img/blog/1.jpg" alt="Image Not Found"/>
                            </Link>
                            <div className="jm-blog-date">
                                <h6>23</h6>
                                <span>Aug</span>
                            </div>
                        </div>
                        <div className="jm-blog-item-content">
                            <h4 className="jm-blog-title"><Link to="/blogDetailsPage">How to Work Instagram Marketing</Link></h4>
                            <p>We are privileged to work with hund
                                of future-thinking businesses to
                                Of this including many</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="jm-blog-item mb-30">
                        <div className="jm-blog-item-img w_img">
                            <Link to="/blogDetailsPage">
                                <img src="assets/img/blog/2.jpg" alt="Image Not Found"/>
                            </Link>
                            <div className="jm-blog-date">
                                <h6>23</h6>
                                <span>Aug</span>
                            </div>
                        </div>
                        <div className="jm-blog-item-content">
                            <h4 className="jm-blog-title"><Link to="/blogDetailsPage">Businesses Thriving, Are Not Societies.</Link></h4>
                            <p>We are privileged to work with hund
                                of future-thinking businesses to
                                Of this including many</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="jm-blog-item mb-30">
                        <div className="jm-blog-item-img w_img">
                            <Link to="/blogDetailsPage">
                                <img src="assets/img/blog/3.jpg" alt="Image Not Found"/>
                            </Link>
                            <div className="jm-blog-date">
                                <h6>23</h6>
                                <span>Aug</span>
                            </div>
                        </div>
                        <div className="jm-blog-item-content">
                            <h4 className="jm-blog-title"><Link to="/blogDetailsPage">Nike Shoes Attract More For Sales</Link></h4>
                            <p>We are privileged to work with hund
                                of future-thinking businesses to
                                Of this including many</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="jm-blog-item mb-30">
                        <div className="jm-blog-item-img w_img">
                            <Link to="/blogDetailsPage"><img src="assets/img/blog/4.jpg" alt="Image Not Found"/></Link>
                            <div className="jm-blog-date">
                                <h6>23</h6>
                                <span>Aug</span>
                            </div>
                        </div>
                        <div className="jm-blog-item-content">
                            <h4 className="jm-blog-title"><Link to="/blogDetailsPage">you gain skills you get more opportunity for job</Link></h4>
                            <p>We are privileged to work with hund
                                of future-thinking businesses to
                                Of this including many</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="jm-blog-item mb-30">
                        <div className="jm-blog-item-img w_img">
                            <Link to="/blogDetailsPage">
                                <img src="assets/img/blog/5.jpg" alt="Image Not Found"/>
                            </Link>
                            <div className="jm-blog-date">
                                <h6>23</h6>
                                <span>Aug</span>
                            </div>
                        </div>
                        <div className="jm-blog-item-content">
                            <h4 className="jm-blog-title"><Link to="/blogDetailsPage">Hire the best freelancers for any job, online</Link></h4>
                            <p>We are privileged to work with hund
                                of future-thinking businesses to
                                Of this including many</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="jm-blog-item mb-30">
                        <div className="jm-blog-item-img w_img">
                            <Link to="/blogDetailsPage">
                                <img src="assets/img/blog/6.jpg" alt="Image Not Found"/>
                            </Link>
                            <div className="jm-blog-date">
                                <h6>23</h6>
                                <span>Aug</span>
                            </div>
                        </div>
                        <div className="jm-blog-item-content">
                            <h4 className="jm-blog-title"><Link to="/blogDetailsPage">11 Tips and Trick to Help You Job in Web Developer</Link></h4>
                            <p>We are privileged to work with hund
                                of future-thinking businesses to
                                Of this including many</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="jm-pagination mb-30 mt-20 text-center">
                        <Link to="#" className="jm-pagination-btn"><i className="fa-thin fa-arrow-left"></i></Link>
                        <Link to="#" className="jm-pagination-btn active">1</Link>
                        <Link to="#" className="jm-pagination-btn">2</Link>
                        <Link to="#" className="jm-pagination-btn"><i className="fa-thin fa-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blog2