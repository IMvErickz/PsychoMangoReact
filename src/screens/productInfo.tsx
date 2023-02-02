import { useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../../lib/axios'
import ChawSaw from '../assets/ImgProducts/Chawsaw.png'
import { Button } from '../components/button'

interface InfoProps{
    Name: string
    price: number
    description: string
    img: string
}

export function Info() {

    let localName = localStorage.getItem('Name')

    const [info, setInfo] = useState<InfoProps[]>([])

    api.get(`/products/${localName}`)
        .then(function (response) {
        setInfo(response.data.products)
    })

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-backgroudGeneral">
            <div className='w-full flex flex-col items-start justify-start'>
                <Link to='/'>
                    <Button
                text='Voltar'
                />
                </Link>
            </div>
            {info.map(infos => {
                return (
               <li key={infos.img}>
                         <div className='w-full flex flex-row items-center justify-center gap-x-96'>
                <div className='flex flex-col items-center justify-center'>
                    <img src={infos.img} alt="" className='w-60' />
                </div>
                <div className='flex flex-col items-center justify-center gap-y-28'>
                    <div className='flex flex-col items-center justify-center bg-grayBackInput p-3 rounded-3xl'>
                        <h1 className='text-white text-6xl'>{infos.Name}</h1>
                        <p className='text-white text-2xl'>{infos.description}</p>
                    </div>
                    <hr className='border-white' />
                    <div className='flex flex-row items-center justify-center gap-x-8'>
                        <span className='text-white text-3xl'>R${infos.price}</span>
                        <div className='flex flex-col items-center justify-center gap-y-3'>
                            <Button
                            text='Adicionar no carrinho'
                            />

                            <Button
                            text='Comprar agora'
                            />
                        </div>
                    </div>
                </div>
            </div>
               </li>
                )
            })}
        </div>
    )
}