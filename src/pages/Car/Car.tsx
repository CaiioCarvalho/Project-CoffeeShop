import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react"
import { CafesSelecionados, CarContainer, CarPagamentos, CarTitles, CompletePedido } from "./styles"
import { useState } from "react";
import { CoffeeSelected } from "./components/cofeeSelected/CoffeeSelected";


export const Car = () => {


  const [inputActive, setInputActive] = useState({
    input1: false,
    input2: false,
    input3: false,
  });

  function setBtn1ToFalse(t: number) {
    if(t == 1){
    setInputActive(
      {
      ...inputActive, input1: true, input2: false,
      input3: false,
    })
    }
    if(t == 2){
      setInputActive({
        ...inputActive, input2: true, input1: false,
        input3: false,
      })
      }
      if(t == 3){
        setInputActive({
          ...inputActive, input3: true, input2: false,
          input1: false,
        })
        }
  }


  return (
    <>
      <CarTitles>
        <h1>Complete seu pedido</h1>
        <h1>Cafés selecionados</h1>
      </CarTitles>
      <CarContainer>
        <CompletePedido>
          <div className="soback-ground">
          <div className="pedido__primeiro">
            <MapPinLine size={22} />
            <div>
              <strong>Endereço de Entrega</strong>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>
          <form>
            <div className="Cep">
              <input type="number" placeholder="CEP" required />
            </div>
            <div className="form__rua">
              <input type="text" placeholder="Rua" required />
            </div>
            <div className="form__numeroComple">
              <input type="number" placeholder="Número" required />
              <input type="text" placeholder="Complemento" required />
            </div>
            <div className="form__bcu">
              <input type="text" placeholder="Bairro" required />
              <input type="text" placeholder="Cidade" required />
              <input type="text" placeholder="UF" required />
            </div>
          </form>
          </div>

          <CarPagamentos>
          <div className="carpagamento__primeiro">
            <CurrencyDollar size={22} />
            <div>
              <strong>Pagamento</strong>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
          </div>
          <div className="car__pagamentos">
            <label className={inputActive.input1 ? 'creditCard' : ''} aria-disabled={inputActive.input1} >
              <input type="radio" onClick={ () => setBtn1ToFalse(1) }  name="payment" value='Credito' />
              <CreditCard size={16} /> Cartão de crédito
            </label>

            <label className={inputActive.input2 ? 'creditCard' : ''}>
              <input type="radio" onClick={() => setBtn1ToFalse(2)}  name="payment" value='Debito' />
              <Bank size={16} /> Cartão de débito
            </label>

            <label className={inputActive.input3 ? 'creditCard' : ''}>
              <input type="radio" onClick={() => setBtn1ToFalse(3)}  name="payment" value='Money' />
              <Money size={16} /> Dinheiro
            </label>
          </div>
        </CarPagamentos>
        </CompletePedido>
        <CafesSelecionados>
          <CoffeeSelected />
        </CafesSelecionados>
      </CarContainer>
    </>
  )
}
