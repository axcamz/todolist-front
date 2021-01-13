import { useState } from "react"
import { LabeledInput } from "../../components/molecules"
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
            <LabeledInput
                title="Username"
                name="username"
                type="text"
                onChange={(e) => handleInput(e)}
            />
            <LabeledInput 
                password
                title="Password"
                name="password"
                onChange={(e) => handleInput(e)}
            />
            <LabeledInput 
                password
                title="Confirm Password"
                name="password_confirm"
                onChange={(e) => handleInput(e)}
            />
        </Auth>
    )
}

export default Register
