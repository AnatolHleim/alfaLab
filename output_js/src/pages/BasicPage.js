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
const shortId = require('shortid');
const remote = require('selenium-webdriver/remote');
class BasicPage {
    static get isFullScreen() {
        const fullScreenScript = 'if (!window.screenTop && !window.screenY){return true;}'
            + 'else{return false;}';
        return protractor_1.browser.executeScript(fullScreenScript);
    }
    static actionKeyDown(key) {
        return protractor_1.browser.actions().keyDown(key).perform();
    }
    static executeInIframe(index, fn) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.switchTo().frame(index);
            yield fn();
            yield protractor_1.browser.switchTo().defaultContent();
            yield protractor_1.browser.waitForAngular();
        });
    }
    static actionSendKeys(key) {
        return protractor_1.browser.actions().sendKeys(key).perform();
    }
    static sendKeysToInputField(elem, key) {
        return __awaiter(this, void 0, void 0, function* () {
            yield elem.sendKeys(key);
        });
    }
    static actionKeyUp(key) {
        return protractor_1.browser.actions().keyUp(key).perform();
    }
    static keyPressForBrowser(key) {
        return protractor_1.browser.actions().sendKeys(key).perform();
    }
    static actionMouseUp(location) {
        return protractor_1.browser.actions().mouseUp(location).perform();
    }
    static maximizeWindow() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.resizeWindow();
        });
    }
    static resizeHorizontally(height) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.resizeWindow(-1, height);
        });
    }
    static resizeVertically(width) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.resizeWindow(width);
        });
    }
    static resizeWindow(width = -1, height = -1) {
        return __awaiter(this, void 0, void 0, function* () {
            class Size {
            }
            const windowSize = yield this.executeScript(function () {
                return {
                    width: window.screen.availWidth,
                    height: window.screen.availHeight,
                };
            });
            const result = windowSize;
            if (width !== -1) {
                result.width = width;
            }
            if (height !== -1) {
                result.height = height;
            }
            return this.setWindowSize(result.width, result.height);
        });
    }
    static setWindowSize(width, height) {
        return __awaiter(this, void 0, void 0, function* () {
            return protractor_1.browser.driver
                .manage()
                .window()
                .setSize(width, height);
        });
    }
    static executeScript(script, ...varArgs) {
        return __awaiter(this, void 0, void 0, function* () {
            return protractor_1.browser.driver.executeScript(script, varArgs);
        });
    }
    static switchToNewTabIfAvailable(windowNumber = 1) {
        return __awaiter(this, void 0, void 0, function* () {
            const handles = yield protractor_1.browser.getAllWindowHandles();
            const newWindowHandle = handles[windowNumber];
            if (newWindowHandle) {
                yield protractor_1.browser.switchTo().window(newWindowHandle);
            }
            const url = yield protractor_1.browser.getCurrentUrl();
            return protractor_1.browser.driver.get(url);
        });
    }
    static switchToFirstTab() {
        return __awaiter(this, void 0, void 0, function* () {
            const handles = yield protractor_1.browser.getAllWindowHandles();
            yield protractor_1.browser.driver.close();
            yield protractor_1.browser.switchTo().window(handles[0]);
        });
    }
    static clickAllElements(targetElements) {
        return __awaiter(this, void 0, void 0, function* () {
            yield targetElements.each(function (elem) {
                return __awaiter(this, void 0, void 0, function* () {
                    yield elem.click();
                });
            });
        });
    }
    static getTextWithNoWait(elem) {
        return __awaiter(this, void 0, void 0, function* () {
            const text = yield elem.getText();
            return text;
        });
    }
    static currentUrl() {
        return __awaiter(this, void 0, void 0, function* () {
            return protractor_1.browser.getCurrentUrl();
        });
    }
    static getPageTitle() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield protractor_1.browser.getTitle();
        });
    }
    static refreshPage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.refresh();
        });
    }
    static isElementHidden(targetElement, toWait = true) {
        return __awaiter(this, void 0, void 0, function* () {
            if (toWait) {
                return protractor_1.browser.wait(() => __awaiter(this, void 0, void 0, function* () { return !(yield targetElement.isPresent()) || !(yield targetElement.isDisplayed()); })).then(() => true).catch(() => false);
            }
            return !(yield targetElement.isPresent()) || !(yield targetElement.isDisplayed());
        });
    }
    static isListSorted(sourceList, isAscending) {
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
    static getAllTexts(elements) {
        return __awaiter(this, void 0, void 0, function* () {
            const allTexts = [];
            const allItems = yield elements.asElementFinders_();
            for (const elem of allItems) {
                const elementText = yield this.getText(elem);
                allTexts.push(elementText);
            }
            return allTexts;
        });
    }
    static getText(elem) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(() => __awaiter(this, void 0, void 0, function* () { return (yield elem.getText()).trim() !== ''; })).catch(() => false);
            const text = yield elem.getText();
            return text.trim();
        });
    }
    static switchToDefaultContent() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.switchTo().defaultContent();
            yield protractor_1.browser.waitForAngularEnabled(false);
        });
    }
    static acceptAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield protractor_1.browser.switchTo().alert().accept();
        });
    }
    static getUniqueId() {
        shortId.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_');
        return shortId.generate().replace(/-/g, '').replace(/_/g, '');
    }
    static getUniqueIdForCategory(length) {
        return Math.random().toString(36).substr(2, length);
    }
    static getUniqueIdWithAlphabetsOnly() {
        return this.getUniqueId().replace(/[0-9]/g, '');
    }
    static getUniqueIntId(size = 6) {
        return Math.floor(Math.pow(10, size - 1) + Math.random() * 9 * Math.pow(10, size - 1)).toString();
    }
    static sleepForXSec(milliseconds) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.sleep(milliseconds);
        });
    }
    static randomString(size) {
        return __awaiter(this, void 0, void 0, function* () {
            let text = '';
            const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            for (let i = 0; i < size; i++) {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            return text;
        });
    }
    static numberFromString(text) {
        return Number(text.replace(/\D+/g, ''));
    }
    static getAllTextsInLowerCase(elements) {
        return __awaiter(this, void 0, void 0, function* () {
            const allTexts = [];
            const allItems = yield elements.asElementFinders_();
            for (const elem of allItems) {
                const elementText = yield this.getText(elem);
                allTexts.push(elementText.toLowerCase());
            }
            return allTexts;
        });
    }
    static replaceSpaceWithMinus(text) {
        return __awaiter(this, void 0, void 0, function* () {
            return text.replace(/\s+/g, '-');
        });
    }
    static getCssValue(elem, attribute) {
        return __awaiter(this, void 0, void 0, function* () {
            const attributeValue = yield elem.getCssValue(attribute);
            return attributeValue.trim();
        });
    }
    static switchToMainWindowByClosingOtherWindows() {
        return __awaiter(this, void 0, void 0, function* () {
            const handles = yield protractor_1.browser.getAllWindowHandles();
            let windowNumber;
            if (handles.length > 1) {
                for (windowNumber = 1; windowNumber < handles.length; windowNumber++) {
                    const newWindowHandle = handles[windowNumber];
                    if (newWindowHandle) {
                        yield protractor_1.browser.switchTo().window(newWindowHandle);
                        yield protractor_1.browser.close();
                    }
                }
                yield protractor_1.browser.switchTo().window(handles[0]);
            }
        });
    }
    static switchToNewWindowIfAvailable(windowNumber = 1) {
        return __awaiter(this, void 0, void 0, function* () {
            const handles = yield protractor_1.browser.getAllWindowHandles();
            const newWindowHandle = handles[windowNumber];
            if (newWindowHandle) {
                yield protractor_1.browser.switchTo().window(newWindowHandle);
            }
            const url = yield protractor_1.browser.getCurrentUrl();
            return protractor_1.browser.driver.get(url);
        });
    }
    static getWindowHandles(windowHandle) {
        return __awaiter(this, void 0, void 0, function* () {
            const handles = yield protractor_1.browser.getAllWindowHandles();
            if (handles.length > windowHandle) {
                return handles[windowHandle];
            }
        });
    }
    static switchToWindow(number) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.driver.switchTo().window(number);
        });
    }
}
BasicPage.MAX_RETRY_ATTEMPTS = 3;
BasicPage.timeout = {
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
BasicPage.EC = protractor_1.protractor.ExpectedConditions;
exports.BasicPage = BasicPage;
