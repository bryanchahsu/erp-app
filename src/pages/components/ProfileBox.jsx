// import { Box, Flex, Text, Avatar, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
// import { ChevronDownIcon } from "@chakra-ui/icons";

// const ProfileBox = () => {
//   return (
//     <Flex
//       align="center"
//       p={4}
//       h="80%"
//     //   border="1px solid #ddd"
//       borderRadius="md"
//       _hover={{ boxShadow: "md",
//                 background:"#F0F0F0" }} // Adding hover effect with box shadow
//     >
//       {/* Circular logo of initials */}
//       <Avatar size= "sm" name="John Doe" src="https://bit.ly/broken-link" />

//       {/* Name text */}
//       <Text ml={4} fontWeight="semibold">
//         John Doe
//       </Text>

//       {/* Dropdown */}
//       <Menu>
//         <MenuButton ml="auto" as={ChevronDownIcon} w={6} h={6} />
//         <MenuButton>
//             <Avatar size= "sm" name="John Doe" src="https://bit.ly/broken-link" />
//             <Text ml={4} fontWeight="semibold">
//                 John Doe
//             </Text>
//         </MenuButton>
//         <MenuList>
//           <MenuItem>Edit Profile</MenuItem>
//           <MenuItem>Change Password</MenuItem>
//           <MenuItem>Logout</MenuItem>
//         </MenuList>
//       </Menu>
//     </Flex>
//   );
// };

// export default ProfileBox;

import { Button, Flex, Text, Avatar, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const ProfileBox = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        variant="outline" // Optional: Add outline variant to the button for a cleaner look
        p={4}
        border="1px solid #ddd"
        borderRadius="md"
        _hover={{ boxShadow: "md",
                  background: "#F0F0F0"}} // Adding hover effect with box shadow
        // w="100%" // Full width of the container
        justifyContent="space-between" // Horizontally aligns Avatar and Text with space in between
      >
        {/* Avatar and Name placed horizontally */}
        <Flex align="center">
          <Avatar size="sm" name="John Doe" src="https://bit.ly/broken-link" />
          <Text ml={4} fontWeight="semibold">
            John Doe
          </Text>
        </Flex>

        {/* Dropdown icon */}
        {/* <ChevronDownIcon /> */}
      </MenuButton>

      {/* Dropdown items */}
      <MenuList>
        <MenuItem>Manage Account</MenuItem>
        {/* <MenuItem>Change Password</MenuItem> */}
        <MenuItem>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileBox;

