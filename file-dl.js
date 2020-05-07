#!/usr/bin/env node
const axios = require('axios');
const fs = require('fs');

const args = require('yargs').argv;

return axios.request({
    responseType: 'arraybuffer',
    url: args.url,
    method: 'get',
    headers: {
        'Content-Type': 'application/octet-stream',
    },
}).then((result) => {
    const outputFilename = args.path;
    fs.writeFileSync(outputFilename, result.data);
    return outputFilename;
});