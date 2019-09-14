"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
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
        protractor_1.browser.manage().window().maximize();
        protractor_1.browser.manage().timeouts().implicitlyWait(3000);
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'test-results',
            preserveDirectory: false,
            screenshotsSubfolder: 'screenshots',
            jsonsSubfolder: 'jsons',
            takeScreenShotsForSkippedSpecs: true,
            takeScreenShotsOnlyForFailedSpecs: false,
            docTitle: 'Test Automation Execution Report',
            docName: 'TestResult.html',
            gatherBrowserLogs: true
        }).getJasmine2Reporter());
        let ConsoleReporter = require('jasmine2-reporter').Jasmine2Reporter;
        let console_reporter_options = {
            startingSpec: true
        };
        jasmine.getEnv().addReporter(new ConsoleReporter(console_reporter_options));
    }
};
