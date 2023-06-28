import { Box, Divider, Heading, HStack, Image, Stack, Tag, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import image1 from "../ProjectImages/Travelocity.png"
import image2 from "../ProjectImages/Timelancer.png"
import image3 from "../ProjectImages/Kickstarter.png"
import {BsGithub} from 'react-icons/bs'
import {AiOutlineLink} from 'react-icons/ai'
import ReactTooltip from 'react-tooltip'

import AOS from 'aos';
import 'aos/dist/aos.css'

const Projects = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const projectList=[
    {

      id : 0,
      name : "Home Decor",
      deployLink : "https://home-decor-omega.vercel.app",
      githubLink : "https://github.com/snehilagrahari/home-decor",
      imageLink : "https://user-images.githubusercontent.com/112630634/213929836-17fec47c-a276-41e5-8012-1566c3c33a0d.png",
      description : "Home Decor is an E-commerce website which provides a user with variety of products, varying from day-to-day groceries to fashionable and trendy clothing. User can place order with any number of products in cart.",
      techStack : [
        "CSS",
        "JavaScript",
        "React",
        "Redux", 
        "Chakra-UI"
      ],
      projectType :"Collaborative Project",
      projectDuration : "5 Days"
    },
    {
      id : 1,
      name : "Travelocity",
      deployLink : "https://travelocity-zeta.vercel.app",
      githubLink : "https://github.com/snehilagrahari/tame-porter-1759",
      imageLink : image1,
      description : "Travelocity is an online hotel booking/search website. It also offers you to make a booking for a hotel in your name and it can be cancelled prior to check-in date of booking.",
      techStack : [
        "CSS",
        "JavaScript",
        "React",
        "Chakra-UI",
        "NodeJS",
        "MongoDB",
        "Express",
        "Mongoose"
      ],
      projectType :"Individual Project",
      projectDuration : "6 Days"
    },
    {
      id : 2,
      name : "Timelancer",
      deployLink : "https://lucent-lily-4f8d00.netlify.app/",
      githubLink : "https://github.com/snehilagrahari/spiteful-toothbrush-9776",
      imageLink : image2,
      description : "Timelancer is a tool-kit for freelancers to manage their records of clients, projects, tasks and invoices digitally. They also get additional features of using timer to time their tasks while working and then generate the Invoice as per the time taken by project.",
      techStack : [
        "HTML",
        "CSS",
        "JavaScript",
        "DOM"
      ],
      projectType :"Collaborative Project",
      projectDuration : "5 Days"
    },
    {
      id : 3,
      name : "Kickstarter",
      deployLink : "https://sweet-basbousa-6e81ce.netlify.app/",
      githubLink : "https://github.com/snehilagrahari/energized-fruit-4440",
      imageLink : image3,
      description : "Kickstarter is a static website where you can view different projects and their funding. There are different layouts in which the projects are visualized along with some blogs of different people who have used kickstarter.",
      techStack : [
        "HTML",
        "CSS",
        "JavaScript",
        "DOM"
      ],
      projectType :"Individual Project",
      projectDuration : "5 Days"

    }
  ]

  return (
    <div id="projects" style={{width : "90%", margin : "auto", padding : "60px 20px 20px 20px"}}>
        <Heading data-aos="fade-up" p={3} size="3xl" color="#cf2129" textAlign={"center"}>Projects</Heading>
        <VStack marginTop={10} padding="20px" gap={5}>
          {
            projectList.map((project,i)=>{
              return (
                <Stack data-aos="fade-left" key={project.id} direction={{sm: 'column',md : 'column',lg : (i%2===0 )? 'row' :'row-reverse',xl : (i%2===0 )? 'row' :'row-reverse',"2xl" : (i%2===0 )? 'row' :'row-reverse', base : 'column'}} background = "white" borderRadius={'xl'} alignItems="stretch" border="1px solid #cf2129">
                  <Box flex={6} padding="40px 60px" background="#ffcdcd" borderTopLeftRadius={i%2==0?'xl':"none"} borderBottomLeftRadius={i%2==0?'xl':"none"} borderTopRightRadius={i%2!=0?'xl':"none"} borderBottomRightRadius={i%2!=0?'xl':"none"}>
                    <Image src={project.imageLink} alt={project.name} maxH="100%" minH={{base :"250px" , sm:'250px',md:'300px',lg:'350px'}} maxW="100%" />
                  </Box>
                  <VStack gap={2} padding="40px" flex={4} alignItems="start">
                    <Heading size="xl" color={'red.900'}>{project.name}</Heading>
                    <Tag fontSize="lg" colorScheme='red' variant='solid'>{project.projectType}</Tag>
                    
                    <HStack flexWrap="wrap" rowGap={2}>
                    {
                      project.techStack.map((el)=><Tag key={el} fontSize="md" colorScheme="red" variant="outline">{el}</Tag>)
                    }
                    </HStack>
                    <Text color="red.800">{project.description}</Text>
                    <HStack fontSize="xl" alignItems="center" color="black">
                      <Text color="red.800">Project Duration :</Text> 
                      <Tag colorScheme="red" as='span'>{project.projectDuration}</Tag>
                    </HStack>
                    <HStack padding={3} gap={5}>
                      <a target="_blank" rel="noreferrer" href={project.deployLink}>
                        <AiOutlineLink color={'#cf2129'} data-for="link" data-tip cursor="pointer" size="35px"/>
                        <ReactTooltip id="link" ><span>Deployed Link</span></ReactTooltip>
                      </a>
                     
                      <a target="_blank" rel="noreferrer" href={project.githubLink}>
                        <BsGithub color={'#cf2129'} data-for="github" data-tip cursor="pointer" size="35px"/>
                        <ReactTooltip id="github"><span>Github</span></ReactTooltip>
                      </a>
                      
                    </HStack>
                  </VStack>
                </Stack>
              )
            })
          }
        </VStack>
        
    </div>
  )
}

export default Projects