import React, { useState } from 'react';
import {
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import CreateCustomerModal from './CustomerForm';

const SearchBarCust = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const customers = [
    {
      name: "Alice Johnson",
      email: "alice.johnson@example.com"
    },
    {
      name: "Bob Smith",
      email: "bob.smith@example.com"
    },
    {
      name: "Carol Williams",
      email: "carol.williams@example.com"
    },
    {
      name: "David Brown",
      email: "david.brown@example.com"
    },
    // ... more customers
  ];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input
          placeholder="Search customers..."
          onChange={handleSearchChange}
          onFocus={onOpen}
        />
      </InputGroup>
      <Menu isOpen={isOpen}>
        <MenuButton as={Box} />
        <MenuList>
            <CreateCustomerModal/>
          {filteredCustomers.map((customer, index) => (
            <MenuItem key={index}>
              {customer.name} - {customer.email}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default SearchBarCust;

