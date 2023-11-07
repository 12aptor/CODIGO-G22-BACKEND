import React from 'react'
import CountUp from 'react-countup'

const Counter = () => {
  return (
    <div className="jm-footer-top-counter-wrap-2">
        <div className="jm-footer-top-counter-2">
            <div className="jm-footer-top-counter-item-2">
                <div className="jm-footer-counter-icon-2">
                    <i className="fa-thin fa-face-smile"></i>
                </div>
                <div className="jm-footer-counter-content-2">
                    <h2 className="title">
                        <span className="odometer footerCounter" data-count="145">
                            <CountUp duration={8} end={145}/>
                        </span>
                    </h2>
                    <span className="subtitle">Happy Client</span>
                </div>
            </div>
        </div>
        <div className="jm-footer-top-counter-2">
            <div className="jm-footer-top-counter-item-2">
                <div className="jm-footer-counter-icon-2">
                    <i className="fa-thin fa-briefcase"></i>
                </div>
                <div className="jm-footer-counter-content-2">
                    <h2 className="title">
                        <span className="odometer footerCounter" data-count="215">
                            <CountUp duration={8} end={215}/>
                        </span>
                    </h2>
                    <span className="subtitle">Job Listings</span>
                </div>
            </div>
        </div>
        <div className="jm-footer-top-counter-2">
            <div className="jm-footer-top-counter-item-2">
                <div className="jm-footer-counter-icon-2">
                    <i className="fa-thin fa-user-tie"></i>
                </div>
                <div className="jm-footer-counter-content-2">
                    <h2 className="title">
                        <span className="odometer footerCounter" data-count="745">
                            <CountUp duration={8} end={745}/>
                        </span>
                    </h2>
                    <span className="subtitle">Resumes Post</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Counter