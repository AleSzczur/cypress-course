/// <reference types = "cypress"/>

describe("E2E - Upload File", () =>{
    it("Upload file to the Contact input", () =>{
        cy.visit("https://www.way2automation.com/way2auto_jquery/registration.php#load_box")
        cy.get('[type="file"]').attachFile("../fixtures/kotek-mruczek--naklejka.-naklejka-dla-dzieci.-dekoracje-pokoju.jpg")
        cy.get('[type="file"]').should("contain", "kotek-mruczek--naklejka.-naklejka-dla-dzieci.-dekoracje-pokoju.jpg")
    })
})
