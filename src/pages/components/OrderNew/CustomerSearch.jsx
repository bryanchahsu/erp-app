import React, { useState } from 'react';
import { useQuery } from 'react-query';
import {
  VStack,
  HStack,
  Divider,
  Badge,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';

const fetchCustomersData = async () => {
  const response = await fetch('http://127.0.0.1:8000/customers/');
  if (!response.ok) {
    throw new Error('Failed to fetch customers data');
  }
  return response.json();
};

const fetchCustomerDetail = async (customerId) => {
  const response = await fetch(`http://127.0.0.1:8000/customers/${customerId}/`);
  if (!response.ok) {
    throw new Error('Failed to fetch customer detail');
  }
  return response.json();
};

const CustomerSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [customerDetail, setCustomerDetail] = useState(null);
  
  const { data, isLoading, isError } = useQuery('customersData', fetchCustomersData);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;
  
  if (!Array.isArray(data?.customers)) {
    return <div>Data is not in the expected format</div>;
  }

  const filteredCustomers = data.customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCustomerClick = async (customerId) => {
    try {
      const detail = await fetchCustomerDetail(customerId);
      setCustomerDetail(detail);
    } catch (error) {
      console.error('Error fetching customer detail:', error.message);
    }
    setSearchTerm('')
  };
  
  return (
    <div>
      <input
        type="text"
        placeholder="Search for a customer..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {searchTerm && (
        <div>
          {filteredCustomers.map((customer, index) => (
            <div key={customer.id} style={{ marginBottom: '20px', cursor: 'pointer' }} onClick={() => handleCustomerClick(customer.id)}>
              <h3>{customer.name}</h3>
              <p>Email: {customer.email}</p>
            </div>
          ))}
        </div>
      )}
      
      {customerDetail && (
        <VStack spacing={5} alignItems="stretch">
          <VStack spacing={1} alignItems="stretch">
            <Badge colorScheme="purple">Customer</Badge>
            <p>Name: {customerDetail.name}</p>
            <p>Total Orders: {customerDetail.total_orders}</p>
          </VStack>

          <Divider />

          <VStack spacing={1} alignItems="stretch">
            <Badge colorScheme="blue">Contact information</Badge>
            <p>Email: {customerDetail.email}</p>
            <p>No phone number</p>
          </VStack>

          <Divider />

          <VStack spacing={1} alignItems="stretch">
            <Badge colorScheme="green">Shipping address</Badge>
            <p>Street: {customerDetail.address.street}</p>
            <p>City: {customerDetail.address.city}</p>
            <p>State: {customerDetail.address.state}</p>
            <p>Zip Code: {customerDetail.address.zip_code}</p>
          </VStack>

          <Divider />

          <VStack spacing={1} alignItems="stretch">
            <Badge colorScheme="teal">Billing address</Badge>
            <p>Street: {customerDetail.address.street}</p>
            <p>City: {customerDetail.address.city}</p>
            <p>State: {customerDetail.address.state}</p>
            <p>Zip Code: {customerDetail.address.zip_code}</p>
          </VStack>

          <Divider />

          <VStack spacing={1} alignItems="stretch">
            <Badge colorScheme="orange">Conversion summary</Badge>
            <p>This is their {customerDetail.total_orders}th order</p>
            <p>1st session was direct to your store</p>
            <p>1 session over 1 day</p>
            <Link color="blue.500" href="#">View conversion details</Link>
          </VStack>

          <Divider />

          <HStack alignItems="center" justifyContent="space-between">
            <Badge colorScheme="red">Fraud analysis</Badge>
            <Link color="blue.500" href="#">View report</Link>
          </HStack>
        </VStack>
      )}
    </div>
  );
};

export default CustomerSearch;
