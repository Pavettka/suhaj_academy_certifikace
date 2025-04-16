import { customElement } from "../helpers/custom_element";
import { LoginPage } from "../page_objects/login_page";
import { MenuSection } from "./menu_section";

export class HeaderSection extends MenuSection {
  constructor() {
    super();
    this.logoutButton = customElement(".logout-link");
    this.logo = customElement('[data-testid="logo-img"]');
    this.logoInTheMiddle = customElement(".app-title");
    cy.intercept("/tegb/login").as("login_api");
  }

  clickLogoutButton() {
    this.logoutButton.click();
    cy.wait("@login_api");
    return new LoginPage();
  }

  logoutButtonHaveText(logoutButtonName) {
    this.logoutButton.haveText(logoutButtonName);
    return this;
  }

  logoIsVisible() {
    this.logo.isVisible().exist();
    return this;
  }

  logoInTheMiddleIsVisible() {
    this.logoInTheMiddle.isVisible().exist();
    return this;
  }

  logoInTheMiddleHaveText(LogoText) {
    this.logoInTheMiddle.haveText(LogoText);
    return this;
  }
}
