///<reference types="cypress"/>
describe('Orange HRM', () => {
    it('Login Tsts', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // write locator for username
        cy.get("input[name='username']").type('Admin');
        cy.get("input[name='password']").type('admin123');
        cy.get("button[type='submit']").click();
        // for class .value
        // for ID #value
        // general syntax tag[attribute=value]
    });
    it('Facebook', () => {
        cy.visit('https://m.facebook.com/')
        //username
        cy.get("#email").type("janushaik499@gmail.com");
        cy.get("#pass").type("janu@005");
        cy.get("button[type='submit']").click();
    });
    it.only('Xpath', () => {
        cy.visit("https://the-internet.herokuapp.com/login")
        //xpath for username
        cy.xpath('//input[@type="text"]').type("abcd");
        cy.xpath('//input[@name="password"]').type("bcdc");
        cy.xpath('//button[@class="radius"]').click();
    });
    it('', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.xpath("//a[contains(text(), 'Free Access')]").click();
        cy.xpath("//button[contains(text(), 'Home')]").click();
        cy.xpath("").click()
        cy.xpath("").click()
    });
});