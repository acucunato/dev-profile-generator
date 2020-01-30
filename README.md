# Developer Profile Generator

Created during Week 9 of UPenn Coding Bootcamp.

## Overview

This application is a command-line application that dynamically generates a PDF profile from a GitHub username. The application will be invoked with the following command:

```sh
node index.js
```

When preparing a report for stakeholders, it is important to have up-to-date information about members of the development team. Rather than navigating to each team member's GitHub profile, a command-line application will allow for quick and easy generation of profiles in PDF format.

## Utilizing the App

- Open the `index.js` file in your terminal and run the command `npm i`, then run the command `node index.js`

- The user will be prompted for their GitHub username and a favorite color, which will be used as the color for their pdf.

- The PDF will be populated with the following:

  - Profile image
  - User name
  - Links to the following:

    - User location via Google Maps
    - User GitHub profile
    - User blog

  - User bio
  - Number of public repositories
  - Number of followers
  - Number of GitHub stars
  - Number of users following

## Demo

![Weather Dashboard Image](./giphy "Weather Dashboard")

## Tech used

- HTML
- CSS
- Bootstrap
- Javascript
- Node.js
- NPM - _inquirer, axios, html-pdf_

## Contributers

- Alyssa Cucunato
