import React from 'react'
import { Link } from 'react-router-dom'

const RemoteJobsList = () => {
  return (
    <>
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
        <div className="col-xl-12">
            <div className="jm-latest-job-layout-3">
                <div className="jm-latest-job-layout-3-wrapper">
                    <div className="jm-latest-job-layout-3-img">
                        <img src="assets/img/job/apple.png" alt="apple"/>
                    </div>
                    <div className="jm-latest-job-layout-3-info">
                        <h4 className="jm-latest-job-layout-3-info-title"><Link to="/jobDetailsPage">Software Development Company</Link></h4>
                        <div className="jm-latest-job-layout-3-info-meta">
                            <span><i className="fa-thin fa-tags"></i>WordPress, Java</span>
                            <span><i className="fa-thin fa-location-dot"></i>Cupertino, USA</span>
                            <span><i className="fa-thin fa-money-bill-1"></i>$35000 - $40000</span>
                            <span><i className="fa-thin fa-clock"></i>Full Time</span>
                            
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
                        <img src="assets/img/job/volkswagen.png" alt="apple"/>
                    </div>
                    <div className="jm-latest-job-layout-3-info">
                        <h4 className="jm-latest-job-layout-3-info-title"><Link to="/jobDetailsPage">Nutrition & Health Care</Link></h4>
                        <div className="jm-latest-job-layout-3-info-meta">
                            <span><i className="fa-thin fa-tags"></i>Food, Farming</span>
                            <span><i className="fa-thin fa-location-dot"></i>Cupertino, USA</span>
                            <span><i className="fa-thin fa-money-bill-1"></i>$5000 - $10000</span>
                            <span><i className="fa-thin fa-clock"></i>Part Time</span>
                            
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

export default RemoteJobsList