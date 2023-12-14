import React, { useState } from "react";
import { BsBasketFill, BsJustify } from "react-icons/bs";
import "./Header.css";

function Header() {

    const [menuvisibilite, setMenuVisibilite] = useState<boolean>(false);
    
    return (
        <header className="continaer-header">
            <div className="card-search-logo">
                <div className="box-logo">
                    <h1>JSL-COMPANY</h1>
                </div>
                <div className="box-search-top">
                    <input type="search" name="" id="" placeholder="O que você procura" />
                </div>
                <div className="box-login-top">
                    <a href="">Login</a>
                    <p>0</p>
                    <button><BsBasketFill /></button>
                </div>
            </div>
            <div className="container-menu-nav">
                <button
                    className="hidden-btn"
                    onClick={() => menuvisibilite ? setMenuVisibilite(false) : setMenuVisibilite(true)}
                ><BsJustify /></button>

                <div className={`box-menu-nav-options ${menuvisibilite && "hidden"}`}>
                    <ul>
                        <li><a href="">Roupa</a></li>
                        <li><a href="">Tecnologia</a></li>
                        <li><a href="">Casa</a></li>
                        <li><a href="">Games</a></li>
                        <li><a href="">SmartTV</a></li>
                        <li><a href="">Mercado</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}






export default Header;
