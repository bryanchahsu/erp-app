import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan', sales: 50 },
  { name: 'Feb', sales: 60 },
  { name: 'Mar', sales: 80 },
  { name: 'Apr', sales: 90 },
  { name: 'May', sales: 70 },
];

const SimpleLineChart = () => (
  <LineChart width={400} height={300} data={data}>
    <XAxis dataKey="name" />
    <YAxis />
    <CartesianGrid stroke="#f5f5f5" />
    <Line type="monotone" dataKey="sales" stroke="#8884d8" />
    <Tooltip />
    <Legend />
  </LineChart>
);

export default SimpleLineChart;
