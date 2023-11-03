import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { JobContext } from '../../Context/JobContext'

const Header = () => {
    const {handleOpenForm, isSticky,handleOpen} = useContext(JobContext)
  return (
    <header className="heater-transparent">
        <div className={`jm-header-area header-sticky ${isSticky? 'sticky': ''}`}>
            <div className="container">
                <div className="jm-header-top d-none d-md-block">
                    <div className="row align-items-center">
                        <div className="col-xl-7 col-md-8">
                            <div className="jm-header-top-cta">
                                <span><i className="fas fa-map-marker-alt"></i>27/52 Avenue, NY USA 685.</span>
                                <span><i className="fal fa-clock"></i>Mon - Sat 8.00 - 18.00.</span>
                            </div>
                        </div>
                        <div className="col-xl-5 col-md-4">
                            <div className="jm-header-top-social">
                                <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                                <Link to="#"><i className="fab fa-pinterest-p"></i></Link>
                                <Link to="#"><i className="fab fa-twitter"></i></Link>
                                <Link to="#"><i className="fab fa-instagram"></i></Link>
                            </div>  
                        </div>
                    </div>
                </div>
                <div className="jm-header-main jm-header-padding ">
                    <div className="row align-items-center ">
                        <div className="col-xl-3 col-lg-3  col-7">
                            <div className="jm-header-logo">
                                <Link className="jm-logo" to="/">
                                    <img src="assets/img/logo/logo.png" alt="Image Not Fouund"/>
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 d-none d-lg-block">
                            <div className="jm-header-main-menu text-center" >
                                <nav className="jm-mobile-menu" id="jm-mobile-menu">
                                    <ul>
                                        <li className="menu-has-children">
                                            <Link to="/">Home</Link>
                                            <ul className="sub-menu">
                                                <li><Link to="/">Home 1</Link></li>
                                                <li><Link to="/homePage2">Home 2</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-has-children">
                                            <Link to="/jobPage">Jobs</Link>
                                            <ul className="sub-menu">
                                                <li><Link to="/jobPage">Jobs Grid</Link></li>
                                                <li><Link to="/jobListPage">Jobs List</Link></li>
                                                <li><Link to="/jobDetailsPage">Job Details</Link></li>
                                                <li><Link to="/jobCategoryPage">Jobs By Category</Link></li>
                                                <li><Link to="/employerListPage">Employer List</Link></li>
                                                <li><Link to="/employerGridPage">Employer Grid</Link></li>
                                                <li><Link to="/companyDetailsPage">Employer Details</Link></li>
                                                <li><Link to="/postJobPage">Post a Job</Link></li>
                                                <li><Link to="/addResumePage">Add Resume</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-has-children">
                                            <Link to="/candidateListPage">Candidates</Link>
                                            <ul className="sub-menu">
                                                <li><Link to="/candidatePage">Candidates Grid</Link></li>
                                                <li><Link to="/candidateListPage">Candidates List</Link></li>
                                                <li><Link to="/candidateDetailsPage">Candidates Details</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-has-children">
                                            <Link to="#">Pages</Link>
                                            <ul className="sub-menu">
                                                <li><Link to="/aboutPage">About</Link></li>
                                                <li><Link to="/servicePage">Services</Link></li>
                                                <li><Link to="/serviceDetailsPage">Services Details</Link></li>
                                                <li><Link to="/contactPage">Contact</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-has-children">
                                            <Link to="/blogPage">Blog</Link>
                                            <ul className="sub-menu">
                                                <li><Link to="/blogPage">Blog Grid</Link></li>
                                                <li><Link to="/blogListPage">Blog List</Link></li>
                                                <li><Link to="/blogDetailsPage">Blog Details</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-5">
                            <div className="jm-header-right  text-end d-flex align-items-center justify-content-end">
                                <Link to="#" className="jm-search d-none d-lg-block jm-header-action-search" role='button' onClick={handleOpenForm}><i className="fal fa-search"></i></Link>
                                <Link to="/candidateDetailsPage" className="jm-user"><i className="fal fa-user"></i></Link>
                                <Link to="/postJobPage" className="jm-theme-btn d-none d-lg-block">Post Job</Link>
                                <div className="jm-navbar-mobile-sign side-toggle d-lg-none d-inline-block" role='button' onClick={handleOpen}>
                                    <span className="dr-line-1"></span>
                                    <span className="dr-line-2"></span>
                                    <span className="dr-line-3"></span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header