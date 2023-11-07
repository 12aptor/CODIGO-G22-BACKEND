import React from 'react'
import Counter from './Counter'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="jm-footer-area-2">
            <div className="jm-footer-top-2">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xxl-5 col-xl-4  col-lg-4">
                            <div className="jm-footer-top-subscribe-2 my-5 my-lg-0 mr-20">
                                <form action="#">
                                    <input type="email" placeholder="Email Please"/>
                                    <button type="submit" className="jm-footer-subscribe-btn-2">Subscribe</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-xxl-7 col-xl-8  col-lg-8">
                            <Counter/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="jm-footer-middle-2 pt-100 pb-55">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-8">
                            <div className="jm-footer-widget-2 mb-40">
                                <div className="jm-footer-widget-logo-2">
                                    <Link to="/"><img src="assets/img/logo/logowhite.png" alt=""/></Link>
                                </div>
                                <div className="jm-footer-widget-content-2">
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiu doloremque laudantium</p>
                                    <div className="jm-footer-widget-social-2">
                                        <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                                        <Link to="#"><i className="fab fa-pinterest-p"></i></Link>
                                        <Link to="#"><i className="fab fa-twitter"></i></Link>
                                        <Link to="#"><i className="fab fa-instagram"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 d-flex justify-content-lg-center">
                            <div className="jm-footer-widget-2 mb-40">
                                <h4 className="jm-footer-widget-title-2">Useful link</h4>
                                <div className="jm-footer-widget-menu-2">
                                    <ul>
                                        <li><Link to="/aboutPage">About Us</Link></li>
                                        <li><Link to="/servicePage">Services</Link></li>
                                        <li><Link to="/jobPage">Browse Jobs</Link></li>
                                        <li><Link to="/candidateListPage">Candidates</Link></li>
                                        <li><Link to="/contactPage">Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 order-sm-4 order-md-3 d-flex justify-content-lg-center">
                            <div className="jm-foote-widget-2 mb-40">
                                <h4 className="jm-footer-widget-title-2">Download</h4>
                                <div className="jm-footer-widget-menu-2">
                                    <ul>
                                        <li><Link to="#"><i className="fa-brands fa-apple"></i>App Store</Link></li>
                                        <li><Link to="#"><i className="fa-brands fa-google-play"></i>Google Play</Link></li>
                                        <li><Link to="#"><i className="fa-brands fa-windows"></i>Windows</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-8 order-sm-3 order-md-4 d-flex justify-content-lg-end">
                            <div className="jm-footer-widget-2 mb-40">
                                <h4 className="jm-footer-widget-title-2">Contact</h4>
                                <div className="jm-footer-widget-contact-2">
                                    <ul className="jm-footer-widget-contact-list-2">
                                        <li><Link to="tel:(+1)260-235-0551"><i className="fa-thin fa-phone"></i>(+1) 260-235-0551</Link></li>
                                        <li><Link to="mailto:example@mail.com"><i className="fa-thin fa-envelope"></i>example@mail.com</Link></li>
                                    </ul>
                                </div>
                                <h4 className="jm-footer-widget-title-2">Payments</h4>
                                <div className="jm-footer-widget-payment-2">
                                    <ul className="jm-footer-widget-payment-list-2">
                                        <li><Link to="#"><i className="fa-brands fa-cc-mastercard"></i></Link></li>
                                        <li><Link to="#"><i className="fa-brands fa-cc-visa"></i></Link></li>
                                        <li><Link to="#"><i className="fa-solid fa-credit-card"></i></Link></li>
                                        <li><Link to="#"><i className="fa-brands fa-cc-paypal"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="jm-footer-bottom-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="jm-footer-copyright-text-2 text-center">
                                <p>&copy; Theme by <Link to="https://themeforest.net/user/codebasket/portfolio" target="_blank">Codebasket</Link>. All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
  )
}

export default Footer