import { useEffect, useState } from 'react';
import {Input} from '../../atoms/index'

const TextInput = ({id, title, name, className}) => {
    const [input, setInput] = useState('')
    const [label, setLabel] = useState(false)

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
                type="text"
                onChange={(e) => setInput(e.target.value)}
            />
            <div className="bar"></div>
            <label className={`label absolute inline max-w-min text-sm font-medium ${label ? 'focus':''}`} htmlFor={id}>{title}</label>
        </div>
    )
}

export default TextInput
