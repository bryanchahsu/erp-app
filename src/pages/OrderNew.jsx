import { Flex, Box, Table, Thead, Tbody, Tr, Th, Td, Input, Heading, List, ListItem, useColorModeValue, VStack, HStack, Divider, Link, Stack, Badge, Text, 
        Tag, Image   } from "@chakra-ui/react";
import { Select } from '@chakra-ui/react'
import { Link as RouterLink, useParams } from 'react-router-dom';
import React, { useState } from 'react';
import Header_Save from "./components/Header_Save";
import Sidebar from "./components/Sidebar"

import Export from "./components/export";
import Import from "./components/import";

import ProductDetailTest from "./ProductDetailTest";
import BackButton from "./components/back";
import SalesChannelsList from "./components/test2_saleschannel";
import { useQuery, useMutation, useQueryClient } from 'react-query';
import ProductTable from "./components/OrderNew/ProductSearch";
import CustomerSearch from "./components/OrderNew/CustomerSearch"  
// import ProductNew_Form from "./components/ProductNew/ProductNew_Form";
import OrderForm from "./components/OrderNew/OrderForm";

const createOrder = async (orderData) => {
  try {
    const response = await fetch('http://127.0.0.1:8000/orders/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      throw new Error('Failed to create order');
    }

    return response.json();
  } catch (error) {
    throw new Error(`Error creating order: ${error.message}`);
  }
};




export default function OrderNew(){




  const createOrderMutation = useMutation(createOrder, {
    onSuccess: () => {
      console.log('Order created successfully');
    },
    onError: (error) => {
      console.error('Error creating order:', error.message);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      "customer": 1,
      "order_date": "2024-03-07T12:00:00Z", //static
      "fulfillment_status": "Pending", //static
      "tags": [{"name":1}], //from child
      "total": "100.00", //from child
      "items": [
          {"order": 10, "product": 1, "quantity": 2},
          {"order": 10, "product": 2, "quantity": 3}
      ]
    };

    createOrderMutation.mutate(formData);
    console.log(formData);
  };

    // const orderItems = [
    //   { name: 'Art of Tea Filter Bags', price: '$7.00', quantity: 2, sku: 'AOTFB' },
    //   { name: 'Hibiscus Cooler', price: '$32.00', quantity: 1, sku: 'HC1' },
    //   { name: 'Classic Black Tea - Award Winning', price: '$21.00', quantity: 1, sku: 'CLB1' },
    //   { name: "Tali's Masala Chai Tea", price: '$40.00', quantity: 1, sku: 'TMC1' },
    // ];

    const apiUrl = 'http://127.0.0.1:8000/orders/new';

    // const formData = {
    //   "customer": 2,
    //   "order_date": "2024-03-07T12:00:00Z", //static
    //   "fulfillment_status": "Pending", //static
    //   "tags": [{"name":1}], //from child
    //   "total": "100.00", //from child
    //   "items": [
    //       {"order": 1, "product": 1, "quantity": 2},
    //       {"order": 1, "product": 2, "quantity": 999}
    //   ]
    // };



    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState([]);
    const [total, setTotal] = useState(0); // State to track total passed from child

    const formData = {
      "customer": selectedCustomer,
      "order_date": "2024-03-07T12:00:00Z", // Static value
      "fulfillment_status": "Pending", // Static value
      "tags": [{ "name": 1 }], // Placeholder value, modify as needed
      "total": total.toFixed(2), // Convert total to string with 2 decimal places
      "items": selectedProduct.map(product => ({
          "order": 1, // Placeholder value, modify as needed
          "product": product.productId,
          "quantity": product.quantity
      }))
  };
  console.log(formData)

  
    const handleCustomerInfo = (customerId) => {
      setSelectedCustomer(customerId);
      // console.log(selectedCustomer)
      // console.log(selectedCustomer); // Check if selectedCustomer exists before accessing its value

    };
  
    // const handleProductInfo = (selectedProducts) => {
    //   setSelectedProduct(selectedProducts);
    //   console.log(selectedProduct) //correct! 
    // };
    const handleProductInfo = (products, newSubtotal) => {
      setSelectedProduct(products);
      setTotal(newSubtotal);
      console.log(total, selectedProduct)
    };


    return(
        <div>

          
            {formData && <Header_Save dataDetails={formData} apiUrl={apiUrl} />}
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
                    {/* <OrderForm/> */}

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
                >
                  <Flex direction={{ base: 'column', lg: 'row' }} gap={5}>
                    {/* Left Column */}
                    <Box flex="2" bg="white">

                      <ProductTable onProductInfo={handleProductInfo}/>
                    </Box>

                    {/* Right Column */}
                    <Box flex="1" bg="white" pl="20px" pt="15px" >
                      <CustomerSearch onCustomerInfo={handleCustomerInfo}/>

                      
                    </Box>
                    
                  </Flex>
                </Box>
              </Box>
            </Box>                                 


            {/* <ProductInformationPage/> */}
 
        </div>
    )
}

