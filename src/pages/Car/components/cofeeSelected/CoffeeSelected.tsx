import { useContext} from "react"
import { CoffeesInKart } from "../../../Home/component/Coffees/Coffees"
import { CafeSelected } from './index'
import { CoffeeContext } from "../../../../contexts/CreateContext"

export interface CafeSelecProps {
    // CFim2: string ,
    // CFn2: string,
    // CFp2: string,
    cfquant: number,
  sendCFSelected: {},
}
  interface CoffeesSelectedProps2 {
    CFim2: string ,
    CFn2: string,
    CFp2: string,
    cfquant: number,
  }
// CFim: '' ,
//       CFn: '' ,
//       CFp: '' ,



export const CoffeeSelected = () => {
  const {sendCFSelected, coffeeQuant,coffeeProps} = useContext(CoffeeContext)
  var CAFES_SELECTED = [
  ]

  //new Object(sendCFSelected)
  for(let z = 0; z < coffeeQuant; z++){
    CAFES_SELECTED.push(sendCFSelected as CoffeesSelectedProps2)
  }
  // useEffect(() => {
  //   return () => {
  //   }
  // }, [sendCFSelected])




  return (
    <CafeSelected >
      {coffeeQuant == 0 ? null : CAFES_SELECTED.map((state) => {
        return (
          <CoffeesInKart
            key={state.CFn2}
            img={state.CFim2}
            name={state.CFn2}
            price={state.CFp2}
            cfquant={coffeeProps} />
        )
      })}

      {coffeeQuant == 0 ? <label>Você ainda não selecionou nenhum café!</label>
      :
      <div className="check__kart">
        <label>Total de items</label><span>R$ 22,00</span>
        <label>Entrega</label><span>R$ 5,00</span>
        <strong>Total</strong><strong>R$ 27,00</strong>
      </div>}

      {coffeeQuant == 0 ? null
      :<button className="btn__final">CONFIRMAR PEDIDO</button>}

    </CafeSelected>

  )
}
