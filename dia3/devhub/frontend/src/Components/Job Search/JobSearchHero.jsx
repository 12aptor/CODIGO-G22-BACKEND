import React, { useState } from 'react';
import { Tab, Nav, Col, Row } from 'react-bootstrap';

const JobSearchHero = () => {
  const [activeTab, setActiveTab] = useState('job');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="jm-jobs-search-under-hero">
      <div className="container">
        <div className="jm-jobs-search-under-hero-wrapper">
          <Tab.Container activeKey={activeTab} onSelect={handleTabChange}>
                <Nav className="jm-jobs-hero-searh-tabs" role="tablist">
                    <Nav.Item>
                        <Nav.Link eventKey="job" className="custom-nav-link">Browse Jobs</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="job-1" className="custom-nav-link">Find Candidates</Nav.Link>
                    </Nav.Item>
                </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="job">
                <div className="jm-candidates-search-wrapper-inner-flex">
                  <div className="jm-candidates-search-wrapper-inner-input-fields">
                    <Row>
                      <Col xl="6" lg="6" md="6" sm="6">
                        <input type="text" placeholder="Keywords..." />
                      </Col>
                      <Col xl="6" lg="6" md="6" sm="6">
                        <input type="text" placeholder="Location" />
                      </Col>
                      <Col xl="6" lg="6" md="6" sm="6">
                        <select className="jm-candidates-search-select">
                          <option>Choose Type</option>
                          <option>Freelance</option>
                          <option>Full Time</option>
                          <option>Part Time</option>
                        </select>
                      </Col>
                      <Col xl="6" lg="6" md="6" sm="6">
                        <select className="jm-candidates-search-select">
                          <option>Choose Category</option>
                          <option>Developer</option>
                          <option>Medical</option>
                          <option>Technology</option>
                        </select>
                      </Col>
                    </Row>
                  </div>
                  <button type="submit" className="jm-candidates-search-wrapper-inner-input-submit">
                    <span className="jm-candidates-search-icon">
                      <i className="fa-duotone fa-magnifying-glass"></i>
                    </span>
                    Search
                  </button>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="job-1">
                <div className="jm-candidates-search-wrapper-inner-flex">
                  <div className="jm-candidates-search-wrapper-inner-input-fields">
                    <Row>
                      <Col xl="6" lg="6" md="6" sm="6">
                        <input type="text" placeholder="Keywords..." />
                      </Col>
                      <Col xl="6" lg="6" md="6" sm="6">
                        <input type="text" placeholder="Location" />
                      </Col>
                      <Col xl="6" lg="6" md="6" sm="6">
                        <select className="jm-candidates-search-select">
                          <option>Choose Type</option>
                          <option>Freelance</option>
                          <option>Full Time</option>
                          <option>Part Time</option>
                        </select>
                      </Col>
                      <Col xl="6" lg="6" md="6" sm="6">
                        <select className="jm-candidates-search-select">
                          <option>Choose Category</option>
                          <option>Developer</option>
                          <option>Medical</option>
                          <option>Technology</option>
                        </select>
                      </Col>
                    </Row>
                  </div>
                  <button type="submit" className="jm-candidates-search-wrapper-inner-input-submit">
                    <span className="jm-candidates-search-icon">
                      <i className="fa-duotone fa-magnifying-glass"></i>
                    </span>
                    Search
                  </button>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </div>
  );
};

export default JobSearchHero;
