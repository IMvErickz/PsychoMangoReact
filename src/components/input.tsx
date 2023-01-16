import { FC } from "react"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    text: string
}

export const Input: FC<InputProps> = ({text, ...rest}) => {
    return (
        <input type="text" className="p-2 rounded-lg bg-grayBackInput text-white placeholder:text-InputLabelColor placeholder:font-bold w-full"
            placeholder={text}
            {...rest}
        />
    )
}