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
        this._validUNPToRegister = 'todo';
        this._validUNPNoEGR = 'todo';
        this._validUNPToScreenTwo = '192230006';
        this._invalidUNPMoreValue = '192230006342432432432423423';
        this._validUNPEntity = 'todo';
        this._validPhone = '322132131';
        this._lessDigitUNP = '12345678';
        this._invalidUNP = '192230005';
        this._lessDigitPhone = '1';
        this._moreDigitPhone = '131231231231232131231321';
        this._searchQuery = 'администрация';
        this._textPopUp = 'Вы собираетесь прервать процесс открытия счета. Все введенные данные не сохранятся. Продолжить открытие счета?';
    }
    ;
    validUNPToScreenTwo() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._validUNPToScreenTwo;
        });
    }
    ;
    invalidUNPMoreValue() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._invalidUNPMoreValue;
        });
    }
    ;
    validUNPToRegister() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._validUNPToRegister;
        });
    }
    ;
    validUNPNoEGR() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._validUNPNoEGR;
        });
    }
    ;
    validUNPEntity() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._validUNPEntity;
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
    lessDigitPhone() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._lessDigitPhone;
        });
    }
    ;
    moreDigitPhone() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._moreDigitPhone;
        });
    }
    ;
    searchQuery() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._searchQuery;
        });
    }
    ;
    textPopUp() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._textPopUp;
        });
    }
    ;
}
exports.Constants = Constants;
