import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

const Navbar = ({onSearch}) => {
  return (
    <>
        <HStack justifyContent={"space-between"} p={2}>
            <Image src={logo} alt="logo" boxSize="50px" />
            <SearchInput onSearch={onSearch}/>
            <ColorModeSwitch/>
        </HStack>
    </>
  )
}

export default Navbar
