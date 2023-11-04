import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <section className="jm-blog-area pt-85 pb-70">
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
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="jm-blog-item jm-blog-layout-2 mb-55">
                        <div className="jm-blog-item-img w_img">
                            <Link to="/blogDetailsPage"><img src="assets/img/blog/1.jpg" alt="Image Not Found"/></Link>
                            <div className="jm-blog-date">
                                <h6>23</h6>
                                <span>Aug</span>
                            </div>
                        </div>
                        <div className="jm-blog-item-content">
                            <div className="jm-blog-item-content-meta-3">
                                <div className="jm-date-3">
                                    <Link to="#"><i className="fa-thin fa-user"></i>Admin</Link>
                                </div>
                                <div className="jm-comment-3">
                                    <Link to="#"><i className="fa-thin fa-comment"></i>2 Comments</Link>
                                </div>
                            </div>
                            <h4 className="jm-blog-title"><Link to="/blogDetailsPage">How to Work Instagram Marketing</Link></h4>
                            <Link to="/blogDetailsPage" className="read-more theme-btn-jm">Read More <i className="fa-thin fa-arrow-right-long"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="jm-blog-item jm-blog-layout-2 mb-55">
                        <div className="jm-blog-item-img w_img">
                            <Link to="/blogDetailsPage"><img src="assets/img/blog/2.jpg" alt="Image Not Found"/></Link>
                            <div className="jm-blog-date">
                                <h6>23</h6>
                                <span>Aug</span>
                            </div>
                        </div>
                        <div className="jm-blog-item-content">
                            <div className="jm-blog-item-content-meta-3">
                                <div className="jm-date-3">
                                    <Link to="#"><i className="fa-thin fa-user"></i>Admin</Link>
                                </div>
                                <div className="jm-comment-3">
                                    <Link to="#"><i className="fa-thin fa-comment"></i>2 Comments</Link>
                                </div>
                            </div>
                            <h4 className="jm-blog-title"><Link to="/blogDetailsPage">Businesses Thriving, Are Not Societies.</Link></h4>
                            <Link to="/blogDetailsPage" className="read-more theme-btn-jm">Read More <i className="fa-thin fa-arrow-right-long"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="jm-blog-item jm-blog-layout-2 mb-55">
                        <div className="jm-blog-item-img w_img">
                            <Link to="/blogDetailsPage"><img src="assets/img/blog/3.jpg" alt="Image Not Found"/></Link>
                            <div className="jm-blog-date">
                                <h6>23</h6>
                                <span>Aug</span>
                            </div>
                        </div>
                        <div className="jm-blog-item-content">
                            <div className="jm-blog-item-content-meta-3">
                                <div className="jm-date-3">
                                    <Link to="#"><i className="fa-thin fa-user"></i>Admin</Link>
                                </div>
                                <div className="jm-comment-3">
                                    <Link to="#"><i className="fa-thin fa-comment"></i>2 Comments</Link>
                                </div>
                            </div>
                            <h4 className="jm-blog-title"><Link to="/blogDetailsPage">Nike Shoes Attract More For Sales</Link></h4>
                            <Link to="/blogDetailsPage" className="read-more theme-btn-jm">Read More <i className="fa-thin fa-arrow-right-long"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blog