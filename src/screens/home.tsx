import { FieldProducts } from "../components/fieldProducts";
import { NavBar } from "../components/navbar";
import { useState } from "react";
import { api } from "../../lib/axios";

import '../assets/ImgProducts/fireforce.png'

interface GetProductProps{
    Name: string
    description: string
    img: string
    price: string
}

export function Home() {

    const [product, getProduct] = useState<GetProductProps[]>([])

    api.get('/products')
        .then(function (response) {
        getProduct(response.data.products)
    })


    return (
        <div className="w-screen h-screen bg-backgroudGeneral ">
            <nav><NavBar /></nav> <br />
            
            <div className="w-full flex flex-row items-center justify-center grid-rows-2 gap-4">
                {product.map(products => {
                    return (
                        <FieldProducts
                    imgSrc={products.img}
                    price={products.price}
                    productName={products.Name}
                />
                    )
                })}
            </div>
        </div>
    )
}