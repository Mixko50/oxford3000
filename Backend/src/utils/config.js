const { dev } = require("./enviroment");

module.exports = {
    jwt_secret: "Mixko50LovesOkashi",
    redirect_uri: dev
        ? "http://localhost:8080/google/auth"
        : "https://oxford3000.mixko.ml/google/auth",
    google_client_secret: "9Ya_pUmeUBDkubE55N3GiZ5A",
    google_client_id:
        "198546295289-ci6a3j9rmdcre8gmi12tbn4sarph4jjc.apps.googleusercontent.com",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    get_token_uri: "https://oauth2.googleapis.com/token",
    db_connection:
        "mongodb://root:mixko50nibuko@mixkoserver.mixko.ml:27017/oxford3000",
};
