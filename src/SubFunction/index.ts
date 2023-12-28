export const FormatPrice = (Price: number) => {
    return Price.toLocaleString("PT-BR", {style: 'currency', currency: 'BRL'}); //formatando os parametros com valor monetario 
}