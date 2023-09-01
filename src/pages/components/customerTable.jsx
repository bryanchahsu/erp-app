// src/components/CustomerTable.js
import React, { useState, useEffect } from 'react';

const CustomerTable = () => {
  const [customers, setCustomers] = useState([]);

  
  useEffect(() => {
    fetch('http://localhost:8000/customers')
      .then(response => response.json())
      .then(data => {
        console.log(data); // Check the data structure here
        setCustomers(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  
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
          {customers.map(customer => (
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
