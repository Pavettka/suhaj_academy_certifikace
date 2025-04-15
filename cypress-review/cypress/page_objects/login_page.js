import { customElement } from "../helpers/custom_element";
import { DashboardPage } from "./dashboard_page";
import { RegisterPage } from "./register_page";

export class LoginPage {
  constructor() {
    this.loginUrl = Cypress.env("tegb_loginUrl");
    this.usernameInput = customElement(
      "input[placeholder='Uživatelské jméno']"
    );
    this.passwordInput = customElement("input[placeholder='Heslo']");
    this.registerButton = customElement(
      "button[data-testid='register-button']"
    );
    this.loginButton = customElement("button[data-testid='submit-button']");
    cy.intercept("/tegb/login").as("login_api");
  }

  openTegb() {
    cy.visit(this.loginUrl);
    return this;
  }

  typeUsername(username) {
    this.usernameInput.get().type(username);
    return this;
  }

  typePassword(password) {
    this.passwordInput.get().type(password);
    return this;
  }

  clickRegister() {
    this.registerButton.click();
    return new RegisterPage();
  }

  clickLogin() {
    this.loginButton.click().haveResponse("@login_api");
    return new DashboardPage();
  }
}
