import  axios  from "axios";

export const api = axios.create({
    baseURL: "http://us-east.connect.psdb.cloud:3306"
})
//us-east.connect.psdb.cloud