const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(bodyParser.json());
app.use(
    cors({
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "UPDATE", "PUT"],
        credentials: true,
    })
);
app.use(cookieParser());

require("./routes/google-redirect")(app);
require("./routes/google-auth")(app);
require("./routes/google-profile")(app);
require("./routes/logout")(app);

app.listen(8080, () => {
    console.log("Hello");
});
