// import React from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// const data = [
//   { name: 'Jan', sales: 50 },
//   { name: 'Feb', sales: 60 },
//   { name: 'Mar', sales: 80 },
//   { name: 'Apr', sales: 90 },
//   { name: 'May', sales: 70 },
// ];

// const SimpleLineChart = () => (
//   <LineChart width={400} height={300} data={data}>
//     <XAxis dataKey="name" />
//     <YAxis />
//     <CartesianGrid stroke="#f5f5f5" />
//     <Line type="monotone" dataKey="sales" stroke="#8884d8" />
//     <Tooltip />
//     <Legend />
//   </LineChart>
// );

// export default SimpleLineChart;


import { Flex, Box, Table, Thead, Tbody, Tr, Th, Td, Input, Heading, Divider, Button } from "@chakra-ui/react";
import React from "react";

import { useQuery } from 'react-query';
// import { useHistory } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';



//FETCHING DATA FOR THE INVENTORY TABLE
const fetchData = async () => {
    const response = await fetch('http://localhost:8000/orders');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // return response.json();
    return response.json();

  };
  



export default function SimpleLineChart(){


    //ACCESS FETCHED DATA
    const { data, isLoading, isError } = useQuery('products', fetchData);
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching data</div>;


  
    // STYLES 
  

    return(

      <div>
    


    
      </div>
    )

}