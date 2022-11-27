import { $authHost, $host } from "./index";
import jwt_decode from 'jwt-decode'

export const registration = async (name, email, password) => {
    const {data} = await $host.post('http://localhost:5000/api/user/registration', {name, email, password, role: 'USER'})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async (email, password) => {
    const {data} = await $host.post('http://localhost:5000/api/user/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('http://localhost:5000/api/user/auth')
    // localStorage.getItem('token')
    // const obj = jwt_decode(localStorage.getItem('token'))
    // console.log(obj.role)
    // console.log(jwt_decode(data.token))
    // console.log(JSON.stringify(jwt_decode(data.token)))
    return jwt_decode(data.token)
}
