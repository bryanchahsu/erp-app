
import { Flex, Box, Input, IconButton, Heading, Text, Select } from '@chakra-ui/react';
// import { SearchIcon, BellIcon, UserIcon } from '@chakra-ui/icons';
import ProfileBox from './ProfileBox';
export default function Header() {

  
  return (
    <div>

      <Flex
              align="center"
              justify="space-between"
              borderBottom={'solid'}
              borderColor="gray.300" // Customize the border color
              borderWidth="1px" // Customize the border width
              bg="white"
              h="60px"
              px={4}
              position="fixed"
              top={0}
              left={0}
              right={0}
              zIndex={999}

          >
            <Box>
              {/* Content for the title */}
              <Heading as="h1" size="md">
                Art of Tea
              </Heading>
            </Box>
            
            <Box
                bg= "#F0F0F0"
                
                >
                  
              {/* Content for the search bar */}
              
              <Input placeholder="Search" />
            </Box>

            <ProfileBox></ProfileBox>
    
      </Flex>
      

        
    </div>

    )
}