import { useState } from "react";
import { api } from "../../lib/axios";
import { Button } from "../components/button";
import { Input } from "../components/input";
import { PsychoLogo } from "../assets/incons/logo";

export function Login() {

    const [email, getEmail] = useState('')

    api.get('/getUser')
        .then(function (response) {
        getEmail(response.data.getUser)
    })

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-backgroudGeneral gap-y-8">
            <header className="flex flex-col items-center justify-center">
                <PsychoLogo />
                <h1 className="text-white text-4xl">Login</h1>
            </header>
            <form className="w-96 flex flex-col gap-y-8">
                <Input
            text="Email"
                    type='email'
                    onChange={event => getEmail(event.target.value)}
        />

        <Input
            text="Senha"
            type='password'
                />
                
                <Button
                    text="Entrar"
                    type="submit"
                />
            </form>
        </div>
    )
}