//Hooks in cypress
// before block will be executed before describe block

before(() => {
    
    // Have to configure the example.json file for data driven testing

    cy.fixture('example').then((data)=>{
        globalThis.data = data;

        //Initializing the data coming from example.json to data variable 
    })

});

describe('Data driven ', () => {
    it('orange hrm test1', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
        // Entering the values from example.json file using data
        cy.get("input[name='username']").type(data.username);
        cy.get("input[name='password']").type(data.password);
        cy.get("button[type='submit']").click();
    });
});