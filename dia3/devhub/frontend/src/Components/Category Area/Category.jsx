import React from 'react'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <section className="jm-category-area light-bg pt-85 pb-70">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="jm-section-title mb-40 text-center">
                        <h2 className="title mb-10">Categories</h2>
                        <p className="text">Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <div className="jm-category-item-new mb-30">
                        <div className="jm-category-item-img-new w_img">
                            <Link to="/jobDetailsPage"><img src="assets/img/category/dataentry.jpg" alt=""/></Link>
                        </div>
                        <div className="jm-category-item-content-new">
                            <div className="jm-category-item-content-inner-new">
                                <span className="jm-category-item-icon-new"><i className="fa-thin fa-computer"></i></span>
                                <h4 className="jm-cat-title-new"><Link to="/jobDetailsPage">IT Software</Link></h4>
                                <span className="jm-job-posted-new">Posted Jobs: <span className="jm-job-count-new">3204</span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <div className="jm-category-item-new mb-30">
                        <div className="jm-category-item-img-new w_img">
                            <Link to="/jobDetailsPage"><img src="assets/img/category/delivery.jpg" alt=""/></Link>
                        </div>
                        <div className="jm-category-item-content-new">
                            <div className="jm-category-item-content-inner-new">
                                <span className="jm-category-item-icon-new"><i className="fa-thin fa-truck"></i></span>
                                <h4 className="jm-cat-title-new"><Link to="/jobDetailsPage">Delivery Jobs</Link></h4>
                                <span className="jm-job-posted-new">Posted Jobs: <span className="jm-job-count-new">2505</span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <div className="jm-category-item-new mb-30">
                        <div className="jm-category-item-img-new w_img">
                            <Link to="/jobDetailsPage"><img src="assets/img/category/customercare.jpg" alt=""/></Link>
                        </div>
                        <div className="jm-category-item-content-new">
                            <div className="jm-category-item-content-inner-new">
                                <span className="jm-category-item-icon-new"><i className="fa-thin fa-chart-line"></i></span>
                                <h4 className="jm-cat-title-new"><Link to="/jobDetailsPage">Sales Market</Link></h4>
                                <span className="jm-job-posted-new">Posted Jobs: <span className="jm-job-count-new">1505</span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <div className="jm-category-item-new mb-30">
                        <div className="jm-category-item-img-new w_img">
                            <Link to="/jobDetailsPage"><img src="assets/img/category/receptionist.jpg" alt=""/></Link>
                        </div>
                        <div className="jm-category-item-content-new">
                            <div className="jm-category-item-content-inner-new">
                                <span className="jm-category-item-icon-new"><i className="fa-thin fa-user-headset"></i></span>
                                <h4 className="jm-cat-title-new"><Link to="/jobDetailsPage">Call Center</Link></h4>
                                <span className="jm-job-posted-new">Posted Jobs: <span className="jm-job-count-new">905</span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <div className="jm-category-item-new mb-30">
                        <div className="jm-category-item-img-new w_img">
                            <Link to="/jobDetailsPage"><img src="assets/img/category/teacher.jpg" alt=""/></Link>
                        </div>
                        <div className="jm-category-item-content-new">
                            <div className="jm-category-item-content-inner-new">
                                <span className="jm-category-item-icon-new"><i className="fa-thin fa-person-chalkboard"></i></span>
                                <h4 className="jm-cat-title-new"><Link to="/jobDetailsPage">Tutor/Teacher</Link></h4>
                                <span className="jm-job-posted-new">Posted Jobs: <span className="jm-job-count-new">2505</span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <div className="jm-category-item-new mb-30">
                        <div className="jm-category-item-img-new w_img">
                            <Link to="/jobDetailsPage"><img src="assets/img/category/development.jpg" alt=""/></Link>
                        </div>
                        <div className="jm-category-item-content-new">
                            <div className="jm-category-item-content-inner-new">
                                <span className="jm-category-item-icon-new"><i className="fa-thin fa-notes-medical"></i></span>
                                <h4 className="jm-cat-title-new"><Link to="/jobDetailsPage">Theme Build</Link></h4>
                                <span className="jm-job-posted-new">Posted Jobs: <span className="jm-job-count-new">2205</span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <div className="jm-category-item-new mb-30">
                        <div className="jm-category-item-img-new w_img">
                            <Link to="/jobDetailsPage"><img src="assets/img/category/designer.jpg" alt=""/></Link>
                        </div>
                        <div className="jm-category-item-content-new">
                            <div className="jm-category-item-content-inner-new">
                                <span className="jm-category-item-icon-new"><i className="fa-thin fa-person-chalkboard"></i></span>
                                <h4 className="jm-cat-title-new"><Link to="/jobDetailsPage">UI Designer</Link></h4>
                                <span className="jm-job-posted-new">Posted Jobs: <span className="jm-job-count-new">2505</span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <div className="jm-category-item-new mb-30">
                        <div className="jm-category-item-img-new w_img">
                            <Link to="/jobDetailsPage"><img src="assets/img/category/software.jpg" alt=""/></Link>
                        </div>
                        <div className="jm-category-item-content-new">
                            <div className="jm-category-item-content-inner-new">
                                <span className="jm-category-item-icon-new"><i className="fa-thin fa-notes-medical"></i></span>
                                <h4 className="jm-cat-title-new"><Link to="/jobDetailsPage">Software Making</Link></h4>
                                <span className="jm-job-posted-new">Posted Jobs: <span className="jm-job-count-new">2205</span></span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Category