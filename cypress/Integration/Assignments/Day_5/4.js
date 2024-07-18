///<reference types="cypress"/>
describe('Herokuapp Alerts values', () => {
    it('Alerts', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get('button[onclick="jsAlert()"]').click();
        cy.wait(3000)        
        cy.get('button[onclick="jsConfirm()"]').click()        
        cy.on('window:confirm',(altmsg)=>{
            expect(altmsg).to.equal('I am a JS Confirm')
            return true;
        })
        cy.wait(3000)
        cy.get('button[onclick="jsPrompt()"]').click()  
        cy.on('window:confirm',(msg)=>{
            expect(msg).to.equal('I am a JS prompt')
            return false
        })
        
        
    });
    it('Confirm', () => {
        
    });
    it.only('prompt', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get('button[onclick="jsPrompt()"]').click()  
        cy.on('window:confirm',(msg)=>{
            expect(msg).to.equal('I am a JS prompt')
            return false
        })
    });
});