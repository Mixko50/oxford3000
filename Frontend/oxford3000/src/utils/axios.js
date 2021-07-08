import axios from "axios";

let isDev = false;

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    isDev = true;
}

const instance = axios.create({
    baseURL: "https://oxford3000api.mixko.ml",
    // withCredentials: true,
});

export default instance;
