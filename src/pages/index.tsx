import { Button, Flex, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../components/Form/Input'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

type SigninFormData = {
  email: string
  password: string
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatorio').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatoria'),
})

export default function Signin() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const handleSignin: SubmitHandler<SigninFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(values)
  }
  const { errors } = formState
  
  return (
  <Flex
     w="100vw"
     h="100vh"
     align="center"
     justify="center"
   >
   <Flex
      as="form"
      w="100%"
      maxW={360}
      bg="gray.800"
      p={8}
      borderRadius={8}
      flexDir="column"
      onSubmit={handleSubmit(handleSignin)}
    >
      <Stack spacing={4}>
        <Input
          label='E-mail'
          type='email'
          error={errors.email}
          {...register('email')}
        />
        <Input
          label='Senha'
          type='password'
          {...register('password')}
          error={errors.password}
        />
      </Stack>

      <Button
        as='button'
        type='submit'
        mt={6}
        colorScheme="pink"
        size="lg"
        isLoading={formState.isSubmitting}
      >
        Entrar
      </Button>
    </Flex>
   </Flex>
  )
}
