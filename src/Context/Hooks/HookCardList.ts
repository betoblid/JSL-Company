import React from "react";
import { CartListValue, NewProductParams } from "../../interface";
import { UseProvaider } from "../UseProvaider";

//criando uma function responsavel por criar um hook
export function HookCardList() {
    //pegando o hook do context que será fornecido para nossas aplicações filhas
    const { cartlist, setCartList } = UseProvaider();
    //criando uma function que adicionarar as coisas no carrinho de compras
    function AddProductsCart(NewProduct: NewProductParams) {
        //checa se já existe um porduto em nossa lista 
        const CheckExist = cartlist.find((product) => product.id === NewProduct.id);

        //se o find mandar um object então um produto ja ta existente em nossa lista
        //vamos supor ele existe então adicione mas um valor no qtn se ele não existir então coloque a propriedade qtn como 1 dentro do object
        if (typeof CheckExist === "object") {
            //colocando a propriedade qtn mais 1 do nosso object
            const NewsData: CartListValue[] = cartlist.map((item) => {

                if (item.id === NewProduct.id) {//condição para achar o produto com o mesmo id dentro de nossa lista

                    return {//retornando nossa nova lista com incremento no qtn
                        ...item,
                        qtn: ++item.qtn
                    };
                };
                return item;//retornando todos os produtos da lista percorrida
            })
            //após isso vamos adicionar a lista que alteramos 
            setCartList(NewsData);
            return;//retorno da nossa condição


        } else if (typeof CheckExist === "undefined") { //caso se nossa lista não existir não usei else para evitar erros no futuro
            //se não existir um produto na lista adicione ele
            const { id, price, thumbnail, title } = NewProduct; //desestruturando um object para usar as propriedades
            //criando um novo object ja com a propriedade qtn e a contatenação das listas antiga e nova, como está adicionando um novo object então não a perigo em fazer desse jeito
            const addQtn: NewProductParams[] = [...cartlist, {
                id,
                price, 
                thumbnail,
                title,
                qtn: 1
            }];
            //trocando a lista antiga pela nova com o produto adicionado
            setCartList(addQtn);
        };
    };

    //removerá o item da lista 
    function RemoveCardProduct(id: string) {
        //será aplicado um filtro para tirar o produto com o mesmo id da lista permanentemente
        setCartList(cartlist.filter((item) => item.id !== id));
    };

    //Decrementa a quantidade de produtos 
    function DecrementProductList(id: string) {
         //checando para ver se existe o produto 
         const CheckExist = cartlist.find((product) => product.id === id);

         //se existir será decrementando o produto da propriedade qtn
         if (typeof CheckExist !== "undefined"){
            //salvando a lista com o produto decrementado.
             const listCard: CartListValue[] = cartlist.map((item) => {

                if(item.id === id){
                    return{
                        ...item,
                        qtn: --item.qtn
                    };
                };
                return item;
             });
            
             if(CheckExist.qtn === 0){
                setCartList(cartlist.filter((item) => item.id !== CheckExist.id));
             }else{
                setCartList(listCard);
             }     
         };
    };

    //functions de manipulamento do hook do context
    return {
        RemoveCardProduct,
        AddProductsCart,
        cartlist,
        DecrementProductList
    };
};
