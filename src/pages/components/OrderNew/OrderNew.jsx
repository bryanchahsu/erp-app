import React, { useState } from 'react';
import {
  Box,
  Input,
  Button,
  IconButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  VStack,
  HStack,
  Divider,
  Text,
  List,
  ListItem,
  InputGroup,
  InputLeftElement,
  Stack,
} from '@chakra-ui/react';
import { SearchIcon, CloseIcon } from '@chakra-ui/icons';
import CreateCustomerModal from './CustomerForm';

const ProductTable = () => {
  // Sample data and inventory
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const inventory = [
    { id: 1, name: 'Earl Grey Tea', price: 18.00 },
    { id: 2, name: 'Chamomile Tea', price: 12.00 },
    // ... more items
  ];

  // Function to handle search input change and filter inventory
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    if (!value) {
      setSearchResults([]);
    } else {
      const filteredResults = inventory.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(filteredResults);
    }
  };

  // Function to add a product to the list
  const addProductToList = (product) => {
    setProducts((prevProducts) => {
      // Check if product already exists in the list
      const exists = prevProducts.some((item) => item.id === product.id);
      if (!exists) {
        return [...prevProducts, { ...product, quantity: 1 }];
      }
      return prevProducts;
    });
    setSearchResults([]);
    setSearchValue('');
  };

  // Function to update quantity
  const updateQuantity = (id, quantity) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, quantity: parseInt(quantity, 10) } : product
      )
    );
  };

  // Function to delete a product from the list
  const deleteProduct = (id) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  };

  // Calculate subtotal
  const subtotal = products.reduce((acc, product) => acc + product.price * product.quantity, 0);

  return (
    <Stack spacing={4}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          placeholder="Search products"
          value={searchValue}
          onChange={handleSearchChange}
        />
        {searchResults.length > 0 && (
          <List position="absolute" zIndex="10" backgroundColor="white" width="full" mt={2} shadow="md">
            {searchResults.map((item) => (
              <ListItem
                key={item.id}
                paddingX={4}
                paddingY={2}
                _hover={{ bg: 'gray.100' }}
                cursor="pointer"
                onClick={() => addProductToList(item)}
              >
                {item.name}
              </ListItem>
            ))}
          </List>
        )}
      </InputGroup>

      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Product</Th>
            <Th isNumeric>Price</Th>
            <Th>Quantity</Th>
            <Th isNumeric>Total</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {products.map((product) => (
            <Tr key={product.id}>
              <Td>{product.name}</Td>
              <Td isNumeric>${product.price.toFixed(2)}</Td>
              <Td>
                <Input
                  type="number"
                  value={product.quantity}
                  onChange={(e) => updateQuantity(product.id, e.target.value)}
                  min={1}
                />
              </Td>
              <Td isNumeric>${(product.price * product.quantity).toFixed(2)}</Td>
              <Td>
                <IconButton
                  aria-label="Delete product"
                  icon={<CloseIcon />}
                  onClick={() => deleteProduct(product.id)}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Divider my={4} />

      <HStack justifyContent="space-between">
        <Text fontSize="lg" fontWeight="bold">Subtotal</Text>
        <Text fontSize="lg" fontWeight="bold">${subtotal.toFixed(2)}</Text>
      </HStack>

      <HStack spacing={4}>
        <Button colorScheme="blue" size="md">Send Invoice</Button>
        <Button colorScheme="green" size="md">Collect Payment</Button>
      </HStack>
    </Stack>
  );
};

export default ProductTable;






// import React, { useState } from 'react';
// import {
//   Box,
//   Input,
//   Button,
//   IconButton,
//   Table,
//   Thead,
//   Tbody,
//   Tr,
//   Th,
//   Td,
//   InputGroup,
//   InputLeftElement,
//   VStack,
//   HStack,
//   Divider,
//   Text,
// } from '@chakra-ui/react';
// import { DeleteIcon, SearchIcon } from '@chakra-ui/icons';

// const ProductTable = () => {
//   // Sample data - replace this with actual dynamic data from your backend or state management.
//   const [products, setProducts] = useState([
//     {
//       id: 1,
//       name: 'Earl Grey Crème Eco Teabag Sachets',
//       sku: 'PT-EGC12',
//       quantity: 1,
//       price: 18.00,
//     },
//     {
//       id: 2,
//       name: 'Earl Grey Crème Eco Teabag Sachets',
//       sku: 'PT-EGC50',
//       quantity: 1,
//       price: 42.00,
//     },
//   ]);

//   // Function to update quantity
//   const updateQuantity = (id, quantity) => {
//     setProducts(products.map(product =>
//       product.id === id ? { ...product, quantity: quantity } : product
//     ));
//   };

//   // Function to delete a product
//   const deleteProduct = (id) => {
//     setProducts(products.filter(product => product.id !== id));
//   };

//   // Calculate the subtotal
//   const subtotal = products.reduce((acc, product) => acc + product.price * product.quantity, 0);

//   return (
//     <VStack spacing={4} align="stretch">
//       <InputGroup>
//         <InputLeftElement pointerEvents="none">
//           <SearchIcon color="gray.300" />
//         </InputLeftElement>
//         <Input placeholder="Search products" />
//       </InputGroup>

//       <Table variant="simple">
//         <Thead>
//           <Tr>
//             <Th>Product</Th>
//             <Th>Quantity</Th>
//             <Th isNumeric>Total</Th>
//             <Th>Action</Th>
//           </Tr>
//         </Thead>
//         <Tbody>
//           {products.map((product) => (
//             <Tr key={product.id}>
//               <Td>
//                 <VStack align="start">
//                   <Text fontWeight="bold">{product.name}</Text>
//                   <Text fontSize="sm">{product.sku}</Text>
//                 </VStack>
//               </Td>
//               <Td>
//                 <Input
//                   type="number"
//                   value={product.quantity}
//                   onChange={(e) => updateQuantity(product.id, e.target.value)}
//                 />
//               </Td>
//               <Td isNumeric>{(product.price * product.quantity).toFixed(2)}</Td>
//               <Td>
//                 <IconButton
//                   aria-label="Delete product"
//                   icon={<DeleteIcon />}
//                   onClick={() => deleteProduct(product.id)}
//                 />
//               </Td>
//             </Tr>




//           ))}
//         </Tbody>
//       </Table>

//       <Box>
//         <HStack justifyContent="space-between">
//           <Text>Subtotal</Text>
//           <Text>${subtotal.toFixed(2)}</Text>
//         </HStack>
//         {/* Repeat the HStack for discounts, shipping, etc. */}
//         <Divider my={2} />
//         <HStack justifyContent="space-between">
//           <Text fontWeight="bold">Total</Text>
//           <Text fontWeight="bold">${subtotal.toFixed(2)}</Text>
//         </HStack>
//       </Box>

//       <HStack>
//         <Button colorScheme="blue">Send invoice</Button>
//         <Button colorScheme="green">Collect payment</Button>
//       </HStack>
//     </VStack>
//   );
// };

// export default ProductTable;
