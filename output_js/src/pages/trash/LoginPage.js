"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const HomePage_1 = require("./HomePage");
const SelectUserPage_1 = require("./SelectUserPage");
class LoginPage {
    constructor() {
        this.userNameInput = protractor_1.element(protractor_1.by.id("some"));
        this.userPasswordInput = protractor_1.element(protractor_1.by.id("some"));
        this.loginButton = protractor_1.element(protractor_1.by.id("some"));
        this.demoLoginButton = protractor_1.element(protractor_1.by.id('demo-login'));
    }
    get() {
        protractor_1.browser.get("https://online.alfabank.by");
        return this;
    }
    login(userName, password) {
        this.userNameInput.sendKeys(userName);
        this.userPasswordInput.sendKeys(password);
        this.loginButton.click();
        return new HomePage_1.HomePage();
    }
    demoLogin() {
        this.demoLoginButton.click();
        return new SelectUserPage_1.SelectUserPage();
    }
}
exports.LoginPage = LoginPage;
