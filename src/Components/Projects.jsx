import { Box, Divider, Heading, HStack, Image, Stack, Tag, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import image1 from "../ProjectImages/Travelocity.png"
import image2 from "../ProjectImages/Timelancer.png"
import image3 from "../ProjectImages/Kickstarter.png"
import {BsGithub} from 'react-icons/bs'
import {AiOutlineLink} from 'react-icons/ai'
import ReactTooltip from 'react-tooltip'

const Projects = () => {

  const projectList=[
    {
      id : 1,
      name : "Travelocity",
      deployLink : "https://travelocity-zeta.vercel.app",
      githubLink : "https://github.com/snehilagrahari/tame-porter-1759",
      imageLink : image1,
      description : "Travelocity is a platform where the users can enter the name of a place and find the hotels in that area and make a booking right away.",
      techStack : [
        "CSS",
        "JavaScript",
        "React",
        "Chakra-UI"
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
    <div id="projects" style={{width : "90%", margin : "auto", padding : "100px 20px 20px 20px"}}>
        <Heading textAlign="center" w="90%" margin="auto" size={'3xl'} color="white">Projects</Heading>
        <Divider zIndex={-1} />
        <VStack marginTop={10} padding={5} gap={5}>
          {
            projectList.map((project,i)=>{
              return (
                <Stack key={project.id} direction={{sm: 'column',md : 'column',lg : (i%2===0 )? 'row' :'row-reverse',xl : (i%2===0 )? 'row' :'row-reverse',"2xl" : (i%2===0 )? 'row' :'row-reverse', base : 'column'}} gap={10} padding={10} background="#060c11" borderRadius={'xl'}>
                  <Box flex={6}>
                    <Image src={project.imageLink} alt={project.name} maxH="100%" minH="80%" maxW="100%" />
                  </Box>
                  <VStack gap={2} padding={3} flex={4} alignItems="start">
                    <Heading size="xl" color={'white'}>{project.name}</Heading>
                    <Tag fontSize="lg">{project.projectType}</Tag>
                    
                    <HStack flexWrap="wrap" rowGap={2}>
                    {
                      project.techStack.map((el)=><Tag key={el} fontSize="md" bgColor={"blue.200"} color="black">{el}</Tag>)
                    }
                    </HStack>
                    <Text color="whiteAlpha.700">{project.description}</Text>
                    <Text fontSize="xl" color="whiteAlpha.800">Project Duration : <Tag color="black" bgColor="whiteAlpha.700" as='span'>{project.projectDuration}</Tag></Text>
                    <HStack padding={3} gap={5}>
                      <a target="_blank" rel="noreferrer" href={project.deployLink}>
                        <AiOutlineLink color={'white'} data-for="link" data-tip cursor="pointer" size="35px"/>
                        <ReactTooltip id="link" ><span>Deployed Link</span></ReactTooltip>
                      </a>
                     
                      <a target="_blank" rel="noreferrer" href={project.githubLink}>
                        <BsGithub color={'white'} data-for="github" data-tip cursor="pointer" size="35px"/>
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