import React, { useEffect } from "react";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import Container from "../../Component/Container";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { GetProdutcs } from "../../api";
import CardProduct from "../../Component/CardProduct";
import ListProducts from "../../Component/ListProducts";
import Loading from "../../Component/Loading";

const Category = () => {

    useEffect(() => {
        document.title = "JSL - Produtos"; // mudando o title da pagina
      }, [])

    const { idProduct } = useParams(); //pegando o id via url 

    const { data, status } = useQuery(`${idProduct}`, () => GetProdutcs(idProduct)); //buscando produtos com o id da url

    return (
        <>
            <Header />
            <Container >
                <ListProducts title="">
                    
                    { status === "loading" && <Loading />}

                    {
                        status === "success" && data.results.map((item) => <CardProduct

                            id={item.id}
                            original_price={item.original_price}
                            price={item.price}
                            urlImg={item.thumbnail}
                            url={item.permalink}
                            title={item.title} key={item.id} />
                        )
                    }
                </ListProducts>
            </Container>
            <Footer />
        </>
    );
}
export default Category;
