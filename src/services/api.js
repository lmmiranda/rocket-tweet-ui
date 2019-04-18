import axios from "axios";

const api = axios.create({
  baseURL: "https://rocket-tweet-api.herokuapp.com"
});

export default api;
