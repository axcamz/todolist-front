import { useState } from "react"
import { PasswordInput, TextInput } from "../../components/molecules"
import { Auth } from "../../components/templates"

const Register = () => {
    const [attr, setAttr] = useState({
        username: '',
        password: '',
        password_confirm: ''
    })

    const _submitAttr = () => {
        const {username, password, password_confirm} = attr
        // alert(username+password+password_confirm)
    }

    const handleInput = (e) => {
        const {value, name} = e.target
        setAttr({
            ...attr,
            [name]: value
        })
        console.log(attr);
    }

    return (
        <Auth onSubmit={() => _submitAttr()}>
            <TextInput
                title="Username"
                name="username"
                onChange={(e) => handleInput(e)}
            />
            <PasswordInput 
                title="Password"
                name="password"
                onChange={(e) => handleInput(e)}
            />
            <PasswordInput 
                title="Confirm Password"
                name="password_confirm"
                onChange={(e) => handleInput(e)}
            />
        </Auth>
    )
}

export default Register
