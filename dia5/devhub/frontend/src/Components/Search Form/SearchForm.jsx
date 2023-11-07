import React, { useContext } from 'react';
import { JobContext } from '../../Context/JobContext';

const SearchForm = () => {
  const {isFormOpen, handleCloseForm} = useContext(JobContext)
  return (
    <>
      <div className={`body-overlay ${isFormOpen ? 'active' : ''}`} onClick={handleCloseForm}></div>
      <div className={`jm-search-popup ${isFormOpen ? 'active' : ''}`}>
        <form action="" className="search-form">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search..." />
          </div>
          <button type="submit" className="submit-btn"><i className="fal fa-search"></i></button>
        </form>
      </div>
    </>
  );
};

export default SearchForm;
