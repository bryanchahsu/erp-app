import React, { useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Checkbox,
  Box,
  Link as ChakraLink,
  Input,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";

const OrderInventory = ({ products }) => {
  const [inventoryData, setInventoryData] = useState([]);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Calculate and set the aggregated quantity for each item
  useEffect(() => {
    const updatedInventoryData = products.map((item) => {
      // Check if item.items is defined and not null
      const items = item.items || [];

      // Calculate the aggregated quantity for each item
      const totalQuantity = items.reduce(
        (acc, product) => acc + product.quantity,
        0
      );

      return {
        ...item,
        totalQuantity: totalQuantity,
        isChecked: false, // Add a property to track checkbox state
      };
    });

    // Sort the data based on the selected column and order
    if (sortColumn) {
      updatedInventoryData.sort((a, b) => {
        const aValue = a[sortColumn];
        const bValue = b[sortColumn];

        if (sortOrder === "asc") {
          if (typeof aValue === "string" && typeof bValue === "string") {
            return aValue.localeCompare(bValue);
          } else if (typeof aValue === "number" && typeof bValue === "number") {
            return aValue - bValue;
          } else {
            return 0; // No comparison for other data types
          }
        } else {
          if (typeof aValue === "string" && typeof bValue === "string") {
            return bValue.localeCompare(aValue);
          } else if (typeof aValue === "number" && typeof bValue === "number") {
            return bValue - aValue;
          } else {
            return 0; // No comparison for other data types
          }
        }
      });
    }

    // Filter the data based on the search query
    const filteredData = updatedInventoryData.filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(searchQuery.toLowerCase())
      )
    );

    setInventoryData(filteredData);
  }, [products, sortColumn, sortOrder, searchQuery]);

  // Function to handle column sorting
  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };

  // Function to handle checkbox selection
  const handleCheckboxChange = (itemId) => {
    const updatedData = inventoryData.map((item) => {
      if (item.id === itemId) {
        item.isChecked = !item.isChecked;
      }
      return item;
    });

    const selected = updatedData.filter((item) => item.isChecked);
    setSelectedOrders(selected);

    setInventoryData(updatedData);
  };

  // Function to render sortable headers
  const renderSortableHeader = (label, column) => {
    return (
      <Th
        onClick={() => handleSort(column)}
        cursor="pointer"
        fontWeight="bold"
        color={sortColumn === column ? "blue.500" : "gray.600"}
      >
        {label}
      </Th>
    );
  };

  return (
    <Box p={4} bg="#F5F5F5" mt="0px">
      {/* Search input */}
      <Input
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Table */}
      <Table variant="simple" w="100%">
        {/* Rest of the component code remains the same */}
        <Thead>
          <Tr bg="#F0F0F0">
            <Th>
              <Checkbox /> {/* Checkbox for select all */}
            </Th>
            {renderSortableHeader("Orders", "id")}
            {renderSortableHeader("Date", "orderDate")}
            {renderSortableHeader("Customer", "customerName")}
            {renderSortableHeader("Total", "total")}
            {renderSortableHeader("Fulfillment Status", "fulfillmentStatus")}
            {renderSortableHeader("Items", "price")}
            {renderSortableHeader("Tags", "tags")}
            {renderSortableHeader("Total Quantity", "totalQuantity")}
          </Tr>
        </Thead>
        <Tbody>
          {inventoryData.map((item) => (
            <Tr
              key={item.id}
              _hover={{
                background: "linear-gradient(to bottom, #F5F5F5, #E0E0E0)",
              }}
              cursor="pointer"
            >
              <Td>
                <Checkbox
                  isChecked={item.isChecked}
                  onChange={() => handleCheckboxChange(item.id)}
                />
              </Td>
              <Td>
                <ChakraLink as={ReactLink} to={`/orders/${item.id}`}>
                  <Box>{item.id}</Box>
                </ChakraLink>
              </Td>
              <Td>
                <ChakraLink as={ReactLink} to={`/orders/${item.id}`}>
                  <Box>{item.orderDate}</Box>
                </ChakraLink>
              </Td>
              <Td>
                <ChakraLink as={ReactLink} to={`/orders/${item.id}`}>
                  <Box>{item.customerName}</Box>
                </ChakraLink>
              </Td>
              <Td>
                <ChakraLink as={ReactLink} to={`/orders/${item.id}`}>
                  <Box>{item.total}</Box>
                </ChakraLink>
              </Td>
              <Td>
                <ChakraLink as={ReactLink} to={`/orders/${item.id}`}>
                  <Box>{item.fulfillmentStatus}</Box>
                </ChakraLink>
              </Td>
              <Td>
                <ChakraLink as={ReactLink} to={`/orders/${item.id}`}>
                  <Box>{item.price}</Box>
                </ChakraLink>
              </Td>
              <Td>
                <ChakraLink as={ReactLink} to={`/orders/${item.id}`}>
                  <Box>{item.tags}</Box>
                </ChakraLink>
              </Td>
              <Td>
                <ChakraLink as={ReactLink} to={`/orders/${item.id}`}>
                  <Box>{item.totalQuantity}</Box>{" "}
                  {/* Display the aggregated quantity */}
                </ChakraLink>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default OrderInventory;
