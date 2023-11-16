import React from 'react';
import { Flex, Box, List, ListItem, Text, Link as ChakraLink, Icon } from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { FaHome, FaClipboardList, FaBox, FaUsers, FaChartBar } from 'react-icons/fa';

export default function Sidebar() {
  const location = useLocation();

  const isCurrentPage = (path) => {
    return location.pathname === path;
  };

  return (
    <Flex
      direction="column"
      borderRight="solid"
      borderColor="gray.300"
      borderWidth="1px"
      bg="#ebebeb"
      h="100vh"
      w="250px"
      position="fixed"
      top={0}
      left={0}
      zIndex={1}
    >
      <Box p={4} mt={20}>
        <List spacing={2}>
          <ListItem>
            <Box
              as={RouterLink}
              bg={isCurrentPage('/') ? 'white' : '#ebebeb'}
              to="/"
              display="flex"
              alignItems="center"
              textDecoration="none"
              _hover={{ bg: '#f5f5f5' }}
              borderRadius="md" // Add border radius
              p="2.5px"
              
            >
              <Icon as={FaHome} mr={2} />
              <Text fontWeight="bold">Home</Text>
            </Box>
          </ListItem>
          <ListItem>
            <Box
              as={RouterLink}
              bg={isCurrentPage('/orders') ? 'white' : '#ebebeb'}
              to="/orders"
              display="flex"
              alignItems="center"
              textDecoration="none"
              _hover={{ bg: '#f5f5f5' }}
              borderRadius="md" // Add border radius
              p="2.5px"
              mt="-6px"
            >
              <Icon as={FaClipboardList} mr={2} />
              <Text fontWeight="bold">Orders</Text>
            </Box>
          </ListItem>
          <ListItem>
            <Box
              as={RouterLink}
              bg={isCurrentPage('/products') ? 'white' : '#ebebeb'}
              to="/products"
              display="flex"
              alignItems="center"
              textDecoration="none"
              _hover={{ bg: '#f5f5f5' }}
              borderRadius="md" // Add border radius
              p="2.5px"
              mt="-6px"

            >
              <Icon as={FaBox} mr={2} />
              <Text fontWeight="bold">Products</Text>
            </Box>
          </ListItem>
          <ListItem>
            <Box
              as={RouterLink}
              bg={isCurrentPage('/customers') ? 'white' : '#ebebeb'}
              to="/customers"
              display="flex"
              alignItems="center"
              textDecoration="none"
              _hover={{ bg: '#f5f5f5' }}
              borderRadius="md" // Add border radius
              p="2.5px"
              mt="-6px"


            >
              <Icon as={FaUsers} mr={2} />
              <Text fontWeight="bold">Customers</Text>
            </Box>
          </ListItem>
          <ListItem>
            <Box
              as={RouterLink}
              bg={isCurrentPage('/analytics') ? 'white' : '#ebebeb'}
              to="/analytics"
              display="flex"
              alignItems="center"
              textDecoration="none"
              _hover={{ bg: '#f5f5f5' }}
              borderRadius="md" // Add border radius
              p="2.5px"
              mt="-6px"


            >
              <Icon as={FaChartBar} mr={2} />
              <Text fontWeight="bold">Analytics</Text>
            </Box>
          </ListItem>
        </List>
      </Box>
    </Flex>
  );
}
