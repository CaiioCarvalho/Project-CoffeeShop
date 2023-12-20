import { CaffeeContainer, HomeContainer, IconsChangebleCart, IconsChangebleCoffee, IconsChangeblePackage, IconsChangebleTimer, IconsHomeContainer, InfoHomeContainer } from "./styles"
import homeImg from '../../assets/home-image.png'
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"
import { CoffeeReceive } from "./component/CoffesReceive/CoffeeReceive"





export const Home = () => {
  return (
    <>
      <HomeContainer>
        <InfoHomeContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          <IconsHomeContainer>
            <IconsChangebleCart >
              <ShoppingCart size={16} weight="fill" />
              <p>Compra simples e segura</p>
            </IconsChangebleCart>
            <IconsChangeblePackage >
              <Package size={16} weight="fill" />
              <p>Embalagem mantém o café intacto</p>
            </IconsChangeblePackage>
            <IconsChangebleTimer >
              <Timer size={16} weight="fill" />
              <p>Entrega rápida e rastreada</p>
            </IconsChangebleTimer>

            <IconsChangebleCoffee>
              <Coffee size={16} weight="fill" />
              <p>O café chega fresquinho até você</p>
            </IconsChangebleCoffee>

          </IconsHomeContainer>
        </InfoHomeContainer>
        <div>
          <img src={homeImg} alt='copo de café' />
        </div>
      </HomeContainer>
      <CaffeeContainer>
        <h1>Nossos cafés</h1>
        <div>
          <CoffeeReceive />

        </div>
      </CaffeeContainer>

    </>
  )
}
