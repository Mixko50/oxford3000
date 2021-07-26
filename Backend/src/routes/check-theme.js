const Users = require("../models/Users");
const { jwt_secret } = require("../utils/config");
const jwt = require("jsonwebtoken");

module.exports = (app) => {
    app.get("/theme/check", async (req, res) => {
        try {
            const getId = jwt.verify(req.cookies.token, jwt_secret);
            const getUser = await Users.findOne({ _id: getId.id });
            res.send({ theme: getUser.theme });
        } catch (e) {
            console.log("Error to check theme");
        }
    });
};
