import axios from "axios";
import {  axiosClient, responseBody } from "../apiClient";

export const fetchPopularGamesData = ((query: string) => {
  return axiosClient.get(`/games${query}`).then(responseBody);
});

export const fetchGameData = ((endpoint: string, query: string, ) => {
  const fetchGameInfo = axiosClient.get(`/games/${endpoint}${query}`).then(responseBody);
  const fetchGameScreenshots = axiosClient.get(`/games/${endpoint}/screenshots${query}`).then(responseBody);
  const fetchGameSeries = axiosClient.get(`/games/${endpoint}/game-series${query}`).then(responseBody);

  return axios.all([fetchGameInfo, fetchGameScreenshots, fetchGameSeries])
});