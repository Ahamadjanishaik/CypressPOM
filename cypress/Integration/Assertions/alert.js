///<reference types="cypress"/>
describe('', () => {
    it('', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('input[value="Alert"]').click()

        cy.on('window:alert',(altmsg)=>{
            expect(altmsg).to.equal('Hello , share this practice page and share your knowledge')

            return true;
        })
        cy.get('#confirmbtn').click()
        cy.on('window:confirm',(msg)=>{
            expect(msg).to.eq('Hello , Are you sure you want to confirm?')
            return false;
        })
    });
});