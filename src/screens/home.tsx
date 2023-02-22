import { FieldProducts } from "../components/fieldProducts";
import { useState } from "react";
import { api } from "../../lib/axios";
import { Link } from "react-router-dom";

import '../assets/ImgProducts/fireforce.png'
import axios from "axios";
import { useQuery } from "react-query";
import { PsychoLogo } from "../assets/incons/logo";
import { Input } from "../components/input";
import { Button } from "../components/button";

interface GetProductProps{
    Name: string
    description: string
    img: string
    price: string
}

export function Home() {

    const {data} = useQuery<GetProductProps[]>('Products', async () => {
        const response = await api.get('/products')

        return response.data.products
    })


    return (
        <div className="bg-backgroudGeneral flex flex-col gap-4 ">
            <nav>
            <nav className="flex flex-row items-center justify-center w-full bg-backgroundNavbar gap-x-48">
            
                    <PsychoLogo />
                    
                    <div>
                        <h1 className="text-6xl text-white font-bold">PsychoMango</h1>
                    </div>
        <div className="flex flex-row items-center justify-center gap-x-4">
        <Link to='/newProduct'><Button
        text="Novo Produto"
        /></Link>
        </div>
    </nav>
            </nav> <br />
            
            <div className="w-full h-full items-center justify-center grid sm:grid-rows-1 md:grid-rows-2 grid-rows-4 grid-flow-col gap-4">
                {data?.map(products => {
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