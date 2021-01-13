import { Children } from "react"

const ButtonSubmit = ({className, onClick, children}) => {
    return (
        <button onClick={onClick} className={"py-2 font-bold text-gray-900 hover:bg-gray-900 hover:text-white transition rounded-lg bg-transparent border-2 border-gray-900 "+className} type="submit">
            {children}
        </button>
    )
}

export default ButtonSubmit
