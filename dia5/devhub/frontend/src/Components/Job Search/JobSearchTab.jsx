import React, { useState } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import AllJobsList from '../Jobs/AllJobsList';
import FullTimeJobsList from '../Jobs/FullTimeJobsList';
import PartTimeJobsList from '../Jobs/PartTimeJobsList';
import RemoteJobsList from '../Jobs/RemoteJobsList';

const JobSearchTab = () => {
  const [activeTab, setActiveTab] = useState('nav-home');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="jm-latest-job-area-3 pb-100 pt-85">
      <div className="container">
        <div className="row ">
          <div className="col-12">
            <div className="jm-section-title mb-40 text-center">
              <h2 className="title mb-10">Latest Jobs</h2>
              <p className="text">Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="jm-latest-job-wrap-3 jm-job-layout-2">
              <Nav className="nav nav-tabs jm-latest-job-tab" id="nav-tab" role="tablist">
                <Nav.Item>
                  <Nav.Link
                    eventKey="nav-home"
                    className={activeTab === 'nav-home' ? 'jm-latest-job-tab-btn nav-link active' : 'jm-latest-job-tab-btn nav-link'}
                    onClick={() => handleTabChange('nav-home')}
                  >
                    All
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="nav-full-time"
                    className={activeTab === 'nav-full-time' ? 'jm-latest-job-tab-btn nav-link active' : 'jm-latest-job-tab-btn nav-link'}
                    onClick={() => handleTabChange('nav-full-time')}
                  >
                    Full Time
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="nav-part-time"
                    className={activeTab === 'nav-part-time' ? 'jm-latest-job-tab-btn nav-link active' : 'jm-latest-job-tab-btn nav-link'}
                    onClick={() => handleTabChange('nav-part-time')}
                  >
                    Part Time
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="nav-work-home"
                    className={activeTab === 'nav-work-home' ? 'jm-latest-job-tab-btn nav-link active' : 'jm-latest-job-tab-btn nav-link'}
                    onClick={() => handleTabChange('nav-work-home')}
                  >
                    Remote
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content id="nav-tabContent">
                <Tab.Pane eventKey="nav-home" className={activeTab === 'nav-home' ? 'tab-pane fade show active' : 'tab-pane fade'}>
                  <div className="row">
                    <AllJobsList />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="nav-full-time" className={activeTab === 'nav-full-time' ? 'tab-pane fade show active' : 'tab-pane fade'}>
                  <div className="row">
                    <FullTimeJobsList />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="nav-part-time" className={activeTab === 'nav-part-time' ? 'tab-pane fade show active' : 'tab-pane fade'}>
                  <div className="row">
                    <PartTimeJobsList />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="nav-work-home" className={activeTab === 'nav-work-home' ? 'tab-pane fade show active' : 'tab-pane fade'}>
                  <div className="row">
                    <RemoteJobsList />
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSearchTab;
