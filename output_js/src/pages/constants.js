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
class Constants {
    constructor() {
        this._validUNP = '192230006';
        this._validPhone = '322132131';
        this._lessDigitUNP = '12345678';
        this._invalidUNP = '192230005';
        this._lessDigitPhone = '1';
        this._searchQuery = 'администрация';
    }
    ;
    validUNP() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._validUNP;
        });
    }
    ;
    invalidUNP() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._invalidUNP;
        });
    }
    ;
    lessDigitUNP() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._lessDigitUNP;
        });
    }
    ;
    validPhone() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._validPhone;
        });
    }
    ;
    invalidEmail() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._invalidUNP;
        });
    }
    ;
    lessDigitPhone() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._lessDigitPhone;
        });
    }
    ;
    searchQuery() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._searchQuery;
        });
    }
    ;
}
exports.Constants = Constants;
;
