# Website Template

> So we don't have to keep cloning our other websites and possibly forget to change parts. 

## Build Setup

Make sure to grab the env variables from notion and add them to a `.env` file in the root of this repository
and change the `WEBSITE_NAME` variable to the specific website. In addition be sure to change the firebase 
config and google analytics to the specific project.

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
