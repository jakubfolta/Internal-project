import axios, { AxiosResponse } from "axios";

export const clientId = 'iukoauv6bq9nbsfwm4u2mvoboju1kl';
export const clientSecret = '3a1o08neggwrnsmpt49nj6axlcxz8r';
export const responseBody = (response: AxiosResponse) => response.data;

export const axiosClient = axios.create({
  baseURL: 'https://api.igdb.com/v4'
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

