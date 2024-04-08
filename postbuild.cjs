const fs = require("fs");
const path = require("path");

const indexCjs = path.resolve(__dirname, "dist", "index.cjs");
const content = fs.readFileSync(indexCjs).toString("utf-8");
const newContent = content.replace("exports.default", "exports");
fs.writeFileSync(indexCjs, newContent);
