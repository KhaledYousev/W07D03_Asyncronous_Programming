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
// 3)
const writeFile = () => {
  fs.writeFile("./text.txt", "A new file has been created", (err) => {
    if (err) throw err;
    console.log("File has been saved");
  });
};
writeFile();

//4)
const getPost = (id) => {
  axios
    .get(`https://jsonplaceholder.typicode.com/posts/${id}/`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      throw err;
    });
};
getPost(1);
getPost(50);

// 5)

const getPostAsync = async (data) => {
  const response = await axios
    .get(`https://jsonplaceholder.typicode.com/posts/${id}/`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      throw err;
    });
};

//  practice //

// 1)
const appendToFile = (data) => {
  fs.appendFile("./data.txt", data, (err) => {
    if (err) throw err;
    console.log("Data appendToFile");
  });
};

//2)
const copyFile = (fileName) => {
  fs.copyFile(`./${fileName}.txt`, `copy_of_${fileName}.txt`, (err) => {
    if (err) throw err;
    console.log("Done");
  });
};
copyFile("data");

//3)
const newPost = JSON.stringify({
  title: "JavaScript Basics",
  body: "This post contains information about javaScript ",
  userId: 1,
});

const createPost = (post) => {
  post = JSON.parse(post);
  axios
    .post("https://jsonplaceholder.typicode.com/posts/", post)
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      throw err;
    });
};
createPost(newPost);
