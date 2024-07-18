class Link_po{
  // method to click on any link in the webpage
  //parameter qis passed, the text in the  parameter
  // Generic method to click on any link
linkclick(link){
    cy.contains(link).click(); // this will click on any link with text being passed from test case 
}

}

export default Link_po;