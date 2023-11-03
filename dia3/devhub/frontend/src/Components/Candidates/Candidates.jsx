import React from 'react'
import CandidateSlider from './CandidateSlider'

const Candidates = () => {
  return (
    <div className="jm-candidates-area pb-100">
        <div className="container">

            <div className="jm-candidates-search-wrapper">
                <div className="jm-candidates-search-top-text">
                    <h4 className="jm-candidates-search-title">Find Your Candidates</h4>
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
                                <select className="jm-candidates-search-select">
                                    <option>Choose Type</option>
                                    <option>Freelance</option>
                                    <option>Full Time</option>
                                    <option>Part Time</option>
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

            <div className="row pt-90">
                <div className="col-12">
                    <div className="jm-section-title mb-40">
                        <h2 className="title mb-10">Expert Candidates</h2>
                        <p className="text">Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula</p>
                    </div>
                </div>
            </div>

            <CandidateSlider/>

        </div>
    </div>
  )
}

export default Candidates