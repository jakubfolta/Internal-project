import axios from "axios";

export const clientId = 'iukoauv6bq9nbsfwm4u2mvoboju1kl';
export const clientSecret = '3a1o08neggwrnsmpt49nj6axlcxz8r';

export const axiosClient = axios.create({
  baseURL: 'https://api.igdb.com/v4',
  headers: {
    'Accept': 'application.json',
    'Content-Type': 'application.json',
    'Client-ID': clientId,
    // 'Authorization': `Bearer ${token}`
  }
});