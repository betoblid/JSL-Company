import React from "react";
import Carousel from "../Carousel";
import CardCategory from "../CardCategory";
import { useQuery } from "react-query";
import { GetCategoryProduct } from "../../api";
import Loading from "../Loading";

const HandlerCategory = () => {
    //um hook para pegar os dados da api salvar em cache e salvar os dados em data que será consumido, o status é para mostrar em qual estado a aplicação está.
    const { data, status } = useQuery("Category", () => GetCategoryProduct())
    //verificação para consumo dos dados
    if (status === "success") {

        return (
            <Carousel showSlider={4} variableHeight={true} variableWidth={true} dots={false}>
               {
                data.map((item) => <CardCategory key={item.id} id={item.id} name={item.name} query={item.name} />)
               }
           </Carousel>
        );
    }
    //caso não esteja pronto apareça um loading na tela
    if(status === "loading"){
        return(   <Loading />  )
    }
}
export default HandlerCategory;
