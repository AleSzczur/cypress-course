/// <reference types = "cypress"/>

import SelectPage from "../support/page-object/SelectPage";

describe("E2E - Select option", () => {
    it("Selecting option", () => {
        cy.visit("/product-category/shirts/?orderby=menu_order")

        //Sort by name
        cy.get('[name="orderby"]').select("date", { delay: 1000 });

        // Sort by value
        cy.get('[name="orderby"]').select("rating", { force: true });

        // Sort by index

        cy.get('[name="orderby"]').select(5);
    })

})

it.only("Selecting all items", () => {
    cy.visit("/product-category/shirts/?orderby=menu_order")
   SelectPage.SelectAllOption();

})

// it.only("Selecting all items", () => {
//     cy.visit("/product-category/shirts/?orderby=menu_order")
//     cy.wait(5000)
//     cy.get('[name="orderby"]').then(select => {
//         cy.wrap(select).find("option").each(item => {
//             cy.wrap(select).wait(4000).select(item.text())
//         })
//     })

// })