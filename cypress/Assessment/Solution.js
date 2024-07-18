///<reference types="cypress"/> 

describe('Automation Test stores', () => {
    it('test1', () => {
        cy.visit("https://automationteststore.com/") // Visit the website using visit
        cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=68"]').click() // CLick on Apparel & Accessories
        cy.xpath('//a[.="T-shirts"]').click() // Click on T-shirts
        cy.xpath('(//div[@class="thumbnail"])[3]').click() // Click on 3rd white shirt
        cy.get('#option350').select(1) // Select color to Light blue 
        cy.get('#product_quantity').type('0') // Enter 10 in the quantity text box
        cy.xpath('//a[@class="cart"]').click() // Click on add to cart button
        cy.get('#cart_checkout1').click() // Click on checkout
        cy.xpath('//input[@id="accountFrm_accountguest"]').check() // Select Guest Checkout
        cy.get('button[title="Continue"]').click() // Clicking on continue button
        cy.get('input[name="firstname"]').type('Jani') // Typing my first name
        cy.get('input[name="lastname"]').type('Shaik') // Giving my last name
        cy.get('#guestFrm_email').type('shaikjani@gmail.com') // Entering email
        cy.get('#guestFrm_address_1').type('11-2-65 Happy Street, Hi-Tech City') // Entering address
        cy.get('select[name="country_id"]').select('India') // Select country
        cy.get('#guestFrm_city').type('Hyderabad') // Giving city name
        cy.get('#guestFrm_zone_id').select(2) // Selecting state
        cy.get('#guestFrm_postcode').type('523105') // Entering ZIP code
        cy.get('button[title="Continue"]').click()  // Click on continue
        cy.get('button[title="Confirm Order"]').click() // Click on confirm order
        cy.contains(' Your Order Has Been Processed!').should('have.text',' Your Order Has Been Processed!')
        // Assert the order placed confirmation.
    });
});