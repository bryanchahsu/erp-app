import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { useState, useEffect } from "react";
import { Box, Flex, Image, Text, Heading, Input, Button } from "@chakra-ui/react";
import ImageUpload from '../upload';
import useUpdateProduct from '../useUpdateProduct';
import { useMutation, useQueryClient } from 'react-query';
import DOMPurify from 'dompurify';
import 'react-quill/dist/quill.snow.css'; // Import Quill's CSS



//React Query API

const createPost = async (newPost) => {
  const response = await fetch('http://localhost:8000/products/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPost),
  });

  if (!response.ok) {
    throw new Error('Error creating post');
  }

  return response.json();
};


// Main function

const ProductNew_Form = () => {
  // const [productDetails, setProductDetails] = useState({ ...products });
  const [productDetails, setProductDetails] = useState({
    title: "", // Initial value for title
    description: "", // Initial value for description
    sku: "", // Initial value for sku
    quantity: 0, // Initial value for quantity
    cost: 0.0, // Initial value for cost
  });
  const modules = {
    clipboard: {
      matchVisual: false, // Disable pasting HTML content
    },
  };
  
  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'list',
    'bullet',
    'indent',
  ];

  const [showHeader, setShowHeader] = useState(false);


  const queryClient = useQueryClient();

  const createPostMutation = useMutation((newPost) => createPost(newPost), {
    onSuccess: () => {
      // Invalidate and refetch the list of posts after a successful POST
      queryClient.invalidateQueries('posts');
    },
  });
 

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
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    // const formData = new FormData(e.target);
    // const newPost = {
    //   title: formData.get('title'),
    //   body: formData.get('body'),
    // };
    const sanitizedDescription = DOMPurify.sanitize(productDetails.description);
    console.log("Sanitized Description:", sanitizedDescription);
    createPostMutation.mutate({ ...productDetails, description: sanitizedDescription });
    

    setProductDetails({
      title: "", // Reset to the initial value
      description: "", // Reset to the initial value
      sku: "", // Reset to the initial value
      quantity: 0, // Reset to the initial value
      cost: 0.0, // Reset to the initial value
    });

  };



  const handleQuillChange = (value) => {
    console.log("Quill value:", value);
    setProductDetails((prevProductDetails) => ({
      ...prevProductDetails,
      description: value
    }));
  };
  /////////////////////////////////////////// SAVE HEADER STATES////////////////////////////////////




  useEffect(() => {
    // Compare product details to determine if there are unsaved changes
    const hasUnsavedChanges =
      productDetails.title !== "" ||
      productDetails.description !== "" ||
      productDetails.sku !== "" ||
      productDetails.quantity !== "" ||
      productDetails.cost !== "";

    setShowHeader(hasUnsavedChanges);
  }, [productDetails]);


  const handleDiscard = () => {
    setProductDetails({
      title: "", // Reset to the initial value
      description: "", // Reset to the initial value
      sku: "", // Reset to the initial value
      quantity: 0, // Reset to the initial value
      cost: 0.0, // Reset to the initial value
    });
    setShowHeader(false);
  };
  

  return (
    <Flex
      direction="column"
      maxWidth="100%" // Set the width to 100%
      margin="0" // Remove margin
      // padding="20px"
      // bg="blue"
      mb="225px"
      width="100%" // Set the width to 100%
      // height="100%"
      >
        
      {/* Product Details */}
      <Box flex="2" padding="10px" borderRadius="8px" boxShadow="0 0.5px 2px grey" 
          bg="white" 
          height="700px"
            
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
            <Box mb="4" height="300px" 
              // bg= "white"
              >
              <Heading as="h2" size="xs" p="10px">
                Description
              </Heading>
              <ReactQuill
                // style={{ minHeight: "500px" }}
                // p="10px"
                // value={productDetails.description}
                // onChange={handleQuillChange}
                // theme="snow"
                // border="1px solid #CBD5E0" // Add a border to the editor
                // borderRadius="4px" // Add border radius to the editor
                // _hover={{ borderColor: "gray.300" }}
                // _focus={{ borderColor: "gray.400" }}
                // modules={modules}
                // formats={formats}
                value={productDetails.description}
                onChange={handleQuillChange}
                theme="snow"
                modules={modules}
                formats={formats}
                style={{ minHeight: '225px', height: '225px' }}                
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
            <Button colorScheme="green" onClick={handleSubmit }>
            
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

export default ProductNew_Form;
