describe('Orange Tests', () => {
    it('', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('input[name="username"]').then(($username)=>{
            expect($username).to.have.attr('placeholder','Username')
            cy.wrap($username).type('Admin')

            //expect is a method used for assertions
            //directly if we try to clock on username
            // it will not work - Jquery
            // to convert jquery variable to cypress obj we have to use wrap
        }); // callback function done for username
        cy.get('input[name="password"]').then(($password)=>{
            expect($password).to.have.attr('placeholder','Password');
            cy.wrap($password).type('admin123')

        }); // callback function ends for password
        cy.get('.oxd-button').then(($login)=>{
            expect($login).to.have.text(' Login ')
            cy.wrap($login).click();
        });
        cy.wait(2000)
        cy.get('.oxd-userdropdown-name').click()
        cy.get('.oxd-dropdown-menu').find('.oxd-userdropdown-link').each(($logout)=>{
            //loop through the dropdown list
            if($logout.text()=='Logout'){
                cy.wrap($logout).click();
            }
        })

        
    });
});