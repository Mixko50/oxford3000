const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        filename: "oxford3000-webpack.js",
        path: path.resolve(__dirname, "dist"),
    },
    resolve: {
        modules: ["node_modules"],
    },
    target: "node",
};
