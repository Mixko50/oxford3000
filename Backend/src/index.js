const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

require("./routes/google-redirect")(app);
require("./routes/google-auth")(app);

app.post("/test", (req, res) => {
    res.send({
        test: req.body.e + 70 / 2,
        Mixko: 656564,
    });
});

app.get("/hello", (req, res) => {
    res.send({
        rt: "wewe",
    });
});

app.listen(8080, () => {
    console.log("Hello");
});
