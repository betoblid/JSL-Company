import React, { useEffect } from "react";
import "./Cart.css";
import Header from "../../Component/Header";
import Container from "../../Component/Container";
import Footer from "../../Component/Footer";
import ListProducts from "../../Component/ListProducts";
import { HookCardList } from "../../Context/Hooks/HookCardList";
import CardCartProduct from "../../Component/CardCartProduct";
import { FormatPrice } from "../../SubFunction";

const Cart = () => {
    useEffect(() => {
        window.scroll(0,0)//volta para parte de sima da pagina ao abrir essa aba
        window.document.title = "JSL - Carrinho"// definindo o title do arquivo
    }, [])
    const { cartlist } = HookCardList();

    return (
        <>
            <Header />
            <Container>
                <section className="container-cart-list-product-finalizar">
                    <div className="card-itens-compra-final">
                        <ListProducts title="">
                            {
                                cartlist.map((itens) => <CardCartProduct data={itens} key={`${itens.id}-23235cd`} />)
                            }
                        </ListProducts>
                    </div>

                    <div className="comprar-final">
                        <p>Preço Produto: {FormatPrice(cartlist.reduce((acc, item) => {return acc + (item.qtn * item.price)}, 0))}</p>
                        <p>Preço Frete: {FormatPrice(cartlist.reduce((acc, item) => {return acc + (item.qtn * 3)}, 0))}</p>
                        <p>Preço Desconto: R$0,00</p>
                        <h4>Preço Total: {FormatPrice(cartlist.reduce((acc, item) => {return acc + (item.qtn * item.price) + 3}, 0))}</h4>
                        <button onClick={() => alert("Para pagamentos estamos fora do ar")}>Comprar</button>
                    </div>
                </section>
            </Container>
            <Footer />

        </>
    );
}
export default Cart;
