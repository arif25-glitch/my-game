const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

app.use(express.static("build"));
app.use(express.json({"limit": "1mb"}));

const port = process.env.PORT || 3000;

server.listen(port, () => {`Listening to port ${port}`});