/// <reference types="Cypress" />
describe("End to end test", () => {
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
    it("TM-QA08-279:Save picture",()=>{
      cy.get('#__PWS_ROOT__ > div.App.AppBase > div.appContent > div > div > div > div > div.gridCentered > div > div > div:nth-child(1) > div:nth-child(1) > div > div > div > div > div.XiG.sLG.zI7.iyn.Hsu > div:nth-child(1) > a > div > div.zI7.iyn.Hsu > div > div > div > div > div > img').click();
      cy.get('#__PWS_ROOT__ > div.App.AppBase > div.appContent > div > div > div > div.Closeup.Module.flex.flex-auto.justify-around.flex-column > div > div > div > div.m2F.zI7.iyn.Hsu > div > div > div > div > div > div > div:nth-child(2) > div > div.qiB > div > div > div > div.Pyg.zI7.iyn.Hsu > div > div > div > div > button.PinBetterSave__Button.PinBetterSave__Button--lego > div').click();
  });
  
    it('TM-QA08-286:Download photo',()=>{
      cy.get('#__PWS_ROOT__ > div.App.AppBase > div.appContent > div > div > div > div.Closeup.Module.flex.flex-auto.justify-around.flex-column > div > div > div > div.m2F.zI7.iyn.Hsu > div > div > div > div > div > div > div:nth-child(1) > div > div > div > a > div > div > div.XiG.zI7.iyn.Hsu > div > div > img').click();
      cy.get('#__PWS_ROOT__ > div.App.AppBase > div.appContent > div > div > div > div.Closeup.Module.flex.flex-auto.justify-around.flex-column > div > div > div > div.m2F.zI7.iyn.Hsu > div > div > div > div > div > div > div:nth-child(2) > div > div.qiB > div > div > div > div.DUt.Jea.b8T.qJc.zI7.iyn.Hsu > div:nth-child(1) > div > div > div:nth-child(1) > button > div > div > svg').click();
      cy.get('#__PWS_ROOT__ > div.App.AppBase > div.appContent > div > div > div > div.Closeup.Module.flex.flex-auto.justify-around.flex-column > div > div > div > div.m2F.zI7.iyn.Hsu > div > div > div > div > div > div > div:nth-child(2) > div > div.qiB > div > div > div > div.DUt.Jea.b8T.qJc.zI7.iyn.Hsu > div:nth-child(1) > div > div > div:nth-child(2) > div > div > div > div > div > div:nth-child(1) > div > div > div > div').click();
  });
    
  it("TM-QA08-376:Share board",()=>{
    cy.get('#HeaderContent > div > div > div > div.zI7.iyn.Hsu > div > div > div > div.Jea.gjz.zI7.iyn.Hsu > div:nth-child(4) > div > a > div > div > div > div > div.MIw.QLY.Rym.ojN.p6V.zI7.iyn.Hsu > svg').click();
    cy.get('#__PWS_ROOT__ > div.App.AppBase > div.appContent > div > div > div > div:nth-child(3) > div > div.CP0.sLG.zI7.iyn.Hsu > div > div > div > div > div:nth-child(2) > div > a > div > div > div.Fje.Jea.hA-.wYR.zI7.iyn.Hsu > div > h3').click();
    cy.get('#__PWS_ROOT__ > div.App.AppBase > div.appContent > div > div > div:nth-child(1) > div > div:nth-child(1) > div > div.Bdr.Jea.KO4.gjz.mQ8.zI7.iyn.Hsu > h1 > div > div > div:nth-child(1) > button > div').click();
    cy.get('#__PWS_ROOT__ > div.App.AppBase > div.appContent > div > div > div:nth-child(1) > div > div:nth-child(1) > div > div.Bdr.Jea.KO4.gjz.mQ8.zI7.iyn.Hsu > h1 > div > div > div.Jea.ujU.zI7.iyn.Hsu > div > div > div > div > div > div > div > div:nth-child(1) > div.hjj.zI7.iyn.Hsu > div:nth-child(2) > div > div').click();
    cy.get('#__PWS_ROOT__ > div.App.AppBase > div.appContent > div > div > div:nth-child(1) > div > div:nth-child(1) > div > div.Bdr.Jea.KO4.gjz.mQ8.zI7.iyn.Hsu > h1 > div > div > div.Jea.ujU.zI7.iyn.Hsu > div > div > div > div > div > div > div > div > div:nth-child(2) > div > div.RDc.hjj.zI7.iyn.Hsu > div > div:nth-child(2) > div:nth-child(1) > div > div > div.zI7.iyn.Hsu > div > div.Jea.gjz.ujU.zI7.iyn.Hsu > div.Eqh.Jea.gjz.jx-.zI7.iyn.Hsu > div > div > button').click();
  });
  it("TM-QA08-549:Share pin",()=>{
    cy.get('#__PWS_ROOT__ > div.App.AppBase > div.appContent > div > div > div > div.Closeup.Module.flex.flex-auto.justify-around.flex-column > div > div > div > div.m2F.zI7.iyn.Hsu > div > div > div > div > div > div > div:nth-child(1) > div > div > div > a > div > div > div.XiG.zI7.iyn.Hsu > div > div > img').click();
    cy.get('#__PWS_ROOT__ > div.App.AppBase > div.appContent > div > div > div > div.Closeup.Module.flex.flex-auto.justify-around.flex-column > div > div > div > div.m2F.zI7.iyn.Hsu > div > div > div > div > div > div > div:nth-child(2) > div > div.qiB > div > div > div > div.DUt.Jea.b8T.qJc.zI7.iyn.Hsu > div.Jea.gjz.zI7.iyn.Hsu > div > div > div > div > button > div > div > svg').click();
    cy.get('#__PWS_ROOT__ > div.App.AppBase > div.appContent > div > div > div > div.Closeup.Module.flex.flex-auto.justify-around.flex-column > div > div > div > div.m2F.zI7.iyn.Hsu > div > div > div > div > div > div > div:nth-child(2) > div > div.qiB > div > div > div > div.DUt.Jea.b8T.qJc.zI7.iyn.Hsu > div.Jea.gjz.zI7.iyn.Hsu > div > div > div > div:nth-child(2) > div > div > div > div > div > div:nth-child(2) > div > div.RDc.hjj.zI7.iyn.Hsu > div > div:nth-child(2) > div:nth-child(1) > div > div > div.zI7.iyn.Hsu > div > div.Jea.gjz.ujU.zI7.iyn.Hsu > div.Eqh.Jea.gjz.jx-.zI7.iyn.Hsu > div > div > button').click();
  });

  it('TM-QA08-382:Edit profile', () =>{
    cy.get('#HeaderContent > div > div > div > div.zI7.iyn.Hsu > div > div > div > div.Jea.gjz.zI7.iyn.Hsu > div:nth-child(4) > div > a > div > div > div > div > div.MIw.QLY.Rym.ojN.p6V.zI7.iyn.Hsu > svg').click();
    cy.get('#__PWS_ROOT__ > div.App.AppBase > div.appContent > div > div > div > div.qiB > div > div > div > div:nth-child(1) > div:nth-child(1) > button > div > svg > path').click();
    cy.get('#last_name').type('hotico');
    cy.get('#__PWS_ROOT__ > div.App.AppBase > div.appContent > div > div > div > div.vdP > div > div > div > div.Qfr > div > div > div:nth-child(1) > div > div.tYG > div > div:nth-child(2) > button > div').click();
  });

    it('TM-QA08-277:Logout',()=>{
      cy.get('#HeaderContent > div > div > div > div.zI7.iyn.Hsu > div > div > div > div.Jea.gjz.zI7.iyn.Hsu > div:nth-child(5) > button > div > svg').click();
      cy.get('#HeaderContent > div > div > div > div.zI7.iyn.Hsu > div > div > div > div.Jea.gjz.zI7.iyn.Hsu > div:nth-child(6) > div > div > div > div > div > div > div:nth-child(2) > div > div.hjj.zI7.iyn.Hsu > div:nth-child(6) > div > div > div > div > div').click();
      
   });
  
});