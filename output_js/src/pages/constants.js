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
        this._textPopUpButtonReturn = 'Да, продолжить';
        this._textPopUpButtonAbort = 'Прервать процесс';
        this._errorInvalidUNP = "Неверный УНП";
        this._errorNotFullUNP = "Введите УНП компании (9 цифр)";
        this._errorIncorrectPhone = "Введите номер мобильного телефона";
        this._errorCheckBoxAdded = "Подтвердите согласие с условиями использования";
    }
    ;
    errorCheckBoxAdded() {
        return __awaiter(this, void 0, void 0, function* () {
            return this._errorCheckBoxAdded;
        });
    }
    ;
    errorIncorrectPhone() {
        return __awaiter(this, void 0, void 0, function* () {
            return this._errorIncorrectPhone;
        });
    }
    ;
    errorIncorrectUNP() {
        return __awaiter(this, void 0, void 0, function* () {
            return this._errorInvalidUNP;
        });
    }
    ;
    errorNotFullUNP() {
        return __awaiter(this, void 0, void 0, function* () {
            return this._errorNotFullUNP;
        });
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
            return this._invalidUNPMoreValue;
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
            return this._invalidUNP;
        });
    }
    ;
    lessDigitUNP() {
        return __awaiter(this, void 0, void 0, function* () {
            return this._lessDigitUNP;
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
            return this._lessDigitPhone;
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
    textPopUpButtonReturn() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._textPopUpButtonReturn;
        });
    }
    ;
    textPopUpButtonAbort() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._textPopUpButtonAbort;
        });
    }
    ;
}
exports.Constants = Constants;
