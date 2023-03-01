/// <reference types = "cypress"/>

describe("E2E - Click Action Checkbox", () => {
    it("Checkbox", () => {
        cy.visit("https://ultimateqa.com/product-category/shirts/?orderby=menu_order")
        cy.get(".et_pb_blurb_7").find("[type=checkbox]").then(checkbox => {
            cy.get(checkbox).eq(0).check({ delay: 200 });
            cy.get(checkbox).eq(1).check({ delay: 200 }).invoke("prop", "checked").then(marked =>{
                cy.log(marked)
            });
        });

    })
})