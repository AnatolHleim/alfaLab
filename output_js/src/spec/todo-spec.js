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
const goToFirstScreen = new FirstScreen_1.FirstScreen(), constant = new constants_1.Constants();
beforeEach(() => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.waitForAngularEnabled(false);
    yield goToFirstScreen.start();
    protractor_1.browser.executeScript("window.onbeforeunload = function(){};");
    yield protractor_1.browser.manage().deleteAllCookies();
}));
describe('Verify error message', () => {
    it('Incorrect UNP message', () => __awaiter(this, void 0, void 0, function* () {
        yield goToFirstScreen.typeUNP(constant.invalidUNP());
        yield goToFirstScreen.sendDataForSMSButton();
        yield expect(yield goToFirstScreen.requiredUNPError()).toBe("Неверный УНП");
    }));
    it('Empty UNP field message', () => __awaiter(this, void 0, void 0, function* () {
        yield goToFirstScreen.typeUNP("");
        yield goToFirstScreen.sendDataForSMSButton();
        yield expect(yield goToFirstScreen.requiredUNPError()).toBe("Введите УНП компании (9 цифр)");
    }));
    it('Less than 9 digits UNP field message', () => __awaiter(this, void 0, void 0, function* () {
        yield goToFirstScreen.typeUNP(constant.lessDigitUNP());
        yield goToFirstScreen.sendDataForSMSButton();
        yield expect(yield goToFirstScreen.requiredUNPError()).toBe("Введите УНП компании (9 цифр)");
    }));
    it('Empty Phone field message', () => __awaiter(this, void 0, void 0, function* () {
        yield goToFirstScreen.typePhone("");
        yield goToFirstScreen.sendDataForSMSButton();
        yield expect(yield goToFirstScreen.requiredPhoneError()).toBe("Введите номер мобильного телефона");
    }));
    it('Less than 9 digits Phone message', () => __awaiter(this, void 0, void 0, function* () {
        yield goToFirstScreen.typePhone(constant.lessDigitPhone());
        yield goToFirstScreen.sendDataForSMSButton();
        yield expect(yield goToFirstScreen.requiredPhoneError()).toBe("Введите номер мобильного телефона");
    }));
    it('Empty checkbox message', () => __awaiter(this, void 0, void 0, function* () {
        yield goToFirstScreen.sendDataForSMSButton();
        yield expect(yield goToFirstScreen.requiredCheckBoxError()).toBe("Подтвердите согласие с условиями использования");
    }));
});
describe('Verify link', () => {
    it('Verify link agree personal data save', () => __awaiter(this, void 0, void 0, function* () {
        yield expect(yield goToFirstScreen.newTabPersonalDataLinkVerify()).toBe("Документы");
    }));
    it('Verify link licence uses soft', () => __awaiter(this, void 0, void 0, function* () {
        yield expect(yield goToFirstScreen.newTabLicenceUsedLinkVerify()).toBe("Альфа-Бизнес Онлайн — Альфа-Банк");
    }));
    it('Verify link footer to home page Alfa-bank', () => __awaiter(this, void 0, void 0, function* () {
        yield expect(yield goToFirstScreen.newTabMainPageLinkVerify()).toBe("Альфа-Банк в Беларуси | Минск");
    }));
});
