import { ButtonSubmit, TextHeader } from "../../atoms"

const Form = ({children}) => {
    return (
            <div className="flex flex-col justify-between h-full">
                <TextHeader>Sign Up</TextHeader>
                <div className="font-sans">
                    {children}
                </div>
                <ButtonSubmit>Register</ButtonSubmit>
            </div>
    )
}

export default Form
