import { Box, 
         Center, 
         Heading, 
         Table, 
         Flex, 
         List, 
         ListItem,
         Button, 
         ButtonGroup
         } from "@chakra-ui/react"
import { Link as RouterLink } from 'react-router-dom';
import NavBar from "../../components/NavBar"
import { Grid, GridItem } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
// import Sidebar from "../../components/Sidebar"  
import TableSample from "../../components/TableSample"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import InventoryTable from "./components/Dashboard_Inventory"
import Indicator_test from "./components/Indicator_test";

export default function Dashboard() {
  const firstDivStyle= {
    background: "#F0F0F0",
    margin: 0,
    padding: 0,
    minHeight: '100vh', // To ensure the background covers the full viewport height
  };
  
  return (
    <div
      style= {firstDivStyle}>
     {/* <Heading>
      chakra ui components

     </Heading>
     <Button>
        test
     </Button> */}

     <Header/>

     <Sidebar/>

    {/* This is for the right small sidebar/dashboard */}
     <Flex

      direction="column"
      borderRight={'solid'}
      borderColor="gray.300" // Customize the border color
      borderWidth="1px" // Customize the border width
      bg= "white"
      h="100vh"
      w="250px"
      position="fixed"
      top={0}
      // left={0}
      right={0}
      zIndex={1}
      
    >
      {/* Sidebar content */}
        <Box p={4}
            mt={20}
            borderBottom= "1px solid"
            borderBottomColor=" gray.300"
            h="150px"
            > 
          {/* Sidebar items */}
          {/* ... */}
          <List spacing={2}>
            <ListItem>
              <Box
                bg= "#F0F0F0"
                as={RouterLink}
                to="/dashboard"
                display="flex"
                alignItems="center"
                textDecoration="none"
                _hover={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}
              >
                Dashboard
              
              </Box>
            </ListItem>
            <ListItem>
              <Box
                as={RouterLink}
                bg= "#F0F0F0"
                to="/profile"
                display="flex"
                alignItems="center"
                textDecoration="none"
                _hover={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}
              >
                Profile
              </Box>
            </ListItem>
            <ListItem>
              <Box
                as={RouterLink}
                
                bg= "#F0F0F0"
                to="/settings"
                display="flex"
                alignItems="center"
                textDecoration="none"
                _hover={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}
              >
                Settings
              </Box>
            </ListItem>
          </List>
        </Box>
        <Box            
            mt={20}
            borderBottom= "1px solid"
            borderBottomColor=" gray.300"
            h="200px"
            >
          <InventoryTable/>                 
        </Box>

        <Box            
            mt={20}
            borderBottom= "1px solid"
            borderBottomColor=" gray.300"
            h="200px"
            >
          <InventoryTable/>                 
        </Box>

        <Box            
            mt={20}
            borderBottom= "1px solid"
            borderBottomColor=" gray.300"
            h="200px"
            >
          <InventoryTable/>                 
        </Box>


    Suck my dick bich



      
    </Flex>
    {/* <Container
      bg= "#F0F0F0"
      h= "1000px"
      maxW="full"
      > */}


      {/* THIS IS THE BODY MAIN DASHBOARDS */}

      {/* NEED TO BE FLEXBOX */}
         <Box 
          // position="fixed" // Fix the box position
          // top="0" // Position from the top of the page
          // left="50%" // Position horizontally in the middle
          // transform="translateX(-50%)" // Center the box horizontally
          // bg="grey"
          // h="100vh" // Set the height to 100% of the viewport
          // w="500px"
            // mt="100px"
            p={4} 
            ml="400px"
            top= "100px"
            borderRadius="8px"
            boxShadow="0 2px 4px grey"
            bg="white"
            h="200px"
            w= "500px"
            position="relative"
            
            
        >
            Total Session & Sales
            <Indicator_test></Indicator_test>

        </Box>
        <Box 
            // top= {1000}
            // left= {500}
            mt="50px" 
            ml="400px"
            borderRadius="8px"
            boxShadow="0 2px 4px grey"
            bg="white"
            h="200px"
            w= "500px"
            
        >
          Inventory Table
            <InventoryTable/>          
        </Box>
        <Box 
            // top= {1000}
            // left= {500}
            mt="50px" 
            ml="400px"
            borderRadius="8px"
            boxShadow="0 2px 4px grey"
            bg="white"
            h="200px"
            w= "500px"
            
        >
          Inventory Table
            <InventoryTable/>          
        </Box>

        <Box 
            // top= {1000}
            // left= {500}
            mt="50px" 
            ml="400px"
            borderRadius="8px"
            boxShadow="0 2px 4px grey"
            bg="white"
            h="200px"
            w= "500px"
            
        >
          Inventory Table
            <InventoryTable/>          
        </Box>   
        {/* </Container> */}

        <Box 
            // top= {1000}
            // left= {500}
            mt="50px" 
            ml="400px"
            borderRadius="8px"
            boxShadow="0 2px 4px grey"
            bg="white"
            h="200px"
            w= "500px"
            
        >
          Inventory Table
            <InventoryTable/>          
        </Box>
   


    </div>
  )
}
