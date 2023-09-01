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
      bg="#FFFFFF"
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
              bg="#F0F0F0"
              to="/"
              display="flex"
              alignItems="center"
              textDecoration="none"
              _hover={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}
            >
              <Icon as={FaHome} mr={2} />
              Home
            </Box>
          </ListItem>
          <ListItem>
            <Box
              as={RouterLink}
              bg="#F0F0F0"
              to="/orders"
              display="flex"
              alignItems="center"
              textDecoration="none"
              _hover={{ boxShadow: '0 2px 4px grey' }}
            >
              <Icon as={FaClipboardList} mr={2} />
              Orders
            </Box>
          </ListItem>
          <ListItem>
            <Box
              as={RouterLink}
              bg="#F0F0F0"
              to="/products"
              display="flex"
              alignItems="center"
              textDecoration="none"
              _hover={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}
            >
              <Icon as={FaBox} mr={2} />
              Products
            </Box>
          </ListItem>
          <ListItem>
            <Box
              as={RouterLink}
              bg="#F0F0F0"
              to="/customers"
              display="flex"
              alignItems="center"
              textDecoration="none"
              _hover={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}
            >
              <Icon as={FaUsers} mr={2} />
              Customers
            </Box>
          </ListItem>
          <ListItem>
            <Box
              as={RouterLink}
              bg="#F0F0F0"
              to="/analytics"
              display="flex"
              alignItems="center"
              textDecoration="none"
              _hover={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}
            >
              <Icon as={FaChartBar} mr={2} />
              Analytics
            </Box>
          </ListItem>
        </List>
      </Box>
    </Flex>
  );
}
