"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const HomePage_1 = require("./HomePage");
class SelectUserPage {
    constructor() {
        this.arrayUser = protractor_1.element.all(protractor_1.by.className("organization-choice__list-item"));
    }
    getUser(userNumber) {
        (this.arrayUser).get(userNumber).click();
        return new HomePage_1.HomePage();
    }
}
exports.SelectUserPage = SelectUserPage;
