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
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box maxWidth="1200px" margin="auto" p={5}>
      <Text fontSize="2xl" fontWeight="bold" mb={5} textAlign="left" ml="-15px">
        <BackButton/>
        Order Details
      </Text>

      <Box>
        <Flex direction={{ base: 'column', lg: 'row' }} gap={5}>
          <Box flex="2" bg="white">
            <VStack spacing={5} alignItems="stretch">
              {data.items.map((item, index) => (
                <Flex key={index} justifyContent="space-between" alignItems="center" p={2} borderWidth="1px" borderColor={borderColor} borderRadius="lg">
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
                <Tag size="lg" variant="solid" colorScheme="green">Fulfilled</Tag>
                <Tag size="lg" variant="solid" colorScheme="blue">Paid</Tag>
              </HStack>
            </VStack>
          </Box>

          <Box flex="1" bg="white" pl="20px" pt="15px" >
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
                <Text>{data.customer.name}</Text>
                {/* You can add more address details here */}
              </VStack>

              <Divider />

              <VStack spacing={1} alignItems="stretch">
                <Text fontWeight="semibold">Billing address</Text>
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
