import axios from "axios";
import CONFIG from "../config/Config";

export const client = axios.create({
  baseURL: CONFIG.base_api_url,
});

console.log(CONFIG.base_api_url);
