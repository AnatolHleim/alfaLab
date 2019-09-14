export class Constants {
    private _validUNPToScreenTwo: string;
    private _validUNPToRegister: string;
    private _validUNPNoEGR: string;
    private _validUNPEntity: string;
    private _invalidUNPMoreValue: string;
    private _validPhone: string;
    private _invalidUNP: string;
    private _lessDigitUNP: string;
    private _lessDigitPhone: string;
    private _moreDigitPhone: string;
    private _searchQuery: string;
    private _textPopUp: string;

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
    };

    public async validUNPToScreenTwo() {
        return await this._validUNPToScreenTwo;
    };

    public async invalidUNPMoreValue() {
        return await this._invalidUNPMoreValue;
    };

    public async validUNPToRegister() {
        return await this._validUNPToRegister;
    };

    public async validUNPNoEGR() {
        return await this._validUNPNoEGR;
    };

    public async validUNPEntity() {
        return await this._validUNPEntity;
    };

    public async invalidUNP() {
        return await this._invalidUNP;
    };

    public async lessDigitUNP() {
        return await this._lessDigitUNP;
    };

    public async validPhone() {
        return await this._validPhone;
    };

    public async lessDigitPhone() {
        return await this._lessDigitPhone;
    };

    public async moreDigitPhone() {
        return await this._moreDigitPhone;
    };

    public async searchQuery() {
        return await this._searchQuery;
    };

    public async textPopUp() {
        return await this._textPopUp;
    };
}