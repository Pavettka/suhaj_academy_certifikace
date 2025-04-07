import { customElement } from "../helpers/custom_element";
import { DashboardPage } from "./dashboard_page";

export class ProfilePage {
  constructor() {
    this.firstName = customElement("input[data-testid='chage-name-input']");
    this.lastName = customElement("input[data-testid='chage-surname-input']");
    this.email = customElement("input[data-testid='chage-email-input']");
    this.phone = customElement("input[data-testid='chage-phone-input']");
    this.age = customElement("input[data-testid='chage-age-input']");
    this.submitButton = customElement("button[type='submit']");
  }

  typeFirstName(firstName) {
    this.firstName.get().type(firstName);
    return this;
  }

  typeLastName(lastName) {
    this.lastName.get().type(lastName);
    return this;
  }

  typeEmail(email) {
    this.email.get().type(email);
    return this;
  }

  typephone(phone) {
    this.phone.get().type(phone);
    return this;
  }

  typephone(age) {
    this.age.get().type(age);
    return this;
  }

  clickSubmitButton() {
    this.submitButton.click();
    return DashboardPage();
  }
}
