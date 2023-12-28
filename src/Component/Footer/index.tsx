import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <footer className="container-footer bottom">
            <div className="card-logo-pag">
                <Link to="/" title="Pagina inicial"> <h2>JSL - COMPANY</h2> </Link>
                <img src="https://a.imagem.app/otXpi0.png" alt="forma de pagamentos" title="forma de pagamento" />
            </div>

            <div className="card-list-info">

                <div>
                    <ul>
                        <h3 title="nossas redes socias">Rede Sociais</h3>
                        <li title="twiter">Twiter</li>
                        <li title="instagram">Instagram</li>
                        <li title="threads">Threads</li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <h3>Nosso site</h3>
                        <li title="portifolio do desenvolvedor"><a href="https://portifolio-dev-herbert.vercel.app/" target="_blank" title="quem desenvolveu">Portifolio</a></li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <h3 title="Produtos ">Produtos</h3>
                        <li title="carrinho de compras"><Link to="/cart" >Carrinho</Link></li>
                        <li title="Produtos favoritos"><Link to="/favorito">Favoritos</Link></li>
                    </ul>
                </div>

            </div>
            <div className="card-author">
                <h5 title="quem o desenvolveu">Copyright 2023 - Desenvolvido por <a href="https://www.linkedin.com/in/HerbertlSouza/" target="_blank">"Herbert Souza"</a></h5>
            </div>
        </footer>
    );
}
export default Footer;
