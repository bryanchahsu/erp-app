import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CustomDatePicker = () => {
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [isOpen, setIsOpen] = useState(false);

  const handleApply = () => {
    setIsOpen(false); // Close the datepicker
    // Perform further actions
  };

  const styles = {
    container: {
      position: 'relative',
      fontFamily: 'Arial, sans-serif',
      display: 'inline-block',
      margin: '0 auto',
      textAlign: 'left',
    },
    dropdown: {
      border: '1px solid #ccc',
      borderRadius: '4px',
      padding: '5px',
      margin: '0 5px',
      cursor: 'pointer',
    },
    button: {
      backgroundColor: '#f0f0f0',
      border: '1px solid #ccc',
      borderRadius: '4px',
      padding: '5px 10px',
      cursor: 'pointer',
      margin: '0 5px',
    },
    datePickerContainer: {
      position: 'absolute',
      top: '100%',
      left: 0,
      zIndex: 1000, // Ensure it's above other elements
    },
    applyButton: {
      backgroundColor: '#4CAF50', // Green color for apply button
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      marginRight: '5px',
    },
    cancelButton: {
      backgroundColor: '#f44336', // Red color for cancel button
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.dropdown} onClick={() => setIsOpen(!isOpen)}>
        {dateRange[0].toLocaleDateString()} - {dateRange[1].toLocaleDateString()}
      </div>
      {isOpen && (
        <div style={styles.datePickerContainer}>
          <DatePicker
            selectsRange
            inline
            startDate={dateRange[0]}
            endDate={dateRange[1]}
            onChange={update => setDateRange(update)}
          />
          <div>
            <button style={styles.applyButton} onClick={handleApply}>Apply</button>
            <button style={styles.cancelButton} onClick={() => setIsOpen(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDatePicker;
