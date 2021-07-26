const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { db_connection } = require("./utils/config");

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
require("./routes/change-theme")(app);
require("./routes/check-theme")(app);

mongoose.connect(
    db_connection,
    {
        useNewUrlParser: true,
        authSource: "admin",
        useUnifiedTopology: true,
    },
    () => {
        console.log("DB Connected");
    }
);

app.listen(8080, () => {
    console.log("Hello");
});
