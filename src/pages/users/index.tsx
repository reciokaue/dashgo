import { Box, Button, Checkbox, Flex, Heading, Icon, IconButton, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpoint, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import Link from "next/link";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

const data = [
  {name: "Kaue Recio", email: "kaue.recio2@gmail.com", date: "04 de Agosto de 2021"},
  {name: "Kaue Recio", email: "kaue.recio2@gmail.com", date: "04 de Agosto de 2021"},
  {name: "Kaue Recio", email: "kaue.recio2@gmail.com", date: "04 de Agosto de 2021"},
]


export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box>
      <Header/>
      <Flex w='100%' my='6' maxW={1480} mx='auto' px={['0','6']}>
        <Sidebar/>
        <Box flex='1' borderRadius={[0,8]} bg='gray.800' p={['4', '8']}>
          <Flex mb='8' justify='space-between' align='center'>
            <Heading size='large' fontWeight='normal'>Usuários</Heading>

            <Link href='/users/create' passHref>
              <Button
                as='a'
                size='sm'
                fontSize='sm'
                colorScheme='pink'
                leftIcon={<Icon as={RiAddLine} fontSize='20'/>}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme='whiteAlpha'>
            <Thead>
              <Tr>
                <Th px={['2','4', '6']} color='gray.300' width='8'>
                  <Checkbox colorScheme='pink'/>
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
                <Th w={'8'}></Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((user) => (
                <Tr>
                  <Td px={['2','4', '6']}>
                    <Checkbox colorScheme='pink'/>
                  </Td>
                  <Td>
                    <Box>
                      <Text fontWeight='bold'>{user.name}</Text>
                      <Text fontSize='small' color='gray.300'>{user.email}</Text>
                    </Box>
                  </Td>
                  {isWideVersion && <Td>{user.date}</Td>}
                  <Td px={['0','2', '6']}>
                    <Button
                        as='a'
                        size='sm'
                        fontSize='sm'
                        colorScheme='blackAlpha'
                        leftIcon={isWideVersion && <Icon as={RiPencilLine} fontSize='16'/>}
                      >
                      {isWideVersion? 'Editar': (
                        <Icon as={RiPencilLine} fontSize='16'/>
                      )}
                    </Button>
                
                  </Td>
                </Tr> 
              ))}

            </Tbody>
          </Table>

          <Pagination/>
        </Box>
      </Flex>
    </Box>
  )
}