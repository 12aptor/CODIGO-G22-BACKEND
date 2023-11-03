import React from 'react'
import { Link } from 'react-router-dom'

const Footer2 = () => {
  return (
    <footer className="jm-footer-area-3">
            <div className="jm-footer-top-3 pt-90 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="jm-footer-top-logo-3 text-center mb-50">
                                <Link to="/homePage2"><img src="assets/img/logo/logowhite.png" alt=""/></Link>
                            </div>
                            <div className="jm-footer-top-subscribe-3">
                                <div className="row align-items-center">
                                    <div className="col-xl-5 col-lg-5">
                                        <div className="jm-footer-top-subscribe-content-3 mb-20 mb-lg-0">
                                            <div className="jm-footer-top-subscribe-icon-3">
                                                <i className="fa-thin fa-envelope-open-text"></i>
                                            </div>
                                            <div className="jm-footer-top-subscribe-info-3">
                                                <span className="subtitle">Get hot job alert</span>
                                                <h3 className="title">Subscribe Us</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-lg-7">
                                        <div className="jm-footer-top-subscribe-form-3">
                                            <form action="#">
                                                <input type="email" placeholder="Enter Email Adress"/>
                                                <button className="jm-footer-subscribe-btn-3" type="submit">Submit</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="jm-footer-bottom-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-7">
                            <div className="jm-footer-bottom-menu-3 mb-3 mb-sm-2 mb-lg-0 text-center text-sm-start">
                                <ul>
                                    <li><Link to="/aboutPage">About</Link></li>
                                    <li><Link to="/blogPage">Blog</Link></li>
                                    <li><Link to="/aboutPage">Privacy</Link></li>
                                    <li><Link to="/contactPage">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-12 order-3 order-lg-2">
                            <div className="jm-footer-copyright-text-3 text-center">
                                <p>&copy; Theme by <Link to="https://themeforest.net/user/codebasket/portfolio" target="_blank">Codebasket</Link>. All Rights Reserved.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6  col-sm-5 order-2 order-lg-3">
                            <div className="jm-footer-bottom-social-3 text-sm-end text-center mb-3 mb-sm-2 mb-lg-0">
                                <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                                <Link to="#"><i className="fab fa-pinterest-p"></i></Link>
                                <Link to="#"><i className="fab fa-twitter"></i></Link>
                                <Link to="#"><i className="fab fa-instagram"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
  )
}

export default Footer2