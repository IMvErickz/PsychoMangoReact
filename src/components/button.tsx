import { FC } from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    text: string
}

export const Button: FC<ButtonProps> = ({text, ...rest}) => {
    return (
        <button
        className="bg-YellowMango p-2 font-bold w-full rounded-lg" {...rest}
        >{text}</button>
    )
}