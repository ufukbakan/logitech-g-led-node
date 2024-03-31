const { configure } = require("eslint-with-prettier");

module.exports = {
    ...configure("ts", "prettier"),
    env: {
        node: true,
    },
    ignorePatterns: ["node_modules/**/*", "dist/**/*", "**/*.json"],
};
