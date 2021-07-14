const environment = process.env.NODE_ENV || "development";
const dev = environment === "development";
const url = dev ? "http://localhost:8080" : "https://oxford3000api.mixko.ml";
module.exports = {
    dev,
    url,
};
