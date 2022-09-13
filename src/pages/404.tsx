import { Box, Flex, Link as ChakraLink, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Custom404() {
  return (
    <Flex h='100vh' w='100vw' direction='column'>
      <Box p='7' pb='0'>
        <Text
          fontSize={['2xl', '3xl']}
          fontWeight='bold'
          letterSpacing='tight'
        >
          dashgo
          <Text ml='1' color='pink.500' as='span'>.</Text>
        </Text>
      </Box>
      <Flex direction='column' mb='60' h='100%' w='100%' justify='center' align='center'>
        <Text fontSize='9xl' align='center' lineHeight='1' fontWeight='bold' letterSpacing='tight'>
          404
        </Text>
        <Text>Sorry but this page doesn't exist</Text>
        <Link href='/dashboard'>
          <ChakraLink mt='1' color='pink.500'>
            Back to Home
          </ChakraLink>
        </Link>
      </Flex>
    </Flex>
  )
}