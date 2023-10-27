import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Flex,
  Button,
  Input,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverCloseButton,
  PopoverBody,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
// import "../CSS/DatePickerStyles.css"


const DateButton = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const popoverContentStyle = {
    position: "absolute",
    zIndex: 999999, // Adjust the zIndex value as needed
    width: "500px", // Adjust the width of the popover container
  };

  const handleApply = () => {
    console.log("Selected start date:", startDate);
    console.log("Selected end date:", endDate);
    // Add your logic to handle the selected dates (e.g., save them to state or send them to the server)
  };

  return (
    <Flex flexDirection="column">
      <Popover placement="bottom" closeOnBlur={false}>
        <PopoverTrigger>
          <Button bg="white" border= "solid">Today</Button>
        </PopoverTrigger>
        <PopoverContent style={popoverContentStyle}>
          <PopoverHeader>Select Dates</PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody>
            <Flex alignItems="center" marginBottom="10px">
              <Input
                type="text"
                placeholder="Start date"
                value={startDate ? startDate.toLocaleDateString() : ""}
                readOnly
                marginRight="2"
                flex="1"
              />
              <ChevronRightIcon boxSize={6} mt={2} mb={2} marginRight="2" />
              <Input
                type="text"
                placeholder="End date"
                value={endDate ? endDate.toLocaleDateString() : ""}
                readOnly
                flex="1"
              />
            </Flex>
            <Flex justifyContent="space-between">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="MM/dd/yyyy"
                showMonthDropdown={false} // Hide month dropdown
                showYearDropdown={false}  // Hide year dropdown
                inline
              />
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                dateFormat="MM/dd/yyyy"
                showMonthDropdown={false} // Hide month dropdown
                showYearDropdown={false}  // Hide year dropdown
                inline
              />
            </Flex>
            <Flex justifyContent="flex-end" marginTop="10px">
              <Button variant="outline" marginRight={2} onClick={() => setStartDate(null)}>
                Clear
              </Button>
              <Button variant="outline" marginRight={2} onClick={() => setEndDate(null)}>
                Clear End Date
              </Button>
              <Button colorScheme="teal" onClick={handleApply}>
                Apply
              </Button>
            </Flex>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
};

export default DateButton;
