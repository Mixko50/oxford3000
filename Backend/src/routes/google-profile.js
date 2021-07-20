const { jwt_secret } = require("../utils/config");
const jwt = require("jsonwebtoken");

module.exports = (app) => {
    app.get("/google/profile", (req, res) => {
        try {
            const profile = jwt.verify(req.cookies.token, jwt_secret);

            res.send({
                name: profile.name,
                picture: profile.picture,
            });
        } catch {
            console.log("Error to get profile");
        }
    });
};
