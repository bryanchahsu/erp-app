import { Flex, Box, Text, Input } from "@chakra-ui/react";
import React, { useState } from "react";

const ProductInformationPage = () => {
  const [selectedFont, setSelectedFont] = useState("Arial"); // Default font

  const handleFontChange = (event) => {
    setSelectedFont(event.target.value);
  };

  return (
    <Flex flexDirection="column" align="center" justify="center" h="100vh">
      {/* Product Information */}
      <Flex
        direction="column"
        align="center"
        justify="center"
        bg="gray.100"
        p={6}
        borderRadius="8px"
        boxShadow="lg"
        w="80%"
      >
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Product Name
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          venenatis tortor eu massa efficitur, vel aliquet eros tincidunt.
        </Text>
      </Flex>

      {/* Font Editor Toolbox */}
      <Box mt={8} p={6} bg="gray.100" borderRadius="8px" boxShadow="lg" w="80%">
        <Text fontSize="lg" fontWeight="bold" mb={4}>
          Text Font Editor
        </Text>
        <Input
          type="text"
          value={selectedFont}
          onChange={handleFontChange}
          placeholder="Enter font name"
        />
        <Text mt={4}>Selected Font: {selectedFont}</Text>
      </Box>
    </Flex>
  );
};

export default ProductInformationPage;
