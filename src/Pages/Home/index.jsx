import React from "react";
import Header from "../../Component/Header";
import Carousel from "../../Component/Carousel";

import img from "./brain-programming-670x335.jpg"
import Container from "../../Component/Container";
import OfertaEmail from "../../Component/Oferta_Email";
import Footer from "../../Component/Footer";

function Home() {
  return (
    <>
      <Header />
      <Container>
        <Carousel>
          <img src={img} />
          <img src={img} />
          <img src={img} />
        </Carousel>

        <OfertaEmail />
      </Container>

      <Footer />

    </>
  );
}

export default Home;
