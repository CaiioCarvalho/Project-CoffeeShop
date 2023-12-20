import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { GlobalStyle } from "./styles/global"
import { CoffeeContextProvider } from "./contexts/CreateContext"


export default function App() {


  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
      <CoffeeContextProvider>
        <Router />
        </CoffeeContextProvider>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}

