import React, { useState, useEffect } from "react";
import { DateRangePicker as DateRangePickerComponent } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { Button, Box } from "@chakra-ui/react";
import { FaCalendar } from "react-icons/fa";

const DateRangePicker = ({ startDate, endDate, onDateRangeChange }) => {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedRange, setSelectedRange] = useState([
    {
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      key: 'selection',
    },
  ]);

  useEffect(() => {
    setSelectedRange([{ startDate: new Date(startDate), endDate: new Date(endDate), key: 'selection' }]);
  }, [startDate, endDate]);

  const handleSelect = (ranges) => {
    setSelectedRange([ranges.selection]);
  };

  const handleButtonClick = () => {
    setShowPicker(true);
  };

  const handleDateRangeSelected = () => {
    setShowPicker(false);
    const startDate = selectedRange[0].startDate.toISOString().split('T')[0]; // Extract date part and format
    const endDate = selectedRange[0].endDate.toISOString().split('T')[0]; // Extract date part and format
    onDateRangeChange({ startDate, endDate }); // Pass an object with startDate and endDate properties
  };
  
  const handleCancel = () => {
    setShowPicker(false);
  };

  // Format the date range in the desired format
  const formattedStartDate = selectedRange[0].startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  const formattedEndDate = selectedRange[0].endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  return (
    <div>
      <Box display="flex" alignItems="center">
        <Button
          leftIcon={<FaCalendar />}
          bg="white"
          border="1px solid #ccc"
          borderRadius="4px"
          boxShadow="0 1px 3px rgba(0, 0, 0, 0.1)"
          _hover={{ boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)" }}
          onClick={handleButtonClick}
          ml= "100px"
        >
          {`${formattedStartDate} - ${formattedEndDate}`}
        </Button>
      </Box>
      {showPicker && (
        <div style={dateRangePickerStyle}>
          <DateRangePickerComponent
            ranges={selectedRange}
            onChange={handleSelect}
          />
          <Button onClick={handleDateRangeSelected}>Apply</Button>
          <Button onClick={handleCancel}>Cancel</Button>
        </div>
      )}
    </div>
  );
};

const dateRangePickerStyle = {
  position: "fixed",
  top: "70px",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 9999,
  backgroundColor: "white",
  boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
  padding: "10px",
};

export default DateRangePicker;
