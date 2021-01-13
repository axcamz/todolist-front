import { ButtonSubmit, TextHeader } from "../../atoms"

const Form = ({children, onSubmit}) => {
    return (
            <div className="flex flex-col justify-between h-full">
                <TextHeader>Sign Up</TextHeader>
                <div className="font-sans">
                    {children}
                </div>
                <ButtonSubmit onClick={onSubmit}>Register</ButtonSubmit>
            </div>
    )
}

export default Form
