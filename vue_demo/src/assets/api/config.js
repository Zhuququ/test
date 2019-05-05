import axios from 'axios'

let serveURL = process.env.VUE_APP_BASE_URL

let config = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
}

// 请求拦截
axios.interceptors.request.use( (config) => {
    return config
}, err => {
    console.log(err)
    return false
})

// 响应拦截
axios.interceptors.response.use( (response) => {
    return response.data
}, err => {
    console.log(err)
    return false
})

export default {
    axios,
    serveURL
}