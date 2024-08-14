import { Badge, Box, Text, VStack, HStack, Divider } from '@chakra-ui/react';
import React from 'react';
import ScoreCard from './scoreCard';

export default function Score() {
  return (
    <Box
      mt="30px"
      p="25px"
      borderRadius="lg"
      boxShadow="lg"
      bg="#F5F3E7" // A soft, off-white, book-like color
      border="1px solid #E2E8F0" // A subtle border to enhance the visual depth
    >
      <Text
        fontSize="36px"
        fontWeight="800"
        textAlign="center"
        mb="25px"
      >
        80/100 Ballik Sxema
      </Text>
      <VStack align="stretch" spacing="20px">
        <ScoreCard text={"O'xshashlik"} score={'20'} />
        <ScoreCard text={"Contanier"} score={'10'} />
        <ScoreCard text={"Sementors"} score={'5'} />
        <ScoreCard text={"Ranglar"} score={'5'} />
        <ScoreCard text={"Media"} score={'15'} />
        <ScoreCard text={"Hover&Active"} score={'5'} />
        <ScoreCard text={"Komentlar"} score={'5'} />
        <ScoreCard text={"Github7Netlify"} score={'5'} />
      </VStack>
      <Divider my="25px" borderColor="gray.400" />
      <Text fontSize="22px" textAlign="center" color="gray.700">
        Hackathon Project by Education
      </Text>
    </Box>
  );
}
