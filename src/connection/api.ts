import axios from "axios";
import { BASE_URL, DEFAULT_HEADERS } from "./const";


export const baseApi = axios.create({
    baseURL: BASE_URL,
    headers: { ...DEFAULT_HEADERS },
});


