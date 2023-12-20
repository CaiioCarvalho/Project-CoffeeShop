import { Routes, Route} from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Car } from "./pages/Car/Car";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { createContext, useState } from "react";

interface CountsCafeContext {
  CFimg: string,
  CFname: string,
  CFprice: string,
  CFquant: number,
}

export const countOfCafes = createContext({} as CountsCafeContext)

export const Router = () => {

  return (
    <Routes>
        <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/car" element={<Car />} />
        </Route>
    </Routes>
  )
}
