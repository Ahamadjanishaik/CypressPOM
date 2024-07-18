///<reference types="cypress"/> 
describe('Bookstore', () => {
    it('testcase-1', () => {
        //Open the website.
        // Verify that the page title is "All products | Books to Scrape - Sandbox".
        cy.visit('https://books.toscrape.com/')
        cy.title().should('include','All products | Books to Scrape - Sandbox')
    });
    it('testcase-2', () => {
        //Open the website.
        //Click on the "Non-Fiction" link.
        //Verify that the Non-Fiction results page is displayed.
        cy.visit('https://books.toscrape.com/')
        cy.get('a[href="catalogue/category/books/nonfiction_13/index.html"]').click()
        cy.url().should('include','nonfiction_13')
    });
    it('testcase-3', () => {
        //Open the website.
        //Click on a product.
        //Add the product to the Basket.
        cy.visit('https://books.toscrape.com/')
        cy.get('img[alt="A Light in the Attic"]').click() // Adding 1st book 
        // No option to add to basket 
    });
});