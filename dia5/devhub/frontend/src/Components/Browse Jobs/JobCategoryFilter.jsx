import React from 'react'

const JobCategoryFilter = () => {
  return (
    <div className="jm-browse-job-sidebar-widget">
        <h3 className="jm-browse-sidebar-widget-title">Categories</h3>
        <select name="select" className="mb-35">
            <option value="1">All category</option>
            <option value="1">Health Care</option>
            <option value="1">Management</option>
            <option value="1">Marketing</option>
            <option value="1">UX/UI Developer</option>
            <option value="1">WEB Developer</option>
            <option value="1">Graphic designer</option>
        </select>
    </div>
  )
}

export default JobCategoryFilter