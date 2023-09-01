import { Flex, Box, List, ListItem, Text, Link as ChakraLink } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
// import "../styles/sidebar.css"
export default function Sidebar() {
  return (
    <Flex
      // className='sidebar'
      direction="column"
      borderRight={'solid'}
      borderColor="gray.300" // Customize the border color
      borderWidth="1px" // Customize the border width
      bg= "#F0F0F0"
      h="100vh"
      w="250px"
      position="fixed"
      top={0}
      left={0}
      zIndex={1}
      
    >
      {/* Sidebar content */}
      <Box p={4} mt={20}> 
        {/* Sidebar items */}
        {/* ... */}
        <List spacing={2}>
          <ListItem>
            <Box
              bg= "#F0F0F0"
              as={RouterLink}
              to="/"
              display="flex"
              alignItems="center"
              textDecoration="none"
              _hover={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}
            >
              Home
            </Box>
          </ListItem>
          <ListItem>
            <Box
              as={RouterLink}
              bg= "#F0F0F0"
              to="/orders"
              display="flex"
              alignItems="center"
              textDecoration="none"
              _hover={{ boxShadow: '0 2px 4px grey'
                         }}
            >
              Orders
            </Box>
          </ListItem>
          <ListItem>
            <Box
              as={RouterLink}
              bg= "#F0F0F0"
              to="/products"
              display="flex"
              alignItems="center"
              textDecoration="none"
              _hover={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}
            >
              Products
            </Box>
          </ListItem>
          <ListItem>
            <Box
              as={RouterLink}
              bg= "#F0F0F0"
              to="/customers"
              display="flex"
              alignItems="center"
              textDecoration="none"
              _hover={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}
            >
              Customers
            </Box>
          </ListItem>

          <ListItem>
            <Box
              as={RouterLink}
              bg= "#F0F0F0"
              to="/analytics"
              display="flex"
              alignItems="center"
              textDecoration="none"
              _hover={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}
            >
              Analytics
            </Box>
          </ListItem>
        </List>
        
      </Box>
    </Flex>
  );
};