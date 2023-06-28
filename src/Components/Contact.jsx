import { VStack, Divider, Heading, HStack, Text, Input, Textarea, InputGroup, InputLeftElement, Button, Stack, useToast} from '@chakra-ui/react'
import React, { useState } from 'react'
import {BsLinkedin,BsGithub,BsFillEnvelopeFill,BsFillTelephoneFill} from 'react-icons/bs'
import {GoLocation} from 'react-icons/go'
import {FiUser} from 'react-icons/fi'

const Contact = () => {

  const toast = useToast();
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(name.trim()!=="" && email.trim()!=="" && message.trim()!==""){
      setName("");
      setEmail("");
      setMessage("");
      toast({
        title : "Your message has been sent!",
        position : "top-center",
        duration : 1000,
        status : 'success',
        isClosable : true
      })
    }
    else
      toast({
        title : "All fields are required",
        description : "Some fields are not filled!",
        status : "error",
        position : 'top-center',
        duration : 1000,
        isClosable : true
      })

  }
  return (
    <div id="contact" style={{width : "100%",background : "#cf2145", margin:' 80px auto 0px auto', padding :" 40px 10%"}}>
        <Heading textAlign="center" color="white">Get in Touch</Heading>
        <Stack direction={{sm : 'column', md : 'row'}} marginTop={10} justifyContent={'center'} alignItems={'center'}>
          <HStack gap={6} padding="5px 0px" wrap="wrap" >
            <HStack>
              <BsFillTelephoneFill size="25px" color="white" />
              <Text color="white">+91 77424 18503</Text>
            </HStack>
            <HStack>
              <BsFillEnvelopeFill size="25px" color="white" />
              <Text color="white">sag21062001@outlook.com</Text>
            </HStack>
            <HStack>
              <GoLocation size="25px" color="white" />
              <Text color="white">Lucknow, Uttar Pradesh</Text>
            </HStack>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/snehil-agrahari-996867241/">
              <HStack>
                <BsLinkedin color="white" size="30px"/>
                <Text color="white">snehilagrahari</Text>
              </HStack>
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/snehilagrahari">
              <HStack>
                <BsGithub color="white" size="30px"/>
                <Text color="white">snehilagrahari</Text>
              </HStack>
            </a>
          </HStack>
          
        </Stack>
        {/* <Stack direction={{base : 'column',sm: 'column', md : 'row',lg : 'row',xl:'row','2xl' : 'row'}} justifyContent={'center'} marginTop="30px">
          <form onSubmit={handleSubmit}>
            <VStack gap={3} padding={4} alignItems={{base : 'center' ,sm:"center" , md:"flex-start"}}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<FiUser color='white' />}
                  />
                  <Input value={name} onChange={(e)=>setName(e.target.value)} type='text' placeholder='Enter Your Name' color="white" />
                </InputGroup>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<BsFillEnvelopeFill color='white' />}
                  />
                  <Input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Your Email' color={'white'} />
                </InputGroup>
                <Textarea placeholder='Message' value={message} onChange={(e)=>setMessage(e.target.value)} color="white" />
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
        </Stack> */}
    </div>
  )
}

export default Contact