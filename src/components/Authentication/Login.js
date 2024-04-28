import React, { useState } from 'react'
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

const Login = () => {
    const[show,setshow]=useState(false)
    const [email,setEmail]=useState();
    const[password,setPassword]=useState();

    const handleClick=()=>setshow(!show);
    const submitHandler=()=>{

    }

  return (
    <VStack spacing='5px'>
     <FormControl id='email' isRequired>
        <FormLabel>
          Email
        </FormLabel>
        <Input placeholder="Enter your Email"onchange={(e)=>setEmail(e.target.value)}/>
     </FormControl>
     <FormControl id='password' isRequired>
        <FormLabel>
         Password
        </FormLabel>
        <InputGroup>
        <Input type={show?"text":"password"}placeholder="Enter your Password"onchange={(e)=>setPassword(e.target.value)}/>
       <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show?"Hide":"Show"}
        </Button>
       </InputRightElement>
       </InputGroup>
     </FormControl>
     <Button colorScheme='blue'
     width="100%"
     style={{marginTop:16}}
     onClick={submitHandler}>
        Signup
     </Button>
    </VStack>
  )
}

export default Login
