"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    }
};
