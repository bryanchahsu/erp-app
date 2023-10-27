import { Flex, Box, Table, Thead, Tbody, Tr, Th, Td, Input, Heading, Divider } from "@chakra-ui/react";
import React from "react";
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
      };0
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
                    <Heading as="h1" size="md">
                        Analytics
                    </Heading>
                    <DateButton/>

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

        {/* <Flex justifyContent="center" 
                alignItems="center" 
                height="100vh"
                // bg="black"
                > */}

        
        {/* <Flex
                align="center"
                justify="space-between"
                // borderBottom={'solid'}
                // borderColor="gray.300" // Customize the border color
                // borderWidth="1px" // Customize the border width
                
                bg="white"
                boxShadow="0 0.5px px grey"
                borderRadius= "8px"
                
                h="60px"
                px={4}
                position="absolute"
                top={20}
                left={5}
                right={5}
                zIndex={10}
                style={{ alignItems: 'flex-start' }}

            >
            <Flex style={containerStyle}>
                Today
                
            </Flex>
            <Divider orientation="vertical" borderColor="gray.400" />

            <Flex style={{ ...containerStyle, alignItems: 'center', justifyContent: 'left', position: 'relative' }}>
                <Box style={{ position: 'absolute', top: 5 }}>
                    Orders
                </Box>
                <Box >
                    a
                </Box>                    
            </Flex>
            <Divider orientation="vertical" borderColor="gray.400" />
            
            <Flex style={{ ...containerStyle, alignItems: 'center', justifyContent: 'left', position: 'relative' }}>
                <Box style={{ position: 'absolute', top: 5 }}>
                    Ordered Items
                </Box>
                <Box >
                    a
                </Box>                    
            </Flex>
            <Divider orientation="vertical" borderColor="gray.400" />
            
            <Flex style={{ ...containerStyle, alignItems: 'center', justifyContent: 'left', position: 'relative' }}>
                <Box style={{ position: 'absolute', top: 5 }}>
                    Fulfilled Items
                </Box>
                <Box >
                    a
                </Box>                    
            </Flex>
            <Divider orientation="vertical" borderColor="gray.400" />
            
            <Flex style={{ ...containerStyle, alignItems: 'center', justifyContent: 'left', position: 'relative' }}>
                <Box style={{ position: 'absolute', top: 5 }}>
                    Fulfilled Orders
                </Box>
                <Box >
                    a
                </Box>                    
            </Flex>
            <Divider orientation="vertical" borderColor="gray.400" />
   
            
        </Flex> */}

        <Box 
                h="100%"
                w="100%"
                bg="purple"
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
                     <Flex flexWrap="wrap" justifyContent="center" position= "absolute" marginTop="100px">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                            <Box
                            key={item}
                            width="400px" // Adjust the width to be 5 times bigger
                            height="400px" // Adjust the height to be 5 times bigger
                            // backgroundColor="gray.200"
                            backgroundColor="white"
                            margin="10px"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            fontSize="2xl"
                            >
                            {item}
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