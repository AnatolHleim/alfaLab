"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const EntityDocument_1 = require("./EntityDocument");
class HomePage {
    constructor() {
        this.newDocumentButton = protractor_1.$('[data-bind="click: btnNewDocumentClick"]');
        this.newDocumentCreate = protractor_1.$$(('[query-type="9"]'));
    }
    clickCreateNewDocumentButton() {
        (this.newDocumentButton).click();
        return this;
    }
    selectTypeRubDocument(type) {
        (this.newDocumentCreate).get(type).click();
        return new EntityDocument_1.EntityDocument();
    }
}
exports.HomePage = HomePage;
