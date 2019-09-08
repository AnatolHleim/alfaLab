import {$, $$, browser, by, element} from "protractor";
export class EntityDocument {
private arrowBack = element("")
public titleDocument = $("#prtl0 > h1 > span");
public numberDocumentInput = element(by.name("DocumentNumber"));
public buttonSubmit = element(by.id("btnSave"));

}