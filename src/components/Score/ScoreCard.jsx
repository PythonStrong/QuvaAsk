import { Badge, Box, HStack, Text } from '@chakra-ui/react'
import React from 'react'

export default function ScoreCard({ text, score }) {
    return (
        <Box>
            <HStack justifyContent="space-between">
                <Text fontSize="20px" fontWeight="600">1. {text}</Text>
                <Badge colorScheme="red" fontSize="18px">{score} Ball</Badge>
            </HStack>
        </Box>
    )
}
