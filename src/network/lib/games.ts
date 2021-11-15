import {  axiosClient, responseBody } from "../apiClient"

export const fetchGamesData = ((endpoint: string, query: string) => {
  return axiosClient.get(`${endpoint}${query}`).then(responseBody);
})