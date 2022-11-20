import { $authHost, $host } from "./index";
import jwt_decode from 'jwt-decode'

export const registration = async (name, email, password) => {
    const {data} = await $host.post('http://localhost:5000/api/user/registration', {name, email, password, role: 'ADMIN'})
    return jwt_decode(data.token)
}

export const login = async (email, password) => {
    const {data} = await $host.post('http://localhost:5000/api/user/login', {email, password})
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('http://localhost:5000/api/user/auth')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}
