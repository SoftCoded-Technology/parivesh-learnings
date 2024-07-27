import { Badge } from '@chakra-ui/react'

const CriticScore = ({ score }) => {

    let color = score > 80 ? 'green' : score > 60 ? 'yellow' : 'red';
  return (
    <Badge fontSize="14px" paddingX={2} borderRadius={5} colorScheme={color}>
      {score}
    </Badge>
  )
}

export default CriticScore
