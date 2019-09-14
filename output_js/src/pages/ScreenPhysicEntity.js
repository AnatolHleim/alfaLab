"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const HelperMethods_1 = require("./HelperMethods");
class ScreenPhysicEntity {
    constructor() {
        this.logo = protractor_1.$("TO DO");
        this.titleScreen = protractor_1.$("TO DO");
        this.informationMessage = protractor_1.$("TO DO");
    }
    getTextTitle() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(this.titleScreen), 5000, 'Waiting for title');
            return yield HelperMethods_1.HelperMethods.getText(this.titleScreen);
        });
    }
    getTextInformation() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(this.informationMessage), 5000, 'Waiting for info');
            return yield HelperMethods_1.HelperMethods.getText(this.informationMessage);
        });
    }
    clickLogo() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(this.logo), 5000, 'Waiting for logo');
            yield this.logo.click();
        });
    }
}
exports.ScreenPhysicEntity = ScreenPhysicEntity;
