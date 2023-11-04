import { Slider } from "@mui/material";
import { useState } from "react";

const SalaryFilter = () => {
  const [priceRange, setPriceRange] = useState([1200, 5000]);
  
  const handlePriceRangeChange = (event, newValue) => {
    setPriceRange(newValue);
  };
  

  return (
    <div className="jm-browse-job-sidebar-widget mb-35">
      <h3 className="jm-browse-sidebar-widget-title has-cursor">Filter by Salary</h3>
      <div className="jm-browse-range-price jm-browse-widget-toogle">
        <div className="slider-range-amount mb-15">
          <input
            type="text"
            id="s-amount"
            value={`$${priceRange[0]} - $${priceRange[1]}`}
            readOnly
            className="amount"
          />
        </div>
        <div className="slider-range-bar">
        <Slider
                value={priceRange}
                valueLabelDisplay="auto"
                onChange={handlePriceRangeChange}
                max={10000}
                min={100}
            />
        </div>
      </div>
    </div>
  );
};

export default SalaryFilter;
