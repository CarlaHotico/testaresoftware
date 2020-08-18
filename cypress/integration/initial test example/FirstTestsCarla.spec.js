 /// <reference types="Cypress" />
 context("First automated tests", () => {
     
    it("Test", () => {
    cy.visit("https://www.wikipedia.org/");
    cy.get('#js-link-box-en > strong').click();
    cy.get('#mp-welcome').should("be.visible");   
    cy.get('#mp-welcome').should("contain","Welcome");
    });

    it.only("Test Wiki Login",() =>{
    cy.visit("https://www.wikipedia.org/");
    cy.get('#js-link-box-en > strong').click(); 
    cy.get('#pt-login').click();  
    cy.get('#wpName1').type("carlahotico");
    cy.get('#wpPassword1').type("gdfjj");
    cy.get('#wpLoginAttempt').click();
    });
}); 
