import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { JobContext } from '../../Context/JobContext';

const EmployerList = () => {
    const {selectedJobType, handleJobTypeChange, filteredEmployer} = useContext(JobContext)
  return (
    <div className="jm-jobs-search-under-hero">
      <div className="container">
        <div className="jm-candidates-search-wrapper">
          <div className="jm-candidates-search-top-text">
            <h4 className="jm-candidates-search-title">Browse Your Jobs</h4>
          </div>
          <div className="jm-candidates-search-wrapper-inner-flex">
            <div className="jm-candidates-search-wrapper-inner-input-fields">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <input type="text" placeholder="Keywords..." />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <input type="text" placeholder="Location" />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <select
                    className="jm-candidates-search-select"
                    value={selectedJobType}
                    onChange={handleJobTypeChange}
                  >
                    <option value="">Choose Type</option>
                    <option value="Freelance">Freelance</option>
                    <option value="Full Time">Full Time</option>
                    <option value="Part Time">Part Time</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <select className="jm-candidates-search-select mb-0">
                    <option>Choose Category</option>
                    <option>Developer</option>
                    <option>Medical</option>
                    <option>Technology</option>
                  </select>
                </div>
              </div>
            </div>
            <button type="submit" className="jm-candidates-search-wrapper-inner-input-submit">
              <span className="jm-candidates-search-icon">
                <i className="fa-duotone fa-magnifying-glass"></i>
              </span>
              Search
            </button>
          </div>
        </div>
        <div className="jm-companies-item-wrapper jm-job-layout-2 pt-100 pb-70">
          <div className="row justify-content-center">
            {filteredEmployer.map((job) => (
              <div className="col-xl-6 col-lg-10" key={job.id}>
                <div className="jm-latest-job-item-3 mb-30">
                  <div className="jm-latest-job-item-top-3">
                    <div className="jm-latest-job-item-top-wrap-3">
                      <div className="jm-latest-job-item-logo-3 y_img">
                        <Link to="/jobDetailsPage">
                          <img src={job.imgSrc} alt="" />
                        </Link>
                      </div>
                      <div className="jm-latest-job-item-info-3">
                        <h3 className="jm-latest-job-item-info-title-3">
                          <Link to="/jobDetailsPage">{job.jobTitle}</Link>
                        </h3>
                        <Link to="#" className="jm-latest-job-item-info-subtitle-3">
                          {job.company}
                        </Link>
                        <div className="jm-latest-job-meta-wrapper">
                          <Link to="#">Technology</Link>
                          <Link to="#">WordPress</Link>
                        </div>
                      </div>
                    </div>
                    <div className="jm-latest-job-item-btn-3">
                      <Link to="/addResumePage" className="jm-theme-btn jm-transparent-btn">
                        Apply
                      </Link>
                    </div>
                  </div>
                  <div className="jm-latest-job-item-bottom-3">
                    <div className="jm-latest-job-item-location-3 jm-latest-job-common">
                      <span>
                        <i className="fa-thin fa-location-dot"></i>
                        {job.location}
                      </span>
                    </div>
                    <div className="jm-latest-job-item-salary-3 jm-latest-job-common">
                      <span>
                        <i className="fa-thin fa-money-bill-1"></i>${job.salary}
                      </span>
                    </div>
                    <div className="jm-latest-job-item-duration-3 jm-latest-job-common">
                      <span>
                        <i className="fa-thin fa-clock"></i>
                        {job.jobTime}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerList;
