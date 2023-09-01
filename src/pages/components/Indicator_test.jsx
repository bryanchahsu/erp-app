
import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
  } from '@chakra-ui/react'
  export default function Indicator_test() {

  
    return (
        <div>
            <StatGroup
                p={-2}
                mb="10px"
                // pl={100}
                >
                
                <Stat>
                    {/* <StatLabel>Sent</StatLabel> */}
                    <StatNumber>345,670</StatNumber>
                    <StatHelpText>
                    <StatArrow type='increase' />
                    23.36%
                    </StatHelpText>
                </Stat>

                <Stat>
                    {/* <StatLabel>Clicked</StatLabel> */}
                    <StatNumber>45</StatNumber>
                    <StatHelpText>
                    <StatArrow type='decrease' />
                    9.05%
                    </StatHelpText>
                </Stat>
            </StatGroup>     
        </div>
      )

    }