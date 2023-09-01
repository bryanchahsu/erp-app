import { Flex, Box, Heading, Text, Button, Spacer, HStack, Circle, Input } from '@chakra-ui/react'
import React from 'react'

export default function NavBar(){
    return(
        <div>
            <Flex as = "nav" p="10px" gap= "10pxs">
                <Heading as = "h1" size={15}>Chad's Tea </Heading>
                
                <Spacer/>

                <Input 
                 variant ='outline'
                 placeholder ='Search'
                 htmlSize={40} 
                 width='auto' />

                <Spacer/>
                <HStack>
                    <Circle bg= "gray.200" p= "10px">BH</Circle>
                    <Text>Bryan Hsu</Text>
                    <Button colorScheme='blue'>Logout</Button>
                </HStack>
            </Flex>
        </div>
    )
}