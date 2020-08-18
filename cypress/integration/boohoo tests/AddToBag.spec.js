/// <reference types="Cypress" />
describe("tests for add to bag functionality",()=>{
    beforeEach(()=>{
        cy.visit("https://www.fashiondays.ro/h/femei/");
    });
    it.only("Test that the system is able to add one product to the shopping cart",()=>{
        cy.get('.main-menu__nav > :nth-child(2) > :nth-child(1)').click();
        cy.get('#main-menu > div.container.main-menu__container > nav.main-menu__nav-container.main-menu__nav-container--base.clearfix > ul > li:nth-child(2) > div > div.main-menu__overlay-content.main-menu__overlay-content--banner.main-menu__overlay-content--banner--1 > a:nth-child(18) > span').click();
        cy.get('#prod-2957485 > .campaign-item > .campaign-photo > .product-over').click();
        cy.get(':nth-child(2) > .sizeSelector').click();
        cy.get('#buy-box').click();
        cy.get('#customer-basket > .container-icon > .icon').click({force: true});
        cy.get('.cart-product-description > a > .brand-name').should("contain","Levi's");
        cy.get('.product-size').should("contain","Masura: S");
        cy.get('.cart-product-quantity').select('5');
        cy.get('.cart-summary-box-total > :nth-child(2)').should("contain","999 RON");
    });

    it("Test that the system is able to add one product to the shopping cart-Quick buy",()=>{
        cy.get('#js-desktop-menu-wrapper > div > ul.menu-main.menu-category.level-1.js-menu-category.js-womens-sub.js-active > li.level-1-item.has-submenu.js-has-submenu.womens-menu.js-prevent-event.womens-tops-menu.js-menu-tab > div > div > div:nth-child(4) > div > ol > li:nth-child(6) > a').click({force: true});
    });
        

    it("Test that the system doesn't accept more than 100 of the same product",()=>{
        cy.get('#js-desktop-menu-wrapper > div > ul.menu-main.menu-category.level-1.js-menu-category.js-womens-sub.js-active > li.level-1-item.has-submenu.js-has-submenu.womens-menu.js-prevent-event.womens-tops-menu.js-menu-tab > div > div > div:nth-child(4) > div > ol > li:nth-child(6) > a').click({force: true});
        cy.get('#c99546e72202cc8c23592318ba > .product-image > .thumb-link > .js-required').click();
        cy.get('.selected > .swatchanchor > .swatchanchor-img').click({force: true});
        cy.get(':nth-child(2) > .swatchanchor > .swatchanchor-text').click({force: true});
        cy.get("#Quantity").type("{selectall}{backspace}100");
        cy.get('#add-to-cart').click();
        cy.get("#Quantity-error").should("be.visible");
        
    });


});
