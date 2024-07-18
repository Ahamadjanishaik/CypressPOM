///<reference types="cypress"/>
describe('Flipkart Test', () => {
    it('', () => {
        cy.visit("https://www.flipkart.com/");
        cy.get('img[title="Flipkart"]').click(); // logo button
        cy.get('img[alt="Dropdown with more help links"]').click() //menu button three dots
        cy.get('.-dOa_b L_FVxe').click() // Login button
        cy.get('input[placeholder="Search for Products, Brands and More"]').click()  //search text box
        cy.get('img[alt="Grocery"]').click() //Grocery tab        
        cy.get('img[alt="Mobiles"]').click()  // Mobiles tab                
        cy.get('button[aria-label="Next Slide"]').click() // Next slide button on homepage
        cy.get('button[aria-label="Previous Slide"]').click()  // Previous slide button
        cy.get('div[aria-label="Home & Furniture"]').click() // Home & Furniture
        cy.get('div[aria-label="Fashion"]').click()
        cy.get('div[aria-label="Electronics"]').click()
        cy.get('a[aria-label="Appliances"]').click() //
        cy.get('a[aria-label="Travel"]').click()
        cy.get('div[aria-label="Beauty, Toys & More"]').click()
        cy.get('div[aria-label="Two Wheelers"]').click()
        cy.get('#portal--container').click()
        cy.get('#seo--footer').click()
        cy.get('a[title="Flipkart Plus Zone"]').click()
        cy.get('img[alt="24x7 Customer Care"]').click()
        cy.get('img[alt="Download App"]').click()
        cy.get('a[aria-label="Careers"]').click()


    });
});