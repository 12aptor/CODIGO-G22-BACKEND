import React, { useState } from 'react';
import GridJobs from './GridJobs';
import ListJobs from './ListJobs';
import SalaryFilter from './SalaryFilter';
import JobTypeFilter from './JobTypeFilter';
import AreaRangeFilter from './AreaRangeFilter';
import JobCategoryFilter from './JobCategoryFilter';
import TagFilter from './TagFilter';
import SearchBar from './SearchBar';

const BrowseJob = ({view}) => {
    const [activeTab, setActiveTab] = useState(view);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
  return (
    <div className="container">
      <div className="jm-browse-job-wrap pt-100 pb-60">
        <div className="row">
          <div className="col-xl-8 col-lg-8">
            <div className="jm-browse-job-tab mb-30">
              <div className="jm-browse-job-tab-left">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      className={`nav-link ${activeTab === 'grid' ? 'active' : ''}`}
                      id="nav-grid-tab"
                      onClick={() => handleTabChange('grid')}
                    >
                      <i className="fa-solid fa-grid"></i>
                    </button>
                    <button
                      className={`nav-link ${activeTab === 'list' ? 'active' : ''}`}
                      id="nav-list-tab"
                      onClick={() => handleTabChange('list')}
                    >
                      <i className="fa-solid fa-list-ul"></i>
                    </button>
                  </div>
                </nav>
                <p>There Are 6 Products.</p>
              </div>
              <div className="jm-browse-job-tab-right">
                <p>Sort By:</p>
                <select name="select">
                  <option value="1">Select Category</option>
                  <option value="1">Web Designer</option>
                  <option value="1">UX/UI Designer</option>
                  <option value="1">Digital Marketing</option>
                </select>
              </div>
            </div>
            <div className="tab-content" id="nav-tabContent">
              <div className={`tab-pane fade ${activeTab === 'grid' ? 'show active' : ''}`} id="nav-grid" role="tabpanel" aria-labelledby="nav-grid-tab">
                <GridJobs />
              </div>
              <div className={`tab-pane fade ${activeTab === 'list' ? 'show active' : ''}`} id="nav-list" role="tabpanel" aria-labelledby="nav-list-tab">
                <ListJobs />
              </div>
            </div>
          </div>
            <div className="col-xl-4 col-lg-4">
                <div className="jm-browse-job-sidebar ml-40">
                    <SearchBar/>
                    <AreaRangeFilter/>
                    <JobTypeFilter/>
                    <JobCategoryFilter/>
                    <SalaryFilter/>
                    <TagFilter/>
                
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseJob;
