const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const generateHTML = require("./generateHTML");
const pdf = require("html-pdf");

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "username",
      message: "What is your GitHub username?"
    },
    {
      type: "list",
      name: "color",
      message: "What is your favorite color?",
      choices: ["green", "blue", "pink", "red"]
    }
  ]);
}

function User(
  name,
  imageUrl,
  username,
  location,
  githubUrl,
  blog,
  bio,
  repo,
  followers,
  following,
  starred,
  color
) {
  this.name = name;
  this.imageUrl = imageUrl;
  this.username = username;
  this.location = location;
  this.githubUrl = githubUrl;
  this.blog = blog;
  this.bio = bio;
  this.repo = repo;
  this.followers = followers;
  this.following = following;
  this.starred = starred;
  this.color = color;
}

promptUser().then(function({ username, color }) {
  const queryUrl = `https://api.github.com/users/${username}`;
  const starredUrl = `https://api.github.com/users/${username}/starred`;

  axios.get(queryUrl).then(function(res) {
    const name = res.data.name;
    const imageUrl = res.data.avatar_url;
    const username = res.data.login;
    const location = res.data.location;
    const githubUrl = res.data.html_url;
    const blog = res.data.blog;
    const bio = res.data.bio;
    const repo = res.data.public_repos;
    const followers = res.data.followers;
    const following = res.data.following;

    axios.get(starredUrl).then(function(res) {
      const starred = res.data.length;

      const user = new User(
        name,
        imageUrl,
        username,
        location,
        githubUrl,
        blog,
        bio,
        repo,
        followers,
        following,
        starred,
        color
      );
      const html = generateHTML(user);
      fs.writeFile("resume.html", html, err => {
        if (err) {
          console.log(err);
        } else {
          console.log("Searching...");
        }

        const readFile = fs.readFileSync("./resume.html", "utf8");
        const options = { format: "a3", orientation: "portrait" };
        pdf.create(readFile, options).toFile("./resume.pdf", err => {
          if (err) {
            return console.log(err);
          } else {
            console.log("Your resume is complete.");
          }
        });
      });
    });
  });
});
