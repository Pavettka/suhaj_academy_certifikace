import { LoginPage } from "../page_objects/login_page";

export class HeaderSection {
  constructor() {
    this.logoutButton = customElement(".logout-link");
    this.logo = customElements("img[alt='Tredgate Logo']");
  }

  clickLogoutButton() {
    this.logoutButton.click();
    return new LoginPage();
  }
}
