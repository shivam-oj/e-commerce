import { HStack } from '@chakra-ui/react'
import { TiShoppingCart } from "react-icons/ti"
import { useNavigate } from "react-router-dom";
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';


interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {

  let navigate = useNavigate();
  const routeChange = () =>{ 
    let path = `cart`; 
    navigate(path);
  }

  return (
    <HStack padding='10px'>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
      <TiShoppingCart size={70} onClick={routeChange}>
      </TiShoppingCart>
    </HStack>
  )
}

export default NavBar
