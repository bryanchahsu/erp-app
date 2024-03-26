import React from 'react';
import { useQuery, useMutation } from 'react-query';

// Define the createOrder function
const createOrder = async (orderData) => {
  try {
    const response = await fetch('http://127.0.0.1:8000/orders/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      throw new Error('Failed to create order');
    }

    return response.json();
  } catch (error) {
    throw new Error(`Error creating order: ${error.message}`);
  }
};

// Customer and Product Get API for Search
const fetchCustomersData = async () => {
  // Fetch data from the first GET API (Customers)
  const response1 = await fetch('http://127.0.0.1:8000/customers/');
  if (!response1.ok) {
    throw new Error('Failed to fetch customers data');
  }
  const customersData = await response1.json();

  // Fetch data from the second GET API (Products)
  const response2 = await fetch('http://127.0.0.1:8000/products/');
  if (!response2.ok) {
    throw new Error('Failed to fetch products data');
  }
  const productsData = await response2.json();

  // Return data from both GET APIs
  return { customers: customersData, products: productsData };
};

const OrderForm = () => {
  // Get request
  const { data, isLoading, isError } = useQuery('customersData', fetchCustomersData);

  // Post request
  const createOrderMutation = useMutation(createOrder, {
    onSuccess: () => {
      console.log('Order created successfully');
    },
    onError: (error) => {
      console.error('Error creating order:', error.message);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      "customer": 1,
      "order_date": "2024-03-07T12:00:00Z", //static
      "fulfillment_status": "Pending", //static
      "tags": [{"name":1}], //from child
      "total": "100.00", //from child
      "items": [
          {"order": 11, "product": 1, "quantity": 2},
          {"order": 11, "product": 2, "quantity": 3}
      ]
    };

    createOrderMutation.mutate(formData);
    console.log(formData);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  // Access customers data safely using optional chaining
  const customers = data?.customers;
  // Access products data safely using optional chaining
  const products = data?.products;

  console.log('Fetched data:', data);

  return (
    <form onSubmit={handleSubmit}>
      {/* Include form fields for customer ID, order date, fulfillment status, tags, total, and order items */}
      <button type="submit" disabled={createOrderMutation.isLoading}>Submit</button>
    </form>
  );
};

export default OrderForm;
