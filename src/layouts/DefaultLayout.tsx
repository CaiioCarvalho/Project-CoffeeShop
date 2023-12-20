import { Outlet } from "react-router-dom"
import { Header } from "./components/Header"
import { BaseLayout } from "./styles"


export const DefaultLayout = () => {
  return (
    <BaseLayout>
        <Header />
        <Outlet />
    </BaseLayout>
  )
}
