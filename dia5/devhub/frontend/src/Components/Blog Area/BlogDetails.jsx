import React from 'react'
import { Link } from 'react-router-dom'

const BlogDetails = () => {
  return (
    <section className="jm-blog-details-area pt-100 pb-60">
        <div className="container">
            <div className="row">
                <div className="col-xl-8 col-lg-8">
                    <div className="jm-blog-details-wrap">
                        <div className="jm-blog-details-img w_img mb-25">
                            <img src="assets/img/blog/blog-list-1.jpg" alt=""/>
                        </div>
                        <div className="jm-blog-details-content">
                            <div className="jm-blog-details-meta mb-15">
                                <Link to="#"><i className="fa-thin fa-user"></i>Jenifer</Link>
                                <Link to="#"><i className="fa-thin fa-calendar"></i>Dec-03-2018</Link>
                            </div>
                            <p className="text mb-15">
                                It is a long established fact that a reader will be distracted by the readable content of a page is
                                when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                                distribution of letters, as opposed to using ique maiestatis sum quod sum ut alienum nec et to
                                summo possim persequeris vix mea. Adhuc quodsi qui, sit no tale essent electramei sum sums
                                rodesset in pro, quo scripta feugait vidisse. Lorem ipsum dolor sit amet, eu duo ferri labor dicat
                                Mea ex modo reque senserit, et sed hinc dolor, scaevola sum salutandi expetendis vix ne his 
                                quod mundi consequat sum. There are not many of passages of lorem 
                            </p>
                            <p className="text mb-0">
                                It is a long established fact that a reader will be distracted by the readable content of a page is
                                when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                                distribution of letters,
                            </p>
                        </div>
                        <div className="jm-blog-details-quote mb-40 bg-default">
                            <span className="quote-icon"><i className="fa-solid fa-quote-right"></i></span>
                            <p>There are many variations of passages of Lorem Ipsum Fasts There 
                                many variations of passages of Lorem Ipsum Fastsby injected ,
                                by injected humour, or randomise.</p>
                            <h4 className="title">Roden Boras <span> / Founder</span></h4>
                        </div>
                        <div className="jm-blog-details-recent mb-40 pb-45">
                            <div className="jm-blog-details-recent-item">
                                <div className="jm-blog-details-item-info mb-15">
                                    <div className="jm-blog-details-item-icon">
                                        <span><i className="fa-thin fa-layer-group"></i></span>
                                    </div>
                                    <div className="jm-blog-details-item-head">
                                        <h4 className="title"><Link to="#">Software Development</Link></h4>
                                    </div>
                                </div>
                                <div className="jm-blog-details-item-text">
                                    <p>There are many variations of passages of corem Ipsum.</p>
                                </div>
                            </div>
                            <div className="jm-blog-details-recent-item">
                                <div className="jm-blog-details-item-info mb-15">
                                    <div className="jm-blog-details-item-icon">
                                        <span><i className="fa-thin fa-copy"></i></span>
                                    </div>
                                    <div className="jm-blog-details-item-head">
                                        <h4 className="title"><Link to="#">Service Development</Link></h4>
                                    </div>
                                </div>
                                <div className="jm-blog-details-item-text">
                                    <p>There are many variations of passages of corem Ipsum.</p>
                                </div>
                            </div>
                        </div>
                        <div className="jm-blog-details-comment mb-45">
                            <h3 className="jm-blog-details-title">Comment (2)</h3>
                            <div className="jm-blog-details-comment-box">
                                <div className="jm-blog-details-box-img">
                                    <img src="assets/img/blog/admin-3.jpg" alt=""/>
                                </div>
                                <div className="jm-blog-details-box-info">
                                    <h6 className="title">Roden Boras</h6>
                                    <p>Lorem ipsum is simply free textdolor sit amet, consectetur notted adipisicing elit sed do iusmod tempor incididu.</p>
                                    <div className="jm-blog-details-box-bottom">
                                        <span>November 16, 2018</span>
                                        <Link to="#">Reply</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="jm-blog-details-comment-box ml-80">
                                <div className="jm-blog-details-box-img">
                                    <img src="assets/img/blog/admin-2.jpg" alt=""/>
                                </div>
                                <div className="jm-blog-details-box-info">
                                    <h6 className="title">Nancy</h6>
                                    <p>Lorem ipsum is simply free textdolor sit amet, consectetur notted adipisicing elit sed do iusmod tempor incididu.</p>
                                    <div className="jm-blog-details-box-bottom">
                                        <span>November 16, 2018</span>
                                        <Link to="#">Reply</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="jm-blog-details-comment-box">
                                <div className="jm-blog-details-box-img">
                                    <img src="assets/img/blog/admin-1.jpg" alt=""/>
                                </div>
                                <div className="jm-blog-details-box-info">
                                    <h6 className="title">Jenifer</h6>
                                    <p>Lorem ipsum is simply free textdolor sit amet, consectetur notted adipisicing elit sed do iusmod tempor incididu.</p>
                                    <div className="jm-blog-details-box-bottom">
                                        <span>November 16, 2018</span>
                                        <Link to="#">Reply</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="jm-blog-details-reply mb-40">
                            <h3 className="jm-blog-details-title">Leave a Comment</h3>
                            <form action="#">
                                <div className="row">
                                    <div className="col-xl-6">
                                        <input type="text" placeholder="Your Name"/>
                                    </div>
                                    <div className="col-xl-6">
                                        <input type="email" placeholder="Your Email"/>
                                    </div>
                                    <div className="col-12">
                                        <textarea name="message" cols="30" rows="10" placeholder="Wright your comment here …"></textarea>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="jm-theme-btn">Post Comments</button>
                                    </div>
                                </div>
                            </form>
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
                            <div className="jm-blog-sidebar-inner blog-category">
                                <h3 className="jm-blog-sidebar-widget-title">by Categories</h3>
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
    </section>
  )
}

export default BlogDetails