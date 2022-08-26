import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps{
  showProfileData?: boolean
}

export function Profile({showProfileData = true}:ProfileProps){
  return (
    <Flex align='center'>
      {showProfileData &&
        <Box mr='4' textAlign='right'>
          <Text>Kaue Recio</Text>
          <Text color='gray.300' fontSize='small'>
            kaue.recio2@gmail.com
          </Text>
        </Box>
      }
      <Avatar size='md' name="Kaue Recio" src="https://github.com/reciokaue.png"/>
    </Flex>
  )
}