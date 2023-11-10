import React, { useState, useEffect } from "react";
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

const DateButton = ({ onChange }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [nextMonth, setNextMonth] = useState(new Date());

  useEffect(() => {
    // Calculate the next month based on the current start date
    const calculatedNextMonth = new Date(startDate);
    calculatedNextMonth.setMonth(calculatedNextMonth.getMonth() + 1);
    setNextMonth(calculatedNextMonth);
  }, [startDate]); // Recalculate when startDate changes

  const handleChangeStart = (date) => {
    setStartDate(date);
    if (date > endDate) {
      // If the new start date is after the current end date, update the end date to match
      setEndDate(date);
    }
    onChange({ startDate: date, endDate: endDate > date ? endDate : date });
  };

  const handleChangeEnd = (date) => {
    if (date >= startDate) {
      setEndDate(date);
      onChange({ startDate: startDate, endDate: date });
    }
  };

  const handleClearDates = () => {
    setStartDate(null);
    setEndDate(null);
    onChange({ startDate: null, endDate: null });
  };

  const handleApply = () => {
    onChange({ startDate: startDate, endDate: endDate });
  };

  const popoverContentStyle = {
    position: "absolute",
    zIndex: 999999,
    width: "500px",
  };

  return (
    <Flex flexDirection="column">
      <Popover placement="bottom" closeOnBlur={false}>
        <PopoverTrigger>
          <Button bg="white" border="solid">Select Dates</Button>
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
              <ChevronRightIcon boxSize={6} mt="2" mb="2" marginRight="2" />
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
                onChange={handleChangeStart}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                dateFormat="MM/dd/yyyy"
                inline
              />
              <DatePicker
                selected={endDate}
                onChange={handleChangeEnd}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                dateFormat="MM/dd/yyyy"
                inline
                // Force the calendar to the next month
                month={nextMonth.getMonth()}
                year={nextMonth.getFullYear()}
              />
            </Flex>
            <Flex justifyContent="flex-end" marginTop="10px">
              <Button variant="outline" marginRight="2" onClick={handleClearDates}>
                Clear Dates
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
