

import { useState, useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Checkbox, Input, Link, Box, Heading } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";


const InventoryTable = ({ products }) => {
  const [inventoryData, setInventoryData] = useState([]);

  

  const handleQuantityChange = (itemId, newQuantity) => {
    setInventoryData((prevInventory) =>
      prevInventory.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <Box p={4} bg="#F0F0F0" pt="70px"
        >
      {/* Heading */}
      {/* <Heading as="h2" size="md" bg="#EDEDED" p={2} mb={2}>
        Inventory Table
      </Heading> */}

      {/* Table */}
      <Table variant="simple" w="100%"  >
        <Thead>
          {/* <Tr bg="#F0F0F0" > */}
          <Tr bg="#F0F0F0" boxShadow="0 0 2px rgba(0, 0, 0, 0.3)" >
            <Th>
              <Checkbox 
                    borderColor="gray.800" // Set the border color to a darker shade of gray
                    borderWidth="2px" // Optional: Customize the border width
              /> {/* Checkbox for select all */}
            </Th>
            <Th>Product</Th>
            <Th>SKU</Th>
            <Th>Quantity</Th>
            <Th>Price</Th>
            <Th>Update Quantity</Th>
          </Tr>
        </Thead>

        <Tbody>
          {products.map((item) => (
            <Tr
              key={item.id}
              _hover={{ boxShadow: "md" }} // Add hover shadow on each row
              cursor="pointer" // Change cursor to indicate clickable row
              boxShadow="0 0 2px rgba(0, 0, 0, 0.3)" // Darker border shadow for all sides
              bg="white"
            >
              <Td>
                <Checkbox 
                                    // borderColor="gray.800" // Set the border color to a darker shade of gray
                                    // borderWidth="2px" // Optional: Customize the border width
                /> {/* Checkbox for individual item selection */}
              </Td>
              <Td>
                <Link as={ReactLink} to={`/products/${item.id}`}>
                  <Box>{item.title}</Box>
                </Link>
              </Td>
              <Td>
                <Link as={ReactLink} to={`/products/${item.id}`}>
                  <Box>{item.sku}</Box>
                </Link>
              </Td>
              <Td>
                <Link as={ReactLink} to={`/products/${item.id}`}>
                  <Box>{item.quantity}</Box>
                </Link>
              </Td>
              <Td>
                <Link as={ReactLink} to={`/products/${item.id}`}>
                  <Box>{item.price}</Box>
                </Link>
              </Td>
              <Td style={{ width: "10px" }}>
                <Input
                  size="sm"
                  type="number"
                  onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>

      </Table>
    </Box>
  );
};

export default InventoryTable;
