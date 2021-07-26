const Users = require("../models/Users");
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../utils/config");

module.exports = (app) => {
    app.post("/theme/change", async (req, res) => {
        try {
            const getId = jwt.decode(req.cookies.token, jwt_secret);
            const changeTheme = await Users.updateOne(
                { _id: getId.id },
                { $set: { theme: req.body.theme } }
            );
        } catch (e) {
            console.log("Not login yet");
        }
    });
};
