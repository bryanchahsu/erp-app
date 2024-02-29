import { Flex, Box, Table, Thead, Tbody, Tr, Th, Td, Input, Heading, List, ListItem, useColorModeValue, VStack, HStack, Divider, Link, Stack, Badge, Text   } from "@chakra-ui/react";
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
// import ProductNew_Form from "./components/ProductNew/ProductNew_Form";
import OrderPage from "./components/OrderDetail/OrderDetail";



//////////////
const fetchProductDetail = async (orderId) => {
  //json db
  // const response = await fetch(`http://localhost:8000/orders/${orderId}`);

  //
  const response = await fetch(`http://127.0.0.1:8000/orders/${orderId}/`);

  // const response = await fetch(`http://127.0.0.1:8000/orders/${orderId}`);

  // const response = await fetch(`http://localhost:8000/orders/1`);
  

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
///////////
export default function CustomerDetail(){
//////////////

  //  // Access the URL parameter ":productId"
  const { orderId } = useParams();

  const { data, isLoading, isError, error } = useQuery(['order', orderId], () =>
    fetchProductDetail(orderId)
  );
  console.log(data);                 

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
//////////////

    // const borderColor = useColorModeValue('gray.200', 'gray.600');
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
              mt={0}
              ml={250}
              p={50}
              bg="#F0F0F0"
              h="1000px"
              minWidth={500}
                  >
              {/* <Flex
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
                  zIndex={10}
                  
                  >
                  

        
              </Flex> */}
              {/* <Box mt="5">
                      <Heading as="h1" size="md" 
                      ml= "60px"
                      mt= "15px"
                      >
                        <BackButton/>
                          Back Button with Product Name
                      </Heading>
                </Box> */}
              <OrderPage data= {data}/>

            </Box>                                 


            {/* <ProductInformationPage/> */}
 
        </div>
    )
}


