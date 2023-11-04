import React from 'react';
import { Slider } from "@mui/material";

const AreaRangeFilter = () => {
  const [value, setValue] = React.useState(110);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="jm-browse-job-sidebar-widget mb-35">
      <h3 className="jm-browse-sidebar-widget-title has-cursor">Search by Radius</h3>
      <div className="jm-browse-range-area jm-browse-widget-toogle">
        <div className="slider-area-range mb-15">
          <Slider
            value={value}
            onChange={handleChange}
            aria-labelledby="j-area"
            step={10}
            min={0}
            max={200}
            valueLabelDisplay="auto"
          />
        </div>
        <div className="slider-area-range-bar"></div>
      </div>
    </div>
  );
};

export default AreaRangeFilter;
