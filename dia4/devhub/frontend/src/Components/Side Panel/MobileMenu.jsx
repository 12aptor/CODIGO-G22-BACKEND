import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = () => {
  const [expandedMenus, setExpandedMenus] = useState([]);

  const handleMenuClick = (index) => {
    const updatedMenus = [...expandedMenus];
    if (updatedMenus.includes(index)) {
      updatedMenus.splice(updatedMenus.indexOf(index), 1);
    } else {
      updatedMenus.push(index);
    }
    setExpandedMenus(updatedMenus);
  };

  const isMenuExpanded = (index) => {
    return expandedMenus.includes(index);
  };

  return (
    <div className="jm-sidebar-menu-wrapper fix">
      <div className="jm-mobile-menu mean-container">
        <div className="mean-bar">
          <Link to="#nav" className="meanmenu-reveal">
            <span><span><span /></span></span>
          </Link>
          <nav className="mean-nav">
            <div className="mean-bar">
              <Link to="#nav" className="meanmenu-reveal">
                <span><span><span /></span></span>
              </Link>
            </div>
            <ul>
              <li className="menu-has-children">
                <Link to="/">Home</Link>
                <ul className={`sub-menu ${isMenuExpanded(0) ? '' : 'd-none'}`}>
                  <li><Link to="/">Home 1</Link></li>
                  <li><Link to="/homePage2">Home 2</Link></li>
                </ul>
                <Link className={`mean-expand ${isMenuExpanded(0) ? 'mean-clicked' : ''}`} role='button' to="#" onClick={() => handleMenuClick(0)}>{isMenuExpanded(0) ? '-' : '+'}</Link>
              </li>
              <li className="menu-has-children">
                <Link to="/jobPage">Jobs</Link>
                <ul className={`sub-menu ${isMenuExpanded(1) ? '' : 'd-none'}`}>
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
                <Link className={`mean-expand ${isMenuExpanded(1) ? 'mean-clicked' : ''}`} role='button' to="#" onClick={() => handleMenuClick(1)}>{isMenuExpanded(1) ? '-' : '+'}</Link>
              </li>
              <li className="menu-has-children">
                <Link to="/candidateListPage">Candidates</Link>
                <ul className={`sub-menu ${isMenuExpanded(2) ? '' : 'd-none'}`}>
                  <li><Link to="/candidatePage">Candidates Grid</Link></li>
                  <li><Link to="/candidateListPage">Candidates List</Link></li>
                  <li><Link to="/candidateDetailsPage">Candidates Details</Link></li>
                </ul>
                <Link className={`mean-expand ${isMenuExpanded(2) ? 'mean-clicked' : ''}`} role='button' to="#" onClick={() => handleMenuClick(2)}>{isMenuExpanded(2) ? '-' : '+'}</Link>
              </li>
              <li className="menu-has-children">
                <Link to="#">Pages</Link>
                <ul className={`sub-menu ${isMenuExpanded(3) ? '' : 'd-none'}`}>
                  <li><Link to="/aboutPage">About</Link></li>
                  <li><Link to="/servicePage">Services</Link></li>
                  <li><Link to="/serviceDetailsPage">Services Details</Link></li>
                  <li><Link to="/contactPage">Contact</Link></li>
                </ul>
                <Link className={`mean-expand ${isMenuExpanded(3) ? 'mean-clicked' : ''}`} role='button' to="#" onClick={() => handleMenuClick(3)}>{isMenuExpanded(3) ? '-' : '+'}</Link>
              </li>
              <li className="menu-has-children">
                <Link to="/blogPage">Blog</Link>
                <ul className={`sub-menu ${isMenuExpanded(4) ? '' : 'd-none'}`}>
                  <li><Link to="/blogPage">Blog Grid</Link></li>
                  <li><Link to="/blogListPage">Blog List</Link></li>
                  <li><Link to="/blogDetailsPage">Blog Details</Link></li>
                </ul>
                <Link className={`mean-expand ${isMenuExpanded(4) ? 'mean-clicked' : ''}`} role='button' to="#" onClick={() => handleMenuClick(4)}>{isMenuExpanded(4) ? '-' : '+'}</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
