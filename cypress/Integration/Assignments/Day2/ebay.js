///<reference types="cypress"/>
describe('ebay tests', () => {
    it('test1', () => {
        cy.visit("https://www.ebay.com/")
        cy.xpath('//a[text()=" Daily Deals"]') // Daily deals button on homepage
        cy.xpath('//a[text()=" Brand Outlet"]') // Brand outlet
        cy.xpath('//a[text()=" Gift Cards"]') // Gift cards
        cy.xpath('//a[text()=" Help & Contact"]') // Help button
        cy.xpath('//a[text()=" Watchlist"]')  // Watch list button on homepage 
    });
});