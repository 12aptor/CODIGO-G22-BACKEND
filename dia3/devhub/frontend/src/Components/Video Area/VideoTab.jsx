import React, { useState } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const VideoTab = () => {
  const [activeTab, setActiveTab] = useState('register');

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
  };

  return (
    <div className="jm-register-section-wrapper">
      <Nav className="nav jm-jobs-register-tabs">
        <Nav.Item>
          <Nav.Link
            className={activeTab === 'register' ? 'active' : ''}
            onClick={() => handleTabChange('register')}
          >
            Register as Company
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className={activeTab === 'register-1' ? 'active' : ''}
            onClick={() => handleTabChange('register-1')}
          >
            Register as Candidate
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Tab.Content className="tab-content">
        <Tab.Pane
          eventKey="register"
          className={`tab-pane fade ${activeTab === 'register' ? 'show active' : ''}`}
        >
          <div className="jm-register-tab-content-inner">
            <span className="jm-register-tab-content-icon"><i className="fa-thin fa-laptop"></i></span>
            <h4 className="jm-register-tab-content-title">I am an Employer</h4>
            <p>Signed in companies are able to post new job offers, searching for companies...</p>
            <Link to="/postJobPage" className="jm-register-btn">Register as Employer</Link>
          </div>
        </Tab.Pane>
        <Tab.Pane
          eventKey="register-1"
          className={`tab-pane fade ${activeTab === 'register-1' ? 'show active' : ''}`}
        >
          <div className="jm-register-tab-content-inner">
            <span className="jm-register-tab-content-icon"><i className="fa-thin fa-user"></i></span>
            <h4 className="jm-register-tab-content-title">I am a Candidate</h4>
            <p>Signed in candidates are able to post new job offers, searching for candidate...</p>
            <Link to="/postJobPage" className="jm-register-btn">Register as Candidate</Link>
          </div>
        </Tab.Pane>
      </Tab.Content>
    </div>
  );
}

export default VideoTab;
