import { useEffect, useRef, useState } from 'react';
import {Input} from '../../atoms/index'

const TextInput = ({id, title, name, className, value, onChange, error}) => {
    const inputRef = useRef()
    const [label, setLabel] = useState(false)

    useEffect(() => {
        const currentValue = inputRef?.current?.value
        if(currentValue.length > 0){
            setLabel(true)
        } else {
            setLabel(false)
        }
    }, [setLabel, label, inputRef?.current?.value])

    return (
        <>
            <div className={"flex items-end form-control h-14 relative overflow-hidden "+className}>
                <Input 
                    className={"input bg-transparent z-10"} 
                    data={inputRef}
                    name={name} 
                    id={id} 
                    value={value}
                    type="text"
                    onChange={onChange}
                />
                <div className="bar"></div>
                <label className={`label absolute inline max-w-min text-sm font-medium ${label ? 'focus':''}`} htmlFor={id}>{title}</label>
            </div>
            <span className="text-sm text-red-600 font-medium">{error}</span>
        </>
    )
}

export default TextInput
