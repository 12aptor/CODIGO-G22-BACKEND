import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { JobContext } from '../../Context/JobContext';

const EmployerGrid = () => {
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
                                <input type="text" placeholder="Keywords..."/>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <input type="text" placeholder="Location"/>
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
                    <button type="submit" className="jm-candidates-search-wrapper-inner-input-submit"><span className="jm-candidates-search-icon"><i className="fa-duotone fa-magnifying-glass"></i></span>Search</button>
                </div>
            </div>
            <div className="jm-companies-item-wrapper pt-100 pb-70">
                <div className="row">
                    {filteredEmployer.map((job)=>{
                        return(
                            <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6" key={job.id}>
                                <div className="jm-job-item-3 mb-30">
                                    <div className="jm-job-item-img-3">
                                        <img src={job.imgSrc} alt=""/>
                                    </div>
                                    <div className="jm-job-item-head-3">
                                        <h4 className="title"><Link to="/jobDetailsPage">{job.jobTitle}</Link></h4>
                                        <Link to="#">{job.company}</Link>
                                    </div>
                                    <div className="jm-job-item-info-3">
                                        <div className="jm-job-item-info-inner-3">
                                            <div className="jm-job-location-3"><i className="fa-thin fa-location-dot"></i><span>{job.location}</span></div>
                                            <div className="jm-job-salary-3"><i className="fa-thin fa-money-bill-1"></i><span>${job.salary}</span></div>
                                        </div>
                                        <div className="jm-job-item-info-inner-3">
                                            <div className="jm-job-posttime-3"><i className="fa-thin fa-clock"></i><span>{job.postedTime}</span></div>
                                            <div className="jm-job-jobtime-3"><i className="fa-thin fa-business-time"></i><span>{job.jobTime}</span></div>
                                        </div>
                                    </div>
                                    <div className="jm-job-item-bottom-3">
                                        <div className="jm-job-item-btn-3"><Link to="/jobDetailsPage" className="jm-theme-btn jm-border-btn">{job.vacancies} vacancies</Link></div>
                                        <div className="jm-job-item-btn-3"><Link to="/addResumePage" className="jm-theme-btn jm-border-btn">Apply Now</Link></div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default EmployerGrid