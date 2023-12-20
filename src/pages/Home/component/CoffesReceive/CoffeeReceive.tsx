import { useContext } from "react"
import { Coffees } from "../Coffees/Coffees"
import { Americano,Arabe,CafeGelado,CafecomLeite,Capuccino,
ChocolateQuente,Cubano,Expresso,ExpressoCremoso,Havaiano,
Irlandes,Latte,Macchiato,Mochaccino} from './index'
import { CoffeeContext } from "../../../../contexts/CreateContext"

export const CAFES_CARDAPIO = [{
    img:Expresso,
    name:'Expresso Tradicional',
    atributo1:'Tradicional',
    description:'O tradicional café feito com água quente e grãos moídos',
    price:'9,98',
},
{
    img:Americano,
    name:'Expresso Americano',
    atributo1:'Tradicional',
    description:'Expresso diluído, menos intenso que o tradicional',
    price:'9,98',
},
{
    img:ExpressoCremoso,
    name:'Expresso Cremoso',
    atributo1:'Tradicional',
    description:'Café expresso tradicional com espuma cremosa',
    price:'9,98',
},
{
    img:CafeGelado,
    name:'Expresso Gelado',
    atributo1:'Tradicional',
    atributo2:'Gelado',
    description:'Expresso diluído, menos intenso que o tradicional',
    price:'9,98',
},
{
    img:CafecomLeite,
    name:'Café com leite',
    atributo1:'Tradicional',
    atributo2:'Com leite',
    description:'Meio a meio de expresso tradicional com leite vaporizado',
    price:'9,98',
},
{
    img:Latte,
    name:'Latte',
    atributo1:'Tradicional',
    atributo2:'Com leite',
    description:'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price:'9,98',
},
{
    img:Capuccino,
    name:'Capuccino',
    atributo1:'Tradicional',
    atributo2:'Com leite',
    description:'Bebida com canela feita de doses iguais de café, leite e espuma',
    price:'9,98',
},
{
    img:Macchiato,
    name:'Macchiato',
    atributo1:'Tradicional',
    atributo2:'Com leite',
    description:'Café expresso misturado com um pouco de leite quente e espuma',
    price:'9,98',
},
{
    img:Mochaccino,
    name:'Mocaccino',
    atributo1:'Tradicional',
    atributo2:'Com leite',
    description:'Café expresso com calda de chocolate, pouco leite e espuma',
    price:'9,98',
},
{
    img:ChocolateQuente,
    name:'Chocolate Quente',
    atributo1:'Especial',
    atributo2:'Com leite',
    description:'Bebida feita com chocolate dissolvido no leite quente e café',
    price:'9,98',
},
{
    img:Cubano,
    name:'Cubano',
    atributo1:'Especial',
    atributo2:'Alcoólico',
    atributo3:'Gelado',
    description:'Bebida feita com chocolate dissolvido no leite quente e café',
    price:'9,98',
},
{
    img:Havaiano,
    name:'Havaiano',
    atributo1:'Especial',
    description:'Bebida adocicada preparada com café e leite de coco',
    price:'9,98',
},
{
    img:Arabe,
    name:'Árabe',
    atributo1:'Especial',
    description:'Bebida preparada com grãos de café árabe e especiarias',
    price:'9,98',
},
{
    img:Irlandes,
    name:'Irlandês',
    atributo1:'Especial',
    atributo2:'Alcoólico',
    description:'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price:'9,98',
},
]


export const CoffeeReceive = () => {
 const {coffeeProps } = useContext(CoffeeContext)
  return (
    <>
        {CAFES_CARDAPIO.map((state) => {
            return(
            <Coffees
            cfquant={coffeeProps}
            key={state.name}
            img={state.img}
            name={state.name}
            atributo1={state.atributo1}
            atributo2={state.atributo2}
            atributo3={state.atributo3}
            description={state.description}
            price={state.price} />
            )
        })}

    </>
  )
}
