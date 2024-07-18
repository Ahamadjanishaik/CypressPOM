///<reference types="cypress"/>
describe('Mouse', () => {
    it.skip('Right clicks', () => {
        cy.visit("https://demo.guru99.com/test/simple_context_menu.html")
        cy.xpath("//*[.='right click me']").rightclick()
        cy.xpath('//span[text()="Quit"]').click()
        cy.get('button[ondblclick="myFunction()"]').dblclick();
    });
    it.skip('Mouse hover ', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#mousehover').invoke('show')

        //when cypress is not clicking by click() then forcebly tell cypress to do it 
        //force
        cy.contains('Top').click({force:true})
    });
    it('Apporach -2 ', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#mousehover').trigger('mouseover')
        cy.contains('Top').click({force:true})
    });
});