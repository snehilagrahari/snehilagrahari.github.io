import { Button, Center, Divider, Flex, Heading, Image, Text, VStack,HStack,Circle, Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import styles from './About.module.css'
import image from '../Image.png'
import {BsFillEnvelopeFill, BsGithub, BsLinkedin} from 'react-icons/bs'
import {BsDownload} from 'react-icons/bs'
import bg from '../background/aboutme.jpg';
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
    <Box id="about" h="100%" className={styles.parentContainer} backgroundImage={bg} >
        
        <Heading data-aos="fade-up" p={3} size={{base: "xl", sm : "xl", md : '2xl', lg : "3xl"}} color="#fff" textAlign={"center"}>About Me</Heading>

        <Flex direction={{sm : "column", md : "column", lg : 'row', xl : 'row', '2xl':'row', base : 'column'}} gap="40px" alignItems="center" justify-content={'center'} marginTop={8}>
            <Box flex={3}>
                <Image src={image} alt="Snehil" width={{base : '250px', sm : "300px"}}  borderRadius="lg" />
            </Box>
            <VStack flex={7} padding="20px 40px">
                <Text fontSize={{base : "lg", sm : "xl", md : "2xl"}} color="black" align="justify">A Full Stack Web Developer with knowledge of MERN <font color="#fff">{"{ React }"}</font> as well as MEAN Stack <font color="#fff"> {"{ Angular }"} </font>. Adept at developing both Frontend and Backend for a given project. Good at other soft skills such as problem solving, communication & adaptability. Willing to learn more and utilize current skills & knowledge. A good team player with time-management skills to cater for strict deadlines.</Text>
                <HStack justifyContent={'space-between'} w="full" padding="30px 0px">
                  <Box>
                    <Heading size="md" color="#fff">Get in Touch</Heading>
                    <HStack gap={3} padding="10px 0px">
                      <a href="https://github.com/snehilagrahari" target={"_blank"} rel="noreferrer">
                      <Circle padding="10px" bgColor="#ffcdcd" >
                        <BsGithub color="#ff6767" size="25px" cursor="pointer" data-tip data-for="github" />
                        <ReactTooltip id="github">Github</ReactTooltip>       
                      </Circle>
                      </a>
                      <a href="https://www.linkedin.com/in/snehil-agrahari-996867241" target={"_blank"} rel="noreferrer">
                      <Circle padding="10px" bgColor="#ffcdcd" >
                        <BsLinkedin color="#ff6767" size="25px" cursor="pointer" data-tip data-for="Linkedin" />
                          <ReactTooltip id="Linkedin">Linkedin</ReactTooltip>
                      </Circle>
                      </a>
                      <Circle padding="10px" bgColor="#ffcdcd" >
                        <a href="#contact">
                          <BsFillEnvelopeFill color="#ff6767" size="25px" cursor="pointer" data-tip data-for="Email" />
                            <ReactTooltip id="Email">Email</ReactTooltip>
                        </a>
                      </Circle>
                    </HStack>
                  </Box>
                  <Box>
                    <Heading size="md" color="#fff">Download Resume</Heading>
                    <Center padding="20px 0px">
                      <a href={pdf} target="_blank" download rel="noreferrer">
                        <Button variant={'solid'} bg="#ffcdcd" fontFamily="heading" fontSize={20} onClick={handleResume}>
                          <HStack> 
                            <BsDownload color="#ff6767" />
                          </HStack>
                        </Button>
                      </a>
                    </Center>
                  </Box>
                </HStack>
            </VStack>
        </Flex>
    </Box>
  )
}

export default About