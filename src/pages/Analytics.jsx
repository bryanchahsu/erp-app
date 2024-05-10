import { SimpleGrid, Flex, Box, Table, Thead, Tbody, Tr, Th, Td, Input, Heading, Divider, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import TableSample from "../../components/TableSample"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
// import InventoryTable from "./components/InventoryTable"
import Indicator_test from "./components/Indicator_test";
import Export from "./components/export";
import Import from "./components/import";
// import InventoryTable from "./components/ProductInventory";
import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
  } from '@chakra-ui/react'

import DateButton from "./components/DateButton";
import SalesOverTimeChart from "./components/Analytics/Reports/SalesOverTime/SOTChart";
import SalesBySkuChart from "./components/Analytics/Reports/SalesBySku/SBSChart";
import DateRangePicker from "./components/Analytics/Reports/DateRangePicker";

export default function Analytics(){

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

    
    const containerStyle = {
        flexBasis: "20%", // Equal width for all containers (5 containers = 100%)
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#e0e0e0",
      };
    const firstDivStyle= {
        background: "#F0F0F0",
        margin: 0,
        padding: 0,
        minHeight: '100vh', // To ensure the background covers the full viewport height
      };

    // const [dates, setDates] = useState({
    //     // startDate: "2023-07-15T10:00:00Z", // start with null or a specific date if required
    //     // endDate: "2023-07-16T15:30:00Z", // start with null or a specific date if required
    //     startDate: "2023-07-15", // yyyy-MM-dd format
    //     endDate: "2023-07-16",   // yyyy-MM-dd format
    //   });

    // const [dates, setDates] = useState({
    // startDate: null, // start with null or a specific date if required
    // endDate: null, // start with null or a specific date if required
    // });     
    
      const handleDateChange = (newDates) => {
        setDates(newDates);
      };
    
      const handleLogDates = () => {
        console.log("Start Date:", dates.startDate);
        console.log("End Date:", dates.endDate);
      };
    
      const graphData = [
        // { id: 1, title: 'Box 1', graphReport: <Total_Sale_Shortcut dates={dates}/> },
        
        // { id: 1, title: 'Box 1', graphReport: <MyGraph/> },
    
        // { id: 2, title: 'Box 2', graphReport: <MyGraph/> },
        // { id: 2, title: 'Box 2', graphReport: <MyGraph/> },
        // { id: 2, title: 'Box 2', graphReport: <MyGraph/> },
        // { id: 2, title: 'Box 2', graphReport: <MyGraph/> },
        // { id: 2, title: 'Box 2', graphReport: <MyGraph/> },
        // { id: 2, title: 'Box 2', graphReport: <MyGraph/> },
        // { id: 2, title: 'Box 2', graphReport: <MyGraph/> },
        // { id: 2, title: 'Box 2', graphReport: <MyGraph/> },
        // Add more data as needed
        ];


    return(

    <div style= {firstDivStyle}>


  

     <Header/>

     <Sidebar/>
     <Box 
        position="relative"
            // bg= "blue"
            mt= "60px"
            ml={250}
            p={100}
            // bg="black"
            h="1000px"
            >
        {/* <Box bg="blue"> */}

        {/* Outerbox Header above the table box */}

        <Flex
                align="center"
                justify="space-between"
                // borderBottom={'solid'}
                // borderColor="gray.300" // Customize the border color
                // borderWidth="1px" // Customize the border width
                // bg="#F0F0F0"
                
                bg="blue"

                h="60px"
                px={4}
                position="absolute"
                top={5}
                left={0}
                right={0}
                zIndex={10}

            >
                <Box
                    bg="purple"
                >
                {/* Content for the title */}
                    <Heading as="h1" size="md" ml= "100px">
                        Analytics
                    </Heading>
                    
                    {/* <Button onClick={handleLogDates}>Log Dates</Button> */}
                    {/* <DateButton ml= "100px" onChange={handleDateChange} /> */}

                    {/* <Button colorScheme="teal" onClick={handleApply}>
                        Apply
                    </Button> */}

                    <DateRangePicker startDate={dates.startDate} endDate={dates.endDate} onDateRangeChange={handleDateRangeChange} />


                </Box>
                

                {/* Nested flexbox */}
                <Flex
                    
                    // bg="black"
                    >
                    {/* <Export/> */}
                    {/* <Import/> */}
                </Flex>                    
        </Flex>


        <Box 
                h="100%"
                w="100%"
                // bg="purple"
                position= "relative"
                // top= "80px"
                borderRadius="8px"
                
                >

                     {/* //This is for the inventory */}
                     {/* <Flex flexWrap="wrap" justifyContent="center" position="absolute" marginTop="100px" bg= 'blue'> */}


                     <Box p={8} >
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                    {/* Total Sales */}
                    <Box bg="white" p={6} borderRadius="md">
                        
                        {/* <SalesOverTimeChart/> */}

                        <SalesBySkuChart startDate={dates.startDate} endDate={dates.endDate} />
                        
                        {/* <Stat>
                            <StatLabel>Total Sales</StatLabel>
                            <StatNumber>$10,485.67</StatNumber>
                            <StatHelpText>133% ↑</StatHelpText>
                        </Stat> */}
                    </Box>

                    {/* Sales by Channel */}
                    <Box bg="white" p={6} borderRadius="md">
                        <SalesOverTimeChart startDate={dates.startDate} endDate={dates.endDate} />

                        {/* <Stat>
                            <StatLabel>Sales by Channel</StatLabel>
                        </Stat> */}
                    </Box>

                    {/* Conversion Rate */}
                    <Box bg="white" p={6} borderRadius="md">
                        <Stat>
                            <StatLabel>Online Store Conversion Rate</StatLabel>
                            <StatNumber>13.53%</StatNumber>
                            <StatHelpText>77% ↑</StatHelpText>
                        </Stat>
                    </Box>

                    {/* Total Orders */}
                    <Box bg="white" p={6} borderRadius="md">
                        <Stat>
                            <StatLabel>Total Orders</StatLabel>
                            <StatNumber>18</StatNumber>
                        </Stat>
                    </Box>

                    {/* Average Order Value */}
                    <Box bg="white" p={6} borderRadius="md">
                        <Stat>
                            <StatLabel>Average Order Value</StatLabel>
                            <StatNumber>$565.53</StatNumber>
                            <StatHelpText>57% ↑</StatHelpText>
                        </Stat>
                    </Box>

                    {/* Online Store Sessions */}
                    <Box bg="white" p={6} borderRadius="md">
                        <Stat>
                            <StatLabel>Online Store Sessions</StatLabel>
                            <StatNumber>133</StatNumber>
                        </Stat>
                    </Box>
                </SimpleGrid>
            </Box>

                        {graphData.map((item) => (
                            <Box
                            key={item.id}
                            width="400px"
                            height="400px"
                            backgroundColor="white"
                            margin="10px"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            fontSize="2xl"
                            >
                            {item.graphReport} {/* Render the component from graphReport property */}
                            </Box>
                        ))}
                    {/* </Flex> */}

                    



                     <Box
                     top={100}
                     position= "absolute"
                    //  bg="black"
                     h="100%"
                     w="100%"
                    //  borderRadius={8}
                     
                     >   
                        {/* <InventoryTable/> */}
                    </Box>
        </Box>
            {/* </Flex> */}
      {/* </Box> */}
    </Box>



   
        </div>
    )

}