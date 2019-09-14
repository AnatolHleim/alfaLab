import {$, by, element} from "protractor";
export class EntityDocument {
    public titleDocument = $("#prtl0 > h1 > span");
public numberDocumentInput = element(by.name("DocumentNumber"));
public buttonSubmit = element(by.id("btnSave"));

}