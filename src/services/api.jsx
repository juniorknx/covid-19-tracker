import axios from "axios";

export const api = axios.create({
    baseURL: 'https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com'
});

export const lastUpdated = axios.create({
    baseURL: 'https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com'
});