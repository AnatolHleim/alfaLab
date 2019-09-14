import {$, browser, ExpectedConditions as EC} from "protractor";
import {HelperMethods} from "./HelperMethods";

export class ScreenAccountAvailability {
    private logo;
    private titleScreen;
    private informationMessage;
    private buttonStartRegister;
    private buttonAbortProcessRegister;


    constructor() {
        this.titleScreen = $("TO DO");
        this.logo = $("TO DO");
        this.informationMessage = $("TO DO");
        this.buttonStartRegister = $("TO DO");
        this.buttonAbortProcessRegister = $("TO DO");
    }

    public async getTextTitle() {
        await browser.wait(EC.visibilityOf(this.titleScreen), 5000, 'Waiting for title');
        return await HelperMethods.getText(this.titleScreen);
    }

    public async getTextInformation() {
        await browser.wait(EC.visibilityOf(this.informationMessage), 5000, 'Waiting for info');
        return await HelperMethods.getText(this.informationMessage);
    }

    public async getTextButtonRegister() {
        await browser.wait(EC.visibilityOf(this.buttonStartRegister), 5000, 'Waiting for buttonRegister');
        return await HelperMethods.getText(this.buttonStartRegister);
    }

    public async clickButtonAnotherUNP() {
        await browser.wait(EC.visibilityOf(this.buttonStartRegister), 5000, 'Waiting for buttonRegister');
        await this.buttonStartRegister.click();
    }

    public async getTextButtonAbortRegister() {
        await browser.wait(EC.visibilityOf(this.buttonAbortProcessRegister), 5000, 'Waiting for buttonAbortRegister');
        return await HelperMethods.getText(this.buttonAbortProcessRegister);
    }

    public async clickButtonAbortRegister() {
        await browser.wait(EC.visibilityOf(this.buttonAbortProcessRegister), 5000, 'Waiting for buttonAbortRegister');
        await this.buttonAbortProcessRegister.click();
    }

    public async clickLogo() {
        await browser.wait(EC.visibilityOf(this.logo), 5000, 'Waiting for logo');
        await this.logo.click();
    }
}