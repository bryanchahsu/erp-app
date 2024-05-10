import { Flex, Box, Input, IconButton, Heading } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons'; // Use the available SearchIcon
import ProfileBox from './ProfileBox';
import SearchBar from './Header/search';

export default function Header() {
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
      >
        <Box>
          <Heading as="h1" size="md">
            Art of Tea
          </Heading>
        </Box>

        <Box bg="">
          <Flex align="center" p="4px">

            {/* <Input
              placeholder="Search"
              bg="transparent"
              color="white"
              border="none"
            /> */}
            <SearchBar></SearchBar>

            <IconButton
              aria-label="Search"
              icon={<SearchIcon />}
              bg="transparent"
              color="white"
            />
          </Flex>
        </Box>

        {/* Placeholder for UserIcon */}
        <Box>
          {/* <div>User Icon Placeholder</div> */}
          <ProfileBox></ProfileBox>
        </Box>
      </Flex>
    </div>
  );
}
