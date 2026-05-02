import axios from "axios";

const BASE_URL = "http://20.207.122.201";
export const registerUser = (data) =>
    axios.post(`${BASE_URL}/evaluation-register`, data);
export const getToken = (data) =>
    axios.post(`${BASE_URL}/evaluation-service/auth`, data);
export const sendLog= (logData, token) =>
    axios.post(`${BASE_URL}/evaluation-service/logs`, logData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });