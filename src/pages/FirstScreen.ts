import {$, browser, ExpectedConditions as EC, element, By} from 'protractor';
import {HelperMethods} from "./HelperMethods";

export class FirstScreen {
    private fieldInputUNP;
    private fieldInputPhone;
    private checkBoxAgreeLicence;
    private fieldInputSMSCode;
    private textSMS;
    private linkSavePersonalInformation;
    private linkLicenceUsed;
    private linkFooterAlfaMainPage;
    private buttonSubmit;
    private messageErrorUNP;
    private messageErrorPhone;
    private messageErrorAgreeCheckBox;
    private logo;
    private popUpWarningDialogTitle;
    private popUpDescriptionText;
    private popUpButtonReturnProcess;
    private popUpButtonAbortProcess;

    constructor() {
        this.fieldInputUNP = $("[name='Unp'][type='text']");
        this.fieldInputPhone = $("[name='Phone'][type='text']");
        this.checkBoxAgreeLicence = element(By.id("ConditionAgree"));
        this.buttonSubmit = $("[data-bind='events:{click: btnGetSmsCodeClicked}']");
        this.fieldInputSMSCode = $("[id='smsCode']");
        this.textSMS = $("[class='list-group-item disabled']");
        this.messageErrorUNP = $("[id='Unp-error']");
        this.messageErrorPhone = $("[id='Phone-error']");
        this.messageErrorAgreeCheckBox = $("[id='ConditionAgree-error']");
        this.linkSavePersonalInformation = $("[href='https://alfa-biz.by/about/documentation/']");
        this.linkLicenceUsed = $("[href='https://alfa-biz.by/online/banking/alfa-business-online/#more_info']");
        this.linkFooterAlfaMainPage = $("[href='https://www.alfabank.by/']");
        this.logo = $("[name='logo-link']");
        this.popUpWarningDialogTitle = $("[class='k-window-title']");
        this.popUpButtonReturnProcess = $("[data-bind='click: closeWindowWithCallBack']");
        this.popUpButtonAbortProcess = $("[data-bind='click: closeWindow']");
        this.popUpDescriptionText = $("[class='alert']");

    }

    public async start() {
        await browser.get('');
        browser.manage().window().maximize();
        await browser.wait(EC.visibilityOf(this.buttonSubmit), 5000, `Waiting for button`);
    };

    public async sendDataForSMSButton() {
        await this.buttonSubmit.click();
    };

    public async requiredUNPError() {
        await browser.wait(EC.visibilityOf(this.messageErrorUNP), 5000, 'Waiting for requiredUNP');
        return await HelperMethods.getText(this.messageErrorUNP);
    };

    public async requiredPhoneError() {
        await browser.wait(EC.visibilityOf(this.messageErrorPhone), 5000, 'Waiting for requiredPhone');
        return await HelperMethods.getText(this.messageErrorPhone);
    };

    public async requiredCheckBoxError() {
        await browser.wait(EC.visibilityOf(this.messageErrorAgreeCheckBox), 5000, 'Waiting for requiredCheckBox');
        return await HelperMethods.getText(this.messageErrorAgreeCheckBox);
    };

    public async typeUNP(UNP) {
        await this.fieldInputUNP.click();
        await this.fieldInputUNP.clear();
        await this.fieldInputUNP.sendKeys(UNP);
    };

    public async typePhone(phone) {
        await this.fieldInputPhone.click();
        await this.fieldInputPhone.clear();
        await this.fieldInputPhone.sendKeys(phone);
    };

    public async typeSMS(SMS) {
        await this.fieldInputSMSCode.click();
        await this.fieldInputSMSCode.clear();
        await this.fieldInputSMSCode.sendKeys(SMS);
    };

    public async sendCredentials(UNP, phone) {
        await this.typeUNP(UNP);
        await this.typePhone(phone);
        await this.checkBoxAgreeLicence.click();
        await this.buttonSubmit.click();
        await browser.wait(EC.visibilityOf(this.fieldInputSMSCode), 5000, `Waiting for field SMS-code`);
    };

    public async newTabPersonalDataLinkVerify() {
        await this.linkSavePersonalInformation.click();
        await HelperMethods.switchToNewTabIfAvailable();
        let title = await HelperMethods.getPageTitle();
        await HelperMethods.switchToFirstTab();
        return title;
    }

    public async newTabLicenceUsedLinkVerify() {
        await this.linkLicenceUsed.click();
        await HelperMethods.switchToNewTabIfAvailable();
        let title = await HelperMethods.getPageTitle();
        await HelperMethods.switchToFirstTab();
        return title;
    }

    public async newTabMainPageLinkVerify() {
        await this.linkFooterAlfaMainPage.click();
        await HelperMethods.switchToNewTabIfAvailable();
        let title = await HelperMethods.getPageTitle();
        await HelperMethods.switchToFirstTab();
        return title;
    }

    public async getSMSCode(url: string) {
        await HelperMethods.executeScript("window.open()");
        await HelperMethods.switchToNewTabIfAvailable();
        await browser.driver.get(url);
        await browser.wait(EC.visibilityOf(this.textSMS), 5000, `Waiting for text`);
        let res = (await HelperMethods.getText(this.textSMS)).replace('"', '');
        await HelperMethods.switchToFirstTab();
        return res;
    }

    public async clickLogo() {
        await this.logo.click();
        await browser.wait(EC.visibilityOf(this.popUpWarningDialogTitle), 5000, `Waiting pop-up`);
        return await HelperMethods.getText(this.popUpWarningDialogTitle);
    }

    public async getTextPopUpDescription() {
        return await HelperMethods.getText(this.popUpDescriptionText);
    }
    public async getTextPopUpButtonReturnProcess() {
        return await HelperMethods.getText(this.popUpButtonReturnProcess);
    }
    public async getTextPopUpButtonAbortProcess() {
        return await HelperMethods.getText(this.popUpButtonAbortProcess);
    }

    public async getTextFieldUNP() {
        return await HelperMethods.getAttributeValue(this.fieldInputUNP, 'value');
    }

    public async getTextFieldPhone() {
        return await HelperMethods.getAttributeValue(this.fieldInputPhone, 'value');
    }
}
