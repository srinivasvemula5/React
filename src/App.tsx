import React from "react";
import Registration from "./components/Registration";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Useri from "./components/useri";
import Laptops from "./components/Laptops";
import Mobiles from "./components/Mobiles";
import NavBar from "./components/NavBar";
import TeleVision from "./components/TeleVision";
import Airconditioner from "./components/Airconditioner";
import AllItems from "./components/AllItems";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Registration />} path="/reg" />
          <Route element={<Login />} path="/log"/>
          <Route element={< Useri/>} path="/user" />
          <Route element={<Laptops/>} path="/laptop"/>
          <Route element={<Mobiles/>}path="/phone"/>
          <Route element={<NavBar/>}path="/bar"/>
          <Route element={<TeleVision/>}path="/tv"/>
          <Route element={<Airconditioner/>}path="/ac"/>
          <Route element={<AllItems/>}path="all"/>
        
        </Routes>
      </BrowserRouter>
    </div>
  )
}
