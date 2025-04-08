import { customElement } from "../helpers/custom_element";
import { LoginPage } from "../page_objects/login_page";
import { MenuSection } from "./menu_section";

export class HeaderSection extends MenuSection {
  constructor() {
    super();
    this.logoutButton = customElement(".logout-link");
    this.logo = customElement('[data-testid="logo-img"]');
    this.logoInTheMiddle = customElement(".app-title");
  }

  clickLogoutButton() {
    this.logoutButton.click();
    return new LoginPage();
  }

  logoIsVisible() {
    this.logo.isVisible();
    return this;
  }

  logoInTheMiddleIsVisible() {
    this.logoInTheMiddle.isVisible();
    return this;
  }
}
