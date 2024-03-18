import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Box,
  Divider
} from '@chakra-ui/react';
import Header_Save from '../Header_Save';

const CustomerForm = () => {
  const apiUrl = 'http://127.0.0.1:8000/customers/new';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: {
      country: '',
      street: '',
      apartment_suite: '',
      city: '',
      state: '',
      zip_code: ''
    },
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      address: {
        ...prevState.address,
        [name]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Submit form data to server
    // Call your API to submit formData
  };

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing={4}>
        {formData && <Header_Save dataDetails={formData} apiUrl={apiUrl} />}
        <FormControl>
          <FormLabel>Name:</FormLabel>
          <Input name="name" value={formData.name} placeholder="Enter your name" onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Email:</FormLabel>
          <Input name="email" value={formData.email} type="email" placeholder="Enter your email" onChange={handleChange} />
        </FormControl>
        <Box>
          <Divider />
        </Box>
        <FormControl>
          <FormLabel>Country:</FormLabel>
          <Input name="country" value={formData.address.country} placeholder="Enter your country" onChange={handleAddressChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Street:</FormLabel>
          <Input name="street" value={formData.address.street} placeholder="Enter your street" onChange={handleAddressChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Apartment/Suite:</FormLabel>
          <Input name="apartment_suite" value={formData.address.apartment_suite} placeholder="Enter your apartment/suite" onChange={handleAddressChange} />
        </FormControl>
        <FormControl>
          <FormLabel>City:</FormLabel>
          <Input name="city" value={formData.address.city} placeholder="Enter your city" onChange={handleAddressChange} />
        </FormControl>
        <FormControl>
          <FormLabel>State:</FormLabel>
          <Input name="state" value={formData.address.state} placeholder="Enter your state" onChange={handleAddressChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Zip Code:</FormLabel>
          <Input name="zip_code" value={formData.address.zip_code} placeholder="Enter your zip code" onChange={handleAddressChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Phone:</FormLabel>
          <Input name="phone" value={formData.phone} placeholder="Enter your phone number" onChange={handleChange} />
        </FormControl>
        <Button
          type="submit"
          colorScheme="blue"
        >
          Submit
        </Button>
      </VStack>
    </form>
  );
};

export default CustomerForm;
