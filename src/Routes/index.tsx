import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Category from "../Pages/Category";
import Login from "../Pages/Login";
import Favorito from "../Pages/Favorit";
import Erro from "../Pages/Erro";
import Cart from "../Pages/Cart";

const Rota = () => {

    return(
        <BrowserRouter>
            <Routes>   
                <Route path="/" element={<Home />}/>
                <Route path="/category/:idProduct" element={<Category />} />
                <Route path="/login" element={<Login />}/>
                <Route path="/Favorito" element={<Favorito />}/>
                <Route path="/cart" element={<Cart />}/>
                <Route path="*" element={<Erro />}/>
            </Routes>
        </BrowserRouter>
    );
}
export default Rota;
