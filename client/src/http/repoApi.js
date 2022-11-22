import { $authHost, $host } from "./index";

export const createRepo = async (title, description, url) => {
    const {data} = await $authHost.post('http://localhost:5000/api/repo/create', {title, description, url})
    return data
}

export const fetchRepo = async () => {
    const {data} = await $host.get('http://localhost:5000/api/repo')
    return data
}

export const fetchOneRepo = async (id) => {
    const {data} = await $host.get('http://localhost:5000/api/repo/' + id)
    return data
}
