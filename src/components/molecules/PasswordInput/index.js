import { useEffect, useRef, useState } from 'react';
import {Input, ToggleEyeIcon} from '../../atoms/index'


const PasswordInput = ({id, title, name, className, value, onChange, error}) => {
    const inputRef = useRef()
    const [label, setLabel] = useState(false)

    // true => type=password | false => type=text
    const [type, setType] = useState()

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
                    name={name} 
                    id={id} 
                    data={inputRef}
                    value={value}
                    type={type ? "password":"text"}
                    onChange={onChange}
                />
                <ToggleEyeIcon 
                    hiddenPassword={(value) => setType(value)}
                />
                <div className="bar"></div>
                <label className={`label absolute inline text-sm font-medium ${label ? 'focus':''}`} htmlFor={id}>{title}</label>
            </div>
            <span className="text-sm text-red-600 font-medium">{error}</span>

        </>
    )
}

export default PasswordInput
