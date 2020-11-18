/// <reference types="Cypress" />
describe("Search tests", () => {
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


    it("TM-QA08-365:Search bar-valid + TM-QA08-420:Suggestions", () => {
        cy.get('#searchBoxContainer > div > div > div.ujU.zI7.iyn.Hsu > input[type=text]').click();
        cy.get('#searchBoxContainer > div > div > div.ujU.zI7.iyn.Hsu > input[type=text]').type('art');
        cy.get('#SuggestionGroup-Option-0-3 > div > a > div > div').click();
    });

    it("TM-QA08-367:Search-random string of characters", () => {
        cy.get('#searchBoxContainer > div > div > div.ujU.zI7.iyn.Hsu > input[type=text]').click();
        cy.get('#searchBoxContainer > div > div > div.ujU.zI7.iyn.Hsu > input[type=text]').type('wcjhwvjwh{enter}');
    });

    it("TM-QA08-395:Min number of characters", () => {
        cy.get('#searchBoxContainer > div > div > div.ujU.zI7.iyn.Hsu > input[type=text]').click();
        cy.get('#searchBoxContainer > div > div > div.ujU.zI7.iyn.Hsu > input[type=text]').type('b{enter}');
    });
    it("TM-QA08-396:Search bar with special characters", () => {
        cy.get('#searchBoxContainer > div > div > div.ujU.zI7.iyn.Hsu > input[type=text]').click();
        cy.get('#searchBoxContainer > div > div > div.ujU.zI7.iyn.Hsu > input[type=text]').type('@#$%^&{enter}');
    });
    it("TM-QA08-397:Search bar with numbers", () => {
        cy.get('#searchBoxContainer > div > div > div.ujU.zI7.iyn.Hsu > input[type=text]').click();
        cy.get('#searchBoxContainer > div > div > div.ujU.zI7.iyn.Hsu > input[type=text]').type('70{enter}');
    });
});