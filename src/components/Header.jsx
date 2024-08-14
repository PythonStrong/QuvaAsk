import { Box, Container, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React from 'react'
import Project from './Project'
import Api from './Api'
import Score from './Score/Score'
import Result from './Result'

export default function Header() {
    return (
        <Box>
            {/* Navbar Top  */}
            <Container display='flex' alignItems='center' justifyContent='space-between' maxW='1200px'>
                <Text fontSize='20px' userSelect='none' fontWeight='600'>QuvaAsk</Text>

                <Image src='https://www.torch.ox.ac.uk/sites/default/files/torch/images/event/hackathon_logo.jpg' width='120px' />
            </Container>
            <hr />

            <Container maxW='1200px' pt='50px'>
                <Tabs variant='enclosed'>
                    <TabList>
                        <Tab>Loyiha</Tab>
                        <Tab>Api</Tab>
                        <Tab>Ball</Tab>
                        <Tab>Natija</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Project />
                        </TabPanel>
                        <TabPanel>
                            <Api />
                        </TabPanel>
                        <TabPanel>
                            <Score />
                        </TabPanel>
                        <TabPanel>
                            <Result />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Container>
        </Box>
    )
}
