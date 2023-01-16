import { useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../lib/axios";
import { PsychoLogo } from "../assets/incons/logo";
import { Button } from "./button";
import { Input } from "./input";

interface NameProps{
    Name: string
}

export function NavBar() {

    const [name, getName] = useState<NameProps[]>([])

    api.get('/getUser')
        .then(function (response) {
        getName(response.data.getUser)
    })

    return (
        <nav className="flex flex-row items-center justify-start w-full bg-backgroundNavbar">
            <PsychoLogo />
            <Input
                text="Pesquisar"
                className="w-96 bg-[#535353] h-16 rounded-lg placeholder:font-bold text-white"
            />

            <div className="flex flex-row items-center justify-center gap-x-4">
                <Link to='/Register'><Button
            text="Registrar"
            /></Link>

            <Link to='/newProduct'><Button
            text="Novo Produto"
            /></Link>
            </div>

            <div>
                {name.map(names => {
                    return (
                        <span className="text-white text-3xl">Olá {names.Name}</span>
                    )
                })}
            </div>
        </nav>
    )
}