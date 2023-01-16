import { VStack, Divider, Heading, HStack, Text, Input, FormLabel, Textarea, InputGroup, InputLeftElement, Button, Stack} from '@chakra-ui/react'
import React from 'react'
import {BsLinkedin,BsGithub,BsFillEnvelopeFill} from 'react-icons/bs'
import {GoLocation} from 'react-icons/go'
import {FiUser} from 'react-icons/fi'

const Contact = () => {
  const handleSubmit = (e)=>{
    e.preventDefault();
    window.location.reload();
  }
  return (
    <div id="contact" style={{width : "100%",background : "#102131", margin:'auto', padding :" 40px 10%"}}>
        <Heading textAlign="center" color="white" size="3xl">Get In Touch</Heading>
        <Divider zIndex={-1} />
        <Stack direction={{sm: 'column', md : 'column',lg : 'column',xl:'row','2xl' : 'row',base : 'column'}} justifyContent={'center'} marginTop="30px">
          <form onSubmit={handleSubmit}>
            <VStack padding={5} spacing={3} alignItems="start">
                <FormLabel color="white">Name</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<FiUser color='white' />}
                  />
                  <Input type='tel' placeholder='Enter Your Name' color="white" />
                </InputGroup>
                <FormLabel color="white">Email</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<BsFillEnvelopeFill color='white' />}
                  />
                  <Input type='tel' placeholder='Enter Your Email' color={'white'} />
                </InputGroup>
                <FormLabel color="white">Message</FormLabel>
                <Textarea placeholder='Message' color="white" />
                <Button type="submit">Send Message</Button>
            </VStack>
          </form>
          <VStack gap={3} padding={10} borderLeft="3px solid white" height="auto" alignItems="flex-start">
              <Text color="white" fontSize="lg">Phone Number : +91 77424 18503</Text>
              <Text color="white" fontSize="lg">Email : sag21062001@outlook.com</Text>
              <HStack>
                <GoLocation size="35px" color="white" />
                <Text color="white">Lucknow, Uttar Pradesh</Text>
              </HStack>
              <HStack gap={5} padding={5}>
                  <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/snehil-agrahari-996867241/"><BsLinkedin color="white" size="30px"/></a>
                  <a target="_blank" rel="noreferrer" href="https://github.com/snehilagrahari"><BsGithub color="white" size="30px"/></a>
              </HStack>
          </VStack>
        </Stack>
    </div>
  )
}

export default Contact