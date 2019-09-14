import {browser} from "protractor";
import {FirstScreen} from "../pages/FirstScreen";
import {Constants} from "../pages/constants";

const
    firstScreen : FirstScreen = new FirstScreen(),
    constant : Constants = new Constants();

beforeEach(async ()=> {
    await browser.waitForAngularEnabled(false);
    await firstScreen.start();
    browser.executeScript("window.onbeforeunload = function(){};");
    await browser.manage().deleteAllCookies();
});

describe('Verify error message', () => {

    it('Incorrect UNP message', async () => {
        await firstScreen.typeUNP(constant.invalidUNP());
        await firstScreen.sendDataForSMSButton();
        await expect(await firstScreen.requiredUNPError()).toBe("Неверный УНП");
    });

    it('Empty UNP field message', async () => {
        await firstScreen.typeUNP("");
        await firstScreen.sendDataForSMSButton();
        await expect(await firstScreen.requiredUNPError()).toBe("Введите УНП компании (9 цифр)");
    });

    it('Less than 9 digits UNP field message', async () => {
        await firstScreen.typeUNP(constant.lessDigitUNP());
        await firstScreen.sendDataForSMSButton();
        await expect(await firstScreen.requiredUNPError()).toBe("Введите УНП компании (9 цифр)");
    });

    it('More than 9 digits UNP field split to 9', async () => {
        await firstScreen.typeUNP(constant.invalidUNPMoreValue());
        await expect((await firstScreen.getTextFieldUNP()).length).toBe(9);
    });

    it('Empty Phone field message', async () => {
        await firstScreen.typePhone("");
        await firstScreen.sendDataForSMSButton();
        await expect(await firstScreen.requiredPhoneError()).toBe("Введите номер мобильного телефона");
    });

    it('Less than 18 digits Phone message', async () => {
        await firstScreen.typePhone(constant.lessDigitPhone());
        await firstScreen.sendDataForSMSButton();
        await expect(await firstScreen.requiredPhoneError()).toBe("Введите номер мобильного телефона");
    });

    it('More than 18 digits Phone field split to 18', async () => {
        await firstScreen.typePhone(constant.invalidUNPMoreValue());
        await expect((await firstScreen.getTextFieldPhone()).length).toBe(18);
    });

    it('Empty checkbox message', async () => {
        await firstScreen.sendDataForSMSButton();
        await expect(await firstScreen.requiredCheckBoxError()).toBe("Подтвердите согласие с условиями использования");
    });



});

describe('Verify link', () => {

    it('Verify link agree personal data save', async () => {
        await expect(await firstScreen.newTabPersonalDataLinkVerify()).toBe("Документы");
    });

    it('Verify link licence uses soft', async () => {
        await expect(await firstScreen.newTabLicenceUsedLinkVerify()).toBe("Альфа-Бизнес Онлайн — Альфа-Банк");
    });

    it('Verify link footer to home page Alfa-bank', async () => {
        await expect(await firstScreen.newTabMainPageLinkVerify()).toBe("Альфа-Банк в Беларуси | Минск");
    });
    it('Verify popup logo', async () => {
        await expect(await firstScreen.clickLogo()).toBe("Подтверждение");
    });
    it('verify popup text', async () => {
        await firstScreen.clickLogo();
        await expect(await firstScreen.getTextPopUpDescription()).toBe(await constant.textPopUp());
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
