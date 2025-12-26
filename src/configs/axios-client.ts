import axios from "axios";

export const bikeApi = axios.create({
  baseURL: "https://bikeindex.org/api/v3",
  timeout: 10000,
});
