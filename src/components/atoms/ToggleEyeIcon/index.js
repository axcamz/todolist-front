import { useEffect, useState } from "react"
import { Eye, EyeOff } from "../../Icons"

const ToggleEyeIcon = (props) => {
    // true => type=password | false => type=text
    const [hidden, setHidden] = useState(true)
    useEffect(() => {
        props.hiddenPassword(hidden)
    })

    if (hidden) {
            return (
                <Eye
                    onClick={() => setHidden(false)}
                    className={"h-5 text-gray-400 absolute top-1/2 right-0 z-30 cursor-pointer"}
                />
            )
        } else {
            return (
                <EyeOff
                    onClick={() => setHidden(true)}
                    className={"h-5 text-gray-400 absolute top-1/2 right-0 z-30 cursor-pointer"}
                />
            )
    }
    

}

export default ToggleEyeIcon
