import React from 'react';
import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  Button,
  Image,
  Divider,
  Tag,
  Badge,
  Stack,
  Link,
  useColorModeValue
} from '@chakra-ui/react';

import BackButton from "./components/back";
import { Link as RouterLink, useParams } from 'react-router-dom';


import Header from "./components/Header"
import Sidebar from "./components/Sidebar"


import ProductDetailTest from "./ProductDetailTest";
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


const ProductDetail = () => {
  // Replace this with actual data
  const orderItems = [
    { name: 'Art of Tea Filter Bags', price: '$7.00', quantity: 2, sku: 'AOTFB' },
    { name: 'Hibiscus Cooler', price: '$32.00', quantity: 1, sku: 'HC1' },
    { name: 'Classic Black Tea - Award Winning', price: '$21.00', quantity: 1, sku: 'CLB1' },
    { name: "Tali's Masala Chai Tea", price: '$40.00', quantity: 1, sku: 'TMC1' },
  ];
  const borderColor = useColorModeValue('gray.200', 'gray.600');


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

  return (  
    <div>
      <Header/>
      <Sidebar/>
{/* 
      <Box
              position="relative"
              mt={0}
              ml={250}
              p={50}
              bg="#F0F0F0"  
              h="1000px"
              minWidth={500}
                  > */}

                    
      <Box 
            // maxWidth="1200px" 
            ml={250}
            mt={50}
            minWidth={500}
            bg="#F0F0F0"
            position="relative"
            // margin="auto"
            p={5}
      >
        {/* Header */}
        <Text fontSize="2xl" fontWeight="bold" mt={2} mb= {-5} textAlign="left" ml="325px">
          <BackButton/>
          Product Details</Text>

        <Box 
        // borderWidth="1px" borderColor={borderColor} borderRadius="lg" p={0}
          // bg="black"
          ml="300px"
          mr="250px"
        >            

          <Flex direction={{ base: 'column', lg: 'row' }} gap={0} >
            {/* Left Column */}
            <Box flex="3" 
                //  bg="#F0F0F0"
                // bg="black"
                //  p= "10px"
                 >
              <ProductDetailTest products= {data}/>

            </Box>

            {/* Right Column */}
            <Box flex="1" bg="white" pl="20px" pt="15px" >
              <VStack spacing={5} alignItems="stretch">
                {/* Customer Details */}
                <VStack spacing={1} alignItems="stretch">
                  <Text fontWeight="semibold">Customer</Text>
                  <Text>Patric Donahue</Text>
                  <Text>12 orders</Text>
                </VStack>

                <Divider />

                {/* Contact Information */}
                <VStack spacing={1} alignItems="stretch">
                  <Text fontWeight="semibold">Contact information</Text>
                  <Text>cowdltla@gmail.com</Text>
                  <Text>No phone number</Text>
                </VStack>

                <Divider />

                {/* Shipping Address */}
                <VStack spacing={1} alignItems="stretch">
                  <Text fontWeight="semibold">Shipping address</Text>
                  <Text>Patricia Donahue</Text>
                  <Text>Cow Cafe</Text>
                  <Text>342 West Pico Boulevard</Text>
                  <Text>Los Angeles CA 90015</Text>
                  <Text>United States</Text>
                  <Text>(323) 919-1280</Text>
                  <Link color="blue.500" href="#">View map</Link>
                </VStack>

                <Divider />

                {/* Billing Address */}
                <VStack spacing={1} alignItems="stretch">
                  <Text fontWeight="semibold">Billing address</Text>
                  <Text>Same as shipping address</Text>
                </VStack>

                <Divider />

                {/* Conversion Summary */}
                <Stack spacing={1}>
                  <Badge colorScheme="purple">Conversion summary</Badge>
                  <Text fontSize="sm">This is their 11th order</Text>
                  <Text fontSize="sm">1st session was direct to your store</Text>
                  <Text fontSize="sm">1 session over 1 day</Text>
                  <Link color="blue.500" href="#">View conversion details</Link>
                </Stack>

                <Divider />

                {/* Fraud Analysis */}
                <Flex alignItems="center" justifyContent="space-between">
                  <Badge colorScheme="red">Fraud analysis</Badge>
                  <Link color="blue.500" href="#">View report</Link>
                </Flex>
              </VStack>
            </Box>
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default ProductDetail;
