import React from "react";

import "./Footer.css";

const Footer = () => {

    return (
        <footer className="container-footer bottom">


            <div className="card-logo-pag">
                <h2>HSJ - COMPANY</h2>
                <img src="https://a.imagem.app/otXpi0.png" alt="otXpi0.png"  />
                <div></div>
            </div>

            <div className="card-list-info">

                <div>
                    <ul>
                        <h3>Rede Sociais</h3>
                        <li>Twiter</li>
                        <li>Instagram</li>
                        <li>Threads</li>
                        <li></li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <h3>Nosso site</h3>
                        <li>Portifolio</li>
                    </ul>

                </div>

                <div>
                    <ul>
                        <h3>Carrinho</h3>
                        <li>Carrinho</li>
                        <li>Pedido</li>
                    </ul>
                </div>

            </div>

            <div className="card-author">
                <h5>Copyright 2023 - Desenvolvido por <a href="">"Herbert Souza"</a></h5>
            </div>

        </footer>
    );
}

export default Footer;