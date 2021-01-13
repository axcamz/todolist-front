import { useEffect, useState } from "react"
import { PasswordInput, TextInput } from "../../components/molecules"
import { Auth } from "../../components/templates"

const Register = () => {
    const [attr, setAttr] = useState({
        username: '',
        password: '',
        password_confirm: ''
    })

    useEffect(() => {
        console.log(attr);
    })

    const _submitAttr = () => {
        alert(attr.username)
    }

    return (
        <Auth onSubmit={() => _submitAttr()}>
            <TextInput
                title="Username"
                name="username"
                currentValue={(value) => setAttr({...attr, username: value})}
            />
            <PasswordInput 
                title="Password"
                name="password"
                currentValue={(value) => setAttr({...attr, password: value})}       
            />
            <PasswordInput 
                title="Confirm Password"
                name="password_confirm"
                currentValue={(value) => setAttr({...attr, password_confirm: value})}
            />
        </Auth>
    )
}

export default Register
