"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const LoginPage_1 = require("../pages/LoginPage");
const SelectUserPage_1 = require("../pages/SelectUserPage");
const HomePage_1 = require("../pages/HomePage");
const EntityDocument_1 = require("../pages/EntityDocument");
const BasicPage_1 = require("../pages/BasicPage");
const testing_1 = require("selenium-webdriver/testing");
var loginPage = new LoginPage_1.LoginPage();
var selectUser = new SelectUserPage_1.SelectUserPage();
var homePage = new HomePage_1.HomePage();
var entityDocument = new EntityDocument_1.EntityDocument();
var basicPage = new BasicPage_1.BasicPage();
testing_1.describe("Banking project test", function () {
    testing_1.beforeEach(function () {
        protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.manage().timeouts().implicitlyWait(3000);
        loginPage.get();
    });
    testing_1.afterEach(function () {
        protractor_1.browser.manage().deleteAllCookies();
    });
    testing_1.it("Verify title", function () {
        loginPage.demoLogin();
        selectUser.getUser(1);
        homePage.clickCreateNewDocumentButton();
        homePage.selectTypeRubDocument(1);
        let valueTitle;
        entityDocument.titleDocument.getText().then(function (text) {
            valueTitle = (text.toString());
            debugger;
        });
        console.log(valueTitle);
        protractor_1.browser.sleep(2000);
    });
    testing_1.it("Verify arrow back", function () {
        loginPage.get();
        loginPage.demoLogin();
        selectUser.getUser(1);
        homePage.clickCreateNewDocumentButton();
        homePage.selectTypeRubDocument(1);
        entityDocument.numberDocumentInput.clear();
        entityDocument.numberDocumentInput.sendKeys("0123456789");
        protractor_1.browser.sleep(2000);
    });
});
