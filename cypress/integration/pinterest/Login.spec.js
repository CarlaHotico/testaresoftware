/// <reference types="Cypress" />
describe("Login Tests", () => {
    before(() => {
      cy.visit("https://ro.pinterest.com");
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
      Cypress.Cookies.defaults({
        whitelist: (cookie) => {
          return true;
        },
      });
    });
  
    it("TM-QA08-272:Login", () => {
      cy.get("body").then(($body) => {
        if ($body.find('[data-test-id="simple-login-button"] > .RCK').length) {
          cy.get('[data-test-id="simple-login-button"] > .RCK').click();
          cy.get("#email").type("ch927796@gmail.com");
          cy.get("#password").type("carlahotico");
          cy.get(".red").click();
        }
      });
    });
});

it("TM-QA08-343:Login valid username+ invalid password", () => {
    cy.get("body").then(($body) => {
      if ($body.find('[data-test-id="simple-login-button"] > .RCK').length) {
        cy.get('[data-test-id="simple-login-button"] > .RCK').click();
        cy.get("#email").type("ch927796@gmail.com");
        cy.get("#password").type("shdbsdb");
        cy.get(".red").click();
      }
    });
  });

  it("TM-QA08-344:Login invalid username+ valid password", () => {
    cy.get("body").then(($body) => {
      if ($body.find('[data-test-id="simple-login-button"] > .RCK').length) {
        cy.get('[data-test-id="simple-login-button"] > .RCK').click();
        cy.get("#email").type("bdhdsvjs@gmail.com");
        cy.get("#password").type("carlahotico");
        cy.get(".red").click();
      }
    });
  });

  it("TM-QA08-345:Login invalid username+ invalid password", () => {
    cy.get("body").then(($body) => {
      if ($body.find('[data-test-id="simple-login-button"] > .RCK').length) {
        cy.get('[data-test-id="simple-login-button"] > .RCK').click();
        cy.get("#email").type("bdcsdshvjdshv@gmail.com");
        cy.get("#password").type("dshcdcdsv");
        cy.get(".red").click();
      }
    });
  });

  it("TM-QA08-509:Login with no input", () => {
    cy.get("body").then(($body) => {
      if ($body.find('[data-test-id="simple-login-button"] > .RCK').length) {
        cy.get('[data-test-id="simple-login-button"] > .RCK').click();
        cy.get("#email").type('');
        cy.get("#password").type('');
        cy.get(".red").click();
      }
    });
  });