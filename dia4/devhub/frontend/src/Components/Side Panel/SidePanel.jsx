import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { JobContext } from '../../Context/JobContext';
import MobileMenu from './MobileMenu';

const SidePanel = () => {
    const {sidePanelOpen,handleClose} = useContext(JobContext)
  return (
    <>
      <div className={`jm-sidebar-info side-info ${sidePanelOpen ? 'info-open' : ''}`}>
        <div className="jm-sidebar-logo-wrapper mb-25">
          <div className="row align-items-center">
            <div className="col-xl-6 col-8">
              <div className="jm-sidebar-logo">
                <Link to="/">
                  <img src="assets/img/logo/logowhite.png" alt="logo-img" />
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-4">
              <div className="jm-sidebar-close-wrapper text-end">
                <button className="jm-sidebar-close side-info-close" onClick={handleClose}>
                  <i className="fal fa-times"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <MobileMenu handleClose={handleClose}/>

        <div className="jm-sidebar-contact-wrapper mt-40">
          <div className="jm-sidebar-contact mb-40">
            <h4 className="jm-sidebar-contact-title">Contact Info</h4>
            <span className="sidebar-address">
              <i className="fal fa-map-marker-alt"></i>
              <span>10221 Hollywood Blvd, los angeles USA</span>
            </span>
            <Link to="tel:(+99)012345678">
              <i className="fal fa-phone"></i>
              <span>(+99)012345678</span>
            </Link>
            <Link to="mailto:examplesite@gmail.com" className="theme-3">
              <i className="fal fa-envelope"></i>
              <span><span>examplesite@gmail.com</span></span>
            </Link>
          </div>

          <div className="jm-sidebar-social mt-40 mb-30">
            <Link to="#" target="_blank" className="facebook"><i className="fab fa-facebook-f"></i></Link>
            <Link to="#" target="_blank" className="twitter"><i className="fab fa-pinterest-p"></i></Link>
            <Link to="#" target="_blank" className="linkedin"><i className="fab fa-twitter"></i></Link>
            <Link to="#" target="_blank" className="youtube"><i className="fab fa-instagram"></i></Link>
          </div>
        </div>
      </div>
      <div className={`offcanvas-overlay ${sidePanelOpen ? 'overlay-open' : ''}`} onClick={handleClose}></div>
    </>
  );
};

export default SidePanel;
