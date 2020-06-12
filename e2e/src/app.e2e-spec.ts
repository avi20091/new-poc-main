import { AppPage } from './app.po';
import { browser, logging, protractor, element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

  it('should visit to landing page new', () =>{
    page.navigateTo();
    browser.get('http://localhost:4200/#/');
    var title = element(by.xpath('//a[@id="ngrx"]')).getText();
    expect(title).toEqual('NgRx Example');
    browser.sleep(3000);
  });

  it('should route to NGRX page', () =>{
    page.navigateTo();
    browser.get('http://localhost:4200/#/');
    var title = element(by.xpath('//a[@id="ngrx"]')).click();
    browser.sleep(3000);
  });

  it('should check insert funtion', () =>{
    page.navigateTo();
    browser.get('http://localhost:4200/#/ngrx');
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/#/ngrx');
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    page.getInsertDialogBtn().click();
    expect(page.getInsertDialogHeader().getText()).toEqual('Insert Data');
    element(by.xpath('//input[@id="name"]')).sendKeys("Suresh");
    element(by.xpath('//input[@id="surname"]')).sendKeys("Rao");
    element(by.xpath('//input[@id="dept"]')).sendKeys("Design");
    element(by.xpath('//input[@id="joindate"]')).sendKeys("2020-05-18T18:30:00.000Z");
    element(by.xpath('//span[.="Submit"]')).click();
    browser.sleep(3000);
  });

  it("Should check update function", () =>{
    element(by.xpath('//tr[8]//mat-icon[@id="Update"]')).click();
    var edit = element(by.xpath('//tr[8]//mat-icon[@id="Update"]')).getText();
    expect(edit).toEqual("edit")
    element(by.xpath('//input[@id="name"]')).clear();
    element(by.xpath('//input[@id="name"]')).sendKeys('Aniket');
    element(by.xpath('//input[@id="surname"]')).clear();
    element(by.xpath('//input[@id="surname"]')).sendKeys('Verma');
    var update = element(by.xpath('//span[.="Update"]')).getText();
    expect(update).toEqual('Update');
    element(by.xpath('//span[.="Update"]')).click();
    browser.sleep(3000);
  });

  it('should check delete funtion', () =>{
    element(by.xpath('//tr[8]//mat-icon[.="delete"]')).click();
    var remove = element(by.xpath('//tr[8]//mat-icon[.="delete"]')).getText();
    expect(remove).toEqual('delete');
    browser.sleep(3000)
    var deleteIT = element(by.xpath('//span[.="Yes"]')).getText();
    expect(deleteIT).toEqual('Yes');
    element(by.xpath('//span[.="Yes"]')).click();
    browser.sleep(3000)
  });

  it('should route to employee registration page', () =>{
    var emp = element(by.xpath('//a[.="Employee Registration Form"]')).getText();
    expect(emp).toEqual('Employee Registration Form')
    element(by.xpath('//a[.="Employee Registration Form"]')).click();
    browser.sleep(2000);
  });

  it('should check the theme', () =>{
    element(by.xpath('//span[.="Dark"]')).click();
    browser.sleep(1000);
    element(by.xpath('//span[.="Default"]')).click();
    browser.sleep(1000);
  });

  it('should add new employee form', () =>{
    var empForm =  element(by.xpath('//span[.="Add New Form"]')).getText();
    expect(empForm).toEqual('Add New Form');
    element(by.xpath('//span[.="Add New Form"]')).click();
    browser.sleep(1000);
    var delForm =  element(by.xpath('//span[.="Delete"]')).getText();
    expect(delForm).toEqual('Delete');
    element(by.xpath('//span[.="Delete"]')).click();
    browser.sleep(1000);
  }); 

  
  it('should route to Custom/reusable Mat grid page', () =>{
    var matGrid =  element(by.xpath('//a[.="Custom/Reusable Mat Grid"]')).getText();
    expect(matGrid).toEqual('Custom/Reusable Mat Grid');
    element(by.xpath('//a[.="Custom/Reusable Mat Grid"]')).click();
    browser.sleep(2000);
  });

  it('should route to Dynamic Module page', () =>{
    var module = element(by.xpath('//a[.="Dynamic Module"]')).getText();
    expect(module).toEqual('Dynamic Module');
    element(by.xpath('//a[.="Dynamic Module"]')).click();
    browser.sleep(2000);
  });

});
