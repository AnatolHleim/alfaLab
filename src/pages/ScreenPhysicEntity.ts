import {$, browser, ExpectedConditions as EC} from "protractor";
import {HelperMethods} from "./HelperMethods";

export class ScreenPhysicEntity {
    private logo;
    private titleScreen;
    private informationMessage;


    constructor() {
        this.logo = $("TO DO");
        this.titleScreen = $("TO DO");
        this.informationMessage = $("TO DO");

    }

    public async getTextTitle() {
        await browser.wait(EC.visibilityOf(this.titleScreen), 5000, 'Waiting for title');
        return await HelperMethods.getText(this.titleScreen);
    }

    public async getTextInformation() {
        await browser.wait(EC.visibilityOf(this.informationMessage), 5000, 'Waiting for info');
        return await HelperMethods.getText(this.informationMessage);
    }

    public async clickLogo() {
        await browser.wait(EC.visibilityOf(this.logo), 5000, 'Waiting for logo');
        await this.logo.click();
    }
}