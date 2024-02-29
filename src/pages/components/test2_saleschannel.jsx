import { Box, Flex, List, ListItem, Text, Circle } from "@chakra-ui/react";

const SalesChannelsList = () => {
  const salesChannels = [
    "Online Store",
    "Amazon",
    "Walmart",
    // "In-person Sales",
    // Add more sales channels as needed
  ];

  return (
    <Box>
      <List spacing={2}>
        {salesChannels.map((channel, index) => (
          <ListItem key={index}>
            <Flex align="center">
              <Circle bg="green.500" size="10px" mr={2} />
              <Text>{channel}</Text>
            </Flex>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SalesChannelsList;
