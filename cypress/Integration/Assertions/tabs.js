///<reference types="cypress"/>
describe('tabs', () => {
    it.skip('', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        
        // invoke function is used to remove attributes
        cy.get('a[href="https://www.qaclickacademy.com"]').invoke('removeAttr','target').click()

        cy.origin("https://www.qaclickacademy.com/",()=>{
            cy.contains('Access all our Courses').click()
        })


    });
    it('Window', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('#openwindow').invoke('removeAttr','onclick').click()
        cy.origin('https://www.qaclickacademy.com',()=>{
            cy.visit("/")
            cy.contains('Access all our Courses').click()
        })

    });
    it.only('', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        
    });
});