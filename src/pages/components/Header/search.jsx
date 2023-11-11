// import React, { useState } from 'react';
// import {
//   Input,
//   List,
//   ListItem,
//   Text,
//   Flex,
//   Button,
//   Spacer,
//   Box,
//   useDisclosure,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalCloseButton,
//   ModalBody,
// } from '@chakra-ui/react';
// import { useQuery } from 'react-query';

// const fetchData = async (query) => {
//   const response = await fetch(`YOUR_API_URL?q=${query}`);
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }
//   return response.json();
// };

// const SearchBar = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const { data: suggestions } = useQuery(['search', searchQuery], () => fetchData(searchQuery));
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   const [searchHistory, setSearchHistory] = useState([]);

//   const handleInputChange = (event) => {
//     const { value } = event.target;
//     setSearchQuery(value);
//   };

//   const togglePopup = () => {
//     onOpen();
//   };

//   const handleFilter = (filter) => {
//     // Apply filter logic based on "filter"
//   };

//   const clearHistory = () => {
//     setSearchHistory([]);
//   };

//   const searchBarStyle = {
//     marginTop: '120px', // Adjust the margin-top value as needed
//   };

//   return (
//     <div style={searchBarStyle}>
//       <Input
//         placeholder="Search for products..."
//         value={searchQuery}
//         onChange={handleInputChange}
//         size="lg" // Apply a size to the input (you can change this)
//         variant="filled" // Apply a filled variant to the input (you can change this)
//       />
//       {suggestions && (
//         <List mt={2}>
//           {suggestions.map((suggestion) => (
//             <ListItem
//               key={suggestion.id}
//               onClick={() => handleSuggestionClick(suggestion)}
//               cursor="pointer"
//             >
//               <Text>{suggestion.name}</Text>
//             </ListItem>
//           ))}
//         </List>
//       )}

//       <Flex mt={2}>
//         <Button onClick={togglePopup}>Open Popup</Button>
//         <Spacer />
//         <Button onClick={() => handleFilter('customers')}>Customers</Button>
//         <Button onClick={() => handleFilter('orders')}>Orders</Button>
//         <Button onClick={() => handleFilter('products')}>Products</Button>
//       </Flex>

//       {isOpen && (
//         <Modal isOpen={isOpen} onClose={onClose} isCentered>
//           <ModalOverlay />
//           <ModalContent>
//             <ModalHeader>Popup Window</ModalHeader>
//             <ModalCloseButton />
//             <ModalBody>
//               {/* Content for the popup */}
//             </ModalBody>
//           </ModalContent>
//         </Modal>
//       )}
//       <div>
//         <h2>Search History:</h2>
//         <ul>
//           {searchHistory.map((historyItem, index) => (
//             <li key={index}>{historyItem}</li>
//           ))}
//         </ul>
//         <Button onClick={clearHistory}>Clear History</Button>
//       </div>
//     </div>
//   );
// };

// export default SearchBar;



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


// import React, { useState } from 'react';
import {
  Input,
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
  Link
} from '@chakra-ui/react';
import { useQuery } from 'react-query';
import React, { useState, useEffect, useRef } from 'react';
// import SearchBar_ from './searchResults';
// import { Button, Box } from '@chakra-ui/react';

function SearchBar() {


  // USE THIS FOR THE FILTER LIST
  const items = ['Customer 1', 'Customer 2', 'Order 1', 'Order 2', 'Customer 1', 'Customer 2', 'Order 1', 'Order 3'];
  const [input, setInput] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  const handleInputChange_new = (e) => {
    const inputValue = e.target.value;
    setInput(inputValue);

    if (inputValue === '') {
      setFilteredItems([]); // Clear the filteredItems when input is empty.
    } else {
      const filtered = items.filter(
        item => item.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredItems(filtered);
    }
  };

/////////////////////////////////////

//OTHER STATES

  const [showDashboard, setShowDashboard] = useState(false);
  const dashboardRef = useRef(null);


  const [searchQuery, setSearchQuery] = useState('');
  // const { data: suggestions } = useQuery(['search', searchQuery], () => fetchData(searchQuery));
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [searchHistory, setSearchHistory] = useState([]);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
  };

  const togglePopup = () => {
    onOpen();
  };

  const handleFilter = (filter) => {
    // Apply filter logic based on "filter"
  };

  const clearHistory = () => {
    setSearchHistory([]);
  };

  const searchBarStyle = {
    marginTop: '0px', // Adjust the margin-top value as needed
  };





  const toggleDashboard = () => {
    setShowDashboard(!showDashboard);
  };

  const handleClickOutside = (event) => {
    if (dashboardRef.current && !dashboardRef.current.contains(event.target)) {
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
      <Box  color ="white">
        <Input
          placeholder="Search for products..."
          value={searchQuery}
          // onChange={handleInputChange}
          onClick={toggleDashboard}
          size="lg" // Apply a size to the input (you can change this)
          variant="filled" // Apply a filled variant to the input (you can change this)
          color="black"
        />
        {/* <Button onClick={toggleDashboard}>Toggle Dashboard</Button> */}
      </Box>
      {showDashboard && (
        <Box ref={dashboardRef} 
            mt="50px" 
            p="4px"
            background="white"
            >
          {/* Your dashboard content goes here */}
          <Input
            placeholder="Search for products..."
            value={searchQuery}
            onChange={handleInputChange_new}
            size="lg" // Apply a size to the input (you can change this)
            variant="filled" // Apply a filled variant to the input (you can change this)
            color= "black"
        />
        {/* <SearchBar_></SearchBar_> */}

          {/* Add your dashboard components and content */}

          <Flex mt={0}>
            <Button onClick={togglePopup}>Open Popup</Button>
            <Spacer />
            <Button onClick={() => handleFilter('customers')}>Customers</Button>
            <Button onClick={() => handleFilter('orders')}>Orders</Button>
            <Button onClick={() => handleFilter('products')}>Products</Button>
          </Flex>
          {filteredItems.length > 0 && input !== '' ? (
        <SearchResults items={filteredItems} />
         ) : null}

          



          {/* Method Using API Calls */}

          {/* {suggestions && ( */}
            <Box background="black">
              {/* <List mt={2}>
                {suggestions.map((suggestion) => (
                  <ListItem
                    key={suggestion.id}
                    onClick={() => handleSuggestionClick(suggestion)}
                    cursor="pointer"
                  >
                    <Text>{suggestion.name}</Text>
                  </ListItem>
                ))}
              </List> */}

              
             </Box>
          {/* )} */}
        </Box>

      )}
    </div>
  );
}

export default SearchBar;
