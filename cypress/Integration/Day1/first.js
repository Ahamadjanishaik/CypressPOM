describe('Test Suite - Heroku', () => {
    //In this block we write testcases
    //This file is also called as Spec
    //Using describe and it function we write test script
    it('Test1', () => {
        // it block is your test script
        //using cy. i can write my commands
        // using cy.visit is used to enter the URL inside the browser
        cy.visit('https://the-internet.herokuapp.com/login')
    });
});