import { useEffect, useState } from 'react';
import {Input, ToggleEyeIcon} from '../../atoms/index'


const PasswordInput = ({id, title, name, className}) => {
    const [input, setInput] = useState('')
    const [label, setLabel] = useState(false)

    // true => type=password | false => type=text
    const [type, setType] = useState(null)

    useEffect(() => {
        console.log(input);
        if(input.length > 0){
            setLabel(true)
        } else {
            setLabel(false)
        }
    }, [setLabel, input])


    return (
        <div className={"flex items-end form-control h-14 relative overflow-hidden "+className}>
            <Input 
                className={"input bg-transparent z-10"} 
                name={name} 
                id={id} 
                type={type ? "password":"text"}
                onChange={(e) => setInput(e.target.value)}
            />
            <ToggleEyeIcon 
                hiddenPassword={(value) => setType(value)}
            />
            <div className="bar"></div>
            <label className={`label absolute inline text-sm font-medium ${label ? 'focus':''}`} htmlFor={id}>{title}</label>
        </div>
    )
}

export default PasswordInput
