import React, { useState } from "react";
import Sidebar from "../../Sidebar";
import Header from "../../Header";
import BackButton from "../../back";
import Export from "../../export";
import { Flex, Box, Heading } from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom';
import SalesOverTimeChart from "./SalesOverTime/SOTChart";
import DateRangePicker from "./DateRangePicker";

const SalesOverTime = () => {
  // Function to calculate the date for the previous 7 days
  const calculatePreviousWeek = () => {
    const endDate = new Date();
    const startDate = new Date(endDate);
    startDate.setDate(startDate.getDate() - 7);
    return {
      startDate: startDate.toISOString().split('T')[0],
      endDate: endDate.toISOString().split('T')[0]
    };
  };

  // Initialize the start and end dates to the previous 7 days
  const initialDates = calculatePreviousWeek();
  const [dates, setDates] = useState(initialDates);

// Function to handle date range selection
const handleDateRangeChange = ({ startDate, endDate }) => {
  setDates({ startDate, endDate });
  
};
console.log(dates.startDate, dates.endDate)

  return (
    <div>
      <Header />
      <Sidebar />
      <Box         position="relative"
            // bg= "blue"
            mt= {10}
            ml={250}
            p={100}
            // bg="black"
            h="1000px"
            >
        <Flex align="center" justify="space-between" bg="#F0F0F0" h="60px" px={4} position="absolute" top={5} left={0} right={0} zIndex={10}>
          <Box>
            <Heading as="h1" size="md" ml="40px">
              <BackButton />
              Sales Over Time
            </Heading>
          </Box>
          <Flex>
            <Export />
            <Box as={RouterLink} borderRadius="md" cursor="pointer" _hover={{ bg: "#CCCCCC" }} bg="black" color="white" to="/orders/new" textAlign="center" display="flex" alignItems="center" justifyContent="center" pr="0.5em" pl="0.5em" ml="2">
              Add Orders
            </Box>
          </Flex>
        </Flex>
        <Flex justify="space-between" maxheight="10px" align="center" borderRadius="8px" borderBottom={'solid'} borderColor="gray.300" borderWidth="1px" width="calc(100% + 100px)" marginLeft="-50px" bg="white">
          <DateRangePicker startDate={dates.startDate} endDate={dates.endDate} onDateRangeChange={handleDateRangeChange} />
        </Flex>
        <Box h="100%" w="100%" right="70px" position="relative" top="20px" borderRadius="8px">
          <SalesOverTimeChart startDate={dates.startDate} endDate={dates.endDate} />
        </Box>
      </Box>
    </div>
  );
};

export default SalesOverTime;
