/* tslint:disable:max-file-line-count */
/**
 * Page helper for general utility
 */
import { browser, protractor, ElementArrayFinder, ElementFinder, WebElement } from 'protractor';

const shortId = require('shortid');
const remote = require('selenium-webdriver/remote');

export class BasicPage {
    static MAX_RETRY_ATTEMPTS = 3;
    // noinspection JSValidateJSDoc
    /**
     * Timeout collection to meet various needs
     * @type {{xs: number; s: number; m: number; l: number; xl: number; xxl: number; xxxl: number}}
     */
    static timeout = {
        xxs: 1000,
        xs: 2000,
        s: 5000,
        m: 10000,
        l: 25000,
        xl: 50000,
        xxl: 75000,
        xxxl: 200000,
        xxxxl: 500000,
    };
    // tslint:disable-next-line:no-large-timeout

    private static readonly EC = protractor.ExpectedConditions;

    static get isFullScreen() {
        const fullScreenScript = 'if (!window.screenTop && !window.screenY){return true;}'
            + 'else{return false;}';
        return browser.executeScript(fullScreenScript);
    }

    static actionKeyDown(key: string) {
        return browser.actions().keyDown(key).perform();
    }

    static async executeInIframe(index: number | WebElement, fn: Function) {
        await browser.switchTo().frame(index);
        await fn();
        await browser.switchTo().defaultContent();
        await browser.waitForAngular();
    }

    static actionSendKeys(key: string) {
        return browser.actions().sendKeys(key).perform();
    }

    static async sendKeysToInputField(elem: ElementFinder, key: string) {
        await elem.sendKeys(key);
    }

    static actionKeyUp(key: string) {
        return browser.actions().keyUp(key).perform();
    }

    static keyPressForBrowser(key: string) {
        return browser.actions().sendKeys(key).perform();
    }

    static actionMouseUp(location: WebElement) {
        return browser.actions().mouseUp(location).perform();
    }

    // Known issue for chrome, direct maximize window doesn't work
    /**
     * To maximize the browser window
     */
    static async maximizeWindow() {
        return this.resizeWindow();
    }

    static async resizeHorizontally(height: number) {
        return this.resizeWindow(-1, height);
    }

    static async resizeVertically(width: number) {
        return this.resizeWindow(width);
    }

    /**
     * To resize the browser window
     */
    static async resizeWindow(width = -1, height = -1) {
        class Size {
            width: number;
            height: number;
        }

        const windowSize = await this.executeScript(function () {
            return {
                width: window.screen.availWidth,
                height: window.screen.availHeight,
            };
        });

        const result = windowSize as Size;
        if (width !== -1) {
            result.width = width;
        }

        if (height !== -1) {
            result.height = height;
        }

        return this.setWindowSize(result.width, result.height);
    }

    /**
     * Sets window size
     * @param {number} width
     * @param {number} height
     */
    static async setWindowSize(width: number, height: number) {
        return browser.driver
            .manage()
            .window()
            .setSize(width, height);
    }

    /**
     * Wrapper for executing javascript code
     * @param {string | Function} script
     * @param varArgs
     * @returns {promise.Promise<any>}
     */
    static async executeScript(script: string | Function, ...varArgs: any[]) {
        return browser.driver.executeScript(script, varArgs);
    }

    /**
     * Wrapper to return an active element
     * @returns {WebElementPromise}
     static async getFocusedElement() {
    return browser.driver.switchTo().activeElement()
  } */

    /**
     * Switch to a new tab if browser has availability
     * @returns {PromiseLike<boolean> | Promise<boolean> | Q.Promise<any> | promise.Promise<any> | Q.IPromise<any>}
     */
    static async switchToNewTabIfAvailable(windowNumber = 1) {
        const handles = await browser.getAllWindowHandles();
        const newWindowHandle = handles[windowNumber]; // this is your new window
        if (newWindowHandle) {
            await browser.switchTo().window(newWindowHandle);
        }
        const url = await browser.getCurrentUrl();

        // Avoiding bootstraping issue, Known issue
        // Error: Error while waiting for Protractor to sync with the page:
        // "window.angular is undefined. This could be either because this is a non-angular page or
        // because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.
        // See http://git.io/v4gXM for details
        return browser.driver.get(url);
    }

    public static async switchToFirstTab() {
        const handles = await browser.getAllWindowHandles();
        await browser.driver.close();
        await browser.switchTo().window(handles[0]);
    }

    // public static async switchToLastTab() {
    //     const handles = await browser.getAllWindowHandles();
    //     const count = handles.length;
    //     const newWindowHandle = handles[handles.length - Constants.numbers.oneNumber];
    //     if (newWindowHandle) {
    //         await browser.switchTo().window(newWindowHandle);
    //     }
    //     return count;
    // }

