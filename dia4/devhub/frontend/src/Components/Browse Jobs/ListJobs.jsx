import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { JobContext } from '../../Context/JobContext';

const ListJobs = () => {
    const { filteredJobs } = useContext(JobContext);
  return (
    <div className="jm-browse-list-wrap jm-job-layout-2">
        <div className="row">
            {filteredJobs.map((job)=>{
                return(
                 <div className="col-12" key={job.id}>
                    <div className="jm-latest-job-item-3 mb-30">
                        <div className="jm-latest-job-item-top-3">
                            <div className="jm-latest-job-item-top-wrap-3">
                                <div className="jm-latest-job-item-logo-3 y_img">
                                    <Link to="/jobDetailsPage"><img src={job.imgSrc} alt=""/></Link>
                                </div>
                                <div className="jm-latest-job-item-info-3">
                                    <h3 className="jm-latest-job-item-info-title-3"><Link to="/jobDetailsPage">{job.jobTitle}</Link></h3>
                                    <Link to="#" className="jm-latest-job-item-info-subtitle-3">{job.company}</Link>
                                    <div className="jm-latest-job-meta-wrapper">
                                        <Link to="#">Technology</Link>
                                        <Link to="#">WordPress</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="jm-latest-job-item-btn-3">
                                <Link to="jobslab-add-resume.html" className="jm-theme-btn jm-transparent-btn">Apply</Link>
                            </div>
                        </div>
                        <div className="jm-latest-job-item-bottom-3">
                            <div className="jm-latest-job-item-location-3 jm-latest-job-common">
                                <span><i className="fa-thin fa-location-dot"></i>{job.location}</span>
                            </div>
                            <div className="jm-latest-job-item-salary-3 jm-latest-job-common">
                                <span><i className="fa-thin fa-money-bill-1"></i>${job.salary}</span>
                            </div>
                            <div className="jm-latest-job-item-duration-3 jm-latest-job-common">
                                <span><i className="fa-thin fa-clock"></i>{job.jobTime}</span>
                            </div>
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

export default ListJobs