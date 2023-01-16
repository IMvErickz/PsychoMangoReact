import  axios  from "axios";

export const api = axios.create({
    baseURL: "https://us-east.connect.psdb.cloud:3838"
})
//us-east.connect.psdb.cloud