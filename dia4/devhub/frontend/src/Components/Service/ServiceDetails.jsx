import React, { useState } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { tabPanes } from '../../Data/JobsData';
const ServiceDetails = () => {
  const [activeTab, setActiveTab] = useState('Web Development');

  const handleTabSelect = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="jm-service-details-area pt-100 pb-60 light-bg">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="jm-service-details-wrap">
              <div className="row align-items-start">
                <div className="col-xl-4 col-lg-4 mb-40 order-1 order-lg-0">
                  <Nav
                    variant="pills"
                    className="flex-column nav-pills jm-service-details-tab"
                    activeKey={activeTab}
                    onSelect={handleTabSelect}
                  >
                    {tabPanes.map((tabPane) => (
                      <Nav.Item key={tabPane.title}>
                        <Nav.Link
                          eventKey={tabPane.title}
                          className={activeTab === tabPane.title ? 'active' : ''}
                        >
                          {tabPane.title}
                        </Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                  <div className="jm-service-details-tap-bottom">
                    <div className="inner-img">
                      <img src="assets/img/services/icon.png" alt="" />
                    </div>
                    <div className="inner-content">
                      <h3 className="title">{activeTab}</h3>
                      <p className="text">
                        There are many variations of passages of Lorem Ipsum Fasts are many variation
                        passages of humour.
                      </p>
                      <Link className="read-btn" to="/jobDetailsPage">
                        Read More <i className="fa-thin fa-arrow-right-long"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-8 order-0 order-lg-1">
                  <Tab.Content className="ml-40 mb-35">
                    {tabPanes.map((tabPane) => (
                      <Tab.Pane
                        key={tabPane.title}
                        eventKey={tabPane.title}
                        active={activeTab === tabPane.title}
                      >
                        <div className="jm-service-details-content">
                          <div className="jm-service-details-img w_img mb-25">
                            <img src={tabPane.image} alt="" />
                          </div>
                          <p className="jm-text mb-10">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry...
                          </p>
                          <p className="jm-text mb-0">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry
                            orem Ipsum has been the industry's standard dummy text ever since the
                            when an unknown printer took a galley of type and scrambled it to make a
                            type specimen book. It has survived not only five centuries, but also
                            the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in.
                          </p>
                        </div>
                      </Tab.Pane>
                    ))}
                  </Tab.Content>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
