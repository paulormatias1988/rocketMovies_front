import axios from "axios";

export const api = axios.create({
    baseURL: "https://rocketmovies-api-tysm.onrender.com"
    //baseURL: "http://localhost:3333"
});