class Logout_po{
   // Logout page class
   // here only methods wrt logout will be written


logout(){
    cy.get('.oxd-userdropdown-name').click()
    cy.get('a[href="/web/index.php/auth/logout"]').click()

}
}

export default Logout_po;