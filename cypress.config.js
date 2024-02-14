const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalStudio: true,
    "screenshotsOnFailure": true,
    "screenshotsFolder": "cypress/screenshots",
    "watchForFileChanges": true,
    "video": true,
    "videosFolder": "cypress/videos",
    reporter: 'mochawesome',
    reporterOptions: {
      charts: true,  // To display small circular charts regarding test results
      json: true,  // Generate JSON file to create custom reports
      reportsDir: 'reports/your-reports-folder',  // Customize the directory in which reports are saved
      reportFilename: '[name]-report',  // Customize the report file name
      overwrite: true  // Generate new report file or overwrite a single file
    },


  }





});

