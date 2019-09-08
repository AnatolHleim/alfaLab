export class Constants {
    private _validUNP: string;
    private _validPhone: string;
    private _invalidUNP: string;
    private _lessDigitUNP: string;
    private _lessDigitPhone: string;
    private _searchQuery: string;

    constructor() {
        this._validUNP = '192230006';
        this._validPhone = '322132131';
        this._lessDigitUNP = '12345678';
        this._invalidUNP = '192230005';
        this._lessDigitPhone = '1';
        this._searchQuery = 'администрация';
    };

    public async validUNP() {
        return await this._validUNP;
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

    public async invalidEmail() {
        return await this._invalidUNP;
    };

    public async lessDigitPhone() {
        return await this._lessDigitPhone;
    };

    public async searchQuery() {
        return await this._searchQuery;
    };
};