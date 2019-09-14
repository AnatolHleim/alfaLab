import {element,by} from "protractor";
import {HomePage} from "./HomePage";
export class SelectUserPage {
    private arrayUser = element.all(by.className("organization-choice__list-item"));
    getUser(userNumber: number):HomePage{
        (this.arrayUser).get(userNumber).click();
        return new HomePage();
    }
}
