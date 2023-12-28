import React, { useEffect } from "react";
import Header from "../../Component/Header";
import Carousel from "../../Component/Carousel";
import Container from "../../Component/Container";
import OfertaEmail from "../../Component/Oferta_Email";
import Footer from "../../Component/Footer";
import CardProduct from "../../Component/CardProduct";
import ListProducts from "../../Component/ListProducts";
import { useQuery } from "react-query";
import { GetProdutcs } from "../../api";
import HandlerCategory from "../../Component/HandlerCategory";

function Home() {
  useEffect(() => {
    window.scroll(0,0)// volta sempre pro topo ao carregar
    document.title = "JSL - Company"; //trocando o title da pagina
  }, []);

  const { data, status } = useQuery("Products", () => GetProdutcs("aleatorio")); //consumindo a api com o usequery

  return (
    <>
      <Header />
      <Container>
        <Carousel showSlider={1} variableHeight={false} variableWidth={false} dots={true}>
          {/* imagem de ilustração da loja */}
          <img src="https://a.imagem.app/ouzVhr.jpeg" alt="ouzVhr.jpeg"  width="100%" height="90%"/>
          <img src="https://a.imagem.app/ouzvPy.jpeg" alt="ouzvPy.jpeg" width="100%" height="90%"/>    
        </Carousel>
          <HandlerCategory />
        <OfertaEmail />
        <ListProducts>
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
export default Home;
