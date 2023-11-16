import React, { useState } from "react";
import { DateRangePicker as DateRangePickerComponent } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // Import the default styles
import 'react-date-range/dist/theme/default.css'; // Import the default theme
import {Button} from "@chakra-ui/react"

const dateRangePickerStyle = {
  position: "fixed",
  top: "50px",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 9999,
  backgroundColor: "white",
  boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
  padding: "10px",
};

const DateRangePicker = () => {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedRange, setSelectedRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const handleSelect = (ranges) => {
    setSelectedRange([ranges.selection]);
  };

  const handleButtonClick = () => {
    setShowPicker(true);
  };

  const handleDateRangeSelected = () => {
    setShowPicker(false);
    // You can handle the selected date range here
    console.log("Selected Date Range:", selectedRange[0]);
  };

  return (
    <div>
      <Button bg="white" border="solid" onClick={handleButtonClick}>Last 7 Days</Button>
      {showPicker && (
        <div style={dateRangePickerStyle}>
          <DateRangePickerComponent
            ranges={selectedRange}
            onChange={handleSelect}
          />
          <Button onClick={handleDateRangeSelected}>Apply</Button>
        </div>
      )}
    </div>
  );
};

export default DateRangePicker;
