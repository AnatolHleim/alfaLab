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
class HelperMethods {
    static maximizeWindow() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.resizeWindow();
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
    static getText(elem) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(() => __awaiter(this, void 0, void 0, function* () { return (yield elem.getText()).trim() !== ''; })).catch(() => false);
            const text = yield elem.getText();
            return text.trim();
        });
    }
    static switchToFirstTab() {
        return __awaiter(this, void 0, void 0, function* () {
            const handles = yield protractor_1.browser.getAllWindowHandles();
            yield protractor_1.browser.driver.close();
            yield protractor_1.browser.switchTo().window(handles[0]);
        });
    }
    static getPageTitle() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield protractor_1.browser.getTitle();
        });
    }
    static getAttributeValue(elem, attribute) {
        return __awaiter(this, void 0, void 0, function* () {
            const attributeValue = yield elem.getAttribute(attribute);
            return attributeValue.trim();
        });
    }
}
exports.HelperMethods = HelperMethods;
