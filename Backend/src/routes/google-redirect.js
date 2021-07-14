const QueryString = require("qs");
const { auth_uri, redirect_uri, google_client_id } = require("../utils/config");

module.exports = (app) => {
    const getGoogleOAuthUrl = () => {
        const url = auth_uri;
        const options = {
            redirect_uri: redirect_uri,
            client_id: google_client_id,
            access_type: "offline",
            response_type: "code",
            prompt: "consent",
            scope: [
                "https://www.googleapis.com/auth/userinfo.email",
                "https://www.googleapis.com/auth/userinfo.profile",
            ].join(" "),
        };
        return `${url}?${QueryString.stringify(options)}`;
    };

    app.get("/oauth/redirect", (req, res) => {
        res.redirect(getGoogleOAuthUrl());
    });
};
