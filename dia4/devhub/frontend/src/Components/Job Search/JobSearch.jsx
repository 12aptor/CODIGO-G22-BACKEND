import React from 'react'
import { Link } from 'react-router-dom'

const JobSearch = () => {
  return (
    <div className="jm-jobs-search-under-hero">
        <div className="container">
            <div className="jm-candidates-search-wrapper">
                <div className="jm-candidates-search-top-text">
                    <h4 className="jm-candidates-search-title">Find Your Candidates</h4>
                </div>
                <div className="jm-candidates-search-wrapper-inner-flex">
                    <div className="jm-candidates-search-wrapper-inner-input-fields">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <input type="text" placeholder="Keywords..."/>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <input type="text" placeholder="Location"/>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <select className="jm-candidates-search-select">
                                    <option>Choose Type</option>
                                    <option>Freelance</option>
                                    <option>Full Time</option>
                                    <option>Part Time</option>
                                </select>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <select className="jm-candidates-search-select">
                                    <option>Choose Category</option>
                                    <option>Developer</option>
                                    <option>Medical</option>
                                    <option>Technology</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="jm-candidates-search-wrapper-inner-input-submit"><span className="jm-candidates-search-icon"><i className="fa-duotone fa-magnifying-glass"></i></span>Search</button>
                </div>
            </div>
            <div className="jm-candidates-item-wrapper pt-100 pb-70">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="jm-team-item-2 mb-30">
                            <div className="jm-team-item-body-2">
                                <div className="jm-team-item-img-2 w_img">
                                    <img src="assets/img/team/8.jpg" alt="Image Not Found"/>
                                </div>
                                <div className="jm-team-item-content-2">
                                    <h4 className="title"><Link to="/candidateDetailsPage">Dwayne Johnson</Link></h4>
                                    <span>Web Developer (6 Yrs Exp)</span>
                                    <div className="jm-team-item-social-2">
                                        <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                                        <Link to="#"><i className="fab fa-pinterest-p"></i></Link>
                                        <Link to="#"><i className="fab fa-twitter"></i></Link>
                                        <Link to="#"><i className="fab fa-instagram"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="jm-team-item-btn-2">
                                <Link className="jm-theme-btn jm-transparent-btn" to="/candidateDetailsPage">View Profile</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="jm-team-item-2 mb-30">
                            <div className="jm-team-item-body-2">
                                <div className="jm-team-item-img-2 w_img">
                                    <img src="assets/img/team/5.jpg" alt="Image Not Found"/>
                                </div>
                                <div className="jm-team-item-content-2">
                                    <h4 className="title"><Link to="/candidateDetailsPage">Jon William</Link></h4>
                                    <span>Web Developer (6 Yrs Exp)</span>
                                    <div className="jm-team-item-social-2">
                                        <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                                        <Link to="#"><i className="fab fa-pinterest-p"></i></Link>
                                        <Link to="#"><i className="fab fa-twitter"></i></Link>
                                        <Link to="#"><i className="fab fa-instagram"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="jm-team-item-btn-2">
                                <Link className="jm-theme-btn jm-transparent-btn" to="/candidateDetailsPage">View Profile</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="jm-team-item-2 mb-30">
                            <div className="jm-team-item-body-2">
                                <div className="jm-team-item-img-2 w_img">
                                    <img src="assets/img/team/10.jpg" alt="Image Not Found"/>
                                </div>
                                <div className="jm-team-item-content-2">
                                    <h4 className="title"><Link to="/candidateDetailsPage">Jennifer Blount</Link></h4>
                                    <span>UX/UI Designer (6 Yrs Exp)</span>
                                    <div className="jm-team-item-social-2">
                                        <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                                        <Link to="#"><i className="fab fa-pinterest-p"></i></Link>
                                        <Link to="#"><i className="fab fa-twitter"></i></Link>
                                        <Link to="#"><i className="fab fa-instagram"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="jm-team-item-btn-2">
                                <Link className="jm-theme-btn jm-transparent-btn" to="/candidateDetailsPage">View Profile</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="jm-team-item-2 mb-30">
                            <div className="jm-team-item-body-2">
                                <div className="jm-team-item-img-2 w_img">
                                    <img src="assets/img/team/11.jpg" alt="Image Not Found"/>
                                </div>
                                <div className="jm-team-item-content-2">
                                    <h4 className="title"><Link to="/candidateDetailsPage">christopher henry</Link></h4>
                                    <span>Marketing Expert (8 Yrs Exp)</span>
                                    <div className="jm-team-item-social-2">
                                        <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                                        <Link to="#"><i className="fab fa-pinterest-p"></i></Link>
                                        <Link to="#"><i className="fab fa-twitter"></i></Link>
                                        <Link to="#"><i className="fab fa-instagram"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="jm-team-item-btn-2">
                                <Link className="jm-theme-btn jm-transparent-btn" to="/candidateDetailsPage">View Profile</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="jm-team-item-2 mb-30">
                            <div className="jm-team-item-body-2">
                                <div className="jm-team-item-img-2 w_img">
                                    <img src="assets/img/team/9.jpg" alt="Image Not Found"/>
                                </div>
                                <div className="jm-team-item-content-2">
                                    <h4 className="title"><Link to="/candidateDetailsPage">Alexander Jeny</Link></h4>
                                    <span>PHP Developer (5 Yrs Exp)</span>
                                    <div className="jm-team-item-social-2">
                                        <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                                        <Link to="#"><i className="fab fa-pinterest-p"></i></Link>
                                        <Link to="#"><i className="fab fa-twitter"></i></Link>
                                        <Link to="#"><i className="fab fa-instagram"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="jm-team-item-btn-2">
                                <Link className="jm-theme-btn jm-transparent-btn" to="/candidateDetailsPage">View Profile</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="jm-team-item-2 mb-30">
                            <div className="jm-team-item-body-2">
                                <div className="jm-team-item-img-2 w_img">
                                    <img src="assets/img/team/3.jpg" alt="Image Not Found"/>
                                </div>
                                <div className="jm-team-item-content-2">
                                    <h4 className="title"><Link to="/candidateDetailsPage">Jhon Smith</Link></h4>
                                    <span>PHP Developer (5 Yrs Exp)</span>
                                    <div className="jm-team-item-social-2">
                                        <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                                        <Link to="#"><i className="fab fa-pinterest-p"></i></Link>
                                        <Link to="#"><i className="fab fa-twitter"></i></Link>
                                        <Link to="#"><i className="fab fa-instagram"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="jm-team-item-btn-2">
                                <Link className="jm-theme-btn jm-transparent-btn" to="/candidateDetailsPage">View Profile</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="jm-team-item-2 mb-30">
                            <div className="jm-team-item-body-2">
                                <div className="jm-team-item-img-2 w_img">
                                    <img src="assets/img/team/2.jpg" alt="Image Not Found"/>
                                </div>
                                <div className="jm-team-item-content-2">
                                    <h4 className="title"><Link to="/candidateDetailsPage">Angenlina</Link></h4>
                                    <span>PHP Developer (5 Yrs Exp)</span>
                                    <div className="jm-team-item-social-2">
                                        <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                                        <Link to="#"><i className="fab fa-pinterest-p"></i></Link>
                                        <Link to="#"><i className="fab fa-twitter"></i></Link>
                                        <Link to="#"><i className="fab fa-instagram"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="jm-team-item-btn-2">
                                <Link className="jm-theme-btn jm-transparent-btn" to="/candidateDetailsPage">View Profile</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="jm-team-item-2 mb-30">
                            <div className="jm-team-item-body-2">
                                <div className="jm-team-item-img-2 w_img">
                                    <img src="assets/img/team/1.jpg" alt="Image Not Found"/>
                                </div>
                                <div className="jm-team-item-content-2">
                                    <h4 className="title"><Link to="/candidateDetailsPage">Alexander</Link></h4>
                                    <span>PHP Developer (5 Yrs Exp)</span>
                                    <div className="jm-team-item-social-2">
                                        <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                                        <Link to="#"><i className="fab fa-pinterest-p"></i></Link>
                                        <Link to="#"><i className="fab fa-twitter"></i></Link>
                                        <Link to="#"><i className="fab fa-instagram"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="jm-team-item-btn-2">
                                <Link className="jm-theme-btn jm-transparent-btn" to="/candidateDetailsPage">View Profile</Link>
                            </div>
                        </div>
                    </div>


                </div>


            </div>
        </div>
    </div>
  )
}

export default JobSearch