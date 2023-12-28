import React, { useEffect } from "react";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import Container from "../../Component/Container";
import ListProducts from "../../Component/ListProducts";
import { HookFavorit } from "../../Context/Hooks/HookFavorit";
import CardProduct from "../../Component/CardProduct";

const Favorito = () => {
    useEffect(() => {
        window.scroll(0,0)//sempre que a pagina carregar deve voltar para o topo
        window.document.title = "JSL - Favoritos"; //nome da pagina se altera a cada pagina
    }, []);
    //hook que fornece uma lista com os produtos que foi favoritados
    const {favorit} = HookFavorit();
    return(
        <>
            <Header />
            <Container>
                <ListProducts title="Produtos Favoritos">
                    {
                        favorit.map((item) => <CardProduct key={`${item.id}98920`} id={item.id} original_price={item.price} price={item.price} title={item.title} urlImg={item.thumbnail} url={item.url}  />)
                    }
                </ListProducts>
            </Container>
            <Footer />
        </>
    );
}
export default Favorito;

