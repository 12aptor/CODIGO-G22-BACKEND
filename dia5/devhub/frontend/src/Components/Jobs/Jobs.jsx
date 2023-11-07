import React, { useState } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import AllJobs from './AllJobs';
import FullTimeJobs from './FullTimeJobs';
import PartTimeJobs from './PartTimeJobs';
import RemoteJobs from './RemoteJobs';

const Jobs = () => {
  const [activeTab, setActiveTab] = useState('all');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="jm-latest-job-area-3 pb-90 pt-85">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="jm-section-title mb-40 text-center">
              <h2 className="title mb-10">Latest Jobs</h2>
              <p className="text">
                Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur
                vehicula
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="jm-latest-job-wrap-3 jm-job-layout-2">
              <Nav
                variant="tabs"
                activeKey={activeTab}
                onSelect={handleTabChange}
                className="jm-latest-job-tab nav nav-tabs"
              >
                <Nav.Item>
                  <Nav.Link
                    eventKey="all"
                    className={`jm-latest-job-tab-btn nav-link ${
                      activeTab === 'all' ? 'active' : ''
                    }`}
                  >
                    All
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="full-time"
                    className={`jm-latest-job-tab-btn nav-link ${
                      activeTab === 'full-time' ? 'active' : ''
                    }`}
                  >
                    Full Time
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="part-time"
                    className={`jm-latest-job-tab-btn nav-link ${
                      activeTab === 'part-time' ? 'active' : ''
                    }`}
                  >
                    Part Time
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="remote"
                    className={`jm-latest-job-tab-btn nav-link ${
                      activeTab === 'remote' ? 'active' : ''
                    }`}
                  >
                    Remote
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="all" className={`tab-pane ${activeTab === 'all' ? 'show active' : ''}`}>
                  <AllJobs />
                </Tab.Pane>
                <Tab.Pane eventKey="full-time" className={`tab-pane ${activeTab === 'full-time' ? 'show active' : ''}`}>
                  <FullTimeJobs />
                </Tab.Pane>
                <Tab.Pane eventKey="part-time" className={`tab-pane ${activeTab === 'part-time' ? 'show active' : ''}`}>
                  <PartTimeJobs />
                </Tab.Pane>
                <Tab.Pane eventKey="remote" className={`tab-pane ${activeTab === 'remote' ? 'show active' : ''}`}>
                  <RemoteJobs />
                </Tab.Pane>
              </Tab.Content>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
