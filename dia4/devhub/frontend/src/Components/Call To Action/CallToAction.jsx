import React from 'react'
import { Link } from 'react-router-dom'

const CallToAction = () => {
  return (
    <div className="jm-call-to-action-area pb-100">
        <div className="container">
            <div className="jm-noo-call-to-action-content">
                <div className="jm-action-box">
                    <h2 className="jm-action-title text-white mb-0"> Post Job Now</h2>
                </div>
                <div className="jm-action-text">
                    <p className="mb-0"> Start your free trial today, no credit card is required.</p>
                </div>
                <span className="jm-action-button ">
                    <Link to="/postJobPage" className="jm-theme-btn">Post now</Link>
                </span> 
            </div>
        </div>
    </div>
  )
}

export default CallToAction