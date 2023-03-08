import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Text,
    Center,

} from '@chakra-ui/react'
import { FaBars } from 'react-icons/fa'

const NavbarDrawer = ({isOpen,onClose,onOpen,pdf}) => {

  const handleResume = () =>{
      window.open("https://drive.google.com/file/d/11qpa3yYgyWBe8SCwkltHt59UkYYvYIQE/view?usp=share_link");
  }
  
    return (
      <>
        <Button variant="outline" onClick={onOpen}>
          <FaBars color="white" size="20px" />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          
        >
          <DrawerOverlay />
          <DrawerContent background="linear-gradient(to left,#000,#1e141f)">
            <DrawerCloseButton color="white" />
  
            <DrawerBody padding={"50px 20px"}>
              <Text textAlign="center" p={4} _hover={{color: "blue.200"}} fontWeight="bold" fontSize="xl" color="white"><a href="#">Home</a></Text>
              <Text textAlign="center" p={4} _hover={{color: "blue.200"}} fontWeight="bold" fontSize="xl" color="white"><a href="#about">About</a></Text>
              <Text textAlign="center" p={4} _hover={{color: "blue.200"}} fontWeight="bold" fontSize="xl" color="white"><a href="#skills">Skills</a></Text>
              <Text textAlign="center" p={4} _hover={{color: "blue.200"}} fontWeight="bold" fontSize="xl" color="white"><a href="#stats">Stats</a></Text>
              <Text textAlign="center" p={4} _hover={{color: "blue.200"}} fontWeight="bold" fontSize="xl" color="white"><a href="#projects">Projects</a></Text>
              <Text textAlign="center" p={4} _hover={{color: "blue.200"}} fontWeight="bold" fontSize="xl" color="white"><a href="#contact">Contact</a></Text>
              <Center p={4}>
                <a href={pdf} download="fw21_1171_Snehil_Agrahari_Resume" >
                  <Button colorScheme="red" onClick={handleResume}>Resume</Button>
                </a>
                
              </Center>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }


export default NavbarDrawer