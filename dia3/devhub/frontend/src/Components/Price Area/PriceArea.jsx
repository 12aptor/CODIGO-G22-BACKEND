import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const PriceArea = () => {
  const [activeTab, setActiveTab] = useState('nav-promote');

  const handleTabSelect = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="jm-promote-area pt-100 pb-60 light-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-5">
            <div className="jm-promote-section-title-wrapper mtm-uptomd10 text-center text-lg-start pr-60 mb-40">
              <div className="jm-section-title">
                <h2 className="title mb-10">Promoting Career</h2>
                <p className="text">There are many variations of passages of Lorem Ipsum Fasts There are many variations of passages of Lorem Ipsum Fastsby injected humour fasts there</p>
              </div>
              <Link to="/jobPage" className="jm-theme-btn promote-btn mt-40">Browse Job</Link>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7">
            <Nav 
            variant="tabs" 
            activeKey={activeTab}
            onSelect={handleTabSelect}
            className="jm-promote-tab-buttons mb-70" 
            >
              <Nav.Item>
                <Nav.Link eventKey="nav-promote" className={`jm-promote-tab-btn ${activeTab === 'nav-promote' ? 'active' : ''}`}>
                  Step One
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="nav-promote-1" className={`jm-promote-tab-btn ${activeTab === 'nav-promote-1' ? 'active' : ''}`}>
                  Step Two
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="nav-promote-2" className={`jm-promote-tab-btn ${activeTab === 'nav-promote-2' ? 'active' : ''}`}>
                  Step Three
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="mb-40" id="nav-tabContent-promote">
              <Tab.Pane eventKey="nav-promote" className={`tab-pane fade ${activeTab === 'nav-promote' ? 'show active' : ''}`}>
                <div className="jm-promote-item-single">
                  <span className="jm-promote-item-count">1</span>
                  <div className="jm-promote-item-inner">
                    <span className="jm-promote-item-icon">
                      <img src="assets/img/services/step-1.png" alt="img" />
                    </span>
                    <div className="jm-promote-item-inner-content">
                      <h4 className="jm-promote-item-title">Set up your Profile All</h4>
                      <p className="jm-promote-item-desc">After signing up to TechCareer, you start to set up your profile and find the hottest & latest tech jobs.</p>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="nav-promote-1" className={`tab-pane fade ${activeTab === 'nav-promote-1' ? 'show active' : ''}`}>
                <div className="jm-promote-item-single">
                  <span className="jm-promote-item-count">2</span>
                  <div className="jm-promote-item-inner">
                    <span className="jm-promote-item-icon">
                      <img src="assets/img/services/step-2.png" alt="img" />
                    </span>
                    <div className="jm-promote-item-inner-content">
                      <h4 className="jm-promote-item-title">Create a Pro CV</h4>
                      <p className="jm-promote-item-desc">Techcareer gives you more than 500 pre-made CV samples for candidates to personalize their CVs.</p>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="nav-promote-2" className={`tab-pane fade ${activeTab === 'nav-promote-2' ? 'show active' : ''}`}>
                <div className="jm-promote-item-single">
                  <span className="jm-promote-item-count">3</span>
                  <div className="jm-promote-item-inner">
                    <span className="jm-promote-item-icon">
                      <img src="assets/img/services/step-3.png" alt="img" />
                    </span>
                    <div className="jm-promote-item-inner-content">
                      <h4 className="jm-promote-item-title">Get Applied</h4>
                      <p className="jm-promote-item-desc">When owning a CV, don't hesitate to submit your CV to easily apply for a job from Tech companies.</p>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceArea;
