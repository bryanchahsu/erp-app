import { Flex, Box, Table, Thead, Tbody, Tr, Th, Td, Input, Heading, List, ListItem } from "@chakra-ui/react";
import { Select } from '@chakra-ui/react'
import { Link as RouterLink, useParams } from 'react-router-dom';
import React from "react";
import Header from "./components/Header"
// import Header_Save from "./components/ProductNew/Header_Save";
import Sidebar from "./components/Sidebar"

import Export from "./components/export";
import Import from "./components/import";

import ProductDetailTest from "./ProductDetailTest";
import BackButton from "./components/back";
import SalesChannelsList from "./components/test2_saleschannel";
import { useQuery, useMutation, useQueryClient } from 'react-query';
import ProductNew_Form from "./components/ProductNew/ProductNew_Form";
import Header_Save from "./components/ProductNew/Header_Save";
// const fetchProductDetail = async (productId) => {
//   const response = await fetch(`http://localhost:8000/products/${productId}`);
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }
//   return response.json();
// };
export default function ProductNew(){

    // Access the URL parameter ":productId"
    // let { productId } = useParams();

    // Use "productId" to fetch product details using React Query
    // const { data, isLoading, isError, error } = useQuery(['product', productId], () =>
    // fetchProductDetail (productId)
    // );

    // if (isLoading) return <div>Loading...</div>;
    // if (isError) return <div>Error: {error.message}</div>;

      
    const firstDivStyle= {
        background: "#F0F0F0",
        margin: 0,
        padding: 0,
        minHeight: '100vh', // To ensure the background covers the full viewport height
      };
    return(
        <div>
            <Header_Save/>
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
                  bg="#F0F0F0"
                  h="60px"
                  px={4}
                  position="absolute"
                  top={5}
                  left={200}
                  right={0}
                  zIndex={10}>
                <Box>
                  {/* Content for the title */}
                      {/* <BackButton/> */}
                      <Heading as="h1" size="md" 
                      ml= "60px"
                      mt= "15px"
                      >
                        <BackButton/>
                          Back Button with Product Name
                      </Heading>
                </Box>
        
              </Flex>
              <Flex flexDirection="row" alignItems="center"  height="1000px" minWidth="600" mt="-40px" mr="200px" ml="200px"
                  // bg="pink"  
                
              >

                {/* Left Container */}
                <Flex width="70%" ml="0" alignItems="center" flexDirection="column" 
                  // bg="black"
                  >
                  <ProductNew_Form />
                </Flex>


                {/* Right Container */}
                <Flex width="30%" mr="50px" mt="-615px" alignItems="center" flexDirection="column" 
                    // bg="purple"
                    >
                  <Flex p={5} mt="20px" borderRadius="8px" boxShadow="0 2px 4px grey" h="100px" w="75%" flexDirection="column" bg="white">
                    Status
                    <Select placeholder='Select option'>
                      <option value='option1'>Active</option>
                      <option value='option2'>Draft</option>
                    </Select>
                  </Flex>

                  <Flex p={10} mt="20px" borderRadius="8px" boxShadow="0 2px 4px grey" h="200px" w="75%" flexDirection="column" alignItems="center" bg="white">
                    <Box flex="1" bg="white" p={4}>
                      <SalesChannelsList />
                    </Box>
                  </Flex>
                  
                </Flex>
                </Flex>
            </Box>                                 


            {/* <ProductInformationPage/> */}
 
        </div>
    )
}