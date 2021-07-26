const { dev } = require("../utils/enviroment");

module.exports = (app) => {
    app.get("/logout", (req, res) => {
        try {
            res.clearCookie("token", { domain: "localhost", path: "/" });
            res.clearCookie("theme", { domain: "localhost", path: "/" });
            res.redirect(
                dev
                    ? "http://localhost:3000/home"
                    : "https://oxford3000.mixko.ml/home"
            );
        } catch {
            console.log("Error to Clear Cookie");
            res.send({ logout: false });
        }
    });
};
