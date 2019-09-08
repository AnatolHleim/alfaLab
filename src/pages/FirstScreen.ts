import {ElementFinder, $, browser, ExpectedConditions as EC, element, By} from 'protractor';
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
        this.linkFooterAlfaMainPage = $("[href='https://www.alfabank.by/']")

    }

    public async start() {
        await browser.get('');
        await browser.wait(EC.visibilityOf(this.buttonSubmit), 5000, `Waiting for button`);
    };

    public async sendDataForSMSButton() {
        await this.buttonSubmit.click();
    };
    public async requiredUNPError() {
        await browser.wait(EC.visibilityOf(this.messageErrorUNP), 5000, 'Waiting for requiredUNP');
        return await this.messageErrorUNP.getText();
    };
    public async requiredPhoneError() {
        await browser.wait(EC.visibilityOf(this.messageErrorPhone), 5000, 'Waiting for requiredPhone');
        return await this.messageErrorPhone.getText();
    };
    public async requiredCheckBoxError() {
        await browser.wait(EC.visibilityOf(this.messageErrorAgreeCheckBox), 5000, 'Waiting for requiredCheckBox');
        return await this.messageErrorAgreeCheckBox.getText();
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

    };

    public async waitSMSInput() {
        await browser.wait(EC.visibilityOf(this.fieldInputSMSCode), 5000, `Waiting for field SMS-code`);
    };
    public async newTabPersonalDataLinkVerify(){
        await this.linkSavePersonalInformation.click();
        await HelperMethods.switchToNewTabIfAvailable();
       let title =  await browser.driver.getTitle();
        await HelperMethods.switchToFirstTab();
        return title;
    }

    public async newTabLicenceUsedLinkVerify(){
        await this.linkLicenceUsed.click();
        await HelperMethods.switchToNewTabIfAvailable();
        let title =  await browser.driver.getTitle();
        await HelperMethods.switchToFirstTab();
        return title;
    }

    public async newTabMainPageLinkVerify(){
        await this.linkFooterAlfaMainPage.click();
        await HelperMethods.switchToNewTabIfAvailable();
        let title =  await browser.driver.getTitle();
        await HelperMethods.switchToFirstTab();
        return title;
    }
    public async getSMSCode() {
        await HelperMethods.executeScript("window.open()");
        await HelperMethods.switchToNewTabIfAvailable();
        await browser.driver.get("file:///C:/Users/unreg/Desktop/html/index.html");
        await browser.wait(EC.visibilityOf(this.textSMS), 5000, `Waiting for text`);
        let res =  await HelperMethods.getText(this.textSMS);
        await HelperMethods.switchToFirstTab();
        return res;
    }

}
