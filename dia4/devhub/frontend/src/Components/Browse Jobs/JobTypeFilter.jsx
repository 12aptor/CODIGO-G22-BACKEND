import React, { useContext } from 'react'
import { JobContext } from '../../Context/JobContext';

const JobTypeFilter = () => {
    const { handleJobTimeSelect } = useContext(JobContext);
  return (
    <div className="jm-browse-job-sidebar-widget mb-30">
        <h3 className="jm-browse-sidebar-widget-title jm-title">Jop Type</h3>
        <div className="jm-browse-sidebar-type">
        <form>
            <div className="jm-checkbox">
            <label>
                <input type="checkbox" name="jobTime" value="Freelance" onChange={handleJobTimeSelect} />
                Freelance
            </label>
            </div>
            <div className="jm-checkbox">
            <label>
                <input type="checkbox" name="jobTime" value="Full Time" onChange={handleJobTimeSelect} />
                Full Time
            </label>
            </div>
            <div className="jm-checkbox">
            <label>
                <input type="checkbox" name="jobTime" value="Part Time" onChange={handleJobTimeSelect} />
                Part Time
            </label>
            </div>
            <div className="jm-checkbox">
            <label>
                <input type="checkbox" name="jobTime" value="Internship" onChange={handleJobTimeSelect} />
                Internship
            </label>
            </div>
        </form>
        </div>
    </div>
  )
}

export default JobTypeFilter