import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"

Given('user opens the Simple form url', ()=>{
cy.visit("https://v1.training-support.net/selenium/simple-form")
})
When('user enters firstname, lastname, email, message', ()=>{
    cy.get('#firstName').type('Jani')
    cy.get('#lastName').type('Shaik')
    cy.get('input[placeholder="abc@xyz.com"]').type('shaikjani@gmail.com')
    cy.get('textarea[rows="2"]').type('Hello')
})

Then('An alert saying successful message has to be displayed', ()=>{
    cy.on('window:confirm', (altmsg)=>{
        expect(altmsg).to.equal('Thank You for reaching out to us, Jani Shaik')
        return true;
    })
})
And('clicks on submit', ()=>{
    cy.get('input[value="submit"]').click()
})



