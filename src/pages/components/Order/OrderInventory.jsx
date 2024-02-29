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
import { Link as RouterLink } from "react-router-dom";

const OrderInventory = ({ products }) => {
  const [inventoryData, setInventoryData] = useState([]);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (products && Array.isArray(products.results)) {
      // Mapping the products to fit the new structure
      const updatedInventoryData = products.results.map((item) => ({
        id: item.id,
        orderDate: new Date(item.order_date).toLocaleString(),
        customerName: item.customer.name,
        total: item.total,
        fulfillmentStatus: item.fulfillment_status,
        price: item.total_amount_spent,
        tags: item.tags.join(", "), // Assuming tags is an array of strings
        totalQuantity: item.total_quantity,
        isChecked: false,
      }));

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
              return 0;
            }
          } else {
            if (typeof aValue === "string" && typeof bValue === "string") {
              return bValue.localeCompare(aValue);
            } else if (typeof aValue === "number" && typeof bValue === "number") {
              return bValue - aValue;
            } else {
              return 0;
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
    } else {
      setInventoryData([]);
    }
  }, [products, sortColumn, sortOrder, searchQuery]);

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };

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
    <Box p={4} bg="#F5F5F5" mt="0px"
      width="calc(100% + 135px)"
      borderRadius="8px"

      >
      {/* Search input */}
      <Input
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Table */}
      <Table variant="simple" w="100%">
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
                <RouterLink to={`/orders/${item.id}`}>
                  <Box>{item.id}</Box>
                </RouterLink>
              </Td>
              <Td>
                <RouterLink to={`/orders/${item.id}`}>
                  <Box>{item.orderDate}</Box>
                </RouterLink>
              </Td>
              <Td>
                <RouterLink to={`/orders/${item.id}`}>
                  <Box>{item.customerName}</Box>
                </RouterLink>
              </Td>
              <Td>
                <RouterLink to={`/orders/${item.id}`}>
                  <Box>{item.total}</Box>
                </RouterLink>
              </Td>
              <Td>
                <RouterLink to={`/orders/${item.id}`}>
                  <Box>{item.fulfillmentStatus}</Box>
                </RouterLink>
              </Td>
              <Td>
                <RouterLink to={`/orders/${item.id}`}>
                  <Box>{item.price}</Box>
                </RouterLink>
              </Td>
              <Td>
                <RouterLink to={`/orders/${item.id}`}>
                  <Box>{item.tags}</Box>
                </RouterLink>
              </Td>
              <Td>
                <RouterLink to={`/orders/${item.id}`}>
                  <Box>{item.totalQuantity}</Box>
                </RouterLink>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      
    </Box>
  );
};

export default OrderInventory;
