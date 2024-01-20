import React, { useEffect } from "react";
import Container from "../../Component/Container";
import "./Login.css";
import Header from "../../Component/Header";
import HandlerFormLogin from "../../Component/Form";

const Login = () => {

    useEffect(() => {
        document.title = "JSL - Login" //trocando o nome da pagina
      }, [])

    return (
        <>
            <Header />
            <Container >
                <section className="form-login">
                    <HandlerFormLogin />
                </section>
           </Container>
        </>
    );
}
export default Login;
