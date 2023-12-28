import React from "react";
import './Container.css'
//typagem do props do componente
interface ContainerProps {
    children: React.ReactNode
}
const Container = ({children}: ContainerProps) => {
    return(
        <main className="lightdark">
            {children}
        </main>
    );
}
export default Container;
