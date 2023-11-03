import React from 'react'
import { Link } from 'react-router-dom'
import BlogVideoModal from './BlogVideoModal'
import BlogListSlider from './BlogListSlider'

const BlogList = () => {
  return (
    <div className="container">
        <div className="jm-blog-list-wrap pt-100 pb-60">
            <div className="row">
                <div className="col-xl-8 col-lg-8">
                    <div className="row">
                        <div className="col-12">
                            <div className="jm-blog-item-2 mb-40">
                                <div className="jm-blog-item-img-2 w_img">
                                    <Link to="/blogDetailsPage"><img src="assets/img/blog/blog-list-1.jpg" alt=""/></Link>
                                </div>
                                <div className="jm-blog-item-content-2">
                                    <div className="jm-blog-item-content-meta-2">
                                        <div className="jm-date-2">
                                            <Link to="#"><i className="fa-thin fa-calendar"></i>Dec-03-2018</Link>
                                        </div>
                                        <div className="jm-comment-2">
                                            <Link to="#"><i className="fa-thin fa-comment"></i>2 Comments</Link>
                                        </div>
                                    </div>
                                    <div className="jm-blog-item-content-info-2">
                                        <h4 className="title"><Link to="/blogDetailsPage">11 Tips and Trick to Help You Job in Web Developer</Link></h4>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form Lorem ipsum dolor sit amet consectetur.</p>
                                    </div>
                                </div>
                                <div className="jm-blog-item-bottom-2">
                                    <div className="jm-blog-item-admin-2">
                                        <div className="jm-admin-img-2">
                                            <img src="assets/img/blog/admin-1.jpg" alt=""/>
                                        </div>
                                        <div className="jm-admin-info-2">
                                            <h5 className="title"><Link to="#">Jenifer</Link></h5>
                                            <span>1 days ago</span>
                                        </div>
                                    </div>
                                    <div className="jm-blog-item-btn-2">
                                        <Link to="/blogDetailsPage" className="jm-blog-btn-2">Read More <i className="fa-thin fa-arrow-right-long"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <BlogVideoModal/>
                        </div>
                        <div className="col-12">
                            <div className="jm-blog-item-2 mb-40">
                                <BlogListSlider/>
                                <div className="jm-blog-item-content-2">
                                    <div className="jm-blog-item-content-meta-2">
                                        <div className="jm-date-2">
                                            <Link to="#"><i className="fa-thin fa-calendar"></i>Dec-03-2018</Link>
                                        </div>
                                        <div className="jm-comment-2">
                                            <Link to="#"><i className="fa-thin fa-comment"></i>2 Comments</Link>
                                        </div>
                                    </div>
                                    <div className="jm-blog-item-content-info-2">
                                        <h4 className="title"><Link to="/blogDetailsPage">Hey Job Seeker, Time To Level Up And Get Hired</Link></h4>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form Lorem ipsum dolor sit amet consectetur.</p>
                                    </div>
                                </div>
                                <div className="jm-blog-item-bottom-2">
                                    <div className="jm-blog-item-admin-2">
                                        <div className="jm-admin-img-2">
                                            <img src="assets/img/blog/admin-3.jpg" alt=""/>
                                        </div>
                                        <div className="jm-admin-info-2">
                                            <h5 className="title"><Link to="#">Johnny</Link></h5>
                                            <span>2 days ago</span>
                                        </div>
                                    </div>
                                    <div className="jm-blog-item-btn-2">
                                        <Link to="/blogDetailsPage" className="jm-blog-btn-2">Read More <i className="fa-thin fa-arrow-right-long"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="jm-pagination mb-40 text-center">
                                <Link to="#" className="jm-pagination-btn"><i className="fa-thin fa-arrow-left"></i></Link>
                                <Link to="#" className="jm-pagination-btn active">1</Link>
                                <Link to="#" className="jm-pagination-btn">2</Link>
                                <Link to="#" className="jm-pagination-btn"><i className="fa-thin fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4">
                    <div className="jm-blog-sidebar ml-40">
                        <div className="jm-blog-sidebar-widget mb-35">
                            <div className="jm-blog-sidebar-inner">
                                <h3 className="jm-blog-sidebar-widget-title">Search</h3>
                            </div>
                            <form action="#" className="m-blog-sidebar-form">
                                <input className="input-width" name="search_location" type="text" placeholder="Search"/>
                                <button type="submit" className="blog-sidebar-btn"><i className="fa-thin fa-magnifying-glass"></i></button>
                            </form>
                        </div>
                        <div className="jm-blog-sidebar-widget mb-35">
                            <div className="jm-blog-sidebar-inner">
                                <h3 className="jm-blog-sidebar-widget-title">Latest Blog</h3>
                            </div>
                            <div className="jm-blog-sidebar-post mb-20">
                                <div className="jm-blog-sidebar-post-img">
                                    <Link to="/blogDetailsPage"><img src="assets/img/blog/admin-1.jpg" alt=""/></Link>
                                </div>
                                <div className="jm-blog-sidebar-post-content">
                                    <h6 className="title"><Link to="/blogDetailsPage">How to Work Instagram</Link></h6>
                                    <span>25 May, 2022</span>
                                </div>
                            </div>
                            <div className="jm-blog-sidebar-post mb-20">
                                <div className="jm-blog-sidebar-post-img">
                                    <Link to="/blogDetailsPage"><img src="assets/img/blog/admin-2.jpg" alt=""/></Link>
                                </div>
                                <div className="jm-blog-sidebar-post-content">
                                    <h6 className="title"><Link to="/blogDetailsPage">How to Work Instagram</Link></h6>
                                    <span>25 May, 2022</span>
                                </div>
                            </div>
                            <div className="jm-blog-sidebar-post">
                                <div className="jm-blog-sidebar-post-img">
                                    <Link to="/blogDetailsPage"><img src="assets/img/blog/admin-3.jpg" alt=""/></Link>
                                </div>
                                <div className="jm-blog-sidebar-post-content">
                                    <h6 className="title"><Link to="/blogDetailsPage">Create a Wordpress Site</Link></h6>
                                    <span>25 May, 2022</span>
                                </div>
                            </div>
                        </div>
                        <div className="jm-blog-sidebar-widget mb-35">
                            <div className="jm-blog-sidebar-inner">
                                <h3 className="jm-blog-sidebar-widget-title blog-category">by Categories</h3>
                            </div>
                            <div className="jm-blog-sidebar-category">
                                <ul>
                                    <li><Link to="#"><i className="fa-thin fa-angle-right"></i>Health Care</Link></li>
                                    <li><Link to="#"><i className="fa-thin fa-angle-right"></i>Management</Link></li>
                                    <li><Link to="#"><i className="fa-thin fa-angle-right"></i>Marketing</Link></li>
                                    <li><Link to="#"><i className="fa-thin fa-angle-right"></i>UX/UI Developer</Link></li>
                                    <li><Link to="#"><i className="fa-thin fa-angle-right"></i>WEB Developer</Link></li>
                                    <li><Link to="#"><i className="fa-thin fa-angle-right"></i>Graphic designer</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="jm-blog-sidebar-widget mb-30">
                            <div className="jm-blog-sidebar-inner">
                                <h3 className="jm-blog-sidebar-widget-title">Tags</h3>
                            </div>
                            <div className="jm-blog-sidebar-tag">
                                <Link to="#">Development</Link>
                                <Link to="#">UI/UX</Link>
                                <Link to="#">Devops</Link>
                                <Link to="#">Design</Link>
                                <Link to="#">Mobile App</Link>
                                <Link to="#">Programing</Link>
                                <Link to="#">HTML</Link>
                                <Link to="#">C++</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogList