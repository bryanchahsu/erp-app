import { Flex, Box, Table, Thead, Tbody, Tr, Th, Td, Input, Heading, List, ListItem } from "@chakra-ui/react";
import { Select } from '@chakra-ui/react'
import { Link as RouterLink, useParams } from 'react-router-dom';
import React from "react";
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"


import ProductDetailTest from "./ProductDetailTest";
import BackButton from "./components/back";
import SalesChannelsList from "./components/test2_saleschannel";
import { useQuery } from 'react-query';


const fetchProductDetail = async (productId) => {
  //django
  const response = await fetch(`http://127.0.0.1:8000/products/${productId}`);
  
  //json db
  // const response = await fetch(`http://localhost:8000/products/${productId}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
export default function ProductDetail(){

    // Access the URL parameter ":productId"
    let { productId } = useParams();

    // Use "productId" to fetch product details using React Query
    const { data, isLoading, isError, error } = useQuery(['product', productId], () =>
    fetchProductDetail (productId)
    );

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error.message}</div>;

      
    const firstDivStyle= {
        background: "#F0F0F0",
        margin: 0,
        padding: 0,
        minHeight: '100vh', // To ensure the background covers the full viewport height
      };
    return(
        <div>
            <Header/>
            <Sidebar/>
            <Box
              position="relative"
              mt={10}
              ml={250}
              p={100}
              bg="#F0F0F0"
              h="1000px"
              minWidth={500}
                  >
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
                  // position="absolute"
                  top={5}
                  mb= "10px"
                  left={200}
                  right={0}
                  zIndex={10}>
                <Box>
                  {/* Content for the title */}
                      {/* <BackButton/> */}
                      <Heading as="h1" size="md" ml= "190px">
                        <BackButton/>
                          Back Button with Product Name
                      </Heading>
                </Box>
                

                {/* Nested flexbox */}
                {/* <Flex
                     
                    // bg="black"
                    >
                    <Export/>
                    <Import/>
                </Flex> */}

              </Flex>
              
              <Flex flexDirection="row" alignItems="center" bg="red" 
                // height="1000px" 
                minWidth="200"  mt="-20px"
                >

                {/* Left Container */}
                <Flex width="50%"   bg="green" h="70%"  alignItems="center" flexDirection="column" 
                  flex="1"
                              // borderRadius={8}
                            //  boxShadow="0 2px 4px grey"
                             >
                              
                  <ProductDetailTest products= {data}/>
                 
                </Flex>
                
                {/* Right Container */}
                <Flex 
                      width="10%" 
                      ml="-50px" 
                      mr="50px"
                      // mt="-425px"
                      flex="1"
                      
                      bg="yellow" 
                      h="670px"
                      
                      alignItems="center" 
                      flexDirection="column"
                      // borderRadius={8}
                      // boxShadow="0 2px 4px grey"
                      
                      // bg="green"
                      >
                      <Flex
                        p={5}
                        // m="10px"
                        // ml="20px"
                        mt= "40px"
                        borderRadius="8px"
                        boxShadow="0 2px 4px grey"
                        h="100px"
                        w="75%"
                        flexDirection="column"
                        // alignItems="center"
                        bg="white"
                      >
                        Status
                        <Select placeholder='Select option'>
                          <option value='option1'>Active</option>
                          <option value='option2'>Draft</option>
                        </Select>
           
                      </Flex>

                      <Flex
                        p={10}
                        // m="10px"
                        // ml="20px"
                        mt= "20px"
                        borderRadius="8px"
                        boxShadow="0 2px 4px grey"
                        h="200px"
                        w="75%"
                        flexDirection="column"
                        alignItems="center"
                        bg="white"
                      >
                        <Box flex="1" bg="white" p={4}>
                          <SalesChannelsList/>
                        </Box>
                        {/* <Box flex="1" bg="blue.300" p={4}>
                          Sales
                        </Box> */}

                      </Flex>
                      



                  
                </Flex>
              </Flex> 
            </Box>                                 


            {/* <ProductInformationPage/> */}
 
        </div>
    )
}