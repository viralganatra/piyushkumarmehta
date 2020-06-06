<h1 align="center">
  Piyushbhai Mehta Personal Website
</h1>

This is the personal website for Piyushkumar Mehta. It is built with [React](http://react.com) and [Emotion](https://emotion.sh), using [Gatsby](https://www.gatsbyjs.org) as a static site generator. It is then deployed and served via [Netlify](https://www.netlify.com).

## 🚀 Quick start

1. **Clone this repo.**

    ```sh
    git clone https://github.com/viralganatra/piyushkumarmehta
    ```

1. **Copy the `.env.example` file and create a `.env` in the root:**

    ```sh
    cp .env.example .env
    ```

1. **Build and start the app:**

    Run the make command in your terminal:

    ```sh
    make start
    ```

1. **Start developing.**

    Your site is now running at `http://localhost:8000`!

> The Docker build can be slow, you can of course run this outside of docker; run `yarn && yarn start` and visit the url above.

## 🧐 Directory Structure

A quick look at the important top-level files and directories you'll see in this repo.

    .
    ├── node_modules
    ├── public
    └── src
        └── assets
            ├── fonts
            └── images
        ├── components
        ├── pages
        └── utils
    ├── static
    ├── .eslintrc.js
    ├── .prettierrc.js
    ├── aliases.js
    ├── gatsby-config.js
    └── gatsby-node.js

1.  **`/node_modules`**: This directory contains all of the modules of code that this project depends on (npm packages).

2.  **`/src/assets`**: This contains all the fonts and images used by the site. Each image will have various sizes and types (jpg/webp) to ensure we serve optimised responsive images to the user.

3.  **`/src/components`**: This contains common components used to build up each page, such as buttons and things.

4.  **`/src/pages`**: This contains the entrypoint for each page in the app. See [Gatsby Pages](https://www.gatsbyjs.org/docs/creating-and-modifying-pages/).

5.  **`/src/utils`**: Helper functions for abstracting repeated functions/tasks.

6.  **`/static`**: This directory contains files that are used outside of Gatsbys [module system](https://www.gatsbyjs.org/docs/static-folder/).

7.  **`.prettierrc.js`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

8.  **`aliases.js`**: This is a map of alias names to paths to make file importing easier.

9.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This includes plugins for Emotion, offline support and modifying the head tags. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

10.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). This is where we customise the aliases that Webpack uses to make file imports a little nicer.
