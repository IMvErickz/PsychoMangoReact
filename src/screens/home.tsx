import { FieldProducts } from "../components/fieldProducts";
import { NavBar } from "../components/navbar";
import { useState } from "react";
import { api } from "../../lib/axios";
import { Link } from "react-router-dom";

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
        <div className="bg-backgroudGeneral flex flex-col gap-4 ">
            <nav><NavBar /></nav> <br />
            
            <div className="w-full h-full items-center justify-center grid sm:grid-rows-1 md:grid-rows-2 grid-rows-4 grid-flow-col gap-4">
                {product.map(products => {
                    return (
                        <Link to='/product'>
                        <FieldProducts
                    imgSrc={products.img}
                    price={products.price}
                    productName={products.Name}
                            />
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}