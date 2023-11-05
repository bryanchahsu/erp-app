import React, { useEffect, useState } from 'react';
import { Flex, Box, Heading, Text } from '@chakra-ui/react';

export default function Header_Save() {
  const [outerPadding, setOuterPadding] = useState(400); // Initial padding for the outer container
  const boxWidth = 300; // Desired width for both boxes
  const spaceBetween = 200; // Adjust the space between the boxes

  // Update padding based on window width
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const remainingSpace = windowWidth - (boxWidth * 2 + spaceBetween); // Box width is 300px

      // Set the outer padding to half of the remaining space, but no less than 0
      setOuterPadding(Math.max(remainingSpace / 2, 0));
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial padding calculation
    handleResize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
          borderWidth="1px"
          borderRadius="md"
          bg="teal.200"
          marginRight={`${spaceBetween / 2}px`} // Margin to create space
        >
          <Heading as="h1" size="md">
            Art of Tea
          </Heading>
        </Box>
        <Box
          flex="1"
          width={`${boxWidth}px`} // Adjusted width for the right box
          borderWidth="1px"
          borderRadius="md"
          bg="purple.200"
          marginLeft={`${spaceBetween / 2}px`} // Margin to create space
        >
          <Text fontSize="xl">Right Box</Text>
        </Box>
      </Flex>
    </div>
  );
}
