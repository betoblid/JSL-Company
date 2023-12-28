export type PropsCardProduct = {
    id: string,
    url: string,
    title: string,
    urlImg: string,
    price: number,
    original_price: number | null

}
export type ResultGetProducts = {
    results: [{
        id: string,
        title: string,
        permalink: string,
        thumbnail: string,
        price: number,
        original_price: number | null
    }] | []
}

export type GetApiCategory = {
    categories: [
        {
            id: string
            name: string
            query: string
        }
    ]
}
export type CardCategor = {
    id: string
    name: string
    query: string
}


export type PropsChildren = {
    children: React.ReactNode
}

export type  FavoritValue = {
    id: string,
    title: string,
    thumbnail: string,
    price: number,
    url: string
}
export type NewFavoritParamns = {
    id: string,
    title: string,
    thumbnail: string,
    price: number,
    url: string
}
export type NewProductParams = {
    id: string,
    title: string,
    thumbnail: string,
    price: number,
    qtn: number
}
export type CartListValue = {
    id: string,
    title: string,
    thumbnail: string,
    price: number,
    qtn: number

}
export type PropsCartProduct = {
    data: {
        id: string,
        title: string,
        thumbnail: string,
        price: number,
        qtn: number
    }
}
export type ProvaiderValue = {
    favorit: FavoritValue[]
    setFavorit: React.Dispatch<React.SetStateAction<FavoritValue[]>>
    cartlist: CartListValue[] 
    setCartList: React.Dispatch<React.SetStateAction<CartListValue[]>>
}
