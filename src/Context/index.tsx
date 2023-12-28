import React, { useState } from "react";
import { MyProvaider } from "./CreateContext";
import { CartListValue, FavoritValue, PropsChildren } from "../interface";

//criando uma function para usar o context dentro dos seus elementos filhos
const Provaider = ({ children }: PropsChildren) => {
    //hook de favorito
    const [favorit, setFavorit] = useState<FavoritValue[]>([])
    //hook de carrinho de compras
    const [cartlist, setCartList] = useState<CartListValue[]>([])

    return (
        <MyProvaider.Provider
            value={{
                cartlist,
                favorit,
                setCartList,
                setFavorit
            }}>
            {children}
        </MyProvaider.Provider>
    );
}
export default Provaider;
