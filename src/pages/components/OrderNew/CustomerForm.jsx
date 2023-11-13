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
  Select,
  useDisclosure,
  Stack,
  useToast,
} from '@chakra-ui/react';
import { useMutation } from 'react-query';
// import axios from 'axios';

function CreateCustomerModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [customer, setCustomer] = useState({
    firstName: '',
    lastName: '',
    email: '',
    // Add other fields as needed
  });

  // Replace '/api/customer' with your actual endpoint
  const mutation = useMutation(data => axios.post('/api/customer', data));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer({
      ...customer,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await mutation.mutateAsync(customer);
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
    }
  };

  return (
    <>
      <Button onClick={onOpen}>Create a new customer</Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered size="3xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a new customer</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit}>
            <ModalBody pb={6}>
              <Stack spacing={4}>
                <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                  <FormControl isRequired>
                    <FormLabel>First name</FormLabel>
                    <Input 
                      placeholder="First name" 
                      name="firstName" 
                      onChange={handleChange} 
                      value={customer.firstName}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Last name</FormLabel>
                    <Input 
                      placeholder="Last name" 
                      name="lastName" 
                      onChange={handleChange} 
                      value={customer.lastName}
                    />
                  </FormControl>
                </Stack>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input 
                    type="email" 
                    name="email" 
                    onChange={handleChange} 
                    value={customer.email}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Country</FormLabel>
                  <Input 
                    type="email" 
                    name="email" 
                    onChange={handleChange} 
                    value={customer.email}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Address</FormLabel>
                  <Input 
                    type="email" 
                    name="email" 
                    onChange={handleChange} 
                    value={customer.email}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Apartment, suite, etc.</FormLabel>
                  <Input 
                    type="email" 
                    name="email" 
                    onChange={handleChange} 
                    value={customer.email}
                  />
                </FormControl>
                <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                  <FormControl isRequired>
                    <FormLabel>City</FormLabel>
                    <Input 
                    //   placeholder="First name" 
                      name="firstName" 
                      onChange={handleChange} 
                      value={customer.firstName}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>State</FormLabel>
                    <Input 
                    //   placeholder="Last name" 
                      name="lastName" 
                      onChange={handleChange} 
                      value={customer.lastName}
                    />
                  </FormControl>
                </Stack>


                <FormControl>
                  <FormLabel>ZIP Code</FormLabel>
                  <Input 
                    type="email" 
                    name="email" 
                    onChange={handleChange} 
                    value={customer.email}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Phone</FormLabel>
                  <Input 
                    type="email" 
                    name="email" 
                    onChange={handleChange} 
                    value={customer.email}
                  />
                </FormControl>
                <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                  <Checkbox name="acceptsMarketing">Customer accepts email marketing</Checkbox>
                  <Checkbox name="taxExempt">Customer is tax exempt</Checkbox>
                </Stack>
                {/* Add additional form controls as needed */}
              </Stack>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Cancel</Button>
              <Button colorScheme="blue" ml={3} type="submit" isLoading={mutation.isLoading}>
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