    /**
     * Gets html attribute value
     * @param {WebElementPromise} elem
     * @param {string} attribute
     * @returns {string} attribute value
     */
    // static async getAttributeValue(elem: ElementFinder, attribute: string) {
    //     await WaitHelper.waitForElementToBeDisplayed(elem);
    //     const attributeValue = await elem.getAttribute(attribute);
    //     return attributeValue.trim();
    // }

    /**
     * Click on element
     * @param {ElementFinder} targetElement
     * @returns {any}
     */
    // static async click(targetElement: ElementFinder) {
    //     await WaitHelper.waitForElementToBeClickable(targetElement);
    //     return await targetElement.click();
    // }
    //
    // static async waitAndClick(targetElement: ElementFinder) {
    //     await WaitHelper.sleep(PageHelper.timeout.xs);
    //     await WaitHelper.waitForElementToBeClickable(targetElement);
    //     return await targetElement.click();
    // }
    //
    // static async moveToElementAndClick(elem: ElementFinder) {
    //     await ElementHelper.scrollToElement(elem);
    //     await PageHelper.click(elem);
    // }

    // static async fixHeader() {
    //     StepLogger.subStep('Fix the header');
    //     await this.executeScript(`try{
    //     if(location.href.indexOf('kitty')){
    //     document.getElementById('stickyHeader').className
    //     = document.getElementById('stickyHeader').className.replace(/affix(?!\\\\S)/,'')+' affix-top';
    //     console.log('executed menu correction')}}catch{}`);
    // }

    // static async clickIfPresent(targetElement: ElementFinder) {
    //     const isPresent = await targetElement.isPresent();
    //     if (isPresent) {
    //         return this.click(targetElement);
    //     }
    //     return;
    // }

    /**
     * Click on the element and wait for it to get hidden
     * @param {ElementFinder} targetElement
     * @returns {PromiseLike<boolean> | Promise<boolean> | Q.Promise<any> | promise.Promise<any> | Q.IPromise<any>}
     */
    // static async clickAndWaitForElementToHide(targetElement: ElementFinder) {
    //     await WaitHelper.waitForElementToBeClickable(targetElement);
    //     await targetElement.click();
    //     return await WaitHelper.waitForElementToBeHidden(targetElement);
    // }

    /**
     * Click on element if displayed
     * @param {ElementFinder} targetElement
     * @param withoutJs
     * @returns {any}
     */
    // public static async clickIfDisplayed(targetElement: ElementFinder, withoutJs = true) {
    //     const isPresent = await targetElement.isPresent();
    //     if (isPresent === true) {
    //         const isDisplayed = await targetElement.isDisplayed();
    //         if (isDisplayed === true) {
    //             if (withoutJs) {
    //                 await PageHelper.click(targetElement);
    //             } else {
    //                 await ElementHelper.clickUsingJs(targetElement);
    //             }
    //         }
    //     }
    // }

    public static async clickAllElements(targetElements: ElementArrayFinder) {
        await targetElements.each(async function (elem) {
            await elem.click();
        });
    }

    static async getTextWithNoWait(elem: ElementFinder) {
        const text = await elem.getText();
        return text;
    }

    /**
     * Gets promise for current url
     * @returns {any}
     */
    static async currentUrl() {
        return browser.getCurrentUrl();
    }

    public static async getPageTitle() {
        return await browser.getTitle();
    }

    /**
     * Refresh a page
     *
     */
    public static async refreshPage() {
        await browser.refresh();
    }

    // static async switchToFrame(elem: ElementFinder) {
    //     await WaitHelper.waitForElementToBePresent(elem);
    //     const iFrameSelector = await elem.getWebElement();
    //     await browser.driver.switchTo().frame(iFrameSelector);
    // }

    /**
     * Verify whether element is hidden on page or not
     * @param {ElementFinder} targetElement
     * @param {boolean} toWait
     * @returns {Promise<any>}
     */
    static async isElementHidden(targetElement: ElementFinder, toWait = true) {
        if (toWait) {
            return browser.wait(async () =>
                !(await targetElement.isPresent()) || !(await targetElement.isDisplayed()),
            ).then(() => true).catch(() => false);
        }
        return !(await targetElement.isPresent()) || !(await targetElement.isDisplayed());
    }

    /**
     * Verify whether element is displayed on page or not
     * @param {ElementFinder} targetElement
     * @param {boolean} toWait
     * @param {number} timeout
     * @returns {Promise<boolean>}
     */
    // static async isElementDisplayed(targetElement: ElementFinder, toWait = true, timeout = PageHelper.DEFAULT_TIMEOUT) {
    //     let caughtException = false;
    //     if (toWait) {
    //         await WaitHelper.waitForElementToBeDisplayed(targetElement, timeout)
    //             .catch(() => caughtException = true);
    //     }
    //     return !caughtException && await targetElement.isDisplayed();
    // }

