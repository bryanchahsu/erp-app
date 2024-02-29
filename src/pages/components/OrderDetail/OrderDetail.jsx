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
  Stack // Add Stack to the imports
} from '@chakra-ui/react';

import BackButton from '../back';

const OrderPage = ({ data }) => {




  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: '2-digit'
    }).format(date);
  };
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box maxWidth="1200px" margin="auto" p={5}>
      <Text fontSize="2xl" fontWeight="bold" mb={-2} textAlign="left" ml="-20px">
        <BackButton/>
        Order Details
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
              {data.items.map((item, index) => (
                <Flex key={index} justifyContent="space-between" alignItems="center" p={2} borderWidth="1px" borderColor={borderColor} borderRadius="lg" bg ="white">
                  <VStack alignItems="start">
                    <Text fontWeight="semibold">{item.product.title}</Text>
                    <Text fontSize="sm">SKU: {item.product.sku}</Text>
                  </VStack>
                  <Text>{item.quantity} x ${item.product.price}</Text>
                </Flex>
              ))}

              <VStack spacing={2} alignItems="stretch" mt={5} borderWidth="1px" borderColor={borderColor} borderRadius="lg" p={4}>
                <HStack justifyContent="space-between">
                  <Text fontWeight="semibold">Subtotal</Text>
                  <Text>${data.total}</Text>
                </HStack>
                <HStack justifyContent="space-between">
                  <Text fontWeight="semibold">Shipping</Text>
                  <Text>{data.shippingMethod}</Text>
                  
                </HStack>
                <Divider />
                <HStack justifyContent="space-between">
                  <Text fontWeight="semibold" fontSize="lg">Total</Text>
                  <Text fontSize="lg">${data.total}</Text>

                </HStack>
              </VStack>

              <HStack spacing={2}>
                <Tag ml= "3px" size="lg" variant="solid" colorScheme="green">Fulfilled</Tag>
                <Tag size="lg" variant="solid" colorScheme="blue">Paid</Tag>
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
                <Text>{data.customer.name}</Text>
                <Text>{data.customer.total_orders} orders</Text>
              </VStack>

              <Divider />

              <VStack spacing={1} alignItems="stretch">
                <Text fontWeight="semibold">Contact information</Text>
                <Text>{data.customer.email}</Text>
                <Text>No phone number</Text>
              </VStack>

              <Divider />

              <VStack spacing={1} alignItems="stretch">
                <Text fontWeight="semibold">Shipping address</Text>
                <Text>{data.customer.address.street}, {data.customer.address.city}, {data.customer.address.state} {data.customer.address.zip_code}</Text>
              </VStack>

              <Divider />

              <VStack spacing={1} alignItems="stretch">
                <Text fontWeight="semibold">Billing address</Text>
                <Text>{data.customer.address.street}, {data.customer.address.city}, {data.customer.address.state} {data.customer.address.zip_code}</Text>

                {/* You can add billing address details here */}
              </VStack>

              <Divider />

              <Stack spacing={1}>
                <Badge colorScheme="purple">Conversion summary</Badge>
                <Text fontSize="sm">This is their {data.customer.total_orders}th order</Text>
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

export default OrderPage;
