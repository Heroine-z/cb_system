import axios from 'axios';
// import {SYSTEM_PATH} from '../system/systemEnvironment';

const service = axios.create({
    // baseURL: SYSTEM_PATH,
    timeout: 100000,
    transformRequest: [function (data) {
        let ret = '';
        for (let item in data) {
            ret += encodeURIComponent(item) + '=' + encodeURIComponent(data[item]) + '&'
        }
        return ret
    }],
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    withCredentials: true // 允许携带cookie
});
export default service;