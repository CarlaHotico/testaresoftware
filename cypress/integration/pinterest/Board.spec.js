/// <reference types="Cypress" />
describe("Board tests", () => {
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


    it('TM-QA08-287:Create board',()=>{
        cy.get('.Jea > .qJc > .INd > .MIw > svg > .dyH').click();
        cy.get('#__PWS_ROOT__ > div.App.AppBase > div.appContent > div > div > div > div.qiB > div > div > div > div.Jea.dSH.sxy.gjz.jx-.zI7.iyn.Hsu > div:nth-child(2) > div > div > button > div > svg').click();
        cy.get('[data-test-id="Create board"] > :nth-child(1) > .czT > .DUt').click();
        cy.get('#boardEditName').type("winter");
        cy.get('.RCK').click();
    });

    it('TM-QA08-377:Edit board',()=>{
        cy.get('#HeaderContent > div > div > div > div.zI7.iyn.Hsu > div > div > div > div.Jea.gjz.zI7.iyn.Hsu > div:nth-child(4) > div > a > div > div > div > div > div.MIw.QLY.Rym.ojN.p6V.zI7.iyn.Hsu > svg').click();
        cy.get('#__PWS_ROOT__ > div.App.AppBase > div.appContent > div > div > div > div:nth-child(3) > div > div.CP0.sLG.zI7.iyn.Hsu > div > div > div > div > div:nth-child(2) > div > a > div > div > div.Fje.Jea.hA-.wYR.zI7.iyn.Hsu > div > h3').click();
        cy.get('#__PWS_ROOT__ > div.App.AppBase > div.appContent > div > div > div:nth-child(1) > div > div:nth-child(1) > div > div.Bdr.Jea.KO4.gjz.mQ8.zI7.iyn.Hsu > h1 > div > div > div:nth-child(1) > button > div').click();
        cy.get('#__PWS_ROOT__ > div.App.AppBase > div.appContent > div > div > div:nth-child(1) > div > div:nth-child(1) > div > div.Bdr.Jea.KO4.gjz.mQ8.zI7.iyn.Hsu > h1 > div > div > div.Jea.ujU.zI7.iyn.Hsu > div > div > div > div > div > div > div > div:nth-child(1) > div.hjj.zI7.iyn.Hsu > div:nth-child(1) > div > div > div > div > div').click();
        cy.get('#boardEditName').type("time");
        cy.get(':nth-child(2) > .Jea > .C9q > .RCK > .tBJ').click();
    });

    // it('TM-QA08-291:Delete board',()=>{
        //cy.get('.XiG > .zI7 > .rYa > .x8f').click();
       // cy.get('[data-test-id="editBoardButton"] > [style=""] > .CCY > .DUt > .zI7 > .tBJ').click();
        //cy.get('[data-test-id="deleteBoardButton"] > .RCK').click();
        //cy.get('[data-test-id="confirm-button"] > .RCK').click();
   // });
});