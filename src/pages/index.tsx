import { Flex, Button, Stack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../components/Form/Input';

type SignInFormData = {
  email: string;
  password: string;
}

export default function SignIn() {
  const { register, handleSubmit } = useForm();

  const handleSignIn: SubmitHandler<SignInFormData> = (values) => {
    console.log(values);
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDirection="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="2">
          <Input
            name="email"
            type="email"
            label="E-mail"
            {...register('email')}
          />
          <Input
            name="password"
            type="password"
            label="Senha"
            {...register('password')}
          />
        </Stack>

        <Button
          type="submit"
          mt="6"
          size="lg"
          colorScheme="pink"
        >
          Entrar
        </Button>

      </Flex>
    </Flex >
  )
}
