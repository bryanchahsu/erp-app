// import CustomerTable from "./components/customerTable.jsx"
// import TextEditor from "./components/textEditor.jsx"
import { Flex, Box, Table, Thead, Tbody, Tr, Th, Td, Input, Heading, Divider } from "@chakra-ui/react";
import React from "react";
import TableSample from "../../components/TableSample"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Export from "./components/export";
import Import from "./components/import";

import { useQuery } from 'react-query';
import { Link as RouterLink } from 'react-router-dom';
import CustomerTable from "./components/Customer/CustomerTable.jsx";
import UserTable from "./components/Customer/UserTable.jsx";
import CustomerTableSort from "./components/Customer/CustomerTableSort.jsx";


const fetchData = async () => {

    //this uses json db
    // const response = await fetch('http://localhost:8000/customer');

    //this uses django webserver
    const response = await fetch('http://127.0.0.1:8000/customers/');

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // return response.json();
    return response.json();

  };

  
// const fetchData = async () => {
//     const response = await fetch('http://127.0.0.1:8000/customers/');
  
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
  
//     const data = await response.json();
  
//     // Ensure data is always an array, even if it's empty
//     return Array.isArray(data) ? data : [];
//   };

  
export default function Customers(){
    const { data, isLoading, isError } = useQuery('customers', fetchData);
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching data</div>;

    console.log('Fetched data:', data);



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
                        Customers
                    </Heading>
                </Box>
                
                

                {/* Nested flexbox */}
                <Flex
                    
                    // bg="black"
                    >


                    
                    <Import/>
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
                        to="/customers/new"
                        textAlign="center"  // Center the text
                        display="flex"     // Use flexbox to center vertically and horizontally
                        alignItems="center"
                        justifyContent="center"
                        pr="0.5em"
                        pl="0.5em"
                        ml= "2"  
                        >
                      Add Customer  
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
        >
            {/* left inner box */}
            <Box flex="1" bg="white" p="4" height="75px" borderRadius="8px">
                <Box>
                   box 1
                </Box>
                <Box>
                   box 1
                   
                </Box>
            </Box>
            
            <Divider orientation='vertical' />
             {/* middle  inner box */}
            <Box flex="1" bg="white" p="4" 
                height="75px"
                borderRadius="8px"
            >
                <Box position="absolute">
                    Days of inventory remaining
                </Box>

                
                <Flex justifyContent="space-between" width="100%" height="100%">
                {/* <Box> */}
                    <Box flex="1"  > 
                        {/* <ul style={{ color: "blue" }}>
                            <li>
                                <span style={{ color: "black" }}>0-30:</span>
                            </li>
                        </ul> */}
                        <ul style={ulStyle}>
                            <li>
                                <span style={{ color: 'black',position: 'relative', bottom: '0.15em'}}>
                                    <span style={bulletPointStyle}>•</span>
                                </span>
                                <span style={boldStyle}>
                                    0-30 &nbsp;&nbsp;  
                                    <span >
                                        3 
                                    </span>
                                </span>
                            </li>
                        </ul>                        
                    </Box>
                    <Box flex="1" ml='20px'>

                        <ul style={ulStyle}>
                            <li>
                                <span style={{ color: 'black',position: 'relative', bottom: '0.15em' }}>
                                    <span style={bulletPointStyle}>•</span>
                                </span>
                                <span style={boldStyle}>
                                    31-90 &nbsp; 
                                    <span >
                                    10 
                                    </span>
                                </span>
                            </li>
                        </ul>       
                    </Box>
                    <Box flex="1" ml='20px' >

                        <ul style={ulStyle}>
                            <li>
                                <span style={{ color: 'black' ,position: 'relative', bottom: '0.15em'}}>
                                    <span style={bulletPointStyle}>•</span>
                                </span>
                                <span style={boldStyle}>
                                    91+ &nbsp;&nbsp;  
                                    <span >
                                    10 
                                    </span>
                                </span>
                            </li>
                        </ul> 
                    </Box>
                </Flex>    
                {/* </Box> */}
            </Box>

            {/* right inner box */}
            <Divider orientation='vertical' />
            <Box flex="1" bg="white" p="4" height="75px" borderRadius="8px">
                <Box position="absolute">
                    Inventory value by price
                </Box>
                
                <Flex justifyContent="space-between" width="100%" height= "25px">
                {/* <Box> */}
                    <Box flex="1" > 
                        {/* <ul style={{ color: "blue" }}>
                            <li>
                                <span style={{ color: "black" }}>0-30:</span>
                            </li>
                        </ul> */}
                        <ul style={ulStyle}>
                            <li>
                                <span style={{ color: 'black',position: 'relative', bottom: '0.15em'}}>
                                    <span style={bulletPointStyle}>•</span>
                                </span>
                                <span style={boldStyle}>
                                    0-30 &nbsp;&nbsp;  
                                    <span >
                                        3 
                                    </span>
                                </span>
                            </li>
                        </ul>                        
                    </Box>
                    <Box flex="1" ml='20px'>

                        <ul style={ulStyle}>
                            <li>
                                <span style={{ color: 'black',position: 'relative', bottom: '0.15em' }}>
                                    <span style={bulletPointStyle}>•</span>
                                </span>
                                <span style={boldStyle}>
                                    31-90 &nbsp; 
                                    <span >
                                    10 
                                    </span>
                                </span>
                            </li>
                        </ul>       
                    </Box>
                    <Box flex="1" ml='20px' >

                        <ul style={ulStyle}>
                            <li>
                                <span style={{ color: 'black' ,position: 'relative', bottom: '0.15em'}}>
                                    <span style={bulletPointStyle}>•</span>
                                </span>
                                <span style={boldStyle}>
                                    91+ &nbsp;&nbsp;  
                                    <span >
                                    10 
                                    </span>
                                </span>
                            </li>
                        </ul> 
                    </Box>
                </Flex>    
                {/* </Box> */}
            </Box>
        </Flex> 
      
        

        {/* inventory table below */}
        <Box
                h="100%"
                w="100%"
                right="70px"

                position= "relative"
                top= "20px"
                borderRadius="8px"
                
                >


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
                                Search Customer:
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

                    {/* <UserTable userData= {data} />
                    <CustomerTable customers={data}/> */}
                    <CustomerTableSort customers= {data.customers}/>

                    </Box>
        </Box>
            {/* </Flex> */}
      {/* </Box> */}
    </Box>
      
      {/* <CustomerTable/> */}



   
        </div>
    )

}
