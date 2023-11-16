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
  Input,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";

const CustomerTable = ({ customers }) => {
  const [sortedCustomers, setSortedCustomers] = useState([]);
  const [sortColumn, setSortColumn] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchQuery, setSearchQuery] = useState("");

  // Update the sorted customers whenever customers or sorting parameters change
  useEffect(() => {
    // Clone the customers array to avoid mutating the original data
    const sorted = [...customers];

    sorted.sort((a, b) => {
      const aValue = a[sortColumn] || ""; // Ensure aValue exists and is a string
      const bValue = b[sortColumn] || ""; // Ensure bValue exists and is a string

      if (sortOrder === "asc") {
        return aValue.localeCompare(bValue);
      } else {
        return bValue.localeCompare(aValue);
      }
    });

    setSortedCustomers(sorted);
  }, [customers, sortColumn, sortOrder]);

  // Function to handle column sorting
  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };

  return (
    <Box p={4} 
    bg="#F0F0F0" 
    // bg="white" 
    mt="0px">
      {/* Search input */}
      <Input
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        bg="white" 
        
      />

      {/* Table */}
      <Table variant="simple" w="100%" bg="white" border="solid">
        <Thead>
          <Tr bg="#F0F0F0">
            <Th>
              <Checkbox /> {/* Checkbox for select all */}
            </Th>
            <Th onClick={() => handleSort("id")} cursor="pointer">
              ID
            </Th>
            <Th onClick={() => handleSort("name")} cursor="pointer">
              Name
            </Th>
            <Th onClick={() => handleSort("email")} cursor="pointer">
              Email
            </Th>
            {/* Add more columns as needed */}
          </Tr>
        </Thead>
        <Tbody>
          {sortedCustomers
            .filter((customer) =>
              customer.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((customer) => (
              <Tr
                key={customer.customer_id}
                _hover={{
                  background: "linear-gradient(to bottom, #F5F5F5, #E0E0E0)",
                }}
                cursor="pointer"
              >
                <Td>
                  <Checkbox isChecked={false} />
                </Td>
                <Td>
                  <ReactLink to={`/customers/${customer.customer_id}`}>
                    {customer.customer_id}
                  </ReactLink>
                </Td>
                <Td>{customer.name}</Td>
                <Td>{customer.email}</Td>
                {/* Add more cells for additional columns */}
              </Tr>
            ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default CustomerTable;
