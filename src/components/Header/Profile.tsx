import { Flex, Box, Text, Avatar } from '@chakra-ui/react'
export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Igor Santos</Text>
        <Text color="gray.300" fontSize="small">
          falaigors@gmail.com
      </Text>
      </Box>
      <Avatar
        size="md"
        name="Igor Santos"
      />
    </Flex>
  );
}