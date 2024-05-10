import React from "react";
import { Box, Flex } from "@chakra-ui/react";

const FlexboxWithInnerBoxes = () => {
  const boxStyles = {
    flex: "1 0 calc(50% - 8px)", // Each box takes up 50% of parent width with margin
    margin: "4px", // Margin for spacing between the boxes
    padding: "4px",
    textAlign: "center",
    maxWidth: "calc(50% - 8px)", // Maximum width for each box
  };

  return (
    <Flex
      flex="1"
      width="100%"
      flexWrap={{ base: "wrap", md: "nowrap" }} // Wrap on small screens, no wrap on medium screens and above
      flexDirection={{ base: "column", md: "row" }} // Set flexDirection to column for smaller screens and row for medium screens and above
    >
      <Box style={{ ...boxStyles, backgroundColor: "purple" }}>Rectangle 1</Box>
      <Box style={{ ...boxStyles, backgroundColor: "#f0f0f0" }}>Rectangle 2</Box>
      <Box style={{ ...boxStyles, backgroundColor: "#f0f0f0" }}>Rectangle 3</Box>
      <Box style={{ ...boxStyles, backgroundColor: "#f0f0f0" }}>Rectangle 4</Box>
    </Flex>
  );
};

export default FlexboxWithInnerBoxes;
