import { fetch } from 'whatwg-fetch'
import urlJoin from 'url-join'
import {API_URL} from '../constants/api'

const API = {
    get: async (path)=>{
        const url = urlJoin(API_URL, path)
        const options = {
            method: 'GET',
        }
        const response = await fetch(url, options)
        return response.json();
    }
}

export default API;