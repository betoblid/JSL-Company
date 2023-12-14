import React, { useState } from "react";
import "./Oferta.css"
import axios from "axios";

const OfertaEmail = () => {

    const [email, setEmail] = useState<string>("")
    const [name, setName] = useState<string>("")

    function validaremail(email: string) {
        var testEmail = /\S+@\S+\.\S+/;

        return testEmail.test(email)
    }


    async function PostOfertCadastre(nome: string, email: string) {

        if (nome.length > 4 && validaremail(email)) {

            await axios.post("https://api-user-qvdn.vercel.app/user",
                {
                    name: nome,
                    email: email,
                    passeword: "1234345678"
                }
            );
            setEmail("");
            setName("");
            //trocar por um componente de alerta
            alert("Salvo com sucesso, Assim que tivermos novidades avisaremos.")
        } else {
            //trocar por um componente de alerta
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
