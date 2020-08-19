/// <reference types="Cypress" />
    describe("test for login functionality",() => {         
        beforeEach(()=>{
            cy.visit("https://ro.pinterest.com/");
            Cypress.on("uncaught:exception", (err, runnable) => {
                // returning false here prevents Cypress from failing the test
                return false;
              });
            Cypress.Cookies.defaults({
                //saves cookies until browser is closed
                whitelist: (cookie) => {
                  return true;
                },
            });
        });   
        it("TM-QA08-272:Login", () => {
            cy.get("body").then(($body) => {
              if ($body.find('[data-test-id="simple-login-button"] > .RCK').length) {
                //if the selected item is found in the body, continue actions
                cy.get('[data-test-id="simple-login-button"] > .RCK').click();
                cy.get("#email").type("ch927796@gmail.com");
                cy.get("#password").type("carlahotico");
                cy.get(".red").click();
              }
            });
        });

    it("TM-QA08-279:Save picture",()=>{
        cy.get('#__PWS_ROOT__ > div.App.AppBase > div.appContent > div > div > div > div > div.gridCentered > div > div > div:nth-child(1) > div:nth-child(1) > div > div > div > div > div.XiG.sLG.zI7.iyn.Hsu > div:nth-child(1) > a > div > div.zI7.iyn.Hsu > div > div > div > div > div > img').click();
        cy.get('#__PWS_ROOT__ > div.App.AppBase > div.appContent > div > div > div > div.Closeup.Module.flex.flex-auto.justify-around.flex-column > div > div > div > div.m2F.zI7.iyn.Hsu > div > div > div > div > div > div > div:nth-child(2) > div > div.qiB > div > div > div > div.Pyg.zI7.iyn.Hsu > div > div > div > div > button.PinBetterSave__Button.PinBetterSave__Button--lego').click();
        cy.get('#HeaderContent > header > div > div > div.zI7.iyn.Hsu > div > div > div > div.Jea.gjz.zI7.iyn.Hsu > div:nth-child(4) > div > a > div > div > div > div > div.XiG.zI7.iyn.Hsu > img').click();
        cy.get('#__PWS_ROOT__ > div.App.AppBase > div.appContent > div > div > div > div:nth-child(3) > div > div.CP0.sLG.zI7.iyn.Hsu > div > div > div > div:nth-child(1) > a > div > div.Fje.Jea.hA-.wYR.zI7.iyn.Hsu > div > h3').click();

    });

    it('TM-QA08-286:Download photo',()=>{
        cy.get('#__PWS_ROOT__ > div.App.AppBase > div.appContent > div > div > div > div > div.gridCentered > div > div > div:nth-child(1) > div:nth-child(2) > div > div > div > div > div.XiG.sLG.zI7.iyn.Hsu > div:nth-child(1) > a > div > div.zI7.iyn.Hsu > div > div > div > div > div > img').click();
        cy.get('#__PWS_ROOT__ > div.App.AppBase > div.appContent > div > div > div > div.Closeup.Module.flex.flex-auto.justify-around.flex-column > div > div > div > div.m2F.zI7.iyn.Hsu > div > div > div > div > div > div > div:nth-child(2) > div > div.qiB > div > div > div > div.DUt.Jea.b8T.qJc.zI7.iyn.Hsu > div:nth-child(1) > div > div > div > button > div > div').click();
        cy.get(':nth-child(1) > .czT > [role="listitem"] > :nth-child(1) > .F6l').click();
    });

    it('TM-QA08-287:Create board',()=>{
        cy.get('#HeaderContent > header > div > div > div.zI7.iyn.Hsu > div > div > div > div.Jea.gjz.zI7.iyn.Hsu > div:nth-child(4) > div > a > div > div > div > div > div.XiG.zI7.iyn.Hsu > img').click();
        cy.get('#__PWS_ROOT__ > div.App.AppBase > div.appContent > div > div > div > div.qiB > div > div > div > div.Jea.dSH.sxy.gjz.jx-.zI7.iyn.Hsu > div:nth-child(2) > div > div > button > div > svg').click();
        cy.get('[data-test-id="Create board"] > :nth-child(1) > .czT > .DUt').click();
        cy.get('#boardEditName').type("new");
        cy.get('.RCK').click();
        cy.get('.RCK').click();
    });

    it('TM-QA08-291:Delete board',()=>{
        cy.get('.Jea > .qJc > .Pj7 > .XiG > .hCL').click();
        cy.get('[data-test-id="board-Beautiful makeup"] > .hA- > .Fje > .lH1').click();
        cy.get('.b8T > :nth-child(1) > :nth-child(1) > .zI7 > .rYa > .x8f > .gUZ').click();
        cy.get('[data-test-id="deleteBoardButton"] > .RCK').click();
        cy.get('[data-test-id="confirm-button"] > .RCK').click();
    });

    it('TM-QA08-277:Logout',()=>{
        cy.get('[data-test-id="header-accounts-options-button"] > .rYa > .x8f > .gUZ').click();
        cy.get('[data-test-id="header-menu-options-logout"] > :nth-child(1) > .czT > .DUt').click();
    });
    
});
