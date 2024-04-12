import React, { useState, useEffect } from 'react';
import {
  Input,
  InputGroup,
  InputLeftElement,
  List,
  ListItem,
  Text,
  Flex,
  Button,
  Spacer,
  Box,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Link,
  Tag,
  TagLabel,
  TagCloseButton,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useQuery } from 'react-query';
import { useDebounce } from 'use-debounce';

const SearchResults = ({ items }) => {
  return (
    <List>
      {items.map((item, index) => (
        <ListItem key={index}>
          <Link href={`/${item.toLowerCase()}`} color="black">
            {item}
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

function SearchBar() {
  const items = ['Customer 1', 'Customer 2', 'Order 1', 'Order 2', 'Customer 1', 'Customer 2', 'Order 1', 'Order 3'];
  const [input, setInput] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [appliedFilters, setAppliedFilters] = useState([]);
  const [showFlexBox, setShowFlexBox] = useState(true);

  ///////////// API Fetch Request
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm] = useDebounce(searchTerm, 300); // Debounce search term for 300 milliseconds

  // Define a function to fetch customer data from the backend AP\
  const fetchCustomers = async (searchQuery, searchType) => {
    const url = `http://127.0.0.1:8000/search/${searchType}?q=${searchQuery}`;
    const response = await fetch(url);
    console.log(url)

    if (!response.ok) {
      throw new Error('Failed to fetch customers');
    }
    return response.json();
  };
  
  // Use the useQuery hook to fetch customer data
  const { data, isLoading, isError } = useQuery([selectedFilter, debouncedSearchTerm], () => fetchCustomers(debouncedSearchTerm || '', selectedFilter), {
    enabled: !!debouncedSearchTerm, // Only enable the query when debouncedSearchTerm is truthy
    refetchOnWindowFocus: false, // Disable automatic refetching on window focus
  });
  

  console.log(data)

  /////////

  const handleInputChange_new = (e) => {
    const inputValue = e.target.value;
    setInput(inputValue);

    if (inputValue === '') {
      setFilteredItems([]);
    } else {
      const filtered = items.filter((item) => item.toLowerCase().includes(inputValue.toLowerCase()));
      setFilteredItems(filtered);
    }
    setSearchTerm(e.target.value);
  };
  const handleFilter = (filter) => {
    // Map the filter to lowercase search types
    const filterToSearchType = {
        'Customers': 'customers',
        'Orders': 'orders',
        'Products': 'products',
    };

    // Get the lowercase search type corresponding to the clicked filter
    const searchType = filterToSearchType[filter];

    // Update selected filter state
    setSelectedFilter(searchType);

    // Apply filter logic based on "filter"
    // Clear filtered items
    setFilteredItems([]);

    // Add filter to applied filters
    setAppliedFilters([...appliedFilters, filter]);

    // Hide the flex box
    setShowFlexBox(false);
};


  const removeFilter = (filter) => {
    // Remove filter from applied filters
    const updatedFilters = appliedFilters.filter((f) => f !== filter);
    setAppliedFilters(updatedFilters);
    // Reset selected filter state
    setSelectedFilter("");
    // Reset input value
    setInput('');
    // Show the flex box
    setShowFlexBox(true);
  };

  const searchBarStyle = {
    marginTop: '0px',
  };

  const [showDashboard, setShowDashboard] = useState(false);

  const toggleDashboard = () => {
    setShowDashboard(!showDashboard);
  };

  const handleClickOutside = (event) => {
    if (event.target.closest('.search-modal') === null) {
      setShowDashboard(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div style={searchBarStyle}>
      <Modal isOpen={showDashboard} onClose={toggleDashboard} isCentered blockScrollOnMount={false}>
        <ModalOverlay backgroundColor="transparent" />
        <ModalContent zIndex="9999" position="fixed" top="0" left="0" right="0">
          <ModalBody className="search-modal">
            <Flex flexWrap="wrap">
              {appliedFilters.map((filter) => (
                <Tag
                  key={filter}
                  m="1"
                  variant="solid"
                  colorScheme="blue"
                  bg="blue.100"
                  borderRadius="full"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <TagLabel>{filter}</TagLabel>
                  <TagCloseButton onClick={() => removeFilter(filter)} />
                </Tag>
              ))}
            </Flex>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.300" mt="10px" />
              </InputLeftElement>
              <Input
                placeholder="Search for products..."
                value={input}
                onChange={handleInputChange_new}
                size="lg"
                variant="filled"
                color="black"
                pl="10" // Adjust the padding left as needed
              />
            </InputGroup>
            {showFlexBox && (
              <Flex mt={2} flexWrap="wrap">
                <Button onClick={() => handleFilter('Customers')} colorScheme={selectedFilter === 'Customers' ? 'blue' : 'gray'} size="sm" m={1}>
                  Customers
                </Button>
                <Button onClick={() => handleFilter('Orders')} colorScheme={selectedFilter === 'Orders' ? 'blue' : 'gray'} size="sm" m={1}>
                  Orders
                </Button>
                <Button onClick={() => handleFilter('Products')} colorScheme={selectedFilter === 'Products' ? 'blue' : 'gray'} size="sm" m={1}>
                  Products
                </Button>
              </Flex>
            )}
            {filteredItems.length > 0 && input !== '' ? <SearchResults items={filteredItems} /> : null}
          </ModalBody>
        </ModalContent>
      </Modal>
      <Box color="white">
        <Input
          placeholder="Search for products..."
          value={input}
          onChange={handleInputChange_new}
          size="lg"
          variant="filled"
          color="black"
          bg="black"
          onClick={toggleDashboard}
        />
      </Box>
    </div>
  );
}

export default SearchBar;