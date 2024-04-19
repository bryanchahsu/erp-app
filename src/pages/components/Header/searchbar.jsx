import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components for the search bar and tag
const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background: #f0f0f0; // light grey background
  padding: 8px;
  border-radius: 4px;
  margin: 10px;
`;

const Tag = styled.span`
  background-color: #007bff; // light blue background
  color: white;
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 8px;
  font-size: 0.9em;
`;

const Input = styled.input`
  border: none;
  outline: none;
  padding: 8px;
  width: 100%;
  font-size: 1em;
  background: transparent;
`;

const ClearButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`;

// React component for the search bar
const SearchBarr = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const clearSearch = () => {
    setInputValue('');99999999999999
  };

  return (
    <SearchBarContainer>
      <Tag>Customers</Tag>
      <Input
        type="text"
        placeholder="Search for customers"
        value={inputValue}
        onChange={handleInputChange}
      />
      {inputValue && (
        <ClearButton onClick={clearSearch}>
          &#x2715;
        </ClearButton>
      )}
    </SearchBarContainer>
  );
};

export default SearchBarr;
