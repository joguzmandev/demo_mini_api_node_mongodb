const express = require("express");
const fs = require("fs");
const router = express.Router();

const PATH_ROUTERS = __dirname;

const removeExtension = (file) => {
    return file.split('.').shift();
}

fs.readdirSync(PATH_ROUTERS).filter((file) => {
    const name = removeExtension(file);
    if (name !== 'index') {
        router.use(`/${name}`, require(`./${file}`));
    }
})

module.exports =  router;