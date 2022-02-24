import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>José de Souza</Text>
          <Text color="gray.300" fontSize="small">
            josee.souzaaa@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="José de Souza"
        src="https://github.com/josesouzaa.png"
      />
    </Flex>
  )
}
