"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class EntityDocument {
    constructor() {
        this.titleDocument = protractor_1.$("#prtl0 > h1 > span");
        this.numberDocumentInput = protractor_1.element(protractor_1.by.name("DocumentNumber"));
        this.buttonSubmit = protractor_1.element(protractor_1.by.id("btnSave"));
    }
}
exports.EntityDocument = EntityDocument;
