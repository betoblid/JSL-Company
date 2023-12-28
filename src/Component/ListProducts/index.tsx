import React from "react";
import "./ListProducts.css"
//tipagem dos props de nossa listProducts
export interface PropsListCard {

    children: React.ReactNode
    title: string
}
const ListProducts = ({children, title}: PropsListCard) =>{

    return(
        <section className="products-list">
            <h2>{title}</h2>
            
            <div className="container-list-products">
                {children}
            </div>
        </section>
    );

}
export default ListProducts;
