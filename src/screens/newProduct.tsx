import { Input } from "../components/input";
import { Button } from "../components/button";
import { PsychoLogo } from "../assets/incons/logo";
import { FormEvent, useState } from "react";
import { z } from "zod";
import {api} from '../../lib/axios'



export function NewProduct() {

    // const userProps = {
    //     Name: '',
    //     LastName: '',
    //     Email: '',
    //     password: ''
    // }

    const [name, setProductName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setProductPrice] = useState(0)
    const [img, setProductImg] = useState('')
    
    async function SetUser(event: FormEvent) {

        event.preventDefault()

        try {
            const setProductInfo = await api.post('/newProduct', {
            Name: name,
            description: description, 
            price: price, 
            img: img
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
            onChange={event => setProductName(event.target.value)}
            text="Nome do produto"
                    /> <br /> <br />

            <Input
            text="Descrição"
            onChange={event => setDescription(event.target.value)}
            /> <br /> <br />

            <Input
            text="Preço"
            onChange={event => setProductPrice(event.target.valueAsNumber)}
            type='number'
            /> <br /> <br />

            <Input
            text="Link da imagem"
            onChange={event => setProductImg(event.target.value)}
            type='text'
                        
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