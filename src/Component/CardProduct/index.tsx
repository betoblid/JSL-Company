import React, { useState } from "react";
import { PropsCardProduct } from "../../interface";
import { FormatPrice } from "../../SubFunction";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa6";
import "./CardProduct.css";
import { HookCardList } from "../../Context/Hooks/HookCardList";
import { HookFavorit } from "../../Context/Hooks/HookFavorit";
import { BsFillCartCheckFill } from "react-icons/bs";

const CardProduct = ({ id, original_price, price, title, url, urlImg }: PropsCardProduct) => {
    //Hook com as functions de carrinho
    const { AddProductsCart } = HookCardList();
    //hook com a functions de favoritos
    const { addFavorit, favorit } = HookFavorit();
    //um hook que cerve para controlar se o usuário comprou algo ou não para troca de icon
    const [cartIten, setCartIten] = useState<boolean>(false);
    //aqui procura se o id do produto existe na lista de favoritos para que possa ser usado para verificar e trocar o icon de favoritos
    const result = favorit.find((item) => item.id === id);
    //uma simples verificação com if ternario para saber se o preço do produto permite em 5x caso seja menor de 120 reais ou 10x para maiores
    const parcela: number = price > 120 ? 10 : 5
    return (
        <div className="card-product">
            <button
                className="product-btn-favorit"
                onClick={() => addFavorit({ id, price, thumbnail: urlImg, title, url })}>
                    {
                      typeof result === "object" ? <MdOutlineFavorite /> :  <MdFavoriteBorder />
                    }    
            </button>

            <a href={`${url}`} id={id} className="a">
                <img src={urlImg} alt={title} />
                <p> {title} </p>

                <div className="box-price">

                    <span className="price-original">{original_price !== null && FormatPrice(original_price)}</span>
                    <span className="price">{FormatPrice(price)}</span>

                    <p>em <span>{parcela}x {FormatPrice(price / parcela)} sem juros</span></p>

                </div>
            </a>
            <button
                className="btn-cart-product"
                onClick={() => {
                    AddProductsCart({ id, title, price, thumbnail: urlImg, qtn: 0 })
                    setCartIten(true)
                }} >
                {
                    cartIten ? <BsFillCartCheckFill /> : <FaCartPlus />
                }
            </button>
        </div>
    );
}
export default CardProduct;
