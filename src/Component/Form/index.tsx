import React from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from 'zod'
import "./style.css"

//nosso dicionario, informação da construção e validação do formulario
const DadosUserFormSchame = z.object({
    email: z.string().nonempty("E-mail obrigatorio").email("Email invalido"),//validando o email

    passeword: z.string().min(6, "Digite uma senha de 6 caracteres"),//validando a passeword
})

type CreateTypeUserForm = z.infer<typeof DadosUserFormSchame>//typagem usada para typar o useForm pegando o typo do nosso zod e passando para uma typagem

const HandlerFormLogin = () => {

    //usamos o react-form para criar o nosso formulario e validar com zod
    const {
        register,//register é usado como nome para o input
        formState: { errors }, //function que retorna um erro caso a validação do zod aprecente erro
        handleSubmit //function que é asionada assim que o formulario é enviado
    } = useForm<CreateTypeUserForm>({ //typamos nosso useForm com a propria propriedade do zod
        resolver: zodResolver(DadosUserFormSchame) //passamos as validações pro useForm como parametro
    })

    function PostFormApi(data: any) { //function que envia os dados para a api e verifica se existe cadastro

        //usar o react query para enviar uma requisição para api com os dados do usuario

        //e conferir no banco de dados para ver se existe e retorna com uma chave JWT e salvar na sessão
    }

    return (
        <form
            className="container-form"
            onSubmit={handleSubmit((data) => PostFormApi(data))}
        >
            <div>
                <label
                    htmlFor="email"
                    className="label-form">E-mail</label>

                <input
                    type="email"
                    id="email"
                    className="input-form"
                    {...register("email")} />
                {/* caso aprecente um erro ao preencher um formulario */}
                {errors.email && <span className="alert-form">{errors.email.message}</span>}
            </div>

            <div>
                <label
                    htmlFor="passeword"
                    className="label-form">Senha</label>

                <input
                    type="password"
                    id="senha"
                    className="input-form"
                    {...register("passeword")} />
                {/* caso aprecente um erro ao preencher um formulario */}
                {errors.passeword && <span className="alert-form">{errors.passeword.message}</span>}
            </div>

            <div className="box-form-link">
                <a href="#" >Esqueceu a senha</a>
            </div>

            <button type="submit" className="btn-form-sub">Entrar</button>
        </form>
    );
}
export default HandlerFormLogin;
