import React from "react";
import { useQuery } from "react-query";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import ReactTable from "react-table"; // Import React-Table
import "react-table/react-table.css"; // Import React-Table CSS
import DateRangePicker from "../DateRangePicker";

const fetchSalesBySku = async (startDate, endDate) => {
  console.log('Fetching data for date range:', startDate, 'to', endDate);

  // const startDate = '2024-03-01';
  // const endDate = '2024-03-31';
  const url = `http://127.0.0.1:8000/reports/sales-by-sku/?start_date=${startDate}&end_date=${endDate}`;
  const response = await fetch(url);

  
  if (!response.ok) {
    console.error('Failed to fetch sales over time data:', response.status, response.statusText);
    throw new Error("Failed to fetch sales over time data");
  }
  return response.json();
  
};

const SalesBySkuChart = ({ startDate, endDate }) => {
  const { isLoading, error, data } = useQuery(["salesBySku", startDate, endDate], () => fetchSalesBySku(startDate, endDate));

  console.log(data)

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Calculate total sales, order count, order item count, and product count
  let totalSales = 0;
  let totalOrderCount = 0;
  let totalOrderItemCount = 0;
  let totalProductCount = 0;
  let totalQuantity =0

  data.forEach((item) => {
    totalSales += parseFloat(item.total_sales);
    totalOrderCount += item.order_count;
    totalOrderItemCount += item.item_count; // Change to item_count
    totalProductCount++;
    totalQuantity += item.total_quantity; // Calculate total quantity
  });

  // Add total row to the data array
  const dataWithTotal = [
    {
      product__sku: "Summary",
      product__title: "",
      total_sales: totalSales.toFixed(2),
      total_quantity: totalQuantity, // You can calculate total quantity if needed
      order_count: totalOrderCount,
      item_count: totalOrderItemCount,
    },
    ...data,
  ];

  // Define columns for the React-Table
  const columns = [
    {
      Header: "Product SKU",
      accessor: "product__sku",
    },
    {
      Header: "Product Title",
      accessor: "product__title",
    },
    {
      Header: "Total Sales",
      accessor: "total_sales",
    },
    {
      Header: "Total Quantity",
      accessor: "total_quantity",
    },
    {
      Header: "Order Count",
      accessor: "order_count",
    },
    {
      Header: "Order Item Count",
      accessor: "item_count",
    },
    // {
    //   Header: "Product Count",
    //   accessor: "product_count",
    // },
  ];

  return (
    <div>
      {/* Display data table */}
      <ReactTable
        data={dataWithTotal}
        columns={columns}
        defaultPageSize={10} // Set default page size
        className="-striped -highlight" // Add CSS classes for styling
      />
    </div>
  );
};

export default SalesBySkuChart;