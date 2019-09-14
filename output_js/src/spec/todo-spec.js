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
const FirstScreen_1 = require("../pages/FirstScreen");
const constants_1 = require("../pages/constants");
const firstScreen = new FirstScreen_1.FirstScreen(), constant = new constants_1.Constants();
beforeEach(() => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.waitForAngularEnabled(false);
    yield firstScreen.start();
    protractor_1.browser.executeScript("window.onbeforeunload = function(){};");
    yield protractor_1.browser.manage().deleteAllCookies();
}));
describe('Verify error message', () => {
    it('Incorrect UNP message', () => __awaiter(this, void 0, void 0, function* () {
        yield firstScreen.typeUNP(constant.invalidUNP());
        yield firstScreen.sendDataForSMSButton();
        yield expect(yield firstScreen.requiredUNPError()).toBe("Неверный УНП");
    }));
    it('Empty UNP field message', () => __awaiter(this, void 0, void 0, function* () {
        yield firstScreen.typeUNP("");
        yield firstScreen.sendDataForSMSButton();
        yield expect(yield firstScreen.requiredUNPError()).toBe("Введите УНП компании (9 цифр)");
    }));
    it('Less than 9 digits UNP field message', () => __awaiter(this, void 0, void 0, function* () {
        yield firstScreen.typeUNP(constant.lessDigitUNP());
        yield firstScreen.sendDataForSMSButton();
        yield expect(yield firstScreen.requiredUNPError()).toBe("Введите УНП компании (9 цифр)");
    }));
    it('More than 9 digits UNP field split to 9', () => __awaiter(this, void 0, void 0, function* () {
        yield firstScreen.typeUNP(constant.invalidUNPMoreValue());
        yield expect((yield firstScreen.getTextFieldUNP()).length).toBe(9);
    }));
    it('Empty Phone field message', () => __awaiter(this, void 0, void 0, function* () {
        yield firstScreen.typePhone("");
        yield firstScreen.sendDataForSMSButton();
        yield expect(yield firstScreen.requiredPhoneError()).toBe("Введите номер мобильного телефона");
    }));
    it('Less than 18 digits Phone message', () => __awaiter(this, void 0, void 0, function* () {
        yield firstScreen.typePhone(constant.lessDigitPhone());
        yield firstScreen.sendDataForSMSButton();
        yield expect(yield firstScreen.requiredPhoneError()).toBe("Введите номер мобильного телефона");
    }));
    it('More than 18 digits Phone field split to 18', () => __awaiter(this, void 0, void 0, function* () {
        yield firstScreen.typePhone(constant.invalidUNPMoreValue());
        yield expect((yield firstScreen.getTextFieldPhone()).length).toBe(18);
    }));
    it('Empty checkbox message', () => __awaiter(this, void 0, void 0, function* () {
        yield firstScreen.sendDataForSMSButton();
        yield expect(yield firstScreen.requiredCheckBoxError()).toBe("Подтвердите согласие с условиями использования");
    }));
});
describe('Verify link', () => {
    it('Verify link agree personal data save', () => __awaiter(this, void 0, void 0, function* () {
        yield expect(yield firstScreen.newTabPersonalDataLinkVerify()).toBe("Документы");
    }));
    it('Verify link licence uses soft', () => __awaiter(this, void 0, void 0, function* () {
        yield expect(yield firstScreen.newTabLicenceUsedLinkVerify()).toBe("Альфа-Бизнес Онлайн — Альфа-Банк");
    }));
    it('Verify link footer to home page Alfa-bank', () => __awaiter(this, void 0, void 0, function* () {
        yield expect(yield firstScreen.newTabMainPageLinkVerify()).toBe("Альфа-Банк в Беларуси | Минск");
    }));
    it('Verify popup logo', () => __awaiter(this, void 0, void 0, function* () {
        yield expect(yield firstScreen.clickLogo()).toBe("Подтверждение");
    }));
    it('verify popup text', () => __awaiter(this, void 0, void 0, function* () {
        yield firstScreen.clickLogo();
        yield expect(yield firstScreen.getTextPopUpDescription()).toBe(yield constant.textPopUp());
    }));
    it('verify button continue text', () => __awaiter(this, void 0, void 0, function* () {
        yield firstScreen.clickLogo();
        yield expect(yield firstScreen.getTextPopUpButtonReturnProcess()).toBe(yield constant.textPopUpButtonReturn());
    }));
    it('verify button abort text', () => __awaiter(this, void 0, void 0, function* () {
        yield firstScreen.clickLogo();
        yield expect(yield firstScreen.getTextPopUpButtonAbortProcess()).toBe(yield constant.textPopUpButtonAbort());
    }));
});
