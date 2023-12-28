import React from "react";
import { PropsCartProduct } from "../../interface";
import "./CardCartProduct.css";
import { HookCardList } from "../../Context/Hooks/HookCardList";
import { IoCloseCircleSharp } from "react-icons/io5";
import { FormatPrice } from "../../SubFunction";

const CardCartProduct = ({ data }: PropsCartProduct) => {
    //desestruturando um object com as informações que será usada nós cards
    const { id, price, qtn, thumbnail, title, } = data;
    //pegando as propriedades do hook cart para que podemos manipular a lista que terá os produtos de compra
    const { RemoveCardProduct, DecrementProductList, AddProductsCart } = HookCardList();

    return (
        <div className="card-card-product">
            <button
                onClick={() => RemoveCardProduct(id)}
                className="btn-close-cart-product">
                <IoCloseCircleSharp />
            </button>

            <div className="box-product-ilustration">
                <img src={thumbnail} alt={title} />
            </div>
            <div className="box-title-product">
                <p>{title}</p>
            </div>

            <div className="card-qtn-product">
                <div className="btn-qtn">
                    < button onClick={() => AddProductsCart(data)}>
                        +
                    </button>
                    <span>
                        {qtn}
                    </span>
                    <button onClick={() => DecrementProductList(id)}>
                        -
                    </button>
                </div>
                
                <div >
                    <h4 className="price-product-cart">{FormatPrice(price)}</h4>
                </div>
            </div>
        </div>
    );
}
export default CardCartProduct;
