import { Minus, Plus, ShoppingCart, Trash } from 'phosphor-react'
import { CoffeesContainer, CoffeesContainer2, DivPrice, DivPrice2 } from './styles'
import { useContext, useState} from 'react'
import { CoffeeContext } from '../../../../contexts/CreateContext'



export interface CoffeesProps {
  img: string,
  name: string,
  atributo1?: string,
  atributo2?: string,
  atributo3?: string,
  description?: string,
  price: string,
  cfquant: number,
}

export const Coffees = ({ img, name, atributo1, atributo2, atributo3, description, price }: CoffeesProps) => {
   const [countCoffee, setCountCoffee] = useState(1)
  const {
    sendToKart,
    getAllInfo,
    coffeeProps,
    } = useContext(CoffeeContext)

  function increaseCount() {
      setCountCoffee((state) => state + 1)
  }
  function decreaseCount() {
      if (countCoffee > 1) {
          setCountCoffee((state) => state - 1)
      }
  }

  function getTheInfo(){
    sendToKart(countCoffee)
    getAllInfo({
      CFim: img,
      CFn: name,
      CFp: price,
      cfquant: coffeeProps})
  }

  return (
    <CoffeesContainer>
      <img src={img} />
      <div>
        <span>{atributo1}</span>
        {atributo2 == null ? null :
          <span>{atributo2}</span>}
        {atributo3 == null ? null :
          <span>{atributo3}</span>}
      </div>
      <strong>{name}</strong>
      <p>{description}</p>
      <DivPrice>
        <h2>R$</h2><h4>{price}</h4>
        <h3>
          <button onClick={decreaseCount}><Minus size={14} /></button>
          {countCoffee}
          <button onClick={increaseCount}><Plus size={14} /></button>
        </h3>
        <article onClick={getTheInfo}>
          <ShoppingCart size={22} weight='fill' />
        </article>
      </DivPrice>
    </CoffeesContainer>
  )
}

export const CoffeesInKart = ({ img, name, price,}: CoffeesProps) => {
  const {
    currentCount,
    sendToKart2,
    } = useContext(CoffeeContext)
    const [countCoffee2, setCountCoffee2] = useState(currentCount)

    function increaseCount2() {
      setCountCoffee2((state) => state + 1)
      sendToKart2(countCoffee2)
  }
  function decreaseCount2() {
      if (currentCount > 1) {
        setCountCoffee2((state) => state - 1)
        sendToKart2(countCoffee2)
      }
  }
  return (
    <CoffeesContainer2>
      <img src={img} />
      <div>
        <strong>{name}</strong>
        <DivPrice2>
          <h3>
            <button onClick={decreaseCount2}><Minus size={14} /></button>
            {currentCount}
            <button onClick={increaseCount2}><Plus size={14} /></button>
          </h3>
          <article>
            <Trash size={16} /> Remover
          </article>
        </DivPrice2>
      </div>
      <h4>R$ {price}</h4>
    </CoffeesContainer2>
  )
}
