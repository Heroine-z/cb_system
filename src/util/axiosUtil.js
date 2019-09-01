import axios from 'axios';
// import {SYSTEM_PATH} from '../system/systemEnvironment';

const service = axios.create({
    // baseURL: SYSTEM_PATH,
    timeout: 100000,
    headers: { 'content-type': 'application/json' },
    withCredentials: true // 允许携带cookie
});
export default service;