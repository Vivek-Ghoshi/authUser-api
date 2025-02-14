const express = require("express");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));

const db = require("./src/config/dbConfig");
const routes = require("./src/routes/user-routes");

app.use('/api/',routes);

app.listen(process.env.PORT);