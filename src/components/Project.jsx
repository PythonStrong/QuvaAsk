import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    Heading,
    Image,
    Stack,
    Text,
    SimpleGrid,
} from '@chakra-ui/react';
import React from 'react';
import { img } from '../assets';

export default function Project() {
    return (
        <Box mt="30px" px="20px" display='flex' alignItems='center' justifyContent='center'>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="20px">
                <Card maxW="350px" boxShadow="xl" borderRadius="lg" overflow="hidden">
                    <CardBody>
                        <Image
                            src={img}
                            alt="Green double couch with wooden legs"
                            borderRadius="md"
                            mb="4"
                        />
                        <Stack spacing="3">
                            <Heading size="md">Living Room Sofa</Heading>
                            <Text>
                                This sofa is perfect for modern tropical spaces, baroque-inspired
                                spaces, earthy-toned spaces, and for people who love a chic design
                                with a sprinkle of vintage.
                            </Text>
                        </Stack>
                    </CardBody>
                    <CardFooter>
                        <Button variant="solid" colorScheme="teal" width="full">
                            Buy Now
                        </Button>
                    </CardFooter>
                </Card>

                <Card maxW="350px" boxShadow="xl" borderRadius="lg" overflow="hidden">
                    <CardBody>
                        <Image
                            src={img}
                            alt="Green double couch with wooden legs"
                            borderRadius="md"
                            mb="4"
                        />
                        <Stack spacing="3">
                            <Heading size="md">Living Room Sofa</Heading>
                            <Text>
                                This sofa is perfect for modern tropical spaces, baroque-inspired
                                spaces, earthy-toned spaces, and for people who love a chic design
                                with a sprinkle of vintage.
                            </Text>
                        </Stack>
                    </CardBody>
                    <CardFooter>
                        <Button variant="solid" colorScheme="teal" width="full">
                            Buy Now
                        </Button>
                    </CardFooter>
                </Card>
            </SimpleGrid>
        </Box>
    );
}
