import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PriceArea2 = () => {
  const [activePlan, setActivePlan] = useState('premium');

  const handlePlanSelect = (plan) => {
    setActivePlan(plan);
  };

  return (
    <section className="jm-price-area-2 pt-85 pb-55">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="jm-section-title mb-40 text-center">
              <h2 className="title mb-10">Price Plan</h2>
              <p className="text">Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className={`jm-price-item-2 mb-30 ${activePlan === 'basic' ? 'active' : ''}`} onClick={() => handlePlanSelect('basic')}>
              <div className="jm-price-item-plan-2">
                <h5 className="title">Basic Plan</h5>
              </div>
              <div className="jm-price-item-price-2">
                <h2 className="title"><small>$</small>25<span>/Monthly</span></h2>
              </div>
              <div className="jm-price-item-content-2">
                <ul>
                  <li>Unlimited number of listings</li>
                  <li>Listings are visible for 30 days</li>
                  <li>One Time Fee</li>
                  <li>This Plan Includes 1 Job</li>
                  <li>Non-Highlighted Post</li>
                  <li>Posted For 30 Days</li>
                </ul>
              </div>
              <div className="jm-price-item-btn-2">
                <Link to="/contactPage" className={`jm-theme-btn ${activePlan === 'basic' ? '' :  'jm-transparent-btn'}`}>Buy Now</Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className={`jm-price-item-2 mb-30 ${activePlan === 'premium' ? 'active' : ''}`} onClick={() => handlePlanSelect('premium')}>
              <div className="jm-price-tag-2"><span className='popular-plan'>Popular</span></div>
              <div className="jm-price-item-plan-2">
                <h5 className="title">Premium Plan</h5>
              </div>
              <div className="jm-price-item-price-2">
                <h2 className="title"><small>$</small>55<span>/Monthly</span></h2>
              </div>
              <div className="jm-price-item-content-2">
                <ul>
                  <li>Unlimited number of listings</li>
                  <li>Listings are visible for 30 days</li>
                  <li>One Time Fee</li>
                  <li>This Plan Includes 1 Job</li>
                  <li>Non-Highlighted Post</li>
                  <li>Posted For 30 Days</li>
                </ul>
              </div>
              <div className="jm-price-item-btn-2">
                <Link to="/contactPage" className={`jm-theme-btn ${activePlan === 'premium' ? '' :  'jm-transparent-btn'}`}>Buy Now</Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className={`jm-price-item-2 mb-30 ${activePlan === 'corporate' ? 'active' : ''}`} onClick={() => handlePlanSelect('corporate')}>
              <div className="jm-price-item-plan-2">
                <h5 className="title">Corporate Plan</h5>
              </div>
              <div className="jm-price-item-price-2">
                <h2 className="title"><small>$</small>95<span>/Monthly</span></h2>
              </div>
              <div className="jm-price-item-content-2">
                <ul>
                  <li>Unlimited number of listings</li>
                  <li>Listings are visible for 30 days</li>
                  <li>One Time Fee</li>
                  <li>This Plan Includes 1 Job</li>
                  <li>Non-Highlighted Post</li>
                  <li>Posted For 30 Days</li>
                </ul>
              </div>
              <div className="jm-price-item-btn-2">
                <Link to="/contactPage" className={`jm-theme-btn ${activePlan === 'corporate' ? '' :  'jm-transparent-btn'}`}>Buy Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceArea2;
