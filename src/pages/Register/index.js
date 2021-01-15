import axios from "axios"
import { useEffect, useState } from "react"
import { API_URL } from "../../api"
import { LabeledInput } from "../../components/molecules"
import { Auth } from "../../components/templates"

const Register = () => {

    const [attr, setAttr] = useState({
        username: '',
        password: '',
        password_confirmation: ''
    })

    const [errors, setError] = useState({})

    const handleChange = (e) => {
        const {value, name} = e.target
        if(name === "username"){
            if(value.length === 0){
                setError({...errors, username: "The username field is required."})
            } else if (value.length < 2){
                setError({...errors, username: "The username must be at least 2 characters."})
            } else {
                setError({...errors, username: null})
            }
        } else if (name === "password") {
            if(value.length === 0){
                setError({...errors, password: "The password field is required."})
            } else if (value.length < 6){
                setError({...errors, password: "The password must be at least 6 characters."})
            } else if(value === attr.password_confirmation) {
                setError({...errors, password_confirmation: null})
            } else {
                setError({...errors, password: null})
            }
        } else if (name === "password_confirmation") {
            if(value !== attr.password){
                setError({...errors, password_confirmation: "Password Dont Match"})
            } else {
                setError({...errors, password_confirmation: null})
            }
        }
        setAttr({
            ...attr,
            [name]: value
        })
        console.log(attr);
    }

    const _submitAttr = () => {
        // console.log(attr);
        axios.post(API_URL+"register/", attr)
        .then((res) => console.log(res))
        .catch(error => {
            console.log(error.response.data.errors);
            setError(error.response.data.errors)
        })
    }

    return (
        <Auth onSubmit={_submitAttr}>
            <LabeledInput
                title="Username"
                name="username"
                type="text"
                onChange={handleChange}
                error={errors.username && errors.username}
                max={21}
            />
            <LabeledInput 
                password
                title="Password"
                name="password"
                onChange={handleChange}
                error={errors.password && errors.password}
            />
            <LabeledInput 
                password
                title="Confirm Password"
                name="password_confirmation"
                onChange={handleChange}
                error={errors.password_confirmation && errors.password_confirmation}
            />
        </Auth>
    )
}

export default Register
