import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  Checkbox,
} from '@chakra-ui/react';
import { SearchIcon, CloseIcon } from '@chakra-ui/icons';
import { FaTrash } from 'react-icons/fa';

const ProductTable = ({ onProductInfo }) => {
  const { data, isLoading, isError } = useQuery('products', async () => {
    const response = await fetch('http://127.0.0.1:8000/products/');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });

  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const updatedSubtotal = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
    onProductInfo(products, updatedSubtotal);
  }, [products, onProductInfo]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    setIsModalOpen(true);
    if (!value) {
      setSearchResults([]);
    } else {
      if (Array.isArray(data?.products)) {
        const filteredResults = data.products.filter((item) =>
          item.title.toLowerCase().includes(value.toLowerCase())
        );
        setSearchResults(filteredResults);
      } else {
        console.error('Data is not in the expected format');
      }
    }
  };

  const handleProductSelect = (item) => {
    setSelectedProducts((prevSelected) =>
      prevSelected.includes(item.id)
        ? prevSelected.filter((id) => id !== item.id)
        : [...prevSelected, item.id]
    );
  };

  const addSelectedProductsToList = () => {
    const selectedProductsToAdd = searchResults
      .filter((item) => selectedProducts.includes(item.id))
      .map((product) => ({
        ...product,
        quantity: 1,
        total: product.price * 1,
        productId: product.id,
      }));

    setProducts((prevProducts) => [...prevProducts, ...selectedProductsToAdd]);
    setIsModalOpen(false);
    setSelectedProducts([]);
    setSearchValue('');
  };

  const deleteProduct = (id) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  };

  const handleQuantityChange = (id, quantity) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, quantity, total: product.price * quantity } : product
      )
    );
  };

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
      </InputGroup>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Search Results</ModalHeader>
          <InputGroup>
            <Input
              placeholder="Search results..."
              value={searchValue}
              onChange={handleSearchChange}
            />
          </InputGroup>
          <ModalCloseButton />
          <ModalBody>
            <List>
              {searchResults.map((item) => (
                <ListItem key={item.id} cursor="pointer" display="flex" alignItems="center">
                  <Checkbox
                    isChecked={selectedProducts.includes(item.id)}
                    onChange={() => handleProductSelect(item)}
                    mr={2}
                  />
                  <Box flex="1">
                    <Text fontWeight="bold">{item.title}</Text>
                    <HStack>
                      <Text>Quantity: {item.quantity}</Text>
                      <Text ml={4}>Price: ${parseFloat(item.price).toFixed(2)}</Text>
                    </HStack>
                  </Box>
                </ListItem>
              ))}
            </List>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={addSelectedProductsToList}>
              Add
            </Button>
            <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Product</Th>
            <Th>Quantity</Th>
            <Th isNumeric>Total</Th>
          </Tr>
        </Thead>
        <Tbody>
          {products.map((product) => (
            <Tr key={product.id}>
              <Td>{product.title}</Td>
              <Td>
                <NumberInput
                  defaultValue={product.quantity}
                  min={1}
                  onChange={(value) => handleQuantityChange(product.id, parseInt(value))}
                >
                  <NumberInputField />
                </NumberInput>
              </Td>
              <Td isNumeric>${(product.price * product.quantity).toFixed(2)}</Td>
              <Td>
                <IconButton
                  aria-label="Delete product"
                  icon={<FaTrash />}
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
        {/* Additional buttons can be placed here */}
      </HStack>
    </Stack>
  );
};

export default ProductTable;
