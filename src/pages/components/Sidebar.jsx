import React from 'react';
import { Flex, Box, List, ListItem, Text, Link as ChakraLink, Icon } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaHome, FaClipboardList, FaBox, FaUsers, FaChartBar } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <Flex
      direction="column"
      borderRight="solid"
      borderColor="gray.300"
      borderWidth="1px"
      // bg="#F0F0F0"
      // bg="#FFFFFF"
      // bg="#E6E6E6"
      bg="#ebebeb"
      h="100vh"
      w="250px"
      position="fixed"
      top={0}
      left={0}
      zIndex={1}
    >
      <Box p={4} mt={20} >
        <List spacing={2} >
          <ListItem>
            <Box
              as={RouterLink}
              // bg="#E6E6E6"
              bg="#ebebeb"
              to="/"
              display="flex"
              alignItems="center"
              textDecoration="none"
              _hover={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}
            >
              <Icon as={FaHome} mr={2} />
              <Text fontWeight="bold">Home</Text>
            </Box>
          </ListItem>
          <ListItem>
            <Box
              as={RouterLink}
              bg="#ebebeb"
              to="/orders"
              display="flex"
              alignItems="center"
              textDecoration="none"
              _hover={{ boxShadow: '0 2px 4px grey' }}
            >
              <Icon as={FaClipboardList} mr={2} />
              <Text fontWeight="bold">Orders</Text>
            </Box>
          </ListItem>
          <ListItem>
            <Box
              as={RouterLink}
              bg="#ebebeb"
              to="/products"
              display="flex"
              alignItems="center"
              textDecoration="none"
              _hover={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}
            >
              <Icon as={FaBox} mr={2} />
              <Text fontWeight="bold">Products</Text>
            </Box>
          </ListItem>
          <ListItem>
            <Box
              as={RouterLink}
              bg="#ebebeb"
              to="/customers"
              display="flex"
              alignItems="center"
              textDecoration="none"
              _hover={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}
            >
              <Icon as={FaUsers} mr={2} />
              <Text fontWeight="bold">Customers</Text>
            </Box>
          </ListItem>
          <ListItem>
            <Box
              as={RouterLink}
              bg="#ebebeb"
              to="/analytics"
              display="flex"
              alignItems="center"
              textDecoration="none"
              _hover={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}
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
