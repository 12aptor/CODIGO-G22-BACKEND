import React from 'react'
import { Link } from 'react-router-dom'

const ErrorArea = () => {
  return (
    <div className="jm-error-area pt-100 pb-100">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-8">
                    <div className="jm-error-img mb-40 text-center">
                        <img src="assets/img/error/error.png" alt=""/>
                    </div>
                    <div className="jm-error-content text-center">
                        <h3 className="jm-error-title">Opps! Page Not Found</h3>
                        <p className="text mb-30">Sorry This Page Not found take a look at our most popular</p>
                        <Link to="/" className="jm-theme-btn">GO TO HOME</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ErrorArea