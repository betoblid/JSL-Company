import React, { useState } from "react";
import { BsBasketFill, BsJustify } from "react-icons/bs";
import "./Header.css";
import { Link } from "react-router-dom";
import HandlerCart from "../HandlerCart";
import { HookCardList } from "../../Context/Hooks/HookCardList";

function Header() {
    //hook responsavel por renderizar o menu na verção mobile
    const [menuvisibilite, setMenuVisibilite] = useState<boolean>(true);
    //hook responsavel por decidir se abri o carrinho ou não 
    const [handler, SetHandler] = useState<boolean>(false);
    //hook responsavel por mostra a lista dos produtos adicionado no carrinho de compras
    const {cartlist} = HookCardList();
    //method reduce para calcular o total de produtos adicionado no carrinho e mostra pra o usuário em cima do carrinho
    const totalItem = cartlist.reduce((acc, item) => {return acc + item.qtn}, 0 );

    return (
        <>
            <header className="continaer-header">
                <div className="card-search-logo">
                    <div className="box-logo">
                        <Link to="/">
                            <h1>JSL-COMPANY</h1>
                        </Link>
                    </div>

                    <div className="box-search-top">
                        <input type="search" name="" id="" placeholder="O que você procura" />
                    </div>
                    <div className="box-login-top">
                        <Link to="/login">Login</Link>
                        <p>
                            {totalItem}
                        </p>
                        <button
                            onClick={() => SetHandler(!handler)}
                        ><BsBasketFill /></button>
                    </div>
                </div>
                <div className="container-menu-nav">
                    <button
                        className="hidden-btn"
                        onClick={() => setMenuVisibilite(!menuvisibilite)}
                    ><BsJustify /></button>

                    <div className={`box-menu-nav-options ${menuvisibilite && "hidden"}`}>
                        <ul>
                            <li><Link to="/category/roupas">Roupa</Link></li>
                            <li><Link to="/category/tecnologia">Tecnologia</Link></li>
                            <li><Link to="/category/casa">Casa</Link></li>
                            <li><Link to="/category/games">Games</Link></li>
                            <li><Link to="/category/smarttv">SmartTV</Link></li>
                            <li><Link to="/category/Comida">Mercado</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
            {
                handler === true && <HandlerCart handler={handler} setHandler={SetHandler} />
            }
        </>
    );
}
export default Header;
