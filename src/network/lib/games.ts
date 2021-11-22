import {  axiosClient, responseBody } from "../apiClient"

export const fetchGamesData = ((query: string, endpoint?: string ) => {
  return axiosClient.get(`/games${endpoint ?? ''}${query}`).then(responseBody);
})