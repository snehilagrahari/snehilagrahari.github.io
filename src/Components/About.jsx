import { Button, Center, Divider, Flex, Heading, Image, Text, VStack,HStack,Circle } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import styles from './About.module.css'
import image from '../Image.png'
import {BsFillEnvelopeFill, BsGithub, BsLinkedin} from 'react-icons/bs'
import {BsDownload} from 'react-icons/bs'
import ReactTooltip from 'react-tooltip'
import pdf from "../downloads/fw21_1171_Snehil_Agrahari_Resume.pdf"

//aos import 

import AOS from "aos";
import "aos/dist/aos.css";


const About = () => {


  const handleResume=() =>{
    window.open("https://drive.google.com/file/d/11qpa3yYgyWBe8SCwkltHt59UkYYvYIQE/view?usp=share_link")
  }

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div id="about" className={styles.parentContainer}>
        <Heading data-aos="fade-up" textAlign="right" size="3xl" className={styles.head}><Text as="span" color="#cc93d1">A</Text>bout <Text as="span" color="#cc93d1">M</Text>e</Heading>
        <Divider zIndex={-1}/>
        <Flex direction={{sm : "column", md : "column", lg : 'row', xl : 'row', '2xl':'row', base : 'column'}} gap="40px" alignItems="center" margin="60px 0px">
            <Center width={{sm : "300px",md: "400px", lg : '400px', xl : '400px', '2xl' : '400px'}} padding={2} flex={4} w="100%">
                <Image src={image} alt="Snehil" width="300px"  borderRadius="lg" />
            </Center>
            <VStack alignItems="flex-start" flex={6}>
                <Text fontSize="2xl" color="white">A passionate full-stack web developer at Masai School, Bangalore. Loves to build useful and attractive websites. A team player with good skills and mindset. Wants to be recognized across the globe for his work.</Text>
                <Center padding="20px 0px">
                  <a href={pdf} target="_blank" download rel="noreferrer">
                    <Button variant={'solid'} bg="#cc93d1" fontFamily="heading" fontSize={20} onClick={handleResume}>
                      <HStack> 
                        <BsDownload/>
                        <Text>Resume</Text>
                      </HStack>
                    </Button>
                  </a>
                </Center>
                <Heading size="md" color="white">Get in Touch</Heading>
                <HStack gap={3} padding="10px 0px">
                  <a href="https://github.com/snehilagrahari" target={"_blank"} rel="noreferrer">
                  <Circle padding="10px" bgColor="#cc93d1" >
                    <BsGithub color="black" size="25px" cursor="pointer" data-tip data-for="github" />
                    <ReactTooltip id="github">Github</ReactTooltip>       
                  </Circle>
                  </a>
                  <a href="https://www.linkedin.com/in/snehil-agrahari-996867241" target={"_blank"} rel="noreferrer">
                  <Circle padding="10px" bgColor="#cc93d1" >
                    <BsLinkedin color="black" size="25px" cursor="pointer" data-tip data-for="Linkedin" />
                      <ReactTooltip id="Linkedin">Linkedin</ReactTooltip>
                  </Circle>
                  </a>
                  <Circle padding="10px" bgColor="#cc93d1" >
                    <a href="#contact">
                      <BsFillEnvelopeFill color="black" size="25px" cursor="pointer" data-tip data-for="Email" />
                        <ReactTooltip id="Email">Email</ReactTooltip>
                    </a>
                  </Circle>
                </HStack>
            </VStack>
        </Flex>
    </div>
  )
}

export default About