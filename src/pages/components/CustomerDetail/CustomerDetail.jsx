import React from 'react';
import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  Divider,
  Tag,
  Badge,
  Link,
  useColorModeValue,
  Stack, // Add Stack to the import
  Stat,
  StatLabel,
  StatNumber,
  Icon
} from '@chakra-ui/react';
import { MdAccessTime } from 'react-icons/md'; // Importing an 'all time' icon from react-icons

import BackButton from '../back';


const CustomerPage = ({ data }) => {

    const CustomDivider = () => (
        <Box
          width="1px"
          bg="gray.200"
          my={2} // You can adjust top and bottom margin as needed
          height="auto" // It will expand to the height of the Flex container
          alignSelf="stretch" // Ensures it stretches along the height of the Flex container
        />
      );


    const formatDate = (dateString) => {
        try {
          const date = new Date(dateString);
          if (isNaN(date.getTime())) {
            throw new Error('Invalid date string');
          }
          return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: '2-digit'
          }).format(date);
        } catch (error) {
          console.error('Error formatting date:', error.message);
          return 'Invalid Date';
        }
      };
      
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  console.log(data)

  return (
    <Box maxWidth="1200px" margin="auto" p={5}>
      <Text fontSize="2xl" fontWeight="bold" mb={-2} textAlign="left" ml="-20px">
        <BackButton/>
        {data.email}
      </Text>
      {/* <Text fontSize="1x1" fontWeight="bold" mb={5} textAlign="left" ml="-15px">
        Order Details
      </Text> */}
      <Text fontSize="s"
            ml= "30px"
            mb={5}
            
            >
        {formatDate(data.order_date)} from Online Store
      </Text>

      <Box>
        <Flex direction={{ base: 'column', lg: 'row' }} gap={5}>

          {/* left container */}
          <Box flex="2" bg="#F0F0F0"
              // borderRadius="8px"
              // boxShadow="0 0.5px 2px grey"
              // height="auto" // Adjust height dynamically based on content

              >
            <VStack spacing={5} alignItems="stretch"
                          borderRadius="8px"
                          boxShadow="0 0.5px 2px grey"
                          height="auto" // Adjust height dynamically based on content
                          bg="white"
            >
                
                <Box borderWidth="1px" borderRadius="lg" p={4} m={4} shadow="sm" >
      <Flex alignItems="center" >

        {/* All time icon and text */}
        <Flex alignItems="center" mr={8}> {/* Adjust margin-right as needed */}
          <Icon as={MdAccessTime} mr={2} color="black" />
          <Text as="span" textDecoration="underline" color="black">All time</Text>
        </Flex>

        <CustomDivider />

        {/* Amount Spent */}
        <Stat>
          <StatLabel textDecoration="underline" color="black">Amount spent</StatLabel>
          <StatNumber color="black">$1,703.42</StatNumber>
        </Stat>

        <CustomDivider />

        {/* Orders */}
        <Stat>
          <StatLabel textDecoration="underline" color="black">Orders</StatLabel>
          <StatNumber color="black">21</StatNumber>
        </Stat>

      </Flex>
    </Box>
{/* 
              <VStack spacing={2} alignItems="stretch" mt={5} borderWidth="1px" borderColor={borderColor} borderRadius="lg" p={4}>
                <HStack justifyContent="space-between">
                  <Text fontWeight="semibold">Subtotal</Text>
                  <Text>${data.total}</Text>
                </HStack>
                <HStack justifyContent="space-between">
                  <Text fontWeight="semibold">Shipping</Text>
                  <Text> Free</Text>
                  
                </HStack>
                <Divider />
                <HStack justifyContent="space-between">
                  <Text fontWeight="semibold" fontSize="lg">Total</Text>
                  <Text fontSize="lg">${data.total}</Text>

                </HStack>
              </VStack> */}

              <HStack spacing={2}>
                {/* <Tag ml= "3px" size="lg" variant="solid" colorScheme="green">Fulfilled</Tag> */}
                {/* <Tag size="lg" variant="solid" colorScheme="blue">Paid</Tag> */}
              </HStack>
            </VStack>
          </Box>
          
          {/* right container */}

          <Box flex="1" bg="white" pl="20px" pt="15px" 
                        borderRadius="8px"
                        boxShadow="0 0.5px 2px grey" >
            <VStack spacing={5} alignItems="stretch">
              <VStack spacing={1} alignItems="stretch">
                <Text fontWeight="semibold">Customer</Text>
                <Text>{data.name}</Text>
                <Text>{data.total_orders} orders</Text>
              </VStack>

              <Divider />

              <VStack spacing={1} alignItems="stretch">
                <Text fontWeight="semibold">Contact information</Text>
                <Text>{data.email}</Text>
                <Text>No phone number</Text>
              </VStack>

              <Divider />

              <VStack spacing={1} alignItems="stretch">
                <Text fontWeight="semibold">Shipping address</Text>
                <Text>{data.address.street}, {data.address.city}, {data.address.state} {data.address.zip_code}</Text>
              </VStack>

              <Divider />

              <VStack spacing={1} alignItems="stretch">
                <Text fontWeight="semibold">Billing address</Text>
                <Text>{data.address.street}, {data.address.city}, {data.address.state} {data.address.zip_code}</Text>

                {/* You can add billing address details here */}
              </VStack>

              <Divider />

              <Stack spacing={1}>
                <Badge colorScheme="purple">Conversion summary</Badge>
                <Text fontSize="sm">This is their {data.total_orders}th order</Text>
                <Text fontSize="sm">1st session was direct to your store</Text>
                <Text fontSize="sm">1 session over 1 day</Text>
                <Link color="blue.500" href="#">View conversion details</Link>
              </Stack>

              <Divider />

              <Flex alignItems="center" justifyContent="space-between">
                <Badge colorScheme="red">Fraud analysis</Badge>
                <Link color="blue.500" href="#">View report</Link>
              </Flex>
            </VStack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default CustomerPage;
