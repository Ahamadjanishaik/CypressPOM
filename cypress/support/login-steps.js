import {Before, Given, When, Then, And} from "cypress-cucumber-preprocessor";

Given('User enters the url', ()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
})

When('enters username as ') 