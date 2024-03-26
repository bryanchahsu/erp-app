import { useState, useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Checkbox, Input, Link, Box, Heading } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";

const InventoryTable = ({ products }) => {
  const [inventoryData, setInventoryData] = useState([]);

  useEffect(() => {
    if (products) {
      setInventoryData(products);
    }
  }, [products]);

  const handleQuantityChange = (itemId, newQuantity) => {
    setInventoryData((prevInventory) =>
      prevInventory.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <Box p={4} bg="#F0F0F0" pt="70px" width="calc(100% + 135px)">
      <Table variant="simple" w="100%">
        <Thead>
          <Tr bg="#F0F0F0" boxShadow="0 0 2px rgba(0, 0, 0, 0.3)">
            <Th>
              <Checkbox borderColor="gray.800" borderWidth="2px" />
            </Th>
            <Th>Product</Th>
            <Th>SKU</Th>
            <Th>Quantity</Th>
            <Th>Price</Th>
            <Th>Update Quantity</Th>
          </Tr>
        </Thead>
        <Tbody>
          {inventoryData && inventoryData.map((item) => (
            <Tr
              key={item.id}
              _hover={{ boxShadow: "md" }}
              cursor="pointer"
              boxShadow="0 0 2px rgba(0, 0, 0, 0.3)"
              bg="white"
            >
              <Td>
                <Checkbox />
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
                  <Box>{item.current_inventory}</Box>
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
