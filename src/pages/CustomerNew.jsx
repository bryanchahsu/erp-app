import { Flex, Box, Table, Thead, Tbody, Tr, Th, Td, Input, Heading, List, ListItem, useColorModeValue, VStack, HStack, Divider, Link, Stack, Badge, Text, 
    Tag, Image   } from "@chakra-ui/react";
import { Select } from '@chakra-ui/react'
import { Link as RouterLink, useParams } from 'react-router-dom';
import React from "react";
import Sidebar from "./components/Sidebar"

import ProductDetailTest from "./ProductDetailTest";
import BackButton from "./components/back";
import { useQuery, useMutation, useQueryClient } from 'react-query';
import CustomerForm from "./components/CustomerNew/CustomerForm";
import Header_Save from "./components/Header_Save";





export default function CustomerNew(){
const orderItems = [
  { name: 'Art of Tea Filter Bags', price: '$7.00', quantity: 2, sku: 'AOTFB' },
  { name: 'Hibiscus Cooler', price: '$32.00', quantity: 1, sku: 'HC1' },
  { name: 'Classic Black Tea - Award Winning', price: '$21.00', quantity: 1, sku: 'CLB1' },
  { name: "Tali's Masala Chai Tea", price: '$40.00', quantity: 1, sku: 'TMC1' },
];
const borderColor = useColorModeValue('gray.200', 'gray.600');

// const borderColor = useColorModeValue('gray.200', 'gray.600');
const firstDivStyle= {
    background: "#F0F0F0",
    margin: 0,
    padding: 0,
    minHeight: '100vh', // To ensure the background covers the full viewport height
  };
return(
    <div>
        {/* <Header_Save/> */}
        <Sidebar/>
        <Box
          position="relative"
          mt={0}
          ml={250}
          p={50}
          bg="#F0F0F0"
          h="1000px"
          minWidth={500}
              >

          <Box maxWidth="1200px" 
          margin="auto"
          p={5}
          >
            {/* Header */}
            <Text fontSize="2xl" fontWeight="bold" mb={5} textAlign="left" ml="-15px">
              <BackButton/>
              New Customer</Text>

            <Box 
            // borderWidth="1px" borderColor={borderColor} borderRadius="lg" p={0}
                // borderWidth="1px"
                // borderColor="gray.300"
                // boxShadow="sm"
                // borderRadius="md"
            >
              <Flex direction={{ base: 'column', lg: 'row' }} gap={5}>
                {/* Left Column */}
                {/* <Box flex="1" bg="white">

                  
                </Box> */}

                {/* Right Column */}
                <Box flex="2" bg="white" pl="20px" pt="15px" 
                        borderWidth="1px"
                        borderColor="gray.300"
                        boxShadow="sm"
                        borderRadius="md">
        
                    <CustomerForm/>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Box>                                 



    </div>
)
}


