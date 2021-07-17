const { jwt_secret } = require("../utils/config");

module.exports = (app) => {
    app.get("/logout", (req, res) => {
        try {
            res.clearCookie("token", { domain: "localhost", path: "/" });
            res.send({
                logout: true,
            });
        } catch {
            console.log("Error to Clear Cookie");
            res.send({ logout: false });
        }
    });
};
