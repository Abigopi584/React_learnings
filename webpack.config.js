var path = require('path');
var webpack = require('webpack');

var MY_APP_DIR = path.join(__dirname,'src/client/app');
var MY_BUILD_DIR = path.join(__dirname,'src/client/public');

console.log('MY_APP_DIR is '+MY_APP_DIR);
console.log('MY_BUILD_DIR is '+MY_BUILD_DIR);

module.exports={
    "entry": MY_APP_DIR + "/app.jsx",
    "output":{
        "path":MY_BUILD_DIR,
        "filename":'app.js'
    },
    module:{
        loaders:[{
            test:/.jsx?/,
            loader:'babel-loader',
            exclude:'/node_modules/',
            query:{
                presets:['es2015','react']
            }
        }]
    }
}