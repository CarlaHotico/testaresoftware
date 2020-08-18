/// <reference types="Cypress" />
    describe("test for login functionality",() => {
        function login(){
            cy.get('#__PWS_ROOT__ > div.zI7.iyn.Hsu > div:nth-child(2) > div > div > div:nth-child(2) > div.Jea._he.b8T.gjz.zI7.iyn.Hsu > div.Jea.l7T.zI7.iyn.Hsu > div:nth-child(2) > button > div').click();
            cy.get('#email').type("ch927796@gmail.com");
            cy.get('#password').type("carlahotico");
            cy.get('#__PWS_ROOT__ > div.zI7.iyn.Hsu > div:nth-child(2) > div > div > div:nth-child(2) > div.Jea.MIw.TpD.mQ8.sLG.zI7.iyn.Hsu > div.Jea.MIw.QLY.Rym.jzS.mQ8.ojN.p6V.prG.sLG.zI7.iyn.Hsu > div > div > div > div.Jea.jzS.mQ8.zI7.iyn.Hsu > div > div > div > div:nth-child(3) > form > div:nth-child(5) > button').click();
    };
            
        beforeEach(()=>{
            cy.visit("https://ro.pinterest.com/");
            login();
        });
                 
    

    it("TM-QA08-279:Save picture+TM-QA08-272:Login",()=>{
        Cypress.on("uncaught:exception", (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false;
        });

        cy.get('#__PWS_ROOT__ > div.App.AppBase > div.appContent > div > div > div > div > div.gridCentered > div > div > div:nth-child(1) > div:nth-child(1) > div > div > div > div > div.XiG.sLG.zI7.iyn.Hsu > div:nth-child(1) > a > div > div.zI7.iyn.Hsu > div > div > div > div > div > img').click();


    });
});
