import axios from "axios";

let isDev = false;

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    isDev = true;
}

const instance = axios.create({
    baseURL: isDev ? "http://localhost:8080" : "https://oxford3000api.mixko.ml",
    withCredentials: true,
});

instance.baseURL = isDev
    ? "http://localhost:8080"
    : "https://oxford3000api.mixko.ml";

export default instance;
