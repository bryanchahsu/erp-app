import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { useState } from "react";
import { Box, Flex, Image, Text, Heading, Input } from "@chakra-ui/react";
import ImageUpload from './components/upload';


const ProductDetailTest = () => {
  const [productTitle, setProductTitle] = useState("Product Title");
  const [productDescription, setProductDescription] = useState(
    "Product Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at tincidunt ex, eu auctor metus. Nulla facilisi. Nullam dictum nunc sed lorem sollicitudin, eget eleifend purus sollicitudin."
  );
  const [productPrice, setProductPrice] = useState("49.99");
  const [sku, setSku] = useState("ABC123");
  const [quantity, setQuantity] = useState(10);
  const [cost, setCost] = useState(50.99);





  const handleDescriptionChange = (value) => {
    setProductDescription(value);
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
                variant="filled"
                value={productTitle}
                p="10px"
                border="1px solid #CBD5E0" // Add a border to the input
                borderRadius="4px" // Add border radius to the input
                _hover={{ borderColor: "gray.300" }}
                _focus={{ borderColor: "gray.400" }}
                onChange={(e) => setProductTitle(e.target.value)}
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
                value={productDescription}
                onChange={handleDescriptionChange}
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
      {/* <Box mb="4" 
        bg="white"
        mt="20px"
        borderRadius="8px" boxShadow="0 0.5px 2px grey"
          >
          <Heading as="h2" size="xs" p="10px">
            Product Price
          </Heading>
          <Input
            variant="filled"
            value={productPrice}
            p="10px"
            border="1px solid #CBD5E0" // Add a border to the input
            borderRadius="4px" // Add border radius to the input
            _hover={{ borderColor: "gray.300" }}
            _focus={{ borderColor: "gray.400" }}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </Box> */}

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
                      variant="filled"
                      value={sku}
                      p="10px"
                      border="1px solid #CBD5E0"
                      borderRadius="4px"
                      _hover={{ borderColor: "gray.300" }}
                      _focus={{ borderColor: "gray.400" }}
                      onChange={(e) => setSku(e.target.value)}
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
                      variant="filled"
                      value={quantity}
                      p="10px"
                      border="1px solid #CBD5E0"
                      borderRadius="4px"
                      _hover={{ borderColor: "gray.300" }}
                      _focus={{ borderColor: "gray.400" }}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </Box>

                  {/* Cost */}
                  <Box bg="white" borderRadius="8px" boxShadow="0 0.5px 2px grey">
                    <Heading as="h2" size="xs" p="10px">
                      Cost
                    </Heading>
                    <Input
                      variant="filled"
                      value={cost}
                      p="10px"
                      border="1px solid #CBD5E0"
                      borderRadius="4px"
                      _hover={{ borderColor: "gray.300" }}
                      _focus={{ borderColor: "gray.400" }}
                      onChange={(e) => setCost(e.target.value)}
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
      </Box>
    </Flex>
  );
};

export default ProductDetailTest;
