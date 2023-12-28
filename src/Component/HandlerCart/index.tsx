import React, { useState } from "react";
import "./HandlerCart.css";
import { IoIosCloseCircle } from "react-icons/io";
import { HookCardList } from "../../Context/Hooks/HookCardList";
import {Navigate} from "react-router-dom"
import CardCartProduct from "../CardCartProduct";
import { FormatPrice } from "../../SubFunction";

//typagem dos parametros do componente
interface PropsHandlerCart {
    handler: boolean
    setHandler: React.Dispatch<React.SetStateAction<boolean>>
}
const HandlerCart = ({ handler, setHandler }: PropsHandlerCart) => {
    //lista dos produtos que estão dentro do carrinho
    const {cartlist} = HookCardList();
    //hook responsavel por dizer se deve carregar a pagina do carrinho, só será redirecionada se o usuário clicar no botão finalizar
    const [loadCart, setLoadCart] = useState<boolean>(false);
    //variavel que armazena o valor total da compra do usuário
    const valorfinal = cartlist.reduce((acc,item) => {return acc + (item.qtn * item.price)}, 0);

    return (
        <section className="Cart-compra">
            <div className="cart-title">
                <button
                    onClick={() => setHandler(!handler)}
                >
                    <IoIosCloseCircle />
                </button>
                <h2>Carrinho de Compra</h2>
            </div>

            <div className="container-products-comprado">
                {
                    cartlist.map((item) => <CardCartProduct data={item} key={`${item.id}123`}/>)
                }
            </div>
            <div className="card-btn-finalizar">

                <div className="box-price-cart">

                    <div>
                        <h3>Total</h3>
                    </div>
                    <div>
                        <span>
                            {  FormatPrice(valorfinal)  }
                        </span>
                    </div>
                </div>

                <button
                    onClick={() => setLoadCart(true)}
                >Finalizar</button>
            </div>
            {      loadCart &&   <Navigate to="/cart" />       }
        </section>
    );
}
export default HandlerCart;