    /**
     * Verify whether element is present on page or not
     * @param {ElementFinder} targetElement
     * @param {boolean} toWait
     * @param {number} timeout
     * @returns {Promise<boolean>}
     */
    // static async isElementPresent(targetElement: ElementFinder, toWait = true, timeout = PageHelper.DEFAULT_TIMEOUT) {
    //     let caughtException = false;
    //     if (toWait) {
    //         await WaitHelper.waitForElementToBePresent(targetElement, timeout)
    //             .catch(() => caughtException = true);
    //     }
    //     return !caughtException && await targetElement.isPresent();
    // }

    /**
     * Verify element is not present
     * @param targetElement
     * @param toWait
     * @param timeout
     * @returns {Promise<boolean>}
     */
    // static async isElementNotPresent(targetElement: ElementFinder, toWait = true, timeout = PageHelper.DEFAULT_TIMEOUT) {
    //     let caughtException = false;
    //     if (toWait) {
    //         await WaitHelper.waitForElementNotToBePresent(targetElement, timeout)
    //             .catch(() => caughtException = true);
    //     }
    //     return !caughtException && !(await targetElement.isPresent());
    // }

    /**
     * Verify whether element is enabled on page or not
     * @param {ElementFinder} targetElement
     * @param {boolean} toWait
     * @param {number} timeout
     * @returns {Promise<boolean>}
     */
    // public static async isElementEnabled(targetElement: ElementFinder, toWait = true, timeout = PageHelper.DEFAULT_TIMEOUT) {
    //     let caughtException = false;
    //     if (toWait) {
    //         await WaitHelper.waitForElementToBeEnabled(targetElement, timeout)
    //             .catch(() => caughtException = true);
    //     }
    //     return !caughtException && await targetElement.isEnabled();
    // }

    /**
     * Verify whether element is selected on page or not
     * @param {ElementFinder} targetElement
     * @param {boolean} toWait
     * @param {number} timeout
     * @returns {Promise<boolean>}
     */
    // public static async isElementSelected(targetElement: ElementFinder, toWait = true, timeout = PageHelper.DEFAULT_TIMEOUT) {
    //     let caughtException = false;
    //     if (toWait) {
    //         await WaitHelper.waitForElementToBeSelected(targetElement, timeout)
    //             .catch(() => caughtException = true);
    //     }
    //     return !caughtException && await targetElement.isSelected();
    // }

    static isListSorted(sourceList: any[], isAscending: boolean) {
        let isSorted = true;
        const sortList = Object.assign([], sourceList);
        sortList.sort((a, b) => (((a < b) === isAscending) ? -1 : 1));
        for (let i = 0; i < sourceList.length; i++) {
            if (sourceList[i] !== sortList[i]) {
                isSorted = false;
                break;
            }
        }
        return isSorted;
    }

    /**
     * Gets innertext for all the elements
     * @param {WebElementPromise} elements
     * @returns {string} inner text
     */
    public static async getAllTexts(elements: ElementArrayFinder): Promise<string[]> {
        const allTexts = [];
        const allItems = await elements.asElementFinders_();
        for (const elem of allItems) {
            const elementText = await this.getText(elem);
            allTexts.push(elementText);
        }
        return allTexts;
    }

    static async getText(elem: ElementFinder) {
       // await WaitHelper.waitForElementToBePresent(elem);
        await browser.wait(async () => (await elem.getText()).trim() !== '').catch(() => false);
        const text = await elem.getText();
        return text.trim();
    }

    // public static async getAllTextsInArray(elements: ElementArrayFinder) {
    //     const allTexts: any = await PageHelper.getAllTexts(elements);
    //     return JsHelper.cleanArray(allTexts);
    // }

    // static async switchToiFrame(frameOrIframeElement: ElementFinder, toWait = false, sleepTime = PageHelper.timeout.xs) {
    //     await browser.waitForAngularEnabled(false);
    //     await WaitHelper.waitForElementToBeDisplayed(frameOrIframeElement);
    //     // Wait is needed to load the iframe properly
    //     if (toWait) {
    //         await browser.sleep(sleepTime);
    //     }
    //
    //     return await browser.switchTo().frame(frameOrIframeElement.getWebElement());
    // }

    static async switchToDefaultContent() {
        await browser.switchTo().defaultContent();
        await browser.waitForAngularEnabled(false);
    }

    static async acceptAlert() {
        return await browser.switchTo().alert().accept();
    }

    // static async closeAlertIfPresent() {
    //     try {
    //         await browser.sleep(PageHelper.timeout.xs);
    //         await browser.switchTo().alert().accept().then(null, async function () {
    //             await browser.sleep(PageHelper.timeout.xs);
    //         });
    //     } catch (e) {
    //     }
    // }

    static getUniqueId(): string {
        // noinspection reason: Giving error for unknown character function
        // noinspection Annotator
        shortId.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_');
        return shortId.generate().replace(/-/g, '').replace(/_/g, '');
    }

    static getUniqueIdForCategory(length: number) {
        return Math.random().toString(36).substr(2, length);
    }

    static getUniqueIdWithAlphabetsOnly() {
        return this.getUniqueId().replace(/[0-9]/g, '');
    }

    static getUniqueIntId(size = 6): string {
        // noinspection reason: Giving error for unknown character function
        // noinspection Annotator
        return Math.floor(Math.pow(10, size - 1) + Math.random() * 9 * Math.pow(10, size - 1)).toString();
    }

    // static async uploadFile(item: ElementFinder, filePath: string) {
    //     browser.setFileDetector(new remote.FileDetector());
    //     await WaitHelper.waitForElementToBePresent(item);
    //     await item.sendKeys(filePath);
    // }
    //
    // public static async getAlertText(timeout: number = PageHelper.DEFAULT_TIMEOUT, message: string = 'Alert is not present') {
    //     await this.waitForAlertToBePresent(timeout, message);
    //     return await browser.driver.switchTo().alert().getText();
    // }

    /**
     * Wait for an alert to appear
     * @param {number} timeout in milliseconds
     * @param {string} message
     */
    // public static async waitForAlertToBePresent(timeout: number = PageHelper.DEFAULT_TIMEOUT, message: string = 'Alert is not present') {
    //     return await browser.wait(this.EC.alertIsPresent(), timeout, message);
    // }

    public static async sleepForXSec(milliseconds: number) {
        await browser.sleep(milliseconds);
    }

    static async randomString(size: number) {
        let text = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < size; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }

    public static numberFromString(text: string) {
        return Number(text.replace(/\D+/g, ''));
    }

    /**
     * Gets innertext for all the elements
     * @param {WebElementPromise} elements
     * @returns {string} inner text
     */
    public static async getAllTextsInLowerCase(elements: ElementArrayFinder): Promise<string[]> {
        const allTexts = [];
        const allItems = await elements.asElementFinders_();
        for (const elem of allItems) {
            const elementText = await this.getText(elem);
            allTexts.push(elementText.toLowerCase());
        }
        return allTexts;
    }

    static async replaceSpaceWithMinus(text: string) {
        return text.replace(/\s+/g, '-');
    }

    /**
     * Gets CSS attribute value
     * @param {WebElementPromise} elem
     * @param {string} attribute
     * @returns {string} attribute value
     */
    static async getCssValue(elem: ElementFinder, attribute: string) {
       // await WaitHelper.waitForElementToBeDisplayed(elem);
        const attributeValue = await elem.getCssValue(attribute);
        return attributeValue.trim();
    }

    /**
     * Switch to a new tab if browser has availability
     * @returns {PromiseLike<boolean> | Promise<boolean> | Q.Promise<any> | promise.Promise<any> | Q.IPromise<any>}
     */
    static async switchToMainWindowByClosingOtherWindows() {
        const handles = await browser.getAllWindowHandles();
        let windowNumber: number;
        if (handles.length > 1) {
            for (windowNumber = 1; windowNumber < handles.length; windowNumber++) {
                const newWindowHandle = handles[windowNumber]; // this is your new window
                if (newWindowHandle) {
                    await browser.switchTo().window(newWindowHandle);
                    await browser.close();
                }
            }
            await browser.switchTo().window(handles[0]);
        }
    }

    /**
     * Switch to a new tab if browser has availability
     * @returns {PromiseLike<boolean> | Promise<boolean> | Q.Promise<any> | promise.Promise<any> | Q.IPromise<any>}
     */
    static async switchToNewWindowIfAvailable(windowNumber = 1) {
        const handles = await browser.getAllWindowHandles();
        const newWindowHandle = handles[windowNumber]; // this is your new window
        if (newWindowHandle) {
            await browser.switchTo().window(newWindowHandle);
        }
        const url = await browser.getCurrentUrl();

        // Avoiding bootstraping issue, Known issue
        // Error: Error while waiting for Protractor to sync with the page:
        // "window.angular is undefined. This could be either because this is a non-angular page or
        // because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.
        // See http://git.io/v4gXM for details
        return browser.driver.get(url);
    }

    /**
     * To get required window handle
     * @param {number} windowHandle
     * @returns {Promise<any>}
     */
    static async getWindowHandles(windowHandle: number) {
        const handles = await browser.getAllWindowHandles();
        if (handles.length > windowHandle) {
            return handles[windowHandle];
        }
    }

    static async switchToWindow(number: string) {
        await browser.driver.switchTo().window(number);
    }
}