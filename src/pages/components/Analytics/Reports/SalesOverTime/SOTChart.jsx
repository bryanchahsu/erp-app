import React from "react";
import { useQuery } from "react-query";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import ReactTable from "react-table"; // Import React-Table
import "react-table/react-table.css"; // Import React-Table CSS

const fetchSalesOverTime = async () => {
  // Make API call to fetch sales over time data
  const response = await fetch(`http://127.0.0.1:8000/reports/sales-report/`);
  if (!response.ok) {
    throw new Error("Failed to fetch sales over time data");
  }
  return response.json();
};

const SalesOverTimeChart = () => {
  const { isLoading, error, data } = useQuery("salesOverTime", fetchSalesOverTime);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Calculate total sales
  const totalSales = data.daily_sales.reduce((total, item) => total + item.total_sales, 0);

  // Add total to the first row of the data array
  const dataWithTotal = [
    {
      date: "Total",
      total_sales: totalSales,
      order_count: data.order_count,
      order_item_count: data.order_item_count,
      product_count: data.product_count,
    },
    ...data.daily_sales,
  ];

  // Define columns for the React-Table
  const columns = [
    {
      Header: "Date",
      accessor: "date",
    },
    {
      Header: "Total Sales",
      accessor: "total_sales",
    },
    {
      Header: "Order Count",
      accessor: "order_count",
    },
    {
      Header: "Order Item Count",
      accessor: "order_item_count",
    },
    {
      Header: "Product Count",
      accessor: "product_count",
    },
  ];

  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data.daily_sales} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="total_sales" stroke="#8884d8" />
          {/* Add more Line components for additional data if needed */}
        </LineChart>
      </ResponsiveContainer>

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

export default SalesOverTimeChart;
