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

import BackButton from '../back';




const OrderPage = () => {
  // Replace this with actual data
  const orderItems = [
    { name: 'Art of Tea Filter Bags', price: '$7.00', quantity: 2, sku: 'AOTFB' },
    { name: 'Hibiscus Cooler', price: '$32.00', quantity: 1, sku: 'HC1' },
    { name: 'Classic Black Tea - Award Winning', price: '$21.00', quantity: 1, sku: 'CLB1' },
    { name: "Tali's Masala Chai Tea", price: '$40.00', quantity: 1, sku: 'TMC1' },
  ];
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box maxWidth="1200px" 
    margin="auto"
     p={5}
     >
      {/* Header */}
      <Text fontSize="2xl" fontWeight="bold" mb={5} textAlign="left" ml="-15px">
        <BackButton/>
        Order Details</Text>

      <Box 
      // borderWidth="1px" borderColor={borderColor} borderRadius="lg" p={0}
        bg="black"
      >
        <Flex direction={{ base: 'column', lg: 'row' }} gap={5}>
          {/* Left Column */}
          <Box flex="2" bg="white">


            {/* Order Details */}
            <VStack spacing={5} alignItems="stretch">
              {/* List of Items */}
              {orderItems.map((item, index) => (
                <Flex key={index} justifyContent="space-between" alignItems="center" p={2} borderWidth="1px" borderColor={borderColor} borderRadius="lg">
                  <HStack spacing={4}>
                    <Image boxSize="50px" src={item.image} alt={item.name} />
                    <VStack alignItems="start">
                      <Text fontWeight="semibold">{item.name}</Text>
                      <Text fontSize="sm">SKU: {item.sku}</Text>
                    </VStack>
                  </HStack>
                  <Text>{item.quantity} x {item.price}</Text>
                </Flex>
              ))}

              {/* Order Summary */}
              <VStack spacing={2} alignItems="stretch" mt={5} borderWidth="1px" borderColor={borderColor} borderRadius="lg" p={4}>
                <HStack justifyContent="space-between">
                  <Text fontWeight="semibold">Subtotal</Text>
                  <Text>$107.00</Text>
                </HStack>
                <HStack justifyContent="space-between">
                  <Text fontWeight="semibold">Shipping</Text>
                  <Text>UPS Ground (4.23 lb)</Text>
                </HStack>
                <Divider />
                <HStack justifyContent="space-between">
                  <Text fontWeight="semibold" fontSize="lg">Total</Text>
                  <Text fontSize="lg">$121.57</Text>
                </HStack>
              </VStack>

              {/* Tags and Notes */}
              <HStack spacing={2}>
                <Tag size="lg" variant="solid" colorScheme="green">Fulfilled</Tag>
                <Tag size="lg" variant="solid" colorScheme="blue">Paid</Tag>
              </HStack>
            </VStack>
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
  );
};

export default OrderPage;
