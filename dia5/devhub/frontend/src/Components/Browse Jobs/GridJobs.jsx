import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { JobContext } from '../../Context/JobContext';

const GridJobs = () => {
    const { filteredJobs } = useContext(JobContext);
  return (
    <div className="jm-browse-grid-wrap">
        <div className="row">
            {filteredJobs.map((job)=>{
                return(
                  <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6" key={job.id}>
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
                                <div className="jm-job-posttime-3"><i className="fa-thin fa-clock"></i><span>{job.jobTime}</span></div>
                                <div className="jm-job-jobtime-3"><i className="fa-thin fa-business-time"></i><span>{job.postedTime}</span></div>
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
        <div className="row">
            <div className="col-12">
                <div className="jm-pagination mb-40 mt-10 text-center">
                    <Link to="#" className="jm-pagination-btn"><i className="fa-thin fa-arrow-left"></i></Link>
                    <Link to="#" className="jm-pagination-btn active">1</Link>
                    <Link to="#" className="jm-pagination-btn">2</Link>
                    <Link to="#" className="jm-pagination-btn"><i className="fa-thin fa-arrow-right"></i></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GridJobs