
export class Constants {
    private readonly _validUNPToScreenTwo: string;
    private readonly _validUNPToRegister: string;
    private readonly _validUNPNoEGR: string;
    private readonly _validUNPEntity: string;
    private readonly _invalidUNPMoreValue: string;
    private readonly _validPhone: string;
    private readonly _invalidUNP: string;
    private readonly _lessDigitUNP: string;
    private readonly _lessDigitPhone: string;
    private readonly _moreDigitPhone: string;
    private readonly _searchQuery: string;
    private readonly _textPopUp: string;
    private readonly _textPopUpButtonReturn: string;
    private readonly _textPopUpButtonAbort: string;
    private readonly _errorInvalidUNP: string;
    private readonly _errorNotFullUNP: string;
    private readonly _errorIncorrectPhone: string;
    private readonly _errorCheckBoxAdded: string;

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
    };

    public async errorCheckBoxAdded() {
        return this._errorCheckBoxAdded;
    };

    public async errorIncorrectPhone() {
        return this._errorIncorrectPhone;
    };

    public async errorIncorrectUNP() {
        return this._errorInvalidUNP;
    };

    public async errorNotFullUNP() {
        return this._errorNotFullUNP;
    };

    public async validUNPToScreenTwo() {
        return this._validUNPToScreenTwo;
    };

    public async invalidUNPMoreValue() {
        return this._invalidUNPMoreValue;
    };

    public async validUNPToRegister() {
        return this._validUNPToRegister;
    };

    public async validUNPNoEGR() {
        return this._validUNPNoEGR;
    };

    public async validUNPEntity() {
        return this._validUNPEntity;
    };

    public async invalidUNP() {
        return this._invalidUNP;
    };

    public async lessDigitUNP() {
        return this._lessDigitUNP;
    };

    public async validPhone() {
        return this._validPhone;
    };

    public async lessDigitPhone() {
        return this._lessDigitPhone;
    };

    public async moreDigitPhone() {
        return this._moreDigitPhone;
    };

    public async searchQuery() {
        return this._searchQuery;
    };

    public async textPopUp() {
        return this._textPopUp;
    };

    public async textPopUpButtonReturn() {
        return this._textPopUpButtonReturn;
    };

    public async textPopUpButtonAbort() {
        return this._textPopUpButtonAbort;
    };
}