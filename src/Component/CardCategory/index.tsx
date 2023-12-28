import React from "react";
import { CardCategor } from "../../interface";
import { Link } from "react-router-dom";
import "./CardCategory.css";

const CardCategory = ({ id, name, query }: CardCategor) => {

    return (
        <Link to={`/category/${query}`} className="Card-category">
            <h3>{name}</h3>
        </Link>
    );
}
export default CardCategory;
