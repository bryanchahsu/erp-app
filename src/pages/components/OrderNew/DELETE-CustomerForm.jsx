import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  useDisclosure,
  Stack,
} from '@chakra-ui/react';
import { useMutation } from 'react-query';
// import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';


function CreateCustomerModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);
  const mutation = useMutation(data => axios.post('/api/customer', data));

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
        onClose(); // Close the modal
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
    <>
      <Button onClick={onOpen}>Create a new customer</Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered size="3xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a new customer</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={formik.handleSubmit}>
            <ModalBody pb={6}>
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
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Last name</FormLabel>
                    <Input
                      placeholder="Last name"
                      name="lastName"
                      onChange={formik.handleChange}
                      value={formik.values.lastName}
                    />
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
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Country</FormLabel>
                  <Input
                    name="country"
                    onChange={formik.handleChange}
                    value={formik.values.country}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Address</FormLabel>
                  <Input
                    name="address"
                    onChange={formik.handleChange}
                    value={formik.values.address}
                  />
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
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>State</FormLabel>
                    <Input
                      name="state"
                      onChange={formik.handleChange}
                      value={formik.values.state}
                    />
                  </FormControl>
                </Stack>
                <FormControl isRequired>
                  <FormLabel>ZIP Code</FormLabel>
                  <Input
                    name="zipCode"
                    onChange={formik.handleChange}
                    value={formik.values.zipCode}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Phone</FormLabel>
                  <Input
                    name="phone"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                  />
                </FormControl>
                {/* <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                  <Checkbox
                    name="acceptsMarketing"
                    isChecked={formik.values.acceptsMarketing}
                    onChange={formik.handleChange}
                  >
                    Customer accepts email marketing
                  </Checkbox>
                  <Checkbox
                    name="taxExempt"
                    isChecked={formik.values.taxExempt}
                    onChange={formik.handleChange}
                  >
                    Customer is tax exempt
                  </Checkbox>
                </Stack> */}
              </Stack>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Cancel</Button>
              <Button
                colorScheme="blue"
                ml={3}
                type="submit"
                isLoading={isLoading}
              >
                Save Customer
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CreateCustomerModal;
