import axios from "axios";

const API_KEY = "b36ca9e34424b82fbc2276da7702e37f";

const apiClient = axios.create({
  baseURL: `https://api.openweathermap.org/data/2.5/weather`,
});

export default {
  getWeatherByLocation(longitutde, latitude) {
    return apiClient.get(`?lon=${longitutde}&lat=${latitude}&appid=${API_KEY}`);
  },
  getWeatherByQuery(query) {
    return apiClient.get(`?q=${query}&appid=${API_KEY}`);
  },
};
