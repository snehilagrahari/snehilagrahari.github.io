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
        <Button variant="outline" colorScheme="red" onClick={onOpen}>
          <FaBars color="#cf2129" size="20px" />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          
        >
          <DrawerOverlay />
          <DrawerContent background="white">
            <DrawerCloseButton color="#cf2129" />
  
            <DrawerBody padding={"50px 20px"}>
              <Text textAlign="center" p={4} _hover={{color: "red.200"}} fontWeight="bold" fontSize="xl" color="#cf2129"><a href="#">Home</a></Text>
              <Text textAlign="center" p={4} _hover={{color: "red.200"}} fontWeight="bold" fontSize="xl" color="#cf2129"><a href="#about">About</a></Text>
              <Text textAlign="center" p={4} _hover={{color: "red.200"}} fontWeight="bold" fontSize="xl" color="#cf2129"><a href="#skills">Skills</a></Text>
              <Text textAlign="center" p={4} _hover={{color: "red.200"}} fontWeight="bold" fontSize="xl" color="#cf2129"><a href="#stats">Stats</a></Text>
              <Text textAlign="center" p={4} _hover={{color: "red.200"}} fontWeight="bold" fontSize="xl" color="#cf2129"><a href="#projects">Projects</a></Text>
              <Text textAlign="center" p={4} _hover={{color: "red.200"}} fontWeight="bold" fontSize="xl" color="#cf2129"><a href="#contact">Contact</a></Text>
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