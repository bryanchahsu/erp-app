// import React from 'react';
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer
// } from 'recharts';

// const data = [
//     { hour: '12:00 AM', sessions: 200, orders: 5 },
//     { hour: '1:00 AM', sessions: 180, orders: 2 },
//     { hour: '2:00 AM', sessions: 150, orders: 1 },
//     { hour: '3:00 AM', sessions: 120, orders: 3 },
//     { hour: '4:00 AM', sessions: 90, orders: 1 },
//     { hour: '5:00 AM', sessions: 100, orders: 0 },
//     { hour: '6:00 AM', sessions: 120, orders: 2 },
//     { hour: '7:00 AM', sessions: 200, orders: 3 },
//     { hour: '8:00 AM', sessions: 250, orders: 4 },
//     { hour: '9:00 AM', sessions: 300, orders: 8 },
//     { hour: '10:00 AM', sessions: 400, orders: 10 },
//     { hour: '11:00 AM', sessions: 420, orders: 15 },
//     { hour: '12:00 PM', sessions: 440, orders: 12 },
//     { hour: '1:00 PM', sessions: 450, orders: 14 },
//     { hour: '2:00 PM', sessions: 430, orders: 13 },
//     { hour: '3:00 PM', sessions: 400, orders: 10 },
//     { hour: '4:00 PM', sessions: 370, orders: 9 },
//     { hour: '5:00 PM', sessions: 350, orders: 8 },
//     { hour: '6:00 PM', sessions: 300, orders: 7 },
//     { hour: '7:00 PM', sessions: 250, orders: 6 },
//     { hour: '8:00 PM', sessions: 200, orders: 4 },
//     { hour: '9:00 PM', sessions: 150, orders: 3 },
//     { hour: '10:00 PM', sessions: 100, orders: 2 },
//     { hour: '11:00 PM', sessions: 50, orders: 1 }
//   ];

// function MyGraph() {
//   return (
//     <ResponsiveContainer width="100%" height={300}>
//       <LineChart
//         width={500}
//         height={300}
//         data={data}
//         margin={{
//           top: 5,
//           right: 30,
//           left: 20,
//           bottom: 5,
//         }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="name" /> {/* Replace 'name' with your actual data key */}
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
//         {/* Replace 'pv' with your actual data key for the line */}
//         <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//         {/* Replace 'uv' with your actual data key for the dotted line */}
//       </LineChart>
//     </ResponsiveContainer>
//   );
// }

// export default MyGraph;


import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const data = [
    { hour: '12:00 AM', sessions: 200, orders: 5 },
    { hour: '1:00 AM', sessions: 180, orders: 2 },
    { hour: '2:00 AM', sessions: 150, orders: 1 },
    { hour: '3:00 AM', sessions: 120, orders: 3 },
    { hour: '4:00 AM', sessions: 90, orders: 1 },
    { hour: '5:00 AM', sessions: 100, orders: 0 },
    { hour: '6:00 AM', sessions: 120, orders: 2 },
    { hour: '7:00 AM', sessions: 200, orders: 3 },
    { hour: '8:00 AM', sessions: 250, orders: 4 },
    { hour: '9:00 AM', sessions: 300, orders: 8 },
    { hour: '10:00 AM', sessions: 400, orders: 10 },
    { hour: '11:00 AM', sessions: 420, orders: 15 },
    { hour: '12:00 PM', sessions: 440, orders: 12 },
    { hour: '1:00 PM', sessions: 450, orders: 14 },
    { hour: '2:00 PM', sessions: 430, orders: 13 },
    { hour: '3:00 PM', sessions: 400, orders: 10 },
    { hour: '4:00 PM', sessions: 370, orders: 9 },
    { hour: '5:00 PM', sessions: 350, orders: 8 },
    { hour: '6:00 PM', sessions: 300, orders: 7 },
    { hour: '7:00 PM', sessions: 250, orders: 6 },
    { hour: '8:00 PM', sessions: 200, orders: 4 },
    { hour: '9:00 PM', sessions: 150, orders: 3 },
    { hour: '10:00 PM', sessions: 100, orders: 2 },
    { hour: '11:00 PM', sessions: 50, orders: 1 }
  ];

function MyGraph() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="hour" /> {/* Using 'hour' as the label for the X-axis */}
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sessions" stroke="#8884d8" activeDot={{ r: 8 }} />
        {/* 'sessions' will be represented by a blue line */}
        <Line type="monotone" dataKey="orders" stroke="#82ca9d" strokeDasharray="5 5" />
        {/* 'orders' will be represented by a green dotted line */}
      </LineChart>
    </ResponsiveContainer>
  );
}

export default MyGraph;
