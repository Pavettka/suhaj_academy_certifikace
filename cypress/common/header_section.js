import { customElement } from "../helpers/custom_element";
import { LoginPage } from "../page_objects/login_page";

export class HeaderSection {
  constructor() {
    this.logoutButton = customElement(".logout-link");
    this.logo = customElement("img[alt='Tredgate Logo']");
  }

  clickLogoutButton() {
    this.logoutButton.click();
    return new LoginPage();
  }
}
