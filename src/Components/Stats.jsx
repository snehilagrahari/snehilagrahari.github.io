import { Box, Center, Divider, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import ReactTooltip from 'react-tooltip'
import image from '../stackoverflow.png'

const Stats = () => {
  return (
    <div id="stats" style={{width : '90%', margin : 'auto' ,padding : '100px 20px 20px 20px'}}>
        <Heading size="3xl" width="90%" margin="auto" color="white" textAlign="center">Statistics</Heading>
        <Divider zIndex={-1} />
        <Box marginTop={10}>
            <Heading size="xl" textAlign="center" color="blue.200">Github</Heading>
            <Center background="white" padding={5} marginTop={10}>
                <GitHubCalendar 
                    username='snehilagrahari' 
                    color={'darkblue'} 
                    blockSize={20}
                    fontSize={15}
                    >
                        <ReactTooltip delayShow={20} html />
                    </GitHubCalendar>
            </Center>
            <Center padding={5} marginTop={10}>
                <a href="https://github.com/snehilagrahari">
                    <Image src="https://github-readme-streak-stats.herokuapp.com?user=snehilagrahari&theme=github-dark-blue&border_radius=6.0&date_format=M%20j%5B%2C%20Y%5D" alt="Github" />
                </a>
            </Center>
        </Box>
        <Box marginTop={10}>
        <Heading size="xl" textAlign="center" color="blue.200">Stack Overflow</Heading>
        <Center marginTop={10}>
            <a target="_blank" rel="noreferrer" href="https://stackoverflow.com/users/20400930/snehil-agrahari">
                <Image src={image} alt="STACKOVERFLOW" />
            </a>
        </Center>
        </Box>
        
    </div>
  )
}

export default Stats