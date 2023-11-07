import React from 'react'
import { Link } from 'react-router-dom'

const BlogArea = () => {
  return (
    <section className="jm-blog-area-3 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="jm-section-title mb-40 text-center">
                                <h2 className="title mb-10">News & Insights</h2>
                                <p className="text">Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="jm-blog-item-3 mb-30">
                                <div className="jm-blog-item-img-3">
                                    <div className="jm-blog-item-img-inner-3 w_img">
                                        <Link to="/blogDetailsPage"> <img src="assets/img/blog/4.jpg" alt="img"/></Link>
                                    </div>
                                    <div className="jm-blog-date-3">
                                        <h5>03</h5>
                                        <span>Dec</span>
                                    </div>
                                </div>
                                <div className="jm-blog-item-content-3">
                                    <div className="jm-blog-item-content-meta-3">
                                        <div className="jm-date-3">
                                            <Link to="#"><i className="fa-thin fa-user"></i>Admin</Link>
                                        </div>
                                        <div className="jm-comment-3">
                                            <Link to="#"><i className="fa-thin fa-comment"></i>2 Comments</Link>
                                        </div>
                                    </div>
                                    <div className="jm-blog-item-content-info-3">
                                        <h4 className="title"><Link to="/blogDetailsPage">Hire the best freelancers for any job, online</Link></h4>
                                        <div className="jm-blog-button mt-15">
                                            <Link to="/blogDetailsPage" className="jm-blog-btn">Read More <i className="fa-thin fa-arrow-right-long"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="jm-blog-item-3 mb-30">
                                <div className="jm-blog-item-img-3">
                                    <div className="jm-blog-item-img-inner-3 w_img">
                                        <Link to="/blogDetailsPage"> <img src="assets/img/blog/5.jpg" alt="img"/></Link>
                                    </div>
                                    <div className="jm-blog-date-3">
                                        <h5>01</h5>
                                        <span>Jan</span>
                                    </div>
                                </div>
                                <div className="jm-blog-item-content-3">
                                    <div className="jm-blog-item-content-meta-3">
                                        <div className="jm-date-3">
                                            <Link to="#"><i className="fa-thin fa-user"></i>Admin</Link>
                                        </div>
                                        <div className="jm-comment-3">
                                            <Link to="#"><i className="fa-thin fa-comment"></i>3 Comments</Link>
                                        </div>
                                    </div>
                                    <div className="jm-blog-item-content-info-3">
                                        <h4 className="title"><Link to="/blogDetailsPage">you gain skills you get more opportunity for job</Link></h4>
                                        <div className="jm-blog-button mt-15">
                                            <Link to="/blogDetailsPage" className="jm-blog-btn">Read More <i className="fa-thin fa-arrow-right-long"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="jm-blog-item-3 mb-30">
                                <div className="jm-blog-item-img-3">
                                    <div className="jm-blog-item-img-inner-3 w_img">
                                        <Link to="/blogDetailsPage"> <img src="assets/img/blog/6.jpg" alt="img"/></Link>
                                    </div>
                                    <div className="jm-blog-date-3">
                                        <h5>28</h5>
                                        <span>Sep</span>
                                    </div>
                                </div>
                                <div className="jm-blog-item-content-3">
                                    <div className="jm-blog-item-content-meta-3">
                                        <div className="jm-date-3">
                                            <Link to="#"><i className="fa-thin fa-user"></i>Admin</Link>
                                        </div>
                                        <div className="jm-comment-3">
                                            <Link to="#"><i className="fa-thin fa-comment"></i>2 Comments</Link>
                                        </div>
                                    </div>
                                    <div className="jm-blog-item-content-info-3">
                                        <h4 className="title"><Link to="/blogDetailsPage">You Should Learn Advance level Wordpress for Job</Link></h4>
                                        <div className="jm-blog-button mt-15">
                                            <Link to="/blogDetailsPage" className="jm-blog-btn">Read More <i className="fa-thin fa-arrow-right-long"></i></Link>
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

export default BlogArea