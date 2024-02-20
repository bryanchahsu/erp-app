
import { Flex, Box, Input, IconButton, Heading, Text, Select, Button, ButtonGroup } from '@chakra-ui/react';
// import { SearchIcon, BellIcon, UserIcon } from '@chakra-ui/icons';



export default function Import({ marginRight }){

    return(
        <div>
            <Button 
               
                size='md'
                // position="absolute"
       u         // top="2.5"
                // // right="126"
                // mr= "2"
                // mr={marginRight} // Use the prop value for marginRight

                colorScheme="gray" 
                variant="solid"
                bg="#E3E3E3"
                
                >
                 Import
            </Button>
        </div>

    )
}