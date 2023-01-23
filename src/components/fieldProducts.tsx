import { useState } from 'react'
import chawsaw from '../assets/ImgProducts/Chawsaw.png'

interface FieldProps{
    imgSrc: string
    productName: string
    price: string
}

export function FieldProducts(props: FieldProps) {

    function setNameLocalStorage() {
        localStorage.setItem('Name', props.productName)
    }

    return (
        <button onClick={setNameLocalStorage}>
            <fieldset className="flex flex-col w-64 items-center justify-center rounded-lg bg-[#35353A] gap-y-6">
            <div className="w-full h-full flex flex-col items-center justify-center">
                <img src={props.imgSrc} alt="" className='w-48'/>
            </div>
            <div className="flex flex-col items-center justify-center">
                <span className="text-white text-2xl font-bold name">{props.productName}</span>
            </div>
            <div className="flex flex-row items-center justify-center">
                <span className="text-white text-2xl font-bold">R$ {props.price}</span>
            </div>
        </fieldset>
        </button>
    )
}