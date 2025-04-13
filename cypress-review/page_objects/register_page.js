import { customElement } from "../helpers/custom_element";
import { LoginPage } from "./login_page";

export class RegisterPage {
  constructor() {
    this.usernameInput = customElement(
      "input[placeholder='Uživatelské jméno']"
    );
    this.passwordInput = customElement("input[placeholder='Heslo']");
    this.emailInput = customElement("input[placeholder='Email']");
    this.registerButton = customElement("button[type='submit']");
    cy.intercept("/tegb/register").as("register_api");
  }

  typeRegisterUsername(username) {
    this.usernameInput.get().type(username);
    return this;
  }

  typeRegisterPassword(password) {
    this.passwordInput.get().type(password);
    return this;
  }

  typeRegisterEmail(email) {
    this.emailInput.get().type(email);
    return this;
  }

  submitRegister() {
    this.registerButton.click();
    cy.wait("@register_api");
    return new LoginPage();
  }
}
