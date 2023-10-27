import { Flex, Box, Table, Thead, Tbody, Tr, Th, Td, Input, Heading, Divider } from "@chakra-ui/react";
import React from "react";
import TableSample from "../../components/TableSample"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Export from "./components/export";
import Import from "./components/import";
import OrderInventory from "./components/OrderInventory";
import { useQuery } from 'react-query';
// import SearchBar from "./components/Header/search";
import SearchBar from "./components/Header/searchResults";

const fetchData = async () => {
    const response = await fetch('http://localhost:8000/orders');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // return response.json();
    return response.json();

  };
  

export default function Orders(){
    const { data, isLoading, isError } = useQuery('products', fetchData);
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching data</div>;




    const containerStyle = {
        flexBasis: "20%", // Equal width for all containers (5 containers = 100%)
        textAlign: "center",
        padding: "20px",
        // backgroundColor: "white",
        // backgroundColor: "#e0e0e0",
      };
    const firstDivStyle= {
        background: "#f1f1f1",
        
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
                        Orders: All Locations
                    </Heading>
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


         <Flex
                align="center"
                justify="space-between"
                // borderBottom={'solid'}
                // borderColor="gray.300" // Customize the border color
                // borderWidth="1px" // Customize the border width
                
                bg="white"
                boxShadow="0 2px 5px rgba(0, 0, 0, 0.1)" // Improved box shadow
                borderRadius= "8px"
                fontFamily="Roboto, Arial, sans-serif" // Change to desired font
                h="60px"
                px={4}
                position="absolute"
                top={20}
                left={5}
                right={5}
                zIndex={10}
                style={{ alignItems: 'flex-start' }}

            >
            <Flex style={containerStyle} >
                Today
                
            </Flex>
            <Divider orientation="vertical" borderColor="gray.400" />

            <Flex style={{ ...containerStyle, alignItems: 'center', justifyContent: 'left', position: 'relative' }}>
                <Box style={{ position: 'absolute', top: 5 }}>
                    Orders
                </Box>
                <Flex justifyContent="space-between" >
                    <Box flex="1" > 
                        <ul>
                        <li style={{ color: "blue" }}><strong>0-30:</strong> Your text here</li>
                        </ul>
                    </Box>
                    <Box flex="1" ml='20px'>
                        <ul>
                        <li style={{ color: "green" }}><strong>31-90:</strong> Your text here</li>
                        </ul>
                    </Box>
                    <Box flex="1" ml='20px' >
                        <ul>
                        <li style={{ color: "red" }}><strong>91+:</strong> 14 Var</li>
                        </ul>
                    </Box>
                </Flex>      
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
   
            
        </Flex>

        <Box
                h="100%"
                w="100%"
                bg="purple"
                position= "relative"
                top= "60px"
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
                        zIndex={10}

                    >
                        <Box>
                        {/* Content for the title */}
                        

                        <Heading as="h1" size="md">
                            Search All Orders:
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
                     <Box
                     top={100}
                     position= "absolute"
                    //  bg="black"
                     h="100%"
                     w="100%"
                    //  borderRadius={8}
                     
                     >   
                        <OrderInventory products= {data}/>
                        <SearchBar></SearchBar>
                    </Box>

                    <Box background="black">
                       

                    </Box>
        </Box>
        {/* <SearchBar></SearchBar> */}

    </Box>




   
        </div>
    )

}