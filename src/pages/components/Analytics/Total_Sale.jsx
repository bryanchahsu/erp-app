import React, { useEffect, useState } from "react";
import {
  Box,
  Input,
  Button,
  Heading,
} from "@chakra-ui/react";
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

const fetchData = async () => {
  const response = await fetch("http://localhost:8000/orders");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const Total_Sale_Shortcut = ({ dates }) => {
  const { data, isLoading, isError } = useQuery("orders", fetchData);
  const [dataInterval, setDataInterval] = useState("daily");
  const [filteredOrders, setFilteredOrders] = useState([]);

  useEffect(() => {
    filterOrdersByDate();
  }, [dates]); // Only listen for changes in 'dates' prop

  const filterOrdersByDate = () => {
    if (!data) return;

    const filtered = data.filter((order) => {
      const orderDate = new Date(order.orderDate);
      const startDateObj = new Date(dates.startDate);
      const endDateObj = new Date(dates.endDate);

      startDateObj.setUTCHours(0, 0, 0, 0);
      endDateObj.setUTCHours(23, 59, 59, 999);

      return orderDate >= startDateObj && orderDate <= endDateObj;
    });

    setFilteredOrders(filtered);
  };

  const calculateTotalSales = () => {
    const salesData = [];

    const startDateObj = new Date(dates.startDate);
    const endDateObj = new Date(dates.endDate);

    startDateObj.setUTCHours(0, 0, 0, 0);
    endDateObj.setUTCHours(23, 59, 59, 999);

    let currentDate = new Date(startDateObj);
    currentDate.setUTCHours(0, 0, 0, 0);

    while (currentDate <= endDateObj) {
      const formattedDate = currentDate.toISOString().split("T")[0];
      let totalSales = 0;

      if (dataInterval === "daily") {
        totalSales = filteredOrders.reduce((total, order) => {
          const orderDate = new Date(order.orderDate);
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

        currentDate.setUTCHours(24, 0, 0, 0);
      } else if (dataInterval === "weekly") {
        const weekEndDate = new Date(currentDate);
        weekEndDate.setUTCDate(currentDate.getUTCDate() + 6);
        weekEndDate.setUTCHours(23, 59, 59, 999);

        totalSales = filteredOrders.reduce((total, order) => {
          const orderDate = new Date(order.orderDate);
          orderDate.setUTCHours(0, 0, 0, 0);

          if (
            orderDate >= currentDate &&
            orderDate <= weekEndDate
          ) {
            return total + order.total;
          }
          return total;
        }, 0);

        currentDate.setUTCDate(currentDate.getUTCDate() + 7);
      } else if (dataInterval === "monthly") {
        const nextMonthDate = new Date(
          currentDate.getUTCFullYear(),
          currentDate.getUTCMonth() + 1,
          1,
          0,
          0,
          0,
          0
        );

        totalSales = filteredOrders.reduce((total, order) => {
          const orderDate = new Date(order.orderDate);
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
          value={dates.startDate}
          onChange={() => {}}
        />
        <Input
          type="date"
          placeholder="End Date"
          value={dates.endDate}
          onChange={() => {}}
        />
        <Button onClick={filterOrdersByDate}>Apply Filter</Button>
        <Button onClick={() => setDataInterval("daily")}>Daily</Button>
        <Button onClick={() => setDataInterval("weekly")}>Weekly</Button>
        <Button onClick={() => setDataInterval("monthly")}>Monthly</Button>
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
};

export default Total_Sale_Shortcut;
