import {element,by,browser} from "protractor";
import {HomePage} from "./HomePage";
import {SelectUserPage} from "./SelectUserPage";
export class LoginPage {
    private userNameInput = element(by.id("some"))
    private userPasswordInput = element(by.id("some"))
    private loginButton = element(by.id("some"))
    private demoLoginButton = element(by.id('demo-login'))
    get(): LoginPage{
        browser.get("https://online.alfabank.by");
        return this;
    }
    login(userName:string,password:string):HomePage{
        this.userNameInput.sendKeys(userName);
        this.userPasswordInput.sendKeys(password);
        this.loginButton.click();
        return new HomePage();
    }
    demoLogin():SelectUserPage{
        this.demoLoginButton.click();
        return new SelectUserPage();
}
}