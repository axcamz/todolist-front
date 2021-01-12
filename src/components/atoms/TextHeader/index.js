const TextHeader = ({className, children, tag = 'div'}) => {
    if(tag === 'div'){
        return (
            <div className={"text-3xl font-bold "+className}>
                {children}
            </div>
        )
    } else {
        return (
            <h1 className={"text-3xl font-bold "+className}>
                {children}
            </h1>
        )
    }
}

export default TextHeader
