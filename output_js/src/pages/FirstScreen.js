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
class FirstScreen {
    constructor() {
        this.fieldInputUNP = protractor_1.$("[name='Unp'][type='text']");
        this.fieldInputPhone = protractor_1.$("[name='Phone'][type='text']");
        this.checkBoxAgreeLicence = protractor_1.element(protractor_1.By.id("ConditionAgree"));
        this.buttonSubmit = protractor_1.$("[data-bind='events:{click: btnGetSmsCodeClicked}']");
        this.fieldInputSMSCode = protractor_1.$("[id='smsCode']");
        this.textSMS = protractor_1.$("[class='list-group-item disabled']");
        this.messageErrorUNP = protractor_1.$("[id='Unp-error']");
        this.messageErrorPhone = protractor_1.$("[id='Phone-error']");
        this.messageErrorAgreeCheckBox = protractor_1.$("[id='ConditionAgree-error']");
        this.linkSavePersonalInformation = protractor_1.$("[href='https://alfa-biz.by/about/documentation/']");
        this.linkLicenceUsed = protractor_1.$("[href='https://alfa-biz.by/online/banking/alfa-business-online/#more_info']");
        this.linkFooterAlfaMainPage = protractor_1.$("[href='https://www.alfabank.by/']");
        this.logo = protractor_1.$("[name='logo-link']");
        this.popUpWarningDialogTitle = protractor_1.$("[class='k-window-title']");
        this.popUpButtonReturnProcess = protractor_1.$("[data-bind='click: closeWindowWithCallBack']");
        this.popUpButtonAbortProcess = protractor_1.$("[data-bind='click: closeWindow']");
        this.popUpDescriptionText = protractor_1.$("[class='alert']");
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.get('');
            yield HelperMethods_1.HelperMethods.maximizeWindow();
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(this.buttonSubmit), 5000, `Waiting for button`);
        });
    }
    ;
    sendDataForSMSButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.buttonSubmit.click();
        });
    }
    ;
    requiredUNPError() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(this.messageErrorUNP), 5000, 'Waiting for requiredUNP');
            return yield HelperMethods_1.HelperMethods.getText(this.messageErrorUNP);
        });
    }
    ;
    requiredPhoneError() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(this.messageErrorPhone), 5000, 'Waiting for requiredPhone');
            return yield HelperMethods_1.HelperMethods.getText(this.messageErrorPhone);
        });
    }
    ;
    requiredCheckBoxError() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(this.messageErrorAgreeCheckBox), 5000, 'Waiting for requiredCheckBox');
            return yield HelperMethods_1.HelperMethods.getText(this.messageErrorAgreeCheckBox);
        });
    }
    ;
    typeUNP(UNP) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fieldInputUNP.click();
            yield this.fieldInputUNP.clear();
            yield this.fieldInputUNP.sendKeys(UNP);
        });
    }
    ;
    typePhone(phone) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fieldInputPhone.click();
            yield this.fieldInputPhone.clear();
            yield this.fieldInputPhone.sendKeys(phone);
        });
    }
    ;
    typeSMS(SMS) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fieldInputSMSCode.click();
            yield this.fieldInputSMSCode.clear();
            yield this.fieldInputSMSCode.sendKeys(SMS);
        });
    }
    ;
    sendCredentials(UNP, phone) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.typeUNP(UNP);
            yield this.typePhone(phone);
            yield this.checkBoxAgreeLicence.click();
            yield this.buttonSubmit.click();
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(this.fieldInputSMSCode), 5000, `Waiting for field SMS-code`);
        });
    }
    ;
    newTabPersonalDataLinkVerify() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.linkSavePersonalInformation.click();
            yield HelperMethods_1.HelperMethods.switchToNewTabIfAvailable();
            let title = yield HelperMethods_1.HelperMethods.getPageTitle();
            yield HelperMethods_1.HelperMethods.switchToFirstTab();
            return title;
        });
    }
    newTabLicenceUsedLinkVerify() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.linkLicenceUsed.click();
            yield HelperMethods_1.HelperMethods.switchToNewTabIfAvailable();
            let title = yield HelperMethods_1.HelperMethods.getPageTitle();
            yield HelperMethods_1.HelperMethods.switchToFirstTab();
            return title;
        });
    }
    newTabMainPageLinkVerify() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.linkFooterAlfaMainPage.click();
            yield HelperMethods_1.HelperMethods.switchToNewTabIfAvailable();
            let title = yield HelperMethods_1.HelperMethods.getPageTitle();
            yield HelperMethods_1.HelperMethods.switchToFirstTab();
            return title;
        });
    }
    getSMSCode(url) {
        return __awaiter(this, void 0, void 0, function* () {
            yield HelperMethods_1.HelperMethods.executeScript("window.open()");
            yield HelperMethods_1.HelperMethods.switchToNewTabIfAvailable();
            yield protractor_1.browser.driver.get(url);
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(this.textSMS), 5000, `Waiting for text`);
            let res = (yield HelperMethods_1.HelperMethods.getText(this.textSMS)).replace('"', '');
            yield HelperMethods_1.HelperMethods.switchToFirstTab();
            return res;
        });
    }
    clickLogo() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.logo.click();
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(this.popUpWarningDialogTitle), 5000, `Waiting pop-up`);
            return yield HelperMethods_1.HelperMethods.getText(this.popUpWarningDialogTitle);
        });
    }
    getTextPopUpDescription() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield HelperMethods_1.HelperMethods.getText(this.popUpDescriptionText);
        });
    }
    getTextPopUpButtonReturnProcess() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield HelperMethods_1.HelperMethods.getText(this.popUpButtonReturnProcess);
        });
    }
    getTextPopUpButtonAbortProcess() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield HelperMethods_1.HelperMethods.getText(this.popUpButtonAbortProcess);
        });
    }
    getTextFieldUNP() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield HelperMethods_1.HelperMethods.getAttributeValue(this.fieldInputUNP, 'value');
        });
    }
    getTextFieldPhone() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield HelperMethods_1.HelperMethods.getAttributeValue(this.fieldInputPhone, 'value');
        });
    }
}
exports.FirstScreen = FirstScreen;
