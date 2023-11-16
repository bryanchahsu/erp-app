import Sidebar from "../../Sidebar";
import Header from "../../Header";
import BackButton from "../../back";
import Export from "../../export";
import { Flex, Box, Table, Thead, Tbody, Tr, Th, Td, Input, Heading, Divider } from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom';
import React, { useState } from "react";

import Total_Sale_Shortcut from "../Total_Sale";
import CustomDatePicker from "../CustomDatepicker";
import DateRangePick from "./DateRangePicker";
import FlexboxWithInnerBoxes from "./flexboxsample";


export default function SalesOverTime(){
    // const { data, isLoading, isError } = useQuery('products', fetchData);
    // if (isLoading) return <div>Loading...</div>;
    // if (isError) return <div>Error fetching data</div>;
    const [dates, setDates] = useState({
        startDate: "2023-07-15", // yyyy-MM-dd format
        endDate: "2023-07-16",   // yyyy-MM-dd format
      });

    const containerStyle = {
        flexBasis: "20%", // Equal width for all containers (5 containers = 100%)
        textAlign: "center",
        padding: "20px",
        backgroundColor: "purple",
      };
    const firstDivStyle= {
        background: "#F0F0F0",
        margin: 0,
        padding: 0,
        minHeight: '100vh', // To ensure the background covers the full viewport height
      };0


      const ulStyle = {
        color: 'blue',
        listStyle: 'none',
      };
    
      const bulletPointStyle = {
        fontSize: '3em',  // Adjust the font size here to make the bullet point bigger
        verticalAlign: 'middle',  // Optional: Align the bullet point vertically
        color: "blue"
      };
      
      const boldStyle = {
        fontWeight: 'bold', 
        color: 'black',
        verticalAlign: 'middle',
       
      };
    

    return(

    <div style= {firstDivStyle}>
  

     <Header/>

     <Sidebar/>
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
                    <Heading as="h1" size="md" ml="40px">
                        <BackButton/>
                        Sales Over Time
                    </Heading>
                </Box>
                
                

                {/* Nested flexbox */}
                <Flex
                    
                    // bg="black"
                    >


                    
                    {/* <Import/> */}
                    <Export/>
                    <Box
                        as={RouterLink}
                        // bg="#E6E6E6"
                        borderRadius="md"
                        cursor="pointer"
                        _hover={{
                          bg: "#CCCCCC",
                        }}
                        bg="black"
                        color="white"
                        to="/orders/new"
                        textAlign="center"  // Center the text
                        display="flex"     // Use flexbox to center vertically and horizontally
                        alignItems="center"
                        justifyContent="center"
                        pr="0.5em"
                        pl="0.5em"
                        ml= "2"  
                        >
                      Add Orders  
                    </Box>
                </Flex>


                {/* <ProfileBox></ProfileBox> */}
                    
        </Flex>


        {/* new header */}
        <Flex justify="space-between" maxheight= "10px"
                        align="center"
                        borderRadius="8px"
                        borderBottom={'solid'}
                        borderColor="gray.300" // Customize the border color
                        borderWidth="1px" // Customize the border width
                        // justify="space-between"
                        width="calc(100% + 100px)"
                        marginLeft="-50px" // Move it to the left by 50px
                        bg="white"
        >
            {/* <FlexboxWithInnerBoxes/>           */}
            {/* <CustomDatePicker/> */}
            test
        </Flex> 
        <DateRangePick/>               
        {/* <CustomDatePicker/> */}

        {/* inventory table below */}
        <Box
                h="100%"
                w="100%"
                right="70px"

                position= "relative"
                top= "20px"
                borderRadius="8px"
                
                >

                    <Total_Sale_Shortcut dates= {dates}/>
                    {/* //Sub-heading for the table */}
                    {/* <Flex
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
                        top={1}
                        left={4}
                        right={-120}
                        zIndex={10}

                    >
                        <Box>
                            <Heading as="h1" size="md">
                                Search Orders:
                            </Heading>
                        </Box>
                        
                        <Box
                                // bg="#F0F0F0"
                                borderRadius="8px"
                                mx="auto" // Center the search input horizontally
                                p={2}
                                w="800px"
                            >
                            
                  
                        
                            <Input placeholder="Search" isReadOnly   />
                            
                        </Box>
                    
                    </Flex> */}
                                                        

                     {/* //This is for the inventory */}
                     <Box
                     top={-1}
                     position= "absolute"
                    //  bg="black"
                     h="100%"
                     w="100%"
                    //  borderRadius={8}
                     
                     >   

                    </Box>
        </Box>
            {/* </Flex> */}
      {/* </Box> */}
    </Box>
      



   
        </div>
    )

}