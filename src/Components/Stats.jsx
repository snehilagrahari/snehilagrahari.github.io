import { Box, Center, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import ReactTooltip from 'react-tooltip'
import image from '../stackoverflow.png'

const Stats = () => {
  return (
    <div id="stats" style={{width : '90%', margin : 'auto' ,padding : '100px 20px 20px 20px'}}>
        <Heading data-aos="fade-up" p={3} size="3xl" color="#cf2129" textAlign={"center"}>Statistics and Participation</Heading>
        <Box marginTop={10}>
            <Heading size="xl" textAlign="center" color="red.500">Github</Heading>
            <Center background="white" padding={5} marginTop={10}>
                <GitHubCalendar 
                    username='snehilagrahari' 
                    color={'red'} 
                    blockSize={20}
                    fontSize={15}
                    >
                        <ReactTooltip delayShow={20} html />
                    </GitHubCalendar>
            </Center>
            <Stack direction={{base : 'column', sm: 'column',md: 'row'}} gap={5} padding={5} marginTop={10} justifyContent="center" alignItems="center">
                <a target="blank" rel="noreferrer" href="https://github.com/snehilagrahari">
                    <Image src="https://github-readme-streak-stats.herokuapp.com?user=snehilagrahari&theme=blood&border_radius=6.0&date_format=M%20j%5B%2C%20Y%5D" alt="Github" h={{sm : "200px"}} />
                </a>
                <a target="blank" rel="noreferrer" href="https://github.com/snehilagrahari">
                    <Image src="https://github-readme-stats.vercel.app/api/top-langs?username=snehilagrahari&show_icons=true&locale=en&layout=compact" alt="Github" height={{sm : "200px"}} />
                </a>
                <a href="https://github.com/snehilagrahari" target="_blank" rel="noreferrer">
                    <Image src="https://github-readme-stats.vercel.app/api?username=snehilagrahari&show_icons=true&locale=en" alt="Github" height={{sm : "200px"}} />
                </a>
            </Stack>
        </Box>
        <Box marginTop={10}>
        <Heading size="xl" textAlign="center" color="red.500">Stack Overflow</Heading>
        <Center marginTop={10}>
            <a target="_blank" rel="noreferrer" href="https://stackoverflow.com/users/20400930/snehil-agrahari">
                <Image src={image} alt="STACKOVERFLOW"  />
            </a>
        </Center>
        </Box>
        
    </div>
  )
}

export default Stats