import {browser, ElementFinder} from 'protractor';

export class HelperMethods {

    static async executeScript(script: string | Function, ...varArgs: any[]) {
        return browser.driver.executeScript(script, varArgs);
    }

    static async switchToNewTabIfAvailable(windowNumber = 1) {
        const handles = await browser.getAllWindowHandles();
        const newWindowHandle = handles[windowNumber]; // это новая вкладка
        if (newWindowHandle) {
            await browser.switchTo().window(newWindowHandle);
        }
        const url = await browser.getCurrentUrl();
        return browser.driver.get(url);
    }

    static async getText(elem: ElementFinder) {
        await browser.wait(async () => (await elem.getText()).trim() !== '').catch(() => false);
        const text = await elem.getText();
        return text.trim();
    }

    public static async switchToFirstTab() {
        const handles = await browser.getAllWindowHandles();
        await browser.driver.close();
        await browser.switchTo().window(handles[0]);
    }

    public static async getPageTitle() {
        return await browser.getTitle();
    }

    public static async getAttributeValue(elem: ElementFinder, attribute: string) {
        const attributeValue = await elem.getAttribute(attribute);
        return attributeValue.trim();
    }
}