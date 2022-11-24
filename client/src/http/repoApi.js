import axios from "axios";
import { $host } from "./index";

export const createRepo = async (title, description, url) => {

    console.log(localStorage.getItem('token'))
      let axiosConfig = {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`,
        }
      };

      axios.post('http://localhost:5000/api/repo/create', {title, description, url}, axiosConfig)
      .then((res) => {
        // console.log("RESPONSE RECEIVED: ", res);
          alert('Repo has successfully created')
      })
      .catch((err) => {
          alert('Something went wrong...')
        // console.log("AXIOS ERROR: ", err);
      })
}

export const fetchRepo = async () => {
    const {data} = await $host.get('http://localhost:5000/api/repo', {params: {limit: 7}})
    return data
}

export const fetchOneRepo = async (id) => {
    const {data} = await $host.get('http://localhost:5000/api/repo/' + id)
    return data
}
