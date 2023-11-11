import { Flex, Box, Table, Thead, Tbody, Tr, Th, Td, Input, Heading, Divider, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import TableSample from "../../components/TableSample"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
// import InventoryTable from "./components/InventoryTable"
import Indicator_test from "./components/Indicator_test";
import Export from "./components/export";
import Import from "./components/import";
import MyGraph from "./components/Analytics/samplegraph";
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
import SimpleLineChart from "./components/Analytics/Total_Sale";  
import CustomDatePicker from "./components/Analytics/CustomDatepicker";
import Total_Sale_Shortcut from "./components/Analytics/Total_Sale";



export default function Analytics(){



    
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

    const [dates, setDates] = useState({
        startDate: "2023-07-15T10:00:00Z", // start with null or a specific date if required
        endDate: "2023-07-16T15:30:00Z", // start with null or a specific date if required
      });

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
        { id: 1, title: 'Box 1', graphReport: <Total_Sale_Shortcut dates={dates}/> },
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

     {/* <Sidebar/> */}
     <Box 
        position="relative"
            // bg= "blue"
            mt= {10}
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
                bg="#F0F0F0"
                h="60px"
                px={4}
                position="absolute"
                top={5}
                left={0}
                right={0}
                zIndex={10}

            >
                <Box>
                {/* Content for the title */}
                    <Heading as="h1" size="md">
                        Analytics
                    </Heading>
                    
                    <DateButton onChange={handleDateChange} />
                    <Button onClick={handleLogDates}>Log Dates</Button>
                    {/* <CustomDatePicker/> */}
                    {/* <Button colorScheme="teal" onClick={handleApply}>
                        Apply
                    </Button> */}




                </Box>
                

                {/* Nested flexbox */}
                <Flex
                    
                    // bg="black"
                    >
                    <Export/>
                    <Import/>
                </Flex>


                {/* <ProfileBox></ProfileBox> */}
                    
        </Flex>


        <Box 
                h="100%"
                w="100%"
                // bg="purple"
                position= "relative"
                top= "80px"
                borderRadius="8px"
                
                >


                    {/* //Sub-heading for the table */}
                    <Flex
                        align="center"
                        justify="space-between"
                        borderRadius="8px"
                        borderBottom={'solid'}
                        borderColor="gray.300" // Customize the border color
                        borderWidth="1px" // Customize the border width
                        bg="white"
                        h="60px"
                        px={4}
                        position="absolute"
                        top={0}
                        left={0}
                        right={0}
                        marginBottom="10px"
                        // zIndex={10}

                    >
                        <Box>
                        {/* Content for the title */}
                        <Heading as="h1" size="md">
                            Reports:
                        </Heading>
                        </Box>
                        
                        <Box
                                // bg="#F0F0F0"
                                borderRadius="8px"
                                mx="auto" // Center the search input horizontally
                                p={2}
                                w="800px"
                            >
                            
                        {/* Content for the search bar */}
                        
                            <Input placeholder="Search" />
                            
                        </Box>
    
                        {/* <ProfileBox></ProfileBox> */}
                
                    </Flex>
                                                        

                     {/* //This is for the inventory */}
                     <Flex flexWrap="wrap" justifyContent="center" position="absolute" marginTop="100px">
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
                    </Flex>

                    



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