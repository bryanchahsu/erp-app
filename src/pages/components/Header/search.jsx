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
import { Spinner } from '@chakra-ui/react';

import { useQuery } from 'react-query';
import { useDebounce } from 'use-debounce';
import { FaUserCircle, FaShoppingCart, FaBox } from 'react-icons/fa';



function SearchResults({ data, isLoading, isError, selectedFilter, searchHistory, setSearchHistory }) {
  const handleItemClick = (item) => {
    setSearchHistory((prevHistory) => [...prevHistory, item]);
  };

  // Function to handle clearing search history
  const clearHistory = () => {
    setSearchHistory([]);
  };



  // Check if loading
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Check if error
  if (isError) {
    return <div>Error fetching data</div>;
  }

  // Check if data is available
  if (!data) {
    return null; // Return null if data is null or undefined
  }

  // Extract search results
  const results = data.results || data;

  // Check if results exist
  if (results) {
    // Check if customers exist in results
    const customers = results.customers || results;

    // Check if orders exist in results
    const orders = results.orders || results;

    // Check if products exist in results
    const products = results.products || results;



    return (
      <div>
      {/* Render customers if available */}
      {(selectedFilter === 'customers' || !selectedFilter) && customers && Array.isArray(customers) && (
        <Box mb="4">
          <List styleType="none" pl="0">
            {customers.map((customer) => (
              <ListItem key={customer.id} mb="2">
                <Box
                  as="a"
                  href={`/customers/${customer.id}`}
                  onClick={() => handleItemClick(customer.name)}
                  _hover={{ bg: 'gray.200' }}
                  display="flex"
                  alignItems="center"
                  color="#333333"
                  p="2"
                  borderRadius="md"
                >
                  <FaUserCircle color="gray" style={{ marginRight: '8px' }} /> {/* Person Icon */}
                  {customer.name}
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
  
      {/* Render orders if available */}
      {(selectedFilter === 'orders' || !selectedFilter) && orders && Array.isArray(orders) && (
        <Box mb="4">
          <List styleType="none" pl="0">
            {orders.map((order) => (
              <ListItem key={order.id} mb="2">
                <Box
                  as="a"
                  href={`/orders/${order.id}`}
                  _hover={{ bg: 'gray.200' }}
                  display="flex"
                  alignItems="center"
                  color="#333333"
                  p="2"
                  borderRadius="md"
                >
                  <FaShoppingCart color="gray" style={{ marginRight: '8px' }} /> {/* Shopping Cart Icon */}
                  Order ID: {order.id}, Total: {order.total}
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
  
      {/* Render products if available */}
      {(selectedFilter === 'products' || !selectedFilter) && products && Array.isArray(products) && (
        <Box mb="4">
          <List styleType="none" pl="0">
            {products.map((product) => (
              <ListItem key={product.id} mb="2">
                <Box
                  as="a"
                  href={`/products/${product.id}`}
                  _hover={{ bg: 'gray.200' }}
                  display="flex"
                  alignItems="center"
                  color="#333333"
                  p="2"
                  borderRadius="md"
                >
                  <FaBox color="gray" style={{ marginRight: '8px' }} /> {/* Product Icon */}
                  
                  {product.title}, Price: ${product.price}
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </div>
  );
  } else {
    return null;
  }
};


function SearchBar() {
  const items = ['Customer 1', 'Customer 2', 'Order 1', 'Order 2', 'Customer 1', 'Customer 2', 'Order 1', 'Order 3'];
  const [input, setInput] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [appliedFilters, setAppliedFilters] = useState([]);
  const [showFlexBox, setShowFlexBox] = useState(true);
  const [searchHistory, setSearchHistory] = useState([]);

  ///////////// API Fetch Request
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm] = useDebounce(searchTerm, 300); // Debounce search term for 300 milliseconds

  // Define a function to fetch customer data from the backend AP\
  const fetchCustomers = async (searchQuery, searchType) => {


    const url = `http://127.0.0.1:8000/search/${searchType}?q=${searchQuery}`;
    console.log(url)
    const response = await fetch(url);


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

  // Load search history from local storage on component mount
  useEffect(() => {
    const storedHistory = localStorage.getItem('searchHistory');
    if (storedHistory) {
      setSearchHistory(JSON.parse(storedHistory));
    }
  }, []);

  // Save search history to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  }, [searchHistory]);

  // Function to handle clearing search history
  const clearHistory = () => {
    setSearchHistory([]);
  };

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
                {isLoading ? <Spinner color="black" size="sm" mt="10px" /> : <SearchIcon color="gray.300" mt="10px" />}
            </InputLeftElement>
              <Input
                placeholder="Search for products..."
                value={input}
                onChange={handleInputChange_new}
                size="lg"
                variant="filled"
                color="black"
                pl="10"
                focusBorderColor="gray"
                borderColor="gray.100"
              />
            </InputGroup>
            {isLoading ? (
              <div>Loading...</div>
            ) : isError ? (
              <div>Error fetching data</div>
            ) : (
              // <SearchResults data={data} isLoading={isLoading} isError={isError} selectedFilter={selectedFilter} />
              <SearchResults
                data={data}
                isLoading={isLoading}
                isError={isError}
                selectedFilter={selectedFilter}
                searchHistory={searchHistory} // Pass searchHistory as a prop
                setSearchHistory={setSearchHistory} // Pass setSearchHistory to update searchHistory
              />

            )}
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
          </ModalBody>
        </ModalContent>
      </Modal>
      <Box color="black">
        <Input
          placeholder="Search for products..."
          value={input}
          onChange={handleInputChange_new}
          size="lg"
          variant="filled"
          color="black"
          bg="black"
          onClick={toggleDashboard}
          _hover={{ bg: 'black' , borderColor: "white" }} // Override hover styles to keep background black
          focusBorderColor="gray"
          borderColor= "gray.700"

        />
      </Box>
    </div>
  );
  
  
}

export default SearchBar;
