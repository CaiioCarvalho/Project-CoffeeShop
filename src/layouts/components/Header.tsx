import { ButtonCarShopping, ButtonMap, NavbarContainer } from "./styles"
import Logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CoffeeContext } from "../../contexts/CreateContext"


export const Header = () => {

  const {coffeeProps} = useContext(CoffeeContext)
  return (
    <NavbarContainer>
      <Link to='/'> <img src={Logo} /></Link>
      <div>
        <ButtonMap >
          <MapPin size={22} weight="fill" />
          Manaus, AM
        </ButtonMap>

        <ButtonCarShopping>
          <Link to='/car'>
            <ShoppingCart size={22} weight="fill" />
          </Link>
        </ButtonCarShopping>
        <span className={coffeeProps == 0 ? 'hideSPAN' : ''}>{coffeeProps}</span>
      </div>
    </NavbarContainer>
  )
}
