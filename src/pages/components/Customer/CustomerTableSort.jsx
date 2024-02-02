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

const CustomerTableSort = ({ customers }) => {
  const [inventoryData, setInventoryData] = useState([]);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Calculate and set the aggregated quantity for each customer
  useEffect(() => {
    const updatedInventoryData = customers.map((customer) => {
      return {
        ...customer,
        totalQuantity: customer.total_orders, // Use total_orders as totalQuantity
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
    const filteredData = updatedInventoryData.filter((customer) =>
      Object.values(customer).some((value) =>
        String(value).toLowerCase().includes(searchQuery.toLowerCase())
      )
    );

    setInventoryData(filteredData);
  }, [customers, sortColumn, sortOrder, searchQuery]);

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
  const handleCheckboxChange = (customerId) => {
    const updatedData = inventoryData.map((customer) => {
      if (customer.id === customerId) {
        customer.isChecked = !customer.isChecked;
      }
      return customer;
    });

    const selected = updatedData.filter((customer) => customer.isChecked);
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
            {renderSortableHeader("ID", "id")}
            {renderSortableHeader("Name", "name")}
            {renderSortableHeader("Email", "email")}
            {renderSortableHeader("Total Amount Spent", "total_amount_spent")}
            {renderSortableHeader("Total Orders", "total_orders")}
          </Tr>
        </Thead>
        <Tbody>
          {inventoryData.map((customer) => (
            <Tr
              key={customer.id}
              _hover={{
                background: "linear-gradient(to bottom, #F5F5F5, #E0E0E0)",
              }}
              cursor="pointer"
            >
              <Td>
                <Checkbox
                  isChecked={customer.isChecked}
                  onChange={() => handleCheckboxChange(customer.id)}
                />
              </Td>
              <Td>
                <ChakraLink as={ReactLink} to={`/customers/${customer.id}`}>
                  <Box>{customer.id}</Box>
                </ChakraLink>
              </Td>
              <Td>
                <ChakraLink as={ReactLink} to={`/customers/${customer.id}`}>
                  <Box>{customer.name}</Box>
                </ChakraLink>
              </Td>
              <Td>
                <ChakraLink as={ReactLink} to={`/customers/${customer.id}`}>
                  <Box>{customer.email}</Box>
                </ChakraLink>
              </Td>
              <Td>
                <ChakraLink as={ReactLink} to={`/customers/${customer.id}`}>
                  <Box>{customer.total_amount_spent}</Box>
                </ChakraLink>
              </Td>
              <Td>
                <ChakraLink as={ReactLink} to={`/customers/${customer.id}`}>
                  <Box>{customer.total_orders}</Box>
                </ChakraLink>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default CustomerTableSort;
