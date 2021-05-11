const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
const fs = require("fs");
const axios = require("axios");

const readFile = () => {
  let content;
  fs.readFile("data.txt", (err, data) => {
    if (err) throw err;
    content = data.toString();
    console.log(content);
  });
};
readFile();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
