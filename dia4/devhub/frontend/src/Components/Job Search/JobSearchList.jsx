import React from 'react'
import { Link } from 'react-router-dom'

const JobSearchList = () => {
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
                    <div className="jm-candidates-item-wrapper pt-100 pb-100">
                        <div className="row">

                            <div className="col-xl-12">
                                <div className="jm-latest-job-layout-3 jm-candidate-layout-list">
                                    <div className="jm-latest-job-layout-3-wrapper">
                                        <div className="jm-latest-job-layout-3-img">
                                            <Link to="/candidateDetailsPage"><img src="assets/img/team/9.jpg" alt="img"/></Link>
                                        </div>
                                        <div className="jm-latest-job-layout-3-info">
                                            <span className="jm-candidate-list-designation">HTML Developer</span>
                                            <h4 className="jm-latest-job-layout-3-info-title"><Link to="/candidateDetailsPage">Jennifa Lottery</Link> <span className="jm-candidate-rating"><i className="fa-thin fa-star"></i> 4.9</span></h4>
                                            <div className="jm-latest-job-layout-3-info-meta">
                                                <span><i className="fa-thin fa-tags"></i>HTML, CSS3</span>
                                                <span><i className="fa-thin fa-location-dot"></i>Cupertino, USA</span>
                                                <span><i className="fa-thin fa-money-bill-1"></i>$5000 - $1000</span>
                                                <span><i className="fa-thin fa-clock"></i>Full Time</span>
                                                
                                            </div>
                                        </div>
                                        <div className="jm-latest-job-layout-3-submit">
                                            <Link to="/candidateDetailsPage" className="jm-latest-job-layout-3-btn">View Profile</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="jm-latest-job-layout-3 jm-candidate-layout-list">
                                    <div className="jm-latest-job-layout-3-wrapper">
                                        <div className="jm-latest-job-layout-3-img">
                                            <Link to="/candidateDetailsPage"><img src="assets/img/team/10.jpg" alt="img"/></Link>
                                        </div>
                                        <div className="jm-latest-job-layout-3-info">
                                            <span className="jm-candidate-list-designation">WP Developer</span>
                                            <h4 className="jm-latest-job-layout-3-info-title"><Link to="/candidateDetailsPage">Angelina Jelly</Link> <span className="jm-candidate-rating"><i className="fa-thin fa-star"></i> 4.9</span></h4>
                                            <div className="jm-latest-job-layout-3-info-meta">
                                                <span><i className="fa-thin fa-tags"></i>WordPress, PHP</span>
                                                <span><i className="fa-thin fa-location-dot"></i>Cupertino, USA</span>
                                                <span><i className="fa-thin fa-money-bill-1"></i>$15000 - $5000</span>
                                                <span><i className="fa-thin fa-clock"></i>Full Time</span>
                                                
                                            </div>
                                        </div>
                                        <div className="jm-latest-job-layout-3-submit">
                                            <Link to="/candidateDetailsPage" className="jm-latest-job-layout-3-btn">View Profile</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="jm-latest-job-layout-3 jm-candidate-layout-list">
                                    <div className="jm-latest-job-layout-3-wrapper">
                                        <div className="jm-latest-job-layout-3-img">
                                            <Link to="/candidateDetailsPage"><img src="assets/img/team/11.jpg" alt="img"/></Link>
                                        </div>
                                        <div className="jm-latest-job-layout-3-info">
                                            <span className="jm-candidate-list-designation">HTML Developer</span>
                                            <h4 className="jm-latest-job-layout-3-info-title"><Link to="/candidateDetailsPage">Abraham Linkon</Link> <span className="jm-candidate-rating"><i className="fa-thin fa-star"></i> 4.9</span></h4>
                                            <div className="jm-latest-job-layout-3-info-meta">
                                                <span><i className="fa-thin fa-tags"></i>HTML, CSS3</span>
                                                <span><i className="fa-thin fa-location-dot"></i>Cupertino, USA</span>
                                                <span><i className="fa-thin fa-money-bill-1"></i>$5000 - $1000</span>
                                                <span><i className="fa-thin fa-clock"></i>Part Time</span>
                                                
                                            </div>
                                        </div>
                                        <div className="jm-latest-job-layout-3-submit">
                                            <Link to="/candidateDetailsPage" className="jm-latest-job-layout-3-btn">View Profile</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="jm-latest-job-layout-3 jm-candidate-layout-list">
                                    <div className="jm-latest-job-layout-3-wrapper">
                                        <div className="jm-latest-job-layout-3-img">
                                            <Link to="/candidateDetailsPage"><img src="assets/img/team/8.jpg" alt="img"/></Link>
                                        </div>
                                        <div className="jm-latest-job-layout-3-info">
                                            <span className="jm-candidate-list-designation">Laravel Developer</span>
                                            <h4 className="jm-latest-job-layout-3-info-title"><Link to="/candidateDetailsPage">Mikel Smith</Link> <span className="jm-candidate-rating"><i className="fa-thin fa-star"></i> 4.9</span></h4>
                                            <div className="jm-latest-job-layout-3-info-meta">
                                                <span><i className="fa-thin fa-tags"></i>PHP, CMS</span>
                                                <span><i className="fa-thin fa-location-dot"></i>Cupertino, USA</span>
                                                <span><i className="fa-thin fa-money-bill-1"></i>$5000 - $1000</span>
                                                <span><i className="fa-thin fa-clock"></i>Full Time</span>
                                                
                                            </div>
                                        </div>
                                        <div className="jm-latest-job-layout-3-submit">
                                            <Link to="/candidateDetailsPage" className="jm-latest-job-layout-3-btn">View Profile</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="jm-latest-job-layout-3 jm-candidate-layout-list">
                                    <div className="jm-latest-job-layout-3-wrapper">
                                        <div className="jm-latest-job-layout-3-img">
                                            <Link to="/candidateDetailsPage"><img src="assets/img/team/7.jpg" alt="img"/></Link>
                                        </div>
                                        <div className="jm-latest-job-layout-3-info">
                                            <span className="jm-candidate-list-designation">Fontend Developer</span>
                                            <h4 className="jm-latest-job-layout-3-info-title"><Link to="/candidateDetailsPage">Virat Kohly</Link> <span className="jm-candidate-rating"><i className="fa-thin fa-star"></i> 4.9</span></h4>
                                            <div className="jm-latest-job-layout-3-info-meta">
                                                <span><i className="fa-thin fa-tags"></i>HTML, CSS3</span>
                                                <span><i className="fa-thin fa-location-dot"></i>Cupertino, USA</span>
                                                <span><i className="fa-thin fa-money-bill-1"></i>$5000 - $1000</span>
                                                <span><i className="fa-thin fa-clock"></i>Full Time</span>
                                                
                                            </div>
                                        </div>
                                        <div className="jm-latest-job-layout-3-submit">
                                            <Link to="/candidateDetailsPage" className="jm-latest-job-layout-3-btn">View Profile</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="jm-latest-job-layout-3 jm-candidate-layout-list">
                                    <div className="jm-latest-job-layout-3-wrapper">
                                        <div className="jm-latest-job-layout-3-img">
                                            <Link to="/candidateDetailsPage"><img src="assets/img/team/6.jpg" alt="img"/></Link>
                                        </div>
                                        <div className="jm-latest-job-layout-3-info">
                                            <span className="jm-candidate-list-designation">UI Designer</span>
                                            <h4 className="jm-latest-job-layout-3-info-title"><Link to="/candidateDetailsPage">Jennifar Loppez</Link> <span className="jm-candidate-rating"><i className="fa-thin fa-star"></i> 4.9</span></h4>
                                            <div className="jm-latest-job-layout-3-info-meta">
                                                <span><i className="fa-thin fa-tags"></i>XD, Figma</span>
                                                <span><i className="fa-thin fa-location-dot"></i>Cupertino, USA</span>
                                                <span><i className="fa-thin fa-money-bill-1"></i>$5000 - $1000</span>
                                                <span><i className="fa-thin fa-clock"></i>Full Time</span>
                                                
                                            </div>
                                        </div>
                                        <div className="jm-latest-job-layout-3-submit">
                                            <Link to="/candidateDetailsPage" className="jm-latest-job-layout-3-btn">View Profile</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="jm-latest-job-layout-3 jm-candidate-layout-list">
                                    <div className="jm-latest-job-layout-3-wrapper">
                                        <div className="jm-latest-job-layout-3-img">
                                            <Link to="/candidateDetailsPage"><img src="assets/img/team/5.jpg" alt="img"/></Link>
                                        </div>
                                        <div className="jm-latest-job-layout-3-info">
                                            <span className="jm-candidate-list-designation">Product Manager</span>
                                            <h4 className="jm-latest-job-layout-3-info-title"><Link to="/candidateDetailsPage">Elon Mask</Link> <span className="jm-candidate-rating"><i className="fa-thin fa-star"></i> 4.9</span></h4>
                                            <div className="jm-latest-job-layout-3-info-meta">
                                                <span><i className="fa-thin fa-tags"></i>Human, Management</span>
                                                <span><i className="fa-thin fa-location-dot"></i>Cupertino, USA</span>
                                                <span><i className="fa-thin fa-money-bill-1"></i>$5000 - $1000</span>
                                                <span><i className="fa-thin fa-clock"></i>Full Time</span>
                                                
                                            </div>
                                        </div>
                                        <div className="jm-latest-job-layout-3-submit">
                                            <Link to="/candidateDetailsPage" className="jm-latest-job-layout-3-btn">View Profile</Link>
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

export default JobSearchList