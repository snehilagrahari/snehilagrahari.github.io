import {  Divider, Flex, Heading, Image, SimpleGrid, Text,
Tabs, TabList, TabPanels, TabPanel, Tab } from '@chakra-ui/react'
import React, { useEffect } from 'react'
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
import image13 from '../Icons/vscode.svg'
import image14 from '../Icons/angular.svg'
import image15 from '../Icons/bootstrap.svg'
import image16 from '../Icons/socketio.svg'


import style from './skills.module.css'

//aos import 

import AOS from "aos";
import "aos/dist/aos.css";

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
      name : "Angular",
      src : image14
    }
  ];

  const tools = [
    {
      name : 'Git',
      src : image12
    },
    {
      name : "VS Code",
      src : image13
    },
    {
      name : "Chakra-UI",
      src : image10
    },
    {
      name : "Material-UI",
      src : image11
    },
    {
      name : "Angular Material",
      src : image14
    },
    {
      name : "Bootstrap",
      src : image15
    },
    {
      name : "Socket.IO",
      src : image16
    }
  ];

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div id="skills" style={{width : "90%", margin:'auto', padding :" 100px 20px 40px 20px"}}>
        <Heading data-aos="fade-up" p={3} size="3xl" color="#cf2129" textAlign={"center"}>Skills & Tools</Heading>
          <Tabs align={'center'} variant='enclosed' colorScheme='red' mt={4} isFitted >
            <TabList>
              <Tab _selected={{color : 'white', bg : "#cf2129"}}><Text fontSize="20px">Skills</Text></Tab>
              <Tab _selected={{color : 'white', bg : "#cf2129"}}><Text fontSize="20px">Tools</Text></Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <SimpleGrid columns={{base : 2, sm : 2, md : 3, lg : 5 }} gap={2}>
                {
                  skills.map((el,i)=>{
                    return (
                      <Flex direction="column" padding={3} alignItems="center" gap={2} background="white" borderRadius="lg" key={i+1} border="1px solid #cf2129">
                        <Image src={el.src} alt={el.name} width="100px" height="100px" />
                        <Text fontSize="20px" color="">{el.name}</Text>
                      </Flex>
                    )
                  })
                }
                </SimpleGrid>
              </TabPanel>
              <TabPanel>
                <SimpleGrid columns={{base : 2, sm : 2, md : 3, lg : 5 }} gap={2}>
                {
                  tools.map((el,i)=>{
                    return (
                      <Flex direction="column" padding={3} alignItems="center" gap={2} background="white" borderRadius="lg" key={i+1} border="1px solid #cf2129">
                        <Image src={el.src} alt={el.name} width="100px" height="100px" />
                        <Text fontSize="20px" color="">{el.name}</Text>
                      </Flex>
                    )
                  })
                }
                </SimpleGrid>
              </TabPanel>
            </TabPanels>
          </Tabs>
        

    </div>
  )
}

export default Skills