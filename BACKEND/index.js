const express = require("express");
const mongodb = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 1010 || process.env.PORT;
const user = require('./router/user');

const app = express();
app.use(cors());

mongodb.connect("mongodb+srv://amitkumarsingh1482:amit1234@document.dkfjdwr.mongodb.net/divya-shop").
  then(() => console.log("DB Connected!!")).
  catch((error) => console.log("Connection Failed : " + error));

app.use(bodyParser.json());

app.use('/api/v1', user);

app.listen(port, () => console.log("Server Created on Port : 1010"));