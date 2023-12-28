import axios from "axios";
import { GetApiCategory, ResultGetProducts } from "../interface";

//Pegando os arquivos dos produtos
export async function GetProdutcs(Product: string | undefined): Promise<ResultGetProducts>{

    const EndPoint = "https://api.mercadolibre.com/sites/MLB/search?q=";//rota da api
    const {data} = await axios.get<ResultGetProducts>(EndPoint + Product); //consumindo ela com axios e desestruturando
    return data; // pegando o objct data e retornando
};

//pegando a categoria de cada produto
export async function GetCategoryProduct() {
    
    const EndPoint = "https://api.mercadolibre.com/sites/MLB/";//rota da api
    const {data} = await axios.get<GetApiCategory>(EndPoint); //consumindo ela com axios e desestruturando
    return data.categories; // pegando o objct data e retornando
};