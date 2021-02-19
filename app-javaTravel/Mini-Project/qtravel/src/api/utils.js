import axios from 'axios'

const API_URL = 'http://localhost:8080/api/v9';
const API_URL_Lb = 'http://localhost:3000/api/';

export function getApiNoAuth(){
    return axios.create({
        baseURL: API_URL,
        timeout: 10000,
        withCredentials: false,
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:8080',
            'Content-Type': 'application/json'
        }
    })
}

export function getApiNoAuthLb(){
    return axios.create({
        baseURL: API_URL_Lb,
        timeout: 10000,
        withCredentials: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
    })
}