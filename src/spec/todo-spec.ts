import {browser, ExpectedConditions as EC} from "protractor";
import {FirstScreen} from "../pages/FirstScreen";
import {Constants} from "../pages/constants";

const
    goToFirstScreen : FirstScreen = new FirstScreen(),
    constant : Constants = new Constants();

beforeEach(async ()=> {
    await browser.waitForAngularEnabled(false);
    await goToFirstScreen.start();
    browser.executeScript("window.onbeforeunload = function(){};");
    await browser.manage().deleteAllCookies();
});

describe('Verify error message', () => {

    it('Incorrect UNP message', async () => {
        await goToFirstScreen.typeUNP(constant.invalidUNP());
        await goToFirstScreen.sendDataForSMSButton();
        await expect(await goToFirstScreen.requiredUNPError()).toBe("Неверный УНП");
    });

    it('Empty UNP field message', async () => {
        await goToFirstScreen.typeUNP("");
        await goToFirstScreen.sendDataForSMSButton();
        await expect(await goToFirstScreen.requiredUNPError()).toBe("Введите УНП компании (9 цифр)");
    });

    it('Less than 9 digits UNP field message', async () => {
        await goToFirstScreen.typeUNP(constant.lessDigitUNP());
        await goToFirstScreen.sendDataForSMSButton();
        await expect(await goToFirstScreen.requiredUNPError()).toBe("Введите УНП компании (9 цифр)");
    });

    it('Empty Phone field message', async () => {
        await goToFirstScreen.typePhone("");
        await goToFirstScreen.sendDataForSMSButton();
        await expect(await goToFirstScreen.requiredPhoneError()).toBe("Введите номер мобильного телефона");
    });

    it('Less than 9 digits Phone message', async () => {
        await goToFirstScreen.typePhone(constant.lessDigitPhone());
        await goToFirstScreen.sendDataForSMSButton();
        await expect(await goToFirstScreen.requiredPhoneError()).toBe("Введите номер мобильного телефона");
    });

    it('Empty checkbox message', async () => {
        await goToFirstScreen.sendDataForSMSButton();
        await expect(await goToFirstScreen.requiredCheckBoxError()).toBe("Подтвердите согласие с условиями использования");
    });



});

describe('Verify link', () => {

    it('Verify link agree personal data save', async () => {
        await expect(await goToFirstScreen.newTabPersonalDataLinkVerify()).toBe("Документы");
    });

    it('Verify link licence uses soft', async () => {
        await expect(await goToFirstScreen.newTabLicenceUsedLinkVerify()).toBe("Альфа-Бизнес Онлайн — Альфа-Банк");
    });

    it('Verify link footer to home page Alfa-bank', async () => {
        await expect(await goToFirstScreen.newTabMainPageLinkVerify()).toBe("Альфа-Банк в Беларуси | Минск");
    });
    //
    // it('Login with invalid email', async () => {
    //     await goToBasePage.logInInit();
    //     await goToLoginPage.logIn(constant.invalidEmail(), constant.validPassword());
    //     await expect(goToLoginPage.invalidEmailError()).toMatch("Неправильный email");
    // });
    //
    // it('Login with invalid password', async () => {
    //     await goToBasePage.logInInit();
    //     await goToLoginPage.logInWithInvalidPass(constant.validEmail(), constant.invalidPassword());
    //     await expect(goToLoginPage.invalidPasswordError()).toMatch("Неправильный пароль");
    // });
});
