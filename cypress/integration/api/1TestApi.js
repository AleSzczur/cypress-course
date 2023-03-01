/// <reference types = "cypress"/>


describe("E2E - Api Test", () => {
    beforeEach(function () {
        cy.fixture("example").then(data => {
            this.dataApi = data

        })
    })

    it("The Api tags verryfing", () => {
        cy.intercept("GET", "https://api.realworld.io/api/tags").as("requestTag");
        cy.visit("https://angular.realworld.io/");
        cy.wait("@requestTag");
        cy.get("@requestTag").then(res => {
            console.log(res)
            expect(res.response.statusCode).to.equal(200);
            expect(res.response.body.tags).to.contain('welcome').and.to.contain("et");

        })
    })
    it("Uncorrect loging", function () {
        cy.intercept("POST", "https://api.realworld.io/api/users/login").as("requestLogin");
        cy.visit("https://angular.realworld.io/");
        cy.get('[routerlink="/login"]').click();
        cy.login("test12@test.com", "12345");
        cy.wait("@requestLogin");
        cy.get("@requestLogin").then(res => {
            console.log(res);
            expect(res.response.statusCode).to.equal(403);
            expect(res.response.statusMessage).to.equal(this.dataApi.statusMessage403);
        })

    })

    it("Correct logining", function(){
        cy.intercept("GET", "https://api.realworld.io/api/tags", { fixture: "tags.json"}).as("requestTag");
        cy.login(this.dataApi.truelogin, this.dataApi.truepassword)
        cy.wait("@requestTag");
        cy.get("@requestTag").then(res => {
            console.log(res);
            expect(res.response.body.tags).to.contain(
                "implementations",
                "welcome",
                "hello",
                "world",
                "ipsum",
                "qui",
                "et",
                "quia",
                "cupiditate",
                "deserunt"
            )
        })
    })
})