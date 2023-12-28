import React from "react";
import { NewFavoritParamns } from "../../interface";
import { UseProvaider } from "../UseProvaider";

//
export const HookFavorit = () => {

    //pegando os hooks do Provaider
    const { favorit, setFavorit } = UseProvaider();
    //criando nosso Hook personalizado onde podemos editar o que vai entrar no nosso hook favorit
    function addFavorit(NewFavorit: NewFavoritParamns) {
        //verificar se existe se existir vai mandar o object existente se não vai mandar undefined
        const CheckFavoritExist = favorit.find((item) => item.id === NewFavorit.id)
        //caso não existe adicione o aos favoritos
        if (typeof CheckFavoritExist === "undefined") {
            //crie uma nova lista com os produtos antigos da lista e os novos juntos
            setFavorit([...favorit, NewFavorit])
        } else {
            //caso ele exista tire ele da lista
            setFavorit(favorit.filter((item) => item.id !== NewFavorit.id))
        }
    }
    //retorna a function e a variavel de armazenamento do hook
    return{
        addFavorit,
        favorit
    }
}