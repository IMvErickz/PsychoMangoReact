import { Input } from "../components/input";
import { Button } from "../components/button";
import { PsychoLogo } from "../assets/incons/logo";
import { FormEvent, useState } from "react";
import { z } from "zod";
import {api} from '../../lib/axios'



export function Register() {

    // const userProps = {
    //     Name: '',
    //     LastName: '',
    //     Email: '',
    //     password: ''
    // }

    const [name, setUserName] = useState('')
    const [lastName, setlastName] = useState('')
    const [email, setUserEmail] = useState('')
    const [password, setUserPassword] = useState('')
console.log(name)
    
    async function SetUser(event: FormEvent) {

        event.preventDefault()

        try {
            const setUserInfo = await api.post('/registerUser', {
            Name: name,
            Email: email, 
            LastName: lastName, 
            password: password
            })
            
        } catch (error) {
            throw error
       }
    }
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-backgroudGeneral">
            <div className="flex flex-row items-center justify-center gap-x-4">
                <PsychoLogo />
                <h1 className="text-white text-4xl font-bold">PsychoMango</h1>
            </div>
            <div className="w-96 h-screen flex flex-col items-center justify-center ">
                <form onSubmit={SetUser} className='w-full'>
            <Input
            onChange={event => setUserName(event.target.value)}
            text="Nome"
                    /> <br /> <br />

            <Input
            text="Sobrenome"
            onChange={event => setlastName(event.target.value)}
            /> <br /> <br />

            <Input
            text="Email"
            onChange={event => setUserEmail(event.target.value)}
            type='email'
            /> <br /> <br />

            <Input
            text="Senha"
            onChange={event => setUserPassword(event.target.value)}
            type='password'
                        
            /> <br /> <br />

            <Button
            text="Enviar"
            type="submit"
            />
                </form>
            </div>
        </div>
    )
}