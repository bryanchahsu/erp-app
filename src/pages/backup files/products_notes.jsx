<Flex
// align="center"
justify="space-between"
alignItems="flex-start"

// borderBottom={'solid'}
// borderColor="gray.300" // Customize the border color
// borderWidth="1px" // Customize the border width

bg="white"
boxShadow="0 2px 5px rgba(0, 0, 0, 0.1)" // Improved box shadow
borderRadius= "8px"
fontFamily="Roboto, Arial, sans-serif" // Change to desired font
h="60px"
px={4}
position="absolute"
top={20}
left={5}
right={5}
zIndex={10}
// style={{ alignItems: 'flex-start' }}

>
<Flex style={containerStyle} >
Today

</Flex>
{/* <Divider orientation="vertical" borderColor="gray.400" /> */}



{/* OLD HEADER FOR SUMMARY CONTENT SNAPSHOT */}


<Flex 
style={{ ...containerStyle, alignItems: 'center', justifyContent: 'flex-start', position: 'relative', top:10}}
// style={containerStyle}
>
<Box style={{ position: 'absolute', top: 0 }}>
    Days of inventory remaining
</Box>
<Flex justifyContent="space-between" width="100%">
    <Box flex="1" > 
        {/* <ul style={{ color: "blue" }}>
            <li>
                 <span style={{ color: "black" }}>0-30:</span>
            </li>
        </ul> */}
        <ul style={ulStyle}>
        <li>
            <span style={{ color: 'black' }}>
            <span style={bulletPointStyle}>•</span>
            </span>
            <span style={{ color: 'black' }}>0-30:</span>
        </li>
        </ul>                        
    </Box>
    <Box flex="1" ml='20px'>
        <ul style={{ color: "green" }}>
            <li>
                 <span style={{ color: "black" }}>31-90:</span>
            </li>
        </ul>
    </Box>
    <Box flex="1" ml='20px' >
         <ul style={{ color: "red" }}>
            <li>
                 <span style={{ color: "black" }}>91+:</span>
            </li>
        </ul>
    </Box>
</Flex>      
</Flex>
{/* <Divider orientation="vertical" borderColor="gray.400" /> */}

<Flex 
style={{ ...containerStyle, alignItems: 'center', justifyContent: 'left', position: 'relative' }}
>
<Box style={{ position: 'absolute', top: 5 }}>
    Ordered Items
</Box>
<Box >
    a
</Box>                    
</Flex>

</Flex>