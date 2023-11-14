import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  useToast,
  Box,
} from '@chakra-ui/react';
import { useMutation } from 'react-query';
// import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function CustomerForm() {
  const [isLoading, setIsLoading] = useState(false);
  const mutation = useMutation(data => axios.post('/api/customer', data));
  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      country: '',
      address: '',
      apartment: '',
      city: '',
      state: '',
      zipCode: '',
      phone: '',
      acceptsMarketing: false,
      taxExempt: false,
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      email: Yup.string().email('Invalid email format').required('Email is required'),
      country: Yup.string().required('Country is required'),
      address: Yup.string().required('Address is required'),
      apartment: Yup.string(),
      city: Yup.string().required('City is required'),
      state: Yup.string().required('State is required'),
      zipCode: Yup.string().required('ZIP Code is required'),
      phone: Yup.string(),
      acceptsMarketing: Yup.boolean(),
      taxExempt: Yup.boolean(),
    }),
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        await mutation.mutateAsync(values);
        toast({
          title: 'Customer created.',
          description: 'New customer has been added.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        // You can redirect or perform any other action after successful submission
      } catch (error) {
        toast({
          title: 'Error creating customer.',
          description: error.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <Box 
    // bg="black"
    >
    <form onSubmit={formik.handleSubmit}>
      <Stack spacing={4}>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
          <FormControl isRequired>
            <FormLabel>First name</FormLabel>
            <Input
              placeholder="First name"
              name="firstName"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
            {formik.errors.firstName && <div>{formik.errors.firstName}</div>}
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Last name</FormLabel>
            <Input
              placeholder="Last name"
              name="lastName"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
            {formik.errors.lastName && <div>{formik.errors.lastName}</div>}
          </FormControl>
        </Stack>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && <div>{formik.errors.email}</div>}
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Country</FormLabel>
          <Input
            name="country"
            onChange={formik.handleChange}
            value={formik.values.country}
          />
          {formik.errors.country && <div>{formik.errors.country}</div>}
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Address</FormLabel>
          <Input
            name="address"
            onChange={formik.handleChange}
            value={formik.values.address}
          />
          {formik.errors.address && <div>{formik.errors.address}</div>}
        </FormControl>
        <FormControl>
          <FormLabel>Apartment, suite, etc.</FormLabel>
          <Input
            name="apartment"
            onChange={formik.handleChange}
            value={formik.values.apartment}
          />
        </FormControl>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
          <FormControl isRequired>
            <FormLabel>City</FormLabel>
            <Input
              name="city"
              onChange={formik.handleChange}
              value={formik.values.city}
            />
            {formik.errors.city && <div>{formik.errors.city}</div>}
          </FormControl>
          <FormControl isRequired>
            <FormLabel>State</FormLabel>
            <Input
              name="state"
              onChange={formik.handleChange}
              value={formik.values.state}
            />
            {formik.errors.state && <div>{formik.errors.state}</div>}
          </FormControl>
        </Stack>
        <FormControl isRequired>
          <FormLabel>ZIP Code</FormLabel>
          <Input
            name="zipCode"
            onChange={formik.handleChange}
            value={formik.values.zipCode}
          />
          {formik.errors.zipCode && <div>{formik.errors.zipCode}</div>}
        </FormControl>
        <FormControl>
          <FormLabel>Phone</FormLabel>
          <Input
            name="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
        </FormControl>
      </Stack>
      <Button
        colorScheme="blue"
        ml={3}
        type="submit"
        isLoading={isLoading}
      >
        Save Customer
      </Button>
    </form>
    </Box>
  );
}

export default CustomerForm;
