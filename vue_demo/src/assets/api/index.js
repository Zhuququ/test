import {axios, serveURL} from './config'
import qs from 'querystring'

export default {
    postAuthAccessToken: json => axios.post(serveURL + '/access-token', qs.stringify(json))
}