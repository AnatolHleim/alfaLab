import {$, $$} from "protractor";
import {EntityDocument} from "./EntityDocument";
export class HomePage {
private newDocumentButton = $('[data-bind="click: btnNewDocumentClick"]');
private newDocumentCreate = $$(('[query-type="9"]'));

clickCreateNewDocumentButton():HomePage{
    (this.newDocumentButton).click();
    return this;
}
selectTypeRubDocument(type:number):EntityDocument{
    (this.newDocumentCreate).get(type).click();
    return new EntityDocument();
}

}