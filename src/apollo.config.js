// apollo.config.js
module.exports = {
  client: {
    service: {
      name: "lampstand-website",
      // URL to the GraphQL API
      url: "http://localhost:1337/graphql",
    },
    // Files processed by the extension
    includes: ["src/**/*.vue", "src/**/*.js"],
  },
};
