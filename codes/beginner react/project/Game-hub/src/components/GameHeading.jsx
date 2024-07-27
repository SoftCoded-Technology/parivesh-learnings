import { Heading } from '@chakra-ui/react'
import React from 'react'

const GameHeading = ({platform,genre}) => {
  return (
    <Heading as={'h1'} fontSize={'5xl'} fontWeight={'bold'} paddingY={'10px'}>
      {`${platform?.name || ''} ${genre?.name || ''} Games`}
    </Heading>
  )
}

export default GameHeading
