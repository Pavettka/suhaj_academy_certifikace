import { LoginPage } from "../../page_objects/login_page";

describe("", () => {
  it("Login API response have access_token and response status 201", () => {
    cy.intercept("/tegb/login").as("login_api");
    new LoginPage()
      .openTegb()
      .typeUsername(Cypress.env("tegb_username"))
      .typePassword(Cypress.env("tegb_password"))
      .clickLoginApi();
  });
});
