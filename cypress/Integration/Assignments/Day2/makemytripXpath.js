///<reference types="cypress"/>
describe('Makemytrip test', () => {
    it('X paths', () => {
        cy.visit("https://www.makemytrip.com/") // visit website
        cy.xpath('//input[@id="fromCity" and @value="Delhi, Delhi"]').click() // click on from 
        cy.xpath('//input[@title="To" and @placeholder="To" ]').click()
        // Logo button xpath using multiple attributes
        cy.xpath('//img[@src="//promos.makemytrip.com/Growth/Images/1x/mmt_dt_top_icon.png" and @alt="Make My Trip"]').click()
        // View All button on homepage 
        cy.xpath('//li[@data-cy="menu_Flights" and @class="menu_Flights"]') // Flights button
        cy.xpath('//li[@data-cy="menu_Hotels" and @class="menu_Hotels"]') // Hotels button 
    });
});