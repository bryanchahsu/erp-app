import React from "react";
import { Box, Flex } from "@chakra-ui/react";

const FlexboxWithInnerBoxes = () => {
  return (

    //Caldendar
    <Flex
      direction="column" // Stack items vertically
      justify="center" // Center content horizontally
      align="center" // Center content vertically
      h="500px" // Set the height of the outer flexbox to the viewport height
      w="900px"
      bg="gray.200" // Set background color for the outer flexbox
    >

        {/* main  */}
      <Flex
        w="100%" // Set width of the inner boxes to 100% of the parent (outer flexbox)
        h="90%" // Set height of each inner box to 50% of the parent (outer flexbox)
        bg="red.500" // Set background color of the top inner box to red
      >

        {/* date type filter */}
        <Flex
                w="30%" // Set width of the inner boxes to 100% of the parent (outer flexbox)
                h="100%" // Set height of each inner box to 50% of the parent (outer flexbox)
                bg="yellow.500" // Set background color of the top inner box to red
        >


        </Flex>

        <Flex
                        w="70%" // Set width of the inner boxes to 100% of the parent (outer flexbox)
                        h="100%" // Set height of each inner box to 50% of the parent (outer flexbox)
                        bg="green.500" // Set background color of the top inner box to red
                        direction="column" // Stack items vertically
                        justify="center" // Center content horizontally
                        align="center" // Center content vertically
                        
        
        >
            <Box
                h="20%"
                w="100%"
                bg="red"
            
            >
                hi
            </Box>
            <Box
                h="80%"
                w="100%"
                bg="yellow"
            >
                hi
            </Box>
        </Flex>
        


      </Flex>
      {/* footer */}
      <Flex
        w="100%" // Set width of the inner boxes to 100% of the parent (outer flexbox)
        h="10%" // Set height of each inner box to 50% of the parent (outer flexbox)
        bg="blue.500" // Set background color of the bottom inner box to blue
      >
        
      </Flex>
    </Flex>
  );
};

export default FlexboxWithInnerBoxes;
