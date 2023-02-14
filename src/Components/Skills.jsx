import {  Center, Divider, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import image1 from '../Icons/html-5.svg'
import image2 from '../Icons/css3.svg'
import image3 from '../Icons/javascript.svg'
import image4 from '../Icons/nodejs.svg'
import image5 from '../Icons/mongodb.svg'
import image6 from '../Icons/express.svg'
import image7 from '../Icons/redux.svg'
import image8 from '../Icons/reactjs.svg'
import image9 from '../Icons/Typescript.png'
import image10 from '../Icons/chakraUI.svg'
import image11 from '../Icons/material-ui.svg'
import image12 from '../Icons/git.svg'
const Skills = () => {

  const skills = [
    {
      name : "HTML5",
      src : image1
    },
    {
      name : "CSS3",
      src : image2
    },
    {
      name : "JavaScript",
      src : image3
    },
    {
      name : "NodeJS",
      src : image4
    },
    {
      name : "MongoDB",
      src : image5,
    },
    {
      name : "ExpressJS",
      src : image6
    },
    {
      name : "Redux",
      src : image7
    },
    {
      name : "ReactJS",
      src : image8
    },
    {
      name : "TypeScript",
      src : image9
    },
    {
      name : 'Git',
      src : image12
    },
    {
      name : "Chakra-UI",
      src : image10
    },
    {
      name : "Material-UI",
      src : image11
    }


  ]

  return (
    <div id="skills" style={{width : "90%", margin:'auto', padding :" 100px 20px 40px 20px"}}>
        <Heading size="3xl" textAlign="right" color="white">
        <Text as="span" color="#cc93d1">S</Text>kills & <Text as="span" color="#cc93d1">T</Text>ools
        </Heading>
        <Divider zIndex={-1} />
        <SimpleGrid columns={{sm : 2,md : 2,lg : 2, xl : 3, '2xl' : 4 , base : 1}} gap={5} padding={3} marginTop={10}>
            {
              skills.map(el=><Flex direction={{sm : 'column', md : 'column', lg : 'row', xl : 'row', '2xl' : 'row', base : 'column'}}alignItems={'center'} justifyContent="center" key={el.name} padding={3} bgColor='#1e141f' borderRadius="md" height="200px" gap={2}>
                <Image src={el.src} alt="SKILL" maxH="150px" maxW="100px" minH="100px" minW="100px" borderRadius="xl" />
                <Text fontSize="xl" textAlign="" fontWeight="bold" color ="white">{el.name}</Text>
                </Flex>)
            }
        </SimpleGrid>

    </div>
  )
}

export default Skills