const Input = ({type, name, id, className, value, onChange, data}) => {
    return (
        <input 
        className={"outline-none border-b border-gray-200 pb-1 pt-3 px-3 w-full "+className} 
        name={name} 
        id={id} 
        type={type}
        value={value}
        onChange={onChange}
        ref={data}
        />
    )
}

export default Input
