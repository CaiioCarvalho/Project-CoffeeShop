import { ReactNode, createContext, useState } from "react";

interface CoffeeUseContext {
    sendCFSelected: {},
    coffeeProps: number,
    currentCount: number,
    sendToKart: (t:number) => void,
    sendToKart2: (t:number) => void,
    coffeeQuant: number,
    getAllInfo: ({CFim,CFn,CFp}:CoffeesSelectedProps) => void
}

export interface CoffeesSelectedProps {
    CFim: string ,
    CFn: string ,
    CFp: string ,
    cfquant: number,
  }



export const CoffeeContext = createContext({} as CoffeeUseContext)

interface CFContextPro {
    children: ReactNode
}


export function CoffeeContextProvider({ children }: CFContextPro) {
    const [sendCFSelected, setSendCFSelected ] = useState({})

    const [coffeeQuant, setCoffeeQuant] = useState(0)
    const [currentCount, setcurrentCount] = useState(0)
    const [coffeeProps, setCoffeeProps] = useState(0)

    function sendToKart(t: number){
        setcurrentCount(t)
        setCoffeeQuant((state) => state + t)
        setCoffeeProps((state) => state + t)

    }
    function sendToKart2(t: number){
        setcurrentCount(t)
        setCoffeeQuant(t)
        setCoffeeProps((state) => state + 1)
    }

    function getAllInfo({CFim,CFn,CFp}:CoffeesSelectedProps){
        setSendCFSelected({
            ...sendCFSelected, CFim2: CFim,
             CFn2: CFn, CFp2: CFp,
        })

    }


    return (
        <CoffeeContext.Provider value={{sendCFSelected,currentCount,
        sendToKart,sendToKart2, coffeeQuant,getAllInfo, coffeeProps}}>
            {children}
        </CoffeeContext.Provider>
    )
}