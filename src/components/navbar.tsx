import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../lib/axios";
import { PsychoLogo } from "../assets/incons/logo";
import { Button } from "./button";
import { Input } from "./input";

interface Filter{
    Name: string
}

export function NavBar() {
    const [product, setProduct] = useState<Filter[]>([])
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState<Filter[]>([])

    api.get('/products')
        .then(function (response) {
        setProduct(response.data.products)
    })

    useEffect(() => {
        if (search.length) {
          setFilter(product.filter(repo => repo.Name.includes(search)))
      }
    }, [search])

    return (
        <nav className="flex flex-row items-center justify-center w-full bg-backgroundNavbar gap-x-48">
            
                <PsychoLogo />
            
            <Input
                text="Pesquisar"
                className="w-96 bg-[#535353] h-16 rounded-lg placeholder:font-bold text-white"
                onChange={e => setSearch(e.target.value)}
            />

            <div className="flex flex-row items-center justify-center gap-x-4">
            <Link to='/newProduct'><Button
            text="Novo Produto"
            /></Link>
            </div>
        </nav>
    )
}