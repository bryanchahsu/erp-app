import React, { useEffect, useState } from 'react';
import { Flex, Box, Heading, Icon, Button } from '@chakra-ui/react';
import { MdWarning } from 'react-icons/md';
import { useMutation, useQueryClient } from 'react-query';
import DOMPurify from 'dompurify';
import { useNavigate } from 'react-router-dom';

// Define API Query Function
const createPost = async (newPost) => {
  const response = await fetch('http://127.0.0.1:8000/products/new', {
    // const response = await fetch('http://localhost:8000/products/', {
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

export default function Header_Save({ productDetails }) {
  const [outerPadding, setOuterPadding] = useState(400); // Initial padding for the outer container
  const boxWidth = 300; // Desired width for both boxes
  const spaceBetween = 200; // Adjust the space between the boxes

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const createPostMutation = useMutation((newPost) => createPost(newPost), {
    onSuccess: () => {
      // Invalidate and refetch the list of posts after a successful POST
      queryClient.invalidateQueries('posts');
    },
  });

  // Update padding based on window width
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const remainingSpace =
        windowWidth - (boxWidth * 2 + spaceBetween); // Box width is 300px

      // Set the outer padding to half of the remaining space, but no less than 0
      setOuterPadding(Math.max(remainingSpace / 2, 0));
    };

    // Add an event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial padding calculation
    handleResize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(productDetails)
  
    if (!productDetails || !productDetails.description) {
      // Handle the case where productDetails or its description is undefined or null
      console.error('productDetails or description is undefined or null');
      return;
    }
  
    const sanitizedDescription = DOMPurify.sanitize(productDetails.description);
    console.log('Sanitized Description:', sanitizedDescription);
  
    try {
      const response = await createPostMutation.mutateAsync({
        ...productDetails,
        description: sanitizedDescription,
      });
  
      // Check the response if needed
      console.log('Post created successfully:', response);
  
      // After successful submission, you can navigate or perform other actions
      navigate(-1);
    } catch (error) {
      // Handle any errors that may occur during the submission
      console.error('Error creating post:', error);
    }
  };
  

  const handleDiscard = () => {
    navigate(-1);
  };

  return (
    <div>
      <Flex
        align="center"
        justify="space-between"
        borderBottom="solid"
        borderColor="black"
        borderWidth="1px"
        bg="black"
        color="white"
        h="60px"
        px={4}
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={999}
        overflowX="hidden" // Hide horizontal overflow
        paddingLeft={`${outerPadding}px`}
        paddingRight={`${outerPadding}px`}
      >
        <Box
          flex="1"
          width={`${boxWidth}px`} // Adjusted width for the left box
          marginRight={`${spaceBetween / 2}px`} // Margin to create space
        >
          <Heading as="h1" size="md">
            <Icon
              as={MdWarning}
              color="white"
              marginRight="2"
              verticalAlign="middle" // Align icon vertically
              marginBottom="3px" // Fine-tune alignment by moving the icon slightly down
            />

            Unsaved Changes
          </Heading>
        </Box>
        <Box
          flex="1"
          width={`${boxWidth}px`} // Adjusted width for the right box
          marginLeft={`${spaceBetween / 2}px`} // Margin to create space
        >
          <Button colorScheme="grey" onClick={handleSubmit}>
            Save
          </Button>
          <Button colorScheme="grey" ml="2" onClick={handleDiscard}>
            Discard
          </Button>
        </Box>
      </Flex>
    </div>
  );
}
