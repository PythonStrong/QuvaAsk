import { Box, Heading, Text, Stack } from '@chakra-ui/react';
import React from 'react';

export default function Api() {
    return (
        <Box mt="30px" p="20px" borderRadius="lg" boxShadow="xl" bg="gray.50">
            <Stack spacing="30px">
                <Box>
                    <Heading size="lg" mb="3">Movie API</Heading>
                    <Text>
                        Access a comprehensive database of movies, including details on cast, crew, and release dates.
                    </Text>
                </Box>
                <Box>
                    <Heading size="lg" mb="3">Multifilm API</Heading>
                    <Text>
                        Explore a vast collection of animated movies for all ages.
                    </Text>
                </Box>
                <Box>
                    <Heading size="lg" mb="3">Music API</Heading>
                    <Text>
                        Discover the newest releases from various genres and artists.
                    </Text>
                </Box>
            </Stack>
        </Box>
    );
}
