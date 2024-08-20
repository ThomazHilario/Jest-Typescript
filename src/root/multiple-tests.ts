// interface product
interface ProductProps{
    name:string,
    price:number,
    discount: number | null,
    image:string,
    rating:number
}


function createProduct(product:ProductProps){
    return product
}

export const actual = createProduct({
    name:'Iphone',
    discount:20,
    price:1000,
    image:'https://www.imagem.com.br',
    rating:5
})