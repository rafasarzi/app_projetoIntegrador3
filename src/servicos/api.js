import axios from "axios";

const api = axios.create({
    baseURL: "http://192.168.0.134:3100/"
})

export default api;