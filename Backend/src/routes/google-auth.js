const { default: axios } = require("axios");
const QueryString = require("qs");
const {
    get_token_uri,
    google_client_id,
    google_client_secret,
    redirect_uri,
} = require("../utils/config");

module.exports = (app) => {
    app.get("/google/auth", async (req, res) => {
        const code = req.query.code;

        const values = {
            code,
            client_id: google_client_id,
            client_secret: google_client_secret,
            redirect_uri: redirect_uri,
            grant_type: "authorization_code",
        };

        const getToken = await axios
            .post(get_token_uri, QueryString.stringify(values), {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            })
            .then((res) => res.data)
            .catch((e) => console.log("Error in getToken function"));

        const getGoogleUser = await axios
            .get(
                `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${getToken.access_token}`,
                {
                    headers: {
                        Authorization: `Bearer ${getToken.id_token}`,
                    },
                }
            )
            .then((res) => res.data)
            .catch((e) => console.log("Error in getGoogleUser function"));

        res.send(getGoogleUser);
    });
};
