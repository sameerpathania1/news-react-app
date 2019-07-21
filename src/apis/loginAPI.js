import { apiPost } from "../utils"

export function LoginAPI(data) {
  const endpoint = "/users/login"
  return apiPost(endpoint ,data)
}