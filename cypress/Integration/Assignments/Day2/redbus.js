///<reference types="cypress"/>
describe('Redbus - 20xpaths', () => {
    it('', () => {
        cy.visit("https://www.redbus.com/")
        cy.xpath('//div[@class="rdc-login"]').click(); //1. Login click xpath               
        cy.xpath('//div[@class="manageHeaderLbl"]').click(); //Manage booking
        cy.xpath('//div[@class="fr hr-shelp config-div  rdc-mr-help"]').click() // Help button
        cy.xpath('//div[@class="main-header clearfix rdc-main-header"]').click() //logo button
        cy.xpath('//div[@id="curr_chosen"]').click() //currency button
        cy.xpath('//a[@title="Airport Transfers"]').click() //Air Transfer button                
        cy.xpath('//div[@class="source input-box "]').click(); // source
        cy.xpath('//div[@class="destination input-box"]').click(); //destination
        cy.xpath('//div[@class="date input-box "]').click();   // date
        cy.xpath('//div[@id="return-box"]').click(); // return date 
        cy.xpath('//button[@id="search_butn"]').click()  // search button
        cy.xpath('//div[@class="air-button"]').click()   // book now button        
        cy.xpath('//img[@src="https://st.redbus.in/Images/rdc/Bratislava-ImResizer.jpeg"]').click() // Buses Vienna to bratislava        
        cy.xpath('//img[@src="https://st.redbus.in/Images/rdc/Oxford-ImResizer.jpeg"]').click() // London to Oxford        
        cy.xpath('//a[@href="/info/aboutus"]').click() //About Us        
        cy.xpath('//a[@href="https://www.redbus.com"]').click() //Mobile version button


        
    });
});