import axios from "axios";
import { responseBody } from "../apiClient";

export const auth = ((url: string) => {
  return axios.post(url).then(responseBody);
})