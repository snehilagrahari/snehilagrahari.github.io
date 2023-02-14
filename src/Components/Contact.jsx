import { VStack, Divider, Heading, HStack, Text, Input, FormLabel, Textarea, InputGroup, InputLeftElement, Button, Stack} from '@chakra-ui/react'
import React from 'react'
import {BsLinkedin,BsGithub,BsFillEnvelopeFill,BsFillTelephoneFill} from 'react-icons/bs'
import {GoLocation} from 'react-icons/go'
import {FiUser} from 'react-icons/fi'

const Contact = () => {
  const handleSubmit = (e)=>{
    e.preventDefault();

  }
  return (
    <div id="contact" style={{width : "100%",background : "#1e141f", margin:'auto', padding :" 40px 10%"}}>
        <Heading textAlign="center" color="white" size="3xl"><Text as="span" color="#cc93d1">G</Text>et <Text as="span" color="#cc93d1">i</Text>n <Text as="span" color="#cc93d1">T</Text>ouch</Heading>
        <Divider zIndex={-1} />
        <Stack direction={{base : 'column',sm: 'column', md : 'row',lg : 'row',xl:'row','2xl' : 'row'}} justifyContent={'center'} marginTop="30px">
          <form onSubmit={handleSubmit}>
            <VStack gap={3} padding={4} alignItems={{base : 'center' ,sm:"center" , md:"flex-start"}}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<FiUser color='white' />}
                  />
                  <Input type='tel' placeholder='Enter Your Name' color="white" />
                </InputGroup>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<BsFillEnvelopeFill color='white' />}
                  />
                  <Input type='tel' placeholder='Enter Your Email' color={'white'} />
                </InputGroup>
                <Textarea placeholder='Message' color="white" />
                <Button type="submit" bgColor="#cc93d1" fontSize="14px" textAlign="center">Send Message</Button>
            </VStack>
          </form>
          <VStack gap={3} borderLeft={{sm:"0px",md:"2px solid #cc93d1"}} height="auto" alignItems={{base:'center', sm : "center",md : 'flex-start'}} padding={4}>
              <HStack gap={4}>
                <BsFillTelephoneFill size="25px" color="white" />
                <Text color="white">+91 77424 18503</Text>
              </HStack>
              <HStack gap={4}>
                <BsFillEnvelopeFill size="25px" color="white" />
                <Text color="white">sag21062001@outlook.com</Text>
              </HStack>
              <HStack gap={4}>
                <GoLocation size="25px" color="white" />
                <Text color="white">Lucknow, Uttar Pradesh</Text>
              </HStack>
              <HStack gap={4} padding="5px 0px">
                  <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/snehil-agrahari-996867241/"><BsLinkedin color="white" size="30px"/></a>
                  <a target="_blank" rel="noreferrer" href="https://github.com/snehilagrahari"><BsGithub color="white" size="30px"/></a>
              </HStack>
          </VStack>
        </Stack>
    </div>
  )
}

export default Contact