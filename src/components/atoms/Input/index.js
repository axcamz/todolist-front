const Input = ({type, name, id, className, value, onChange, data, max}) => {
    return (
        <input 
            className={"outline-none border-b text-base border-gray-200 pb-1 pt-3 px-3 w-full "+className} 
            name={name} 
            id={id} 
            type={type}
            value={value}
            onChange={onChange}
            ref={data}
            maxLength={max}
        />
    )
}

export default Input
