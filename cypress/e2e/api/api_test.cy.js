import { AccountApi } from "../../api/account_api";
import { LoginPage } from "../../page_objects/login_page";

describe("Login API response have access_token and response status 201", () => {
  it("Login API response have access_token and response status 201", () => {
    const username = Cypress.env("tegb_username");
    const password = Cypress.env("tegb_password");

    const api = new AccountApi();
    api.login(username, password).then((response) => {
      const token = response.body.access_token;

      new LoginPage()
        .openTegb()
        .typeUsername(Cypress.env("tegb_username"))
        .typePassword(Cypress.env("tegb_password"))
        .clickLoginApi();
    });
  });
});
