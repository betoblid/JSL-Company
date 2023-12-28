import React, {createContext} from "react";
import { ProvaiderValue } from "../interface";

//criando um context com typagem
export const MyProvaider = createContext({} as ProvaiderValue);
//Renomiando o context para Eventos do carrinho
MyProvaider.displayName = "EventCart";