import classNames from 'classnames'

const TextHeader = ({className, children, tag = 'div'}) => {
    if(tag === 'div'){
        return (
            <div className={classNames("text-3xl font-bold",className)}>
                {children}
                <div className="h-0.5 w-1/6 bg-gray-900"></div>
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
