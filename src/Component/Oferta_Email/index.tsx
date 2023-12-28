import React, { useState } from "react";
import "./Oferta.css";
import axios from "axios";

const OfertaEmail = () => {
    //hooks que recebem email e nome
    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");
    //valida o email para ver se é valido para proceguir
    function validaremail(email: string) {
        var testEmail = /\S+@\S+\.\S+/;
        return testEmail.test(email)
    }
    //function que envia os dados para api de registros
    async function PostOfertCadastre(nome: string, email: string) {
        //condição para que possa ser enviado com sucesso
        if (nome.length > 4 && validaremail(email)) {

            await axios.post("https://api-user-qvdn.vercel.app/user",
                {
                    name: nome,
                    email: email,
                    passeword: "1234345678"
                }
            );
            setEmail(""); //limpa a caixa de email
            setName(""); // limpa a caixa de nome
            //trocar por um componente de alerta ate que seja feito o component alert
            alert("Salvo com sucesso, Assim que tivermos novidades avisaremos.")
        } else {
            //trocar por um componente de alerta ate que seja feito o component alert
            alert("email está incorreto, Digite ex: exemplo@gmail.com")
        }
    }
    return (
        <section className="container-alert-oferta">
            <div className="card-alert-info">
                <h3>Receba as melhores ofertas</h3>
                <p>Cadastre para receber mensagens de ofertas</p>
            </div>
            <div className="box-alert-input">
                <input
                    type="text"
                    name="name"
                    id="txname"
                    placeholder="Digeite um Nome"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input
                    type="email"
                    name="email"
                    id="txemail"
                    placeholder="Digite um email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <button type="submit" onClick={() => PostOfertCadastre(name, email)}>Cadastra sé</button>
        </section>
    );
}
export default OfertaEmail;
