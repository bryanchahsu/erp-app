// src/components/CustomerTable.js
import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';

const fetchData = async () => {
  const response = await fetch('http://localhost:8000/customers');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};


const CustomerTable = () => {

  const { data, isLoading, isError } = useQuery('products', fetchData);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;
  



  
  return (
    <div>
      <h2>Customer Table</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>

        
        <tbody>
          {data.map(customer => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.firstName}</td>
              <td>{customer.lastName}</td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default CustomerTable;
