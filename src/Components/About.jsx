import { Button, Center, Divider, Flex, Heading, Image, Text, VStack,HStack,Circle } from '@chakra-ui/react'
import React from 'react'
import styles from './About.module.css'
import image from '../Image.png'
import {BsFillEnvelopeFill, BsGithub, BsLinkedin} from 'react-icons/bs'
import ReactTooltip from 'react-tooltip'
const About = () => {
  return (
    <div id="about" className={styles.parentContainer}>
        <Heading size="3xl" className={styles.head}>About Me</Heading>
        <Divider zIndex={-1}/>
        <Flex direction={{sm : "column", md : "column", lg : 'row', xl : 'row', '2xl':'row', base : 'column'}} gap="40px" alignItems="center" margin="60px 0px">
            <Center width={{sm : "300px",md: "400px", lg : '400px', xl : '400px', '2xl' : '400px'}} padding={2} flex={4} w="100%">
                <Image src={image} alt="Snehil" width="100%"  borderRadius="lg" />
            </Center>
            <VStack alignItems="flex-start" flex={6}>
                <Text fontSize="2xl" color="white">A passionate full-stack web developer at Masai School, Bangalore. Loves to build useful and attractive websites. A team player with good skills and mindset. Wants to be recognized across the globe for his work.</Text>
                <Center padding="20px 0px">
                  <Button variant={'solid'} colorScheme="blue" fontFamily="heading" fontSize={20}>See My Resume</Button>
                </Center>
                <Heading size="md" color="white">Get in Touch</Heading>
                <HStack gap={3} padding="10px 0px">
                  <a href="https://github.com/snehilagrahari" target={"_blank"} rel="noreferrer">
                  <Circle padding="10px" bgColor="white" >
                    <BsGithub color="skyblue" size="25px" cursor="pointer" data-tip data-for="github" />
                    <ReactTooltip id="github">Github</ReactTooltip>       
                  </Circle>
                  </a>
                  <a href="https://www.linkedin.com/in/snehil-agrahari-996867241" target={"_blank"} rel="noreferrer">
                  <Circle padding="10px" bgColor="white" >
                    <BsLinkedin color="skyblue" size="25px" cursor="pointer" data-tip data-for="Linkedin" />
                      <ReactTooltip id="Linkedin">Linkedin</ReactTooltip>
                  </Circle>
                  </a>
                  <a href="">
                  <Circle padding="10px" bgColor="white" >
                    <BsFillEnvelopeFill color="skyblue" size="25px" cursor="pointer" data-tip data-for="Email" />
                      <ReactTooltip id="Email">Email</ReactTooltip>
                  </Circle>
                  </a>
                </HStack>
            </VStack>
        </Flex>
    </div>
  )
}

export default About