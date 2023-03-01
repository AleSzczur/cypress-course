/// <reference types = "cypress"/>

import AlertPage from "../support/page-object/Alert";

describe("E2E - Alerts", () => {
    it("Alert", () => {
        cy.visit("https://testowanie-oprogramowania.pl/lekcje/alerty/")
        AlertPage.clickOnButtonAlert1();
        AlertPage.verifyAlertText("Testowa");
    })



    // cy.get("#alert").click()
    // cy.on("window:alert", content => {
    //     expect(content).to.equal("Przykładowa treść alertu")
    // })

    // })
    it("Alert", () => {

        AlertPage.clickOnButtonAlert2();
        AlertPage.verifyAlertConfirmText();
        AlertPage.rejectAlert();
        // cy.get("#alert-confirm").click()
        // cy.on("window:confirm", content => {
        //     expect(content).to.equal("Zaakceptuj aby kontynuować!")
        // })

        // cy.on("window:confirm", () => false)
    })
})
