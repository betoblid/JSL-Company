import React, { useContext } from "react";
import { MyProvaider } from "./CreateContext";

//fazendo uma array function para consumir o consumo do provaider
export const UseProvaider = () => {
    return useContext(MyProvaider);
}
