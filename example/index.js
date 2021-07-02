"use strict";

const fs = require("fs");
const postcss = require("postcss");
const remtorpx = require("..");

const css = fs.readFileSync("main.css", "utf8");
console.log(css)
const options = {
  replace: true,
  propBlackList: ['border']
};
const processedCss = postcss(remtorpx(options)).process(css).css;

fs.writeFile("main-rpx.css", processedCss, function(err) {
  if (err) {
    throw err;
  }
  console.log("rpx file written.");
});
