// src/App.js
import React from 'react';
import { ChakraProvider, SimpleGrid, Box, Stat, StatLabel, StatNumber, StatHelpText } from '@chakra-ui/react';

function Analytics_test() {
    return (
        <ChakraProvider>
            <Box p={5}>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
                    {/* Total Sales */}
                    <Box bg="white" p={4} borderRadius="md">
                        <Stat>
                            <StatLabel>Total Sales</StatLabel>
                            <StatNumber>$10,485.67</StatNumber>
                            <StatHelpText>133% ↑</StatHelpText>
                        </Stat>
                    </Box>

                    {/* Sales by Channel */}
                    <Box bg="white" p={4} borderRadius="md">
                        <Stat>
                            <StatLabel>Sales by Channel</StatLabel>
                        </Stat>
                    </Box>

                    {/* Conversion Rate */}
                    <Box bg="white" p={4} borderRadius="md">
                        <Stat>
                            <StatLabel>Online Store Conversion Rate</StatLabel>
                            <StatNumber>13.53%</StatNumber>
                            <StatHelpText>77% ↑</StatHelpText>
                        </Stat>
                    </Box>

                    {/* Total Orders */}
                    <Box bg="white" p={4} borderRadius="md">
                        <Stat>
                            <StatLabel>Total Orders</StatLabel>
                            <StatNumber>18</StatNumber>
                        </Stat>
                    </Box>

                    {/* Average Order Value */}
                    <Box bg="white" p={4} borderRadius="md">
                        <Stat>
                            <StatLabel>Average Order Value</StatLabel>
                            <StatNumber>$565.53</StatNumber>
                            <StatHelpText>57% ↑</StatHelpText>
                        </Stat>
                    </Box>

                    {/* Online Store Sessions */}
                    <Box bg="white" p={4} borderRadius="md">
                        <Stat>
                            <StatLabel>Online Store Sessions</StatLabel>
                            <StatNumber>133</StatNumber>
                        </Stat>
                    </Box>
                </SimpleGrid>
            </Box>
        </ChakraProvider>
    );
}

export default Analytics_test;
