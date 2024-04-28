import React from 'react'
import {Box,Text, Container} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Login from '../components/Authentication/Login'
import Signup from '../components/Authentication/Signup'

const Home = () => {
  return (
    <Container maxW='md' centerContent>
    <Box
    d='flex'
    justifyContent='center'
    p={3}
    bg={'white'}
    w="100%"
    m="40px 0 15px 0"
    borderRadius="lg"
    borderWidth="1px"
    >
   <Text fontSize='4xl' fontFamily="sansserif" color='black'centerContent>Messanger
   </Text>
  </Box>
  <Box bg='white' w="100%" p={4} borderRadius="lg" borderWidth="1px">
  <Tabs variant="soft-rounded">
  <Tabs>
  <TabList mb='1em'>
    <Tab width="50%">Login</Tab>
    <Tab width="50%">Signup</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Login/>
    </TabPanel>
    <TabPanel>
      <Signup/>
    </TabPanel>
  </TabPanels>
  </Tabs>
  </Tabs>
  </Box>
  </Container>
  )
}

export default Home
