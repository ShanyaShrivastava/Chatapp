import React, { useState } from 'react'
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { useToast } from "@chakra-ui/toast";
import axios from 'axios';
import {useHistory} from 'react-router';

const Signup = () => {
   const [showPassword, setShowPassword] = useState(false);
   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [loading, setLoading] = useState(false);
   const history = useHistory();
   const toast = useToast();

   const togglePasswordVisibility = () => setShowPassword(!showPassword);
   const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

   const submitHandler = async () => {
       setLoading(true);
       if (!name || !email || !password || !confirmPassword) {
           toast({
               title: "Please fill all the fields",
               status: "warning",
               duration: 5000,
               isClosable: true,
               position: "bottom"
           });
           setLoading(false);
           return;
       }
       if (password !== confirmPassword) {
           toast({
               title: 'Passwords do not match',
               status: "warning",
               duration: 5000,
               isClosable: true,
               position: "bottom"
           });
           setLoading(false);
           return;
       }
       try {
        const config = {
            headers: {
                "Content-type": "application/json",
            }
        };
        const {data}=await axios.post('http://localhost:3001/user/sign',{name,email,password},config)
    
        toast({
            title: "Registration Successful",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "bottom",
        });
    
        localStorage.setItem('userInfo', JSON.stringify(data));
    

        setLoading(false);
        history.push('/chats');
    } catch (error) {
        toast({
            title: "Error",
            description: error.response?.data?.message || "An error occurred",
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "bottom"
        });
    
    }
}

   return (
       <VStack spacing='5px'>
           <FormControl id='first-name' isRequired>
               <FormLabel>Name</FormLabel>
               <Input placeholder="Enter your Name" onChange={(e) => setName(e.target.value)} />
           </FormControl>
           <FormControl id='email' isRequired>
               <FormLabel>Email</FormLabel>
               <Input type='email' placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)} />
           </FormControl>
           <FormControl id='password' isRequired>
               <FormLabel>Password</FormLabel>
               <InputGroup>
                   <Input type={showPassword ? "text" : "password"} placeholder="Enter your Password" onChange={(e) => setPassword(e.target.value)} />
                   <InputRightElement width="4.5rem">
                       <Button h="1.75rem" size="sm" onClick={togglePasswordVisibility}>
                           {showPassword ? "Hide" : "Show"}
                       </Button>
                   </InputRightElement>
               </InputGroup>
           </FormControl>
           <FormControl id='confirm-password' isRequired>
               <FormLabel>Confirm Password</FormLabel>
               <InputGroup>
                   <Input type={showConfirmPassword ? "text" : "password"} placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />
                   <InputRightElement width="4.5rem">
                       <Button h="1.75rem" size="sm" onClick={toggleConfirmPasswordVisibility}>
                           {showConfirmPassword ? "Hide" : "Show"}
                       </Button>
                   </InputRightElement>
               </InputGroup>
           </FormControl>
           <Button colorScheme='blue' width="100%" marginTop="4" onClick={submitHandler}>
               Signup
           </Button>
       </VStack>
   );
}

export default Signup
