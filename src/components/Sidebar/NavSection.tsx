import { Box, Text, Stack, Link, Icon } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { RiContactsLine, RiDashboardLine } from 'react-icons/ri'

interface SectionProps {
  title: string
  children: ReactNode
}

export function NavSection({ title, children }: SectionProps) {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">
        {title}
      </Text>

      {children}
    </Box>
  )
}
