const { default: axios } = require("axios");
const QueryString = require("qs");
const jwt = require("jsonwebtoken");
const { dev } = require("../utils/enviroment");
const {
    get_token_uri,
    google_client_id,
    google_client_secret,
    redirect_uri,
    jwt_secret,
} = require("../utils/config");
const Users = require("../models/Users");

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

        const users = await Users.findOne({ email: getGoogleUser.email });

        if (users) {
            const token = jwt.sign(
                {
                    id: users._id,
                    email: users.email,
                    name: users.name,
                    picture: users.picture,
                },
                jwt_secret
            );
            res.cookie("token", token, {
                domain: dev ? "localhost" : "oxford3000.mixko.ml",
                path: "/",
            });
            res.cookie("theme", users.theme, {
                domain: dev ? "localhost" : "oxford3000.mixko.ml",
                path: "/",
            });
        } else {
            const users = new Users({
                name: getGoogleUser.name,
                email: getGoogleUser.email,
                picture: getGoogleUser.picture,
            });
            try {
                const saved = await users.save();
                const token = jwt.sign(
                    {
                        id: saved._id,
                        email: getGoogleUser.email,
                        name: getGoogleUser.name,
                        picture: getGoogleUser.picture,
                    },
                    jwt_secret
                );
                res.cookie("token", token, {
                    domain: dev ? "localhost" : "oxford3000.mixko.ml",
                    path: "/",
                });
                res.cookie("theme", saved.theme, {
                    domain: dev ? "localhost" : "oxford3000.mixko.ml",
                    path: "/",
                });
            } catch (e) {
                console.log(e);
            }
        }

        res.redirect(
            dev
                ? "http://localhost:3000/home"
                : "https://oxford3000.mixko.ml/home"
        );
    });
};
