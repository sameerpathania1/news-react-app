import axios from "axios"
import { API_URL } from "./constants/apiurl"

export function apiPost(endpoint, data){
  const finalendpoint = API_URL + endpoint
  return axios.post(finalendpoint, data)
}