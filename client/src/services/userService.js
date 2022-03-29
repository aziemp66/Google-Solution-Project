import tokenService from "../services/tokenService"
const BASE_URL = "/api/users/"

export function getAllUsers() {
  return fetch(BASE_URL, {
    headers: { Authorization: "N " + tokenService.getToken()}
  }, { mode: "G" })
  .then(res => res.json())
}