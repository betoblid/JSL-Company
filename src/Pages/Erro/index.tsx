import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Erro.css";

const Erro = () => {
    useEffect(() => {
        window.document.title = "JSL - Pagia 404"//definindo o title da pagina
    }, [])
    return(
        <div className="container-pag-not-exist">
            <h2>Erro - 404</h2>
            <p>Essa pagina não existe por favor volte para pagina inicial</p>
            <Link to="/">Voltar</Link>

        </div>
    );
}
export default Erro;
