import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { api } from '../../lib/axios'
import { Button } from '../components/button'

interface InfoProps {
    Name: string
    price: number
    description: string
    img: string
}

export function Info() {

    const { id } = useParams()

    const [product, setProduct] = useState<InfoProps[]>([])

    const memory = useMemo(async () => {
        api.get(`/products/${id}`)
            .then(function (response) {
                setProduct(response.data.products)
            })
    }, [])



    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-backgroudGeneral">
            <div className='w-full flex flex-col items-start justify-start'>
                <Link to='/'>
                    <Button
                        text='Voltar'
                    />
                </Link>
            </div>
            {product.map(infos => {
                return (
                    <li key={infos.img}>
                        <div className='w-full flex flex-row items-center justify-center gap-x-96'>
                            <div className='flex flex-col items-center justify-center'>
                                <fieldset className='w-64 bg-grayBackInput rounded-lg flex flex-col items-center justify-center'>
                                    <img src={infos.img} alt="" className='w-60' />
                                </fieldset>
                            </div>
                            <div className='flex flex-col items-center justify-center gap-y-28'>
                                <div className='flex flex-col items-center justify-center p-3 rounded-3xl'>
                                    <h1 className='text-white text-6xl'>{infos.Name}</h1>
                                    <p className='text-white text-2xl'>{infos.description}</p>
                                </div>
                                <hr className='border-white border-x-8 ' />
                                <div className='flex flex-row items-center justify-center gap-x-8'>
                                    <div className='flex flex-col items-center justify-center'>
                                        <span className='text-white text-3xl'>R${infos.price}</span>
                                        <span className='text-white text-2xl'>Em até 6x sem juros!</span>
                                    </div>
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