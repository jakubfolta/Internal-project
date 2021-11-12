import { axiosClient, responseBody } from "../apiClient"
import { Headers } from "./interfaces"

export const fetchGamesData = ((endpoint: string, data: any, headers: Headers) => {
  return axiosClient.post(endpoint, data, headers).then(responseBody);
})