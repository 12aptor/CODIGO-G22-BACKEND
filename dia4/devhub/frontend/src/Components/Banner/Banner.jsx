import React, { useState, useEffect } from 'react';
import { Tab, Nav } from 'react-bootstrap';
const Banner = () => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const words = ['Best Solution', 'Best Career', 'Great Offer'];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, 2000);
  
      return () => {
        clearInterval(interval);
      };
    }, []);
  
    const modifiedWords = [...words];
    modifiedWords[0] = words[currentWordIndex];
  return (
    <section className="jm-banner-area banner-hieght bg-default">
        <div className="container">
            <div className="jm-banner-1 pt-150">
                <div className="row align-items-center">
                    <div className="col-xl-5 col-lg-5 d-none d-lg-block">
                        <div className="jm-banner-img">
                            <img className="jm-banner-bg-1" src="assets/img/banner/banner-img-bg-1.png" alt=""/>
                            <img className="jm-banner-img-1" src="assets/img/banner/banner-21.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-12">
                        <div className="jm-banner-content ml-45">
                            <div className="jm-banner-content-head">
                            <h2 className="jm-banner-content-title cd-headline rotate-1">
                                Our Excellent Find Job <br />
                                <span className="cd-words-wrapper">
                                {modifiedWords.map((word, index) => (
                                    <b
                                    key={index}
                                    className={index === 0 ? 'is-visible' : 'is-hidden'}
                                    >
                                    {word}
                                    </b>
                                ))}
                                </span>
                            </h2>
                                <p>There are many variations passages of Lorem Ipsum Fasts <br/>
                                    by injected humour, or randomised words which... </p>
                            </div>
                            <div className="jm-banner-tab">
                            <Tab.Container defaultActiveKey="full-time">
                                <Nav className="nav-pills mb-3 jm-tab-1" id="pills-tab">
                                <Nav.Item className="jm-tab-item-1">
                                    <Nav.Link eventKey="full-time" className="nav-link jm-tab-link-1">
                                    <span></span>Full Time
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="jm-tab-item-1">
                                    <Nav.Link eventKey="part-time" className="nav-link jm-tab-link-1">
                                    <span></span>Part Time
                                    </Nav.Link>
                                </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                <Tab.Pane eventKey="full-time">
                                    <div className="banner-search-form banner-form-1">
                                    <div className="jm-job-title">
                                        <select name="banner-select">
                                            <option value="1">Job Title</option>
                                            <option value="1">Web Designer</option>
                                            <option value="1">UX/UI Designer</option>
                                            <option value="1">Digital Marketer</option>
                                        </select>
                                    </div>
                                    <div className="jm-category">
                                        <select name="banner-select">
                                            <option value="1">All category</option>
                                            <option value="1">Health Care</option>
                                            <option value="1">Management</option>
                                            <option value="1">Marketing</option>
                                        </select>
                                    </div>
                                    <div className="jm-search">
                                        <button type="submit" className="jm-theme-btn jm-banner-search-btn"><i className="fal fa-search"></i>Search</button>
                                    </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="part-time">
                                    <div className="banner-search-form banner-form-1">
                                    <div className="jm-job-title">
                                        <select name="banner-select">
                                            <option value="1">Job Title</option>
                                            <option value="1">Web Designer</option>
                                            <option value="1">UX/UI Designer</option>
                                            <option value="1">Digital Marketer</option>
                                        </select>
                                    </div>
                                    <div className="jm-category">
                                        <select name="banner-select">
                                            <option value="1">All category</option>
                                            <option value="1">Health Care</option>
                                            <option value="1">Management</option>
                                            <option value="1">Marketing</option>
                                        </select>
                                    </div>
                                    <div className="jm-search">
                                        <button type="submit" className="jm-theme-btn jm-banner-search-btn"><i className="fal fa-search"></i>Search</button>
                                    </div>
                                    </div>
                                </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner