///<reference types="cypress"/>
describe('Drag & drop', () => {
    it.skip('test1', () => {
        cy.visit("https://v1.training-support.net/selenium/drag-drop")
        // trigger for mouse operation
        // which:1 is to work with left button of the mouse
        // which:2 is to work with middle button of the mouse
        // which:3 is to work with right button of the mouse

        cy.get('#draggable').trigger('mousedown',{which:1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force:true})
    });
    it('test1', () => {
        cy.visit("https://v1.training-support.net/selenium/drag-drop")

        cy.get('#draggable').trigger('mousedown',{which:1})
        cy.get('#dropzone2').trigger('mousemove').trigger('mouseup',{force:true}) //release the button
    });
});