import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack, } from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

type CreateUserFormData = {
  name: string
  email: string
  password: string
  password_confirmation: string
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatorio').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatoria').min(8, 'No mínimo 8 caracteres'),
  password_confirmation: yup.string().oneOf([null, yup.ref('password')], 'As senhas deveem ser iguais') ,
})

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema)
  })
  const { errors } = formState

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(values)
  }

  return (
    <Box>
      <Header/>
      <Flex w='100%' my='6' maxW={1480} mx='auto' px='6'>
        <Sidebar/>
        <Box
          as='form'
          flex='1'
          borderRadius={8}
          bg='gray.800'
          p={['6','8']}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size='large' fontWeight='normal'>Criar usuário</Heading>
          <Divider my='6' borderColor='gray.700'/>
          
          <VStack spacing={['6','8']}>
            <SimpleGrid minChildWidth='240px' spacing={['6','8']} w='100%'>
              <Input {...register('name')} label='Nome completo' error={errors.name}/>
              <Input {...register('email')} label='E-mail' type='email' error={errors.email}/>
            </SimpleGrid>

            <SimpleGrid minChildWidth='240px' spacing={['6','8']} w='100%'>
              <Input {...register('password')} type='password' label='Senha' error={errors.password}/>
              <Input {...register('password_confirmation')} type='password' label='Confirmar senha' error={errors.password_confirmation}/>
            </SimpleGrid>
          </VStack>
          <Flex mt='8' justify='flex-end'>
            <HStack spacing='4'>
              <Link href='/users' passHref>
                <Button as='a' colorScheme='whiteAlpha'>Cancelar</Button>
              </Link>
             <Button
                type="submit"
                colorScheme='pink'
                isLoading={formState.isSubmitting}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}