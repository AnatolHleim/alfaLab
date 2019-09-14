import {browser, Config} from "protractor";
var HtmlReporter = require('protractor-beautiful-reporter');

export const config: Config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    SELENIUM_PROMISE_MANAGER: false,
    capabilities: {
        'browserName': 'chrome'
    },
    framework: 'jasmine2',
    specs: ['src/spec/todo-spec.js'],
    baseUrl: 'https://online.alfabank.by/Default/openaccount',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000,
        showColors: true

    },
    onPrepare: function () {
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(3000);
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'test-results',
            preserveDirectory: false, // Preserve base directory
            screenshotsSubfolder: 'screenshots',
            jsonsSubfolder: 'jsons', // JSONs Subfolder
            takeScreenShotsForSkippedSpecs: true, // Screenshots for skipped test cases
            takeScreenShotsOnlyForFailedSpecs: false, // Screenshots only for failed test cases
            docTitle: 'Test Automation Execution Report', // Add title for the html report
            docName: 'TestResult.html', // Change html report file name
            gatherBrowserLogs: true // Store Browser logs
        }).getJasmine2Reporter());

        let ConsoleReporter = require('jasmine2-reporter').Jasmine2Reporter
        let console_reporter_options = {
            startingSpec: true
        }
        jasmine.getEnv().addReporter(new ConsoleReporter(console_reporter_options))

    }
};
