import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { subDays } from "date-fns";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import FlexboxWithInnerBoxes from "./flexboxsample";
const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(subDays(new Date(), 30)); // 30 days ago
  const [endDate, setEndDate] = useState(new Date()); // current date
  const [showPicker, setShowPicker] = useState(false);

  const handleButtonClick = () => {
    setShowPicker(true);
  };

  const handleDateRangeSelected = () => {
    setShowPicker(false);
    // You can handle the selected date range here
    console.log("Selected Date Range:", startDate, endDate);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Select Date Range</button>
      {showPicker && (    <Flex
      direction="column" // Stack items vertically
      justify="center" // Center content horizontally
      align="center" // Center content vertically
      h="500px" // Set the height of the outer flexbox to the viewport height
      w="900px"
      bg="gray.200" // Set background color for the outer flexbox
    >

        {/* main  */}
      <Flex
        w="100%" // Set width of the inner boxes to 100% of the parent (outer flexbox)
        h="90%" // Set height of each inner box to 50% of the parent (outer flexbox)
        bg="red.500" // Set background color of the top inner box to red
      >

        {/* date type filter */}
        <Flex
                w="30%" // Set width of the inner boxes to 100% of the parent (outer flexbox)
                h="100%" // Set height of each inner box to 50% of the parent (outer flexbox)
                bg="yellow.500" // Set background color of the top inner box to red
        >


        </Flex>

        <Flex
                        w="70%" // Set width of the inner boxes to 100% of the parent (outer flexbox)
                        h="100%" // Set height of each inner box to 50% of the parent (outer flexbox)
                        bg="green.500" // Set background color of the top inner box to red
                        direction="column" // Stack items vertically
                        justify="center" // Center content horizontally
                        align="center" // Center content vertically
                        
        
        >
            <Box
                h="20%"
                w="100%"
                bg="red"
            
            >
                hi
            </Box>
            <Box
                h="80%"
                w="100%"
                bg="yellow"
            >
                  <Flex flexDirection="row" alignItems="center">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            startDate={startDate}
            endDate={endDate}
            selectsStart
            maxDate={endDate}
            inline
            style={{ marginRight: "10px" }} // Add margin to the right for spacing
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            startDate={startDate}
            endDate={endDate}
            selectsEnd
            minDate={startDate}
            inlinestyle={{ marginLeft: "10px" }} // Add margin to the left for spacing
          />
          <button onClick={handleDateRangeSelected}>Apply</button>
        </Flex>
            </Box>
        </Flex>
        


      </Flex>
      {/* footer */}
      <Flex
        w="100%" // Set width of the inner boxes to 100% of the parent (outer flexbox)
        h="10%" // Set height of each inner box to 50% of the parent (outer flexbox)
        bg="blue.500" // Set background color of the bottom inner box to blue
      >
        
      </Flex>
    </Flex>

      )}


    </div>
  );
};

export default DateRangePicker;
