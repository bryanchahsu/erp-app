
import React, { useState } from 'react';
import { Box, Heading, Input, Flex, Button } from '@chakra-ui/react';

const Header_Save = () => {
  const [originalValue, setOriginalValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [showHeader, setShowHeader] = useState(false);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (newValue !== originalValue) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  };

  const handleSave = () => {
    setOriginalValue(inputValue);
    setShowHeader(false);
  };

  const handleDiscard = () => {
    setInputValue(originalValue);
    setShowHeader(false);
  };

  return (
    <div>
      {showHeader && (
        <Box p="10px" bg="gray.200">
          <Flex justify="space-between">
            <Heading size="md">Unsaved Changes</Heading>
            <Button variant="outline" colorScheme="red" onClick={handleDiscard}>
              Discard
            </Button>
            <Button colorScheme="green" onClick={handleSave}>
              Save
            </Button>
          </Flex>
        </Box>
      )}

      <Input
        placeholder="Type something..."
        value={inputValue}
        onChange={handleChange}
        mt={showHeader ? '60px' : '0'} // Adjust the margin top based on header visibility
      />
    </div>
  );
};

export default Header_Save;


// import React, { useState } from 'react';
// import { useMutation } from 'react-query';

// // Define the updateUser function (replace this with your actual mutation logic)
// const updateUser = async (userData) => {
//   try {
//     // Simulate an API call
//     const response = await fetch('YOUR_API_ENDPOINT', {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(userData),
//     });

//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     throw new Error('Error updating user:', error);
//   }
// };

// const Header_Save = () => {
//   const [userData, setUserData] = useState({
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//   });

//   const { mutate, isLoading, isError, data } = useMutation(updateUser);

//   const handleSave = () => {
//     // Call the mutate function to trigger the mutation
//     mutate(userData);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={userData.name}
//         onChange={(e) => setUserData({ ...userData, name: e.target.value })}
//       />
//       <input
//         type="text"
//         value={userData.email}
//         onChange={(e) => setUserData({ ...userData, email: e.target.value })}
//       />
//       <button onClick={handleSave} disabled={isLoading}>
//         {isLoading ? 'Saving...' : 'Save'}
//       </button>
//       {isError && <div>Error: Something went wrong!</div>}
//       {data && <div>Save successful! Response: {JSON.stringify(data)}</div>}
//     </div>
//   );
// };

// export default Header_Save;
