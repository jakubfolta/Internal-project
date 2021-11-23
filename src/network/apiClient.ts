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