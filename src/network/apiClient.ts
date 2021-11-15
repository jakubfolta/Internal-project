import axios, { AxiosResponse } from "axios";

const apiKey = '6cb0dad0b2204442bfdfda2715ca7de1';
export const responseBody = (response: AxiosResponse) => response.data;

export const setQuery = (filter?: string) => {
  const query = `?key=${apiKey}${filter ?? '' }`;
  
  return query;
} 

export const axiosClient = axios.create({
  baseURL: 'https://api.rawg.io/api'
});

// export const axiosClient = ((token: string) => {
//   return axios.create({
//     baseURL: 'https://api.igdb.com/v4',
//     headers: {
//       'Accept': 'application.json',
//       'Content-Type': 'application.json',
//       'Client-ID': clientId,
//       'Authorization': `Bearer ${token}`
//     }
//   });
// });

// export const request = {
//   post: (url: string, token: string) => axiosClient.post()
//   //"Property 'post' does not exist on type '(token: string) => AxiosInstance'."

//   //How to add this 'post' method?
// }

