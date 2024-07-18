///<reference types="cypress"/>
describe('', () => {
    it('', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[name='username']").type('Admin');
        cy.get("input[name='password']").type('admin123');
        cy.get("button[type='submit']").click();
        cy.get('a[href="/web/index.php/admin/viewAdminModule"]').click()
        cy.get('input[placeholder="Type for hints..."]').type('J')
        cy.get('form[class="oxd-form"]').contains('James Butler').click()
    });
});