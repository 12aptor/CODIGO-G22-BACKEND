import React from 'react'
import { Link } from 'react-router-dom'

const PartTimeJobsList = () => {
  return (
    <>
        <div className="col-xl-12">
            <div className="jm-latest-job-layout-3">
                <div className="jm-latest-job-layout-3-wrapper">
                    <div className="jm-latest-job-layout-3-img">
                        <img src="assets/img/job/meta.png" alt="apple"/>
                    </div>
                    <div className="jm-latest-job-layout-3-info">
                        <h4 className="jm-latest-job-layout-3-info-title"><Link to="/jobDetailsPage">Head Of Commercial Contracts</Link></h4>
                        <div className="jm-latest-job-layout-3-info-meta">
                            <span><i className="fa-thin fa-tags"></i>Software, IT</span>
                            <span><i className="fa-thin fa-location-dot"></i>California, USA</span>
                            <span><i className="fa-thin fa-money-bill-1"></i>$10000 - $500000</span>
                            <span><i className="fa-thin fa-clock"></i>Part Time</span>
                            
                        </div>
                    </div>
                    <div className="jm-latest-job-layout-3-submit">
                        <Link to="/addResumePage" className="jm-latest-job-layout-3-btn">Apply Now</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-xl-12">
            <div className="jm-latest-job-layout-3">
                <div className="jm-latest-job-layout-3-wrapper">
                    <div className="jm-latest-job-layout-3-img">
                        <img src="assets/img/job/nike.png" alt="apple"/>
                    </div>
                    <div className="jm-latest-job-layout-3-info">
                        <h4 className="jm-latest-job-layout-3-info-title"><Link to="/jobDetailsPage">Human Resource Development</Link></h4>
                        <div className="jm-latest-job-layout-3-info-meta">
                            <span><i className="fa-thin fa-tags"></i>Accessory, Human</span>
                            <span><i className="fa-thin fa-location-dot"></i>California, USA</span>
                            <span><i className="fa-thin fa-money-bill-1"></i>$10000 - $500000</span>
                            <span><i className="fa-thin fa-clock"></i>Part Time</span>
                            
                        </div>
                    </div>
                    <div className="jm-latest-job-layout-3-submit">
                        <Link to="/addResumePage" className="jm-latest-job-layout-3-btn">Apply Now</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-xl-12">
            <div className="jm-latest-job-layout-3">
                <div className="jm-latest-job-layout-3-wrapper">
                    <div className="jm-latest-job-layout-3-img">
                        <img src="assets/img/job/starbuck.png" alt="apple"/>
                    </div>
                    <div className="jm-latest-job-layout-3-info">
                        <h4 className="jm-latest-job-layout-3-info-title"><Link to="/jobDetailsPage">Communication systems Engineer</Link></h4>
                        <div className="jm-latest-job-layout-3-info-meta">
                            <span><i className="fa-thin fa-tags"></i>Designer, Manager</span>
                            <span><i className="fa-thin fa-location-dot"></i>California, USA</span>
                            <span><i className="fa-thin fa-money-bill-1"></i>$10000 - $500000</span>
                            <span><i className="fa-thin fa-clock"></i>Full Time</span>
                            
                        </div>
                    </div>
                    <div className="jm-latest-job-layout-3-submit">
                        <Link to="/addResumePage" className="jm-latest-job-layout-3-btn">Apply Now</Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default PartTimeJobsList