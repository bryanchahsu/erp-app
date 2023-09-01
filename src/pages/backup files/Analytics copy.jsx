import { Flex, Box } from "@chakra-ui/react";
import React from "react";

export default function GridContainer() {
  const containerStyle = {
    flex: "0 0 calc(33.33% - 20px)", // Adjust the width calculation to fit 3 columns with 20px gap
    height: "200px",
    backgroundColor: "#e0e0e0",
    margin: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const gridContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "630px",
    margin: "0 auto",
  };

//   return (
//     <Flex justify="center" align="center" height="100vh" bg="#f0f0f0">
//       <Box style={gridContainerStyle}>
//         {[...Array(9)].map((_, index) => (
//           <Box key={index} style={containerStyle}>
//             Container {index + 1}
//           </Box>
//         ))}
//       </Box>
//     </Flex>
//   );
// }

return (
  <Flex justify="center" align="center" height="100vh" bg="#f0f0f0">
    <Flex style={gridContainerStyle}>
      {[...Array(9)].map((_, index) => (
        <Box key={index} style={containerStyle}>
          Container {index + 1}
          chadgpt
        </Box>
      ))}
    </Flex>
  </Flex>
);
}
