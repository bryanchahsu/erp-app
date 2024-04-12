import { useState } from "react";
import {
  Flex,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Input,
  Heading,
  Divider,
  Button,
} from "@chakra-ui/react";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useQuery } from "react-query";
import { Link as RouterLink } from "react-router-dom";

const fetchData = async () => {
  // const response = await fetch("http://localhost:8000/orders");
  const response = await fetch('http://127.0.0.1:8000/customers/');

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export default function Total_Sale({dates}) {
  const { data, isLoading, isError } = useQuery("products", fetchData);
  const [startDate, setStartDate] = useState(""); // State for the starting date
  const [endDate, setEndDate] = useState(""); // State for the ending date
  const [dataInterval, setDataInterval] = useState("daily"); // State for data aggregation interval
  const [filteredOrders, setFilteredOrders] = useState([]); // State for filtered orders

  console.log(data)
  // Handle input changes for start and end dates
  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  // Function to handle interval change
  const handleDataIntervalChange = (interval) => {
    setDataInterval(interval);
  };

  // Function to filter orders based on date range
  const filterOrdersByDate = () => {
    const filtered = data.filter((order) => {
      const orderDate = new Date(order.orderDate); // Convert order date to Date object
      const startDateObj = new Date(startDate);
      const endDateObj = new Date(endDate);

      // Set time to midnight to ignore the time zone offset
      startDateObj.setUTCHours(0, 0, 0, 0);
      endDateObj.setUTCHours(23, 59, 59, 999); // Set to end of the day

      return (
        orderDate >= startDateObj && orderDate <= endDateObj
      );
    });

    setFilteredOrders(filtered);
  };

  // Calculate total sales over the selected date range and interval
  const calculateTotalSales = () => {
    const salesData = [];

    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);

    // Set time to midnight to ignore the time zone offset
    startDateObj.setUTCHours(0, 0, 0, 0);
    endDateObj.setUTCHours(23, 59, 59, 999); // Set to end of the day

    let currentDate = new Date(startDateObj);
    currentDate.setUTCHours(0, 0, 0, 0);

    while (currentDate <= endDateObj) {
      const formattedDate = currentDate.toISOString().split("T")[0];
      let totalSales = 0;

      // Calculate total sales for the selected interval
      if (dataInterval === "daily") {
        if (filteredOrders) {
          totalSales = filteredOrders.reduce((total, order) => {
            const orderDate = new Date(order.orderDate); // Convert order date to Date object
            orderDate.setUTCHours(0, 0, 0, 0);

            if (
              orderDate.getUTCFullYear() === currentDate.getUTCFullYear() &&
              orderDate.getUTCMonth() === currentDate.getUTCMonth() &&
              orderDate.getUTCDate() === currentDate.getUTCDate()
            ) {
              return total + order.total;
            }
            return total;
          }, 0);
        }

        currentDate.setUTCHours(24, 0, 0, 0); // Move to the next day
      } else if (dataInterval === "weekly") {
        if (filteredOrders) {
          // Calculate total sales for the week
          const weekEndDate = new Date(currentDate);
          weekEndDate.setUTCDate(currentDate.getUTCDate() + 6); // End of the week
          weekEndDate.setUTCHours(23, 59, 59, 999); // Set to end of the day

          totalSales = filteredOrders.reduce((total, order) => {
            const orderDate = new Date(order.orderDate); // Convert order date to Date object
            orderDate.setUTCHours(0, 0, 0, 0);

            if (
              orderDate >= currentDate &&
              orderDate <= weekEndDate
            ) {
              return total + order.total;
            }
            return total;
          }, 0);
        }

        currentDate.setUTCDate(currentDate.getUTCDate() + 7); // Move to the next week
      } else if (dataInterval === "monthly") {
        if (filteredOrders) {
          // Calculate total sales for the month
          const nextMonthDate = new Date(
            currentDate.getUTCFullYear(),
            currentDate.getUTCMonth() + 1,
            1,
            0,
            0,
            0,
            0
          ); // Next month, 1st day

          totalSales = filteredOrders.reduce((total, order) => {
            const orderDate = new Date(order.orderDate); // Convert order date to Date object
            orderDate.setUTCHours(0, 0, 0, 0);

            if (
              orderDate >= currentDate &&
              orderDate < nextMonthDate
            ) {
              return total + order.total;
            }
            return total;
          }, 0);

          currentDate = nextMonthDate;
        }
      }

      salesData.push({ name: formattedDate, sales: totalSales });
    }

    return salesData;
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  const salesData = calculateTotalSales();

  return (
    <div>
      <Heading size="lg" mb={4}>
        Sales Summary
      </Heading>
      <Box mb={4}>
        <Input
          type="date"
          placeholder="Start Date"
          value={startDate}
          onChange={handleStartDateChange}
        />
        <Input
          type="date"
          placeholder="End Date"
          value={endDate}
          onChange={handleEndDateChange}
        />
        <Button onClick={filterOrdersByDate}>Apply Filter</Button>
        <Button onClick={() => handleDataIntervalChange("daily")}>Daily</Button>
        <Button onClick={() => handleDataIntervalChange("weekly")}>Weekly</Button>
        <Button onClick={() => handleDataIntervalChange("monthly")}>Monthly</Button>
      </Box>
      <LineChart width={800} height={300} data={salesData}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="sales" stroke="#8884d8" />
        <Tooltip />
        <Legend />
      </LineChart>
      
    </div>
  );
}
