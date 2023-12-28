import React, { useEffect, useState } from "react";
import Container from "../../Component/Container";
import "./Login.css";
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import Header from "../../Component/Header";

const Login = () => {

    useEffect(() => {
        document.title = "JSL - Login" //trocando o nome da pagina
        //executa um alerta a por 1 segundo 
        setTimeout(() => {
            alert("pagina em desenvolvimento no momento");
        }, 1000);
        
      }, [])
    const [passinput, setPassInput] = useState("password");
    const [passimg, setPassImg] = useState(false)

    return (
        <>
            <Header />
            <Container >

                <section className="container-login">

                    <div className="card-login-banner">
                        {/* contera uma img apenas para despositivos de 800px pra cima */}
                        <Link to="/">
                            <img src="https://a.imagem.app/ouzgr0.jpeg" alt="ouzgr0.jpeg" width="100%" />
                        </Link>
                    </div>

                    <div className="card-login">
                        {/* a caixa de login */}
                        <form action="" method="post" className="form-login">

                            <label htmlFor="txemail">Email:</label>

                            <input
                                type="email"
                                name="txemail"
                                id="txemail"
                                required
                            />
                            <label htmlFor="txpasseword">Senha:</label>

                            <p className="box-inputbtn">
                                <input
                                    type={passinput}
                                    name="txpasseword"
                                    id="txpasseword"
                                    required
                                    className="inputPass"
                                />
                                {
                                    passimg === false ? <FaEye
                                        onClick={() => {
                                            setPassInput("text")
                                            setPassImg(true)
                                        }
                                        }
                                        className="btn-visibilit"

                                    /> : <IoMdEyeOff
                                        onClick={() => {
                                            setPassInput("password")
                                            setPassImg(false)
                                        }
                                        }
                                        className="btn-visibilit"
                                    />
                                }
                            </p>
                            <div className="btn-event">
                                <button type="submit">Entrar</button>
                                <button type="reset">Limpar</button>
                            </div>
                        </form>
                    </div>
                </section>
           </Container>
        </>
    );
}
export default Login;
