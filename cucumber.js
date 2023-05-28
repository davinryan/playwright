module.exports = {
  default: {
    paths: ["src/socialTests/business/features"],
    requireModule: ["ts-node/register"],
    parallel: 1,
    format: [
      "json:reports/socialTests/business/report.cucumber.json",
      "summary",
    ],
    formatOptions: { snippetInterface: "async-await" },
    tags: "@social",
    publishQuiet: true,
    require: ["src/socialTests/business/**/*.ts"],
  },
};
