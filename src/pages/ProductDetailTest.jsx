import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { useState, useEffect } from "react";
import { Box, Flex, Image, Text, Heading, Input, Button } from "@chakra-ui/react";
import ImageUpload from './components/upload';
import useUpdateProduct from './components/useUpdateProduct';

const ProductDetailTest = ({products}) => {
  const [productDetails, setProductDetails] = useState({ ...products });
  const [originalValue, setOriginalValue] = useState({ ...products });
  const [showHeader, setShowHeader] = useState(false);
  // const [productTitle, setProductTitle] = useState(products.title);
  // const [productDescription, setProductDescription] = useState(
  //   products.description
  // );


  // const [productDetails, setProductDetails] = useState({
  //   id: products.id,  // Make sure to include the id
  //   title: products.title,
  //   description: products.description,
  //   price: products.price,
  //   sku: products.sku,
  //   quantity: products.quantity,
  //   cost: products.cost
  // });

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // Handle quantity and cost separately
    if (name === 'quantity') {
      setProductDetails(prevProductDetails => ({
        ...prevProductDetails,
        [name]: parseInt(value) // Parse to integer for quantity
      }));
    } else if (name === 'cost') {
      setProductDetails(prevProductDetails => ({
        ...prevProductDetails,
        [name]: parseFloat(value) // Parse to float for cost
      }));
    } else {
      setProductDetails(prevProductDetails => ({
        ...prevProductDetails,
        [name]: value
      }));
    }
  };
  

  //calling react query mutation function
  const { updateProduct, isUpdating } = useUpdateProduct();

  //handles api on submit
  const handleUpdate = async () => {
    try {
      // Create an updated product object with changes
      // const updatedProduct = {
      //   id: "1",
      //   sku:"test",
      //   // Add other updated fields here
      // };


      // Call the updateProduct function to perform the PUT request
      // await updateProduct(updatedProduct);
      await updateProduct(productDetails);


      // Handle successful update, e.g., show a success message
      console.log('Product updated successfully');
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error('Error updating product:', error);
    }
    setShowHeader(false);
  };



  const handleQuillChange = (value) => {
    setProductDetails((prevProductDetails) => ({
      ...prevProductDetails,
      description: value
    }));
  };
  /////////////////////////////////////////// SAVE HEADER STATES////////////////////////////////////


  // const [originalValue, setOriginalValue] = useState('');
  // const [inputValue, setInputValue] = useState('');
  // const [showHeader, setShowHeader] = useState(false);
  useEffect(() => {
    // Compare product details to determine if there are unsaved changes
    const hasUnsavedChanges =
      productDetails.title !== originalValue.title ||
      productDetails.description !== originalValue.description ||
      productDetails.sku !== originalValue.sku ||
      productDetails.quantity !== originalValue.quantity ||
      productDetails.cost !== originalValue.cost;

    setShowHeader(hasUnsavedChanges);
  }, [productDetails, originalValue]);

  const handleDiscard = () => {
    setProductDetails({ ...originalValue });
    setShowHeader(false);
  };


  return (
    <Flex
      direction="column"
      maxWidth="800px"
      margin="20px"
      padding="20px"
      // borderRadius="8px"
      // boxShadow="0 2px 2px rgba(0, 0, 0, 0.15)"
      // bg="white"
    >
      {/* Product Details */}
      <Box flex="2" padding="10px" borderRadius="8px" boxShadow="0 0.5px 2px grey" bg="white"
            
            >
        {/* Product Title */}
            <Box mb="4" 
                
              >
              <Heading as="h2" size="xs" p="10px">
                Title
              </Heading>
              <Input
                name="title"
                variant="filled"
                value={productDetails.title}
                p="10px"
                border="1px solid #CBD5E0" // Add a border to the input
                borderRadius="4px" // Add border radius to the input
                _hover={{ borderColor: "gray.300" }}
                _focus={{ borderColor: "gray.400" }}
                onChange={handleChange}
                placeholder="Product Title"
              />
            </Box>

            {/* Product Description */}
            <Box mb="4" 
              >
              <Heading as="h2" size="xs" p="10px">
                Description
              </Heading>
              <ReactQuill
                p="10px"
                value={productDetails.description}
                onChange={handleQuillChange}
                theme="snow"
                border="1px solid #CBD5E0" // Add a border to the editor
                borderRadius="4px" // Add border radius to the editor
                _hover={{ borderColor: "gray.300" }}
                _focus={{ borderColor: "gray.400" }}
              />
            </Box>
            
        {/* Product Price */}

      </Box>

      {/* ////////////////////////////////////////////////////////////////////// SKU, QTY, PRICE, SECTION/////////////// */}


          <Box mt="10px                                                                                                                                                              "
                // ... other styles ...
              >
                {/* ... other content ... */}

                <Flex>
                  {/* SKU */}
                  <Box
                    mr="10px"
                    bg="white"
                    borderRadius="8px"
                    boxShadow="0 0.5px 2px grey"
                  >
                    <Heading as="h2" size="xs" p="10px">
                      SKU
                    </Heading>
                    <Input
                      name= "sku"
                      variant="filled"
                      value={productDetails.sku}
                      p="10px"
                      border="1px solid #CBD5E0"
                      borderRadius="4px"
                      _hover={{ borderColor: "gray.300" }}
                      _focus={{ borderColor: "gray.400" }}
                      onChange={handleChange}
                    />
                  </Box>

                  {/* Quantity */}
                  <Box
                    mr="10px"
                    bg="white"
                    borderRadius="8px"
                    boxShadow="0 0.5px 2px grey"
                  >
                    <Heading as="h2" size="xs" p="10px">
                      Quantity
                    </Heading>
                    <Input
                    name= "quantity"
                      variant="filled"
                      value={productDetails.quantity}
                      p="10px"
                      border="1px solid #CBD5E0"
                      borderRadius="4px"
                      _hover={{ borderColor: "gray.300" }}
                      _focus={{ borderColor: "gray.400" }}
                      onChange={handleChange}
                    />
                  </Box>

                  {/* Cost */}
                  <Box bg="white" borderRadius="8px" boxShadow="0 0.5px 2px grey">
                    <Heading as="h2" size="xs" p="10px">
                      Cost
                    </Heading>
                    <Input
                      name= "cost"
                      variant="filled"
                      value={productDetails.cost}
                      p="10px"
                      border="1px solid #CBD5E0"
                      borderRadius="4px"
                      _hover={{ borderColor: "gray.300" }}
                      _focus={{ borderColor: "gray.400" }}
                      onChange={handleChange}
                      type="number" // Set the input type to "number"
                      step="0.01"   // Set the step to allow decimal values 
                    />
                  </Box>
                </Flex>

                {/* ... other content ... */}
              </Box>



      {/* Media */}
      <Box flex="1" padding="10px" mt= "10px" borderRadius="8px" boxShadow="0 0.5px 2px grey" bg="white" >
        <Heading as="h2" size="xs" p="10px">
          Media
        </Heading>
        {/* <Image src="https://via.placeholder.com/300" alt="Product" height="100px" /> */}
        <ImageUpload/>
      {/* Display product details */}
      <button onClick={handleUpdate} disabled={isUpdating} style={{ backgroundColor: 'black', color: 'white', padding: '10px' }}>
        {isUpdating ? 'Updating...' : 'Update Product'}
      </button>
      </Box>




      {/* /////////////////////////// header_save//////////// */}
      {showHeader && (
        <Box p="10px" bg="gray.200">
          <Flex justify="space-between">
            <Heading size="md">Unsaved Changes</Heading>
            <Button variant="outline" colorScheme="red" onClick={handleDiscard}>
              Discard
            </Button>
            {/* <Button colorScheme="green" onClick={handleSave}> */}
            <Button colorScheme="green" onClick={handleUpdate}>
            
              Save
            </Button>
          </Flex>
        </Box>
      )}

      {/* <Input
        placeholder="Type something..."
        value={inputValue}
        onChange={handleChange_test}
        mt={showHeader ? '60px' : '0'} // Adjust the margin top based on header visibility
      /> */}
    </Flex>
  );
};

export default ProductDetailTest;
