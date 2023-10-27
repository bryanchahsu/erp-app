import React, { useState } from 'react';
import { Input, Box, Link, List, ListItem } from '@chakra-ui/react';

const SearchResults = ({ items }) => {
  return (
    <List>
      {items.map((item, index) => (
        <ListItem key={index}>
          <Link href={`/${item.toLowerCase()}`}>{item}</Link>
        </ListItem>
      ))}
    </List>
  );
};

const SearchBar_ = () => {
  const items = ['Customer 1', 'Customer 2', 'Order 1', 'Order 2', 'Customer 1', 'Customer 2', 'Order 1', 'Order 3'];
  const [input, setInput] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  const handleInputChange = (e) => {
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

  return (
    <Box background="green">
      <Input
        type="text"
        placeholder="Search..."
        value={input}
        onChange={handleInputChange}
      />
      {filteredItems.length > 0 && input !== '' ? (
        <SearchResults items={filteredItems} />
      ) : null}
    </Box>
  );
};

export default SearchBar_;
