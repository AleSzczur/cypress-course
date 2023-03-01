class AlertPage {
    get buttonAlert1() {
        return cy.get("#alert")
    }
    get buttonAlert2() {
        return cy.get("#alert-confirm")
    }

    clickOnButtonAlert1() {
        this.buttonAlert1.click()
    }

    clickOnButtonAlert2() {
        this.buttonAlert2.click()
    }
    verifyAlertText(text) {
        cy.on("window:alert", content => {
            expect(content).to.equal(text)
        })
    }
    verifyAlertConfirmText() {
        cy.on("window:confirm", content => {
            expect(content).to.equal("Zaakceptuj aby kontynuować!")
        })
    }

    rejectAlert() {
        cy.on("window:confirm", () => false);
    }

    akceptAlert() {
        cy.on("window:confirm", () => true);
    }
}

export default new AlertPage();