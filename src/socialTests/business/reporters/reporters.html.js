const reporter = require("cucumber-html-reporter");
const options = {
  // theme: 'bootstrap', hierarchy
  theme: "hierarchy",
  jsonFile: "reports/socialTests/business/report.cucumber.json",
  output: "reports/socialTests/business/report.cucumber.html",
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "STAGING",
  },
};

reporter.generate(options);
