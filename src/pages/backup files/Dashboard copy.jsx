import { Box, Center, Heading, Table } from "@chakra-ui/react"
import { Button, ButtonGroup } from '@chakra-ui/react'
import NavBar from "../../../components/NavBar"
import { Grid, GridItem } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
// import Sidebar from "../../components/Sidebar"  
import TableSample from "../../../components/TableSample"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import InventoryTable from "../components/InventoryTable"

export default function Dashboard() {

  
  return (
    <div
      background-color= "grey">
     {/* <Heading>
      chakra ui components

     </Heading>
     <Button>
        test
     </Button> */}

     <Header/>

     <Sidebar/>
     
     <Box 
      // position="fixed" // Fix the box position
      // top="0" // Position from the top of the page
      // left="50%" // Position horizontally in the middle
      // transform="translateX(-50%)" // Center the box horizontally
      // bg="grey"
      // h="100vh" // Set the height to 100% of the viewport
      // w="500px"
        mt="100px" 
        ml="500px"

        bg="grey"
        h="200px"
        w= "500px"
        
     >
        Dashboard
        <InventoryTable/>
     </Box>
     <Box 
        // top= {1000}
        // left= {500}
        mt="50px" 
        ml="500px"

        bg="grey"
        h="200px"
        w= "500px"
        
     >

     </Box>
     <Box 
        // top= {1000}
        // left= {500}
        mt="50px" 
        ml="500px"

        bg="grey"
        h="200px"
        w= "500px"
        
     >

     </Box>
     <Box 
        // top= {1000}
        // left= {500}
        mt="0px"
        mb= "0px" 
        ml="1000px"

        bg="grey"
        h="200px"
        w= "250px"
        
     >

     </Box>
    </div>
  )
}
