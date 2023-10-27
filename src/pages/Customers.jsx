import CustomerTable from "./components/customerTable.jsx"
// import TextEditor from "./components/textEditor.jsx"
import { Flex, Box, Table, Thead, Tbody, Tr, Th, Td, Input, Heading, Divider } from "@chakra-ui/react";
import React from "react";
import TableSample from "../../components/TableSample"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Export from "./components/export";
import Import from "./components/import";
import OrderInventory from "./components/OrderInventory";
import { useQuery } from 'react-query';


const fetchData = async () => {
    const response = await fetch('http://localhost:8000/orders');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // return response.json();
    return response.json();

  };
  

export default function Customers(){
    const { data, isLoading, isError } = useQuery('products', fetchData);
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching data</div>;




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
                        Customers
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

        {/* <Flex justifyContent="center" 
                alignItems="center" 
                height="100vh"
                // bg="black"
                > */}
        <Flex
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

            >
            <Box style={containerStyle}>
                {/* <Indicator_test/> */}
                17109 customers
                
                
            </Box>
            <Divider orientation="vertical" borderColor="gray.400" />
            <Box style={containerStyle}>100% of your customer base</Box>
            <Divider orientation="vertical" borderColor="gray.400" />
            <Box style={containerStyle}>Container 3</Box>
            <Divider orientation="vertical" borderColor="gray.400" />
            <Box style={containerStyle}>Container 4</Box>
            <Divider orientation="vertical" borderColor="gray.400" />
            <Box style={containerStyle}>Container 5</Box>
                    
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
                            Inventory:
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
                        
                    </Box>
        </Box>
            {/* </Flex> */}
      {/* </Box> */}
    </Box>
    Profile
      
      <CustomerTable/>



   
        </div>
    )

}



// export default function Customers() {
//   return (
//     <div>
//       Profile
      
//       <CustomerTable/>
//       {/* <TextEditor/> */}

//     </div>
//   )
// }
