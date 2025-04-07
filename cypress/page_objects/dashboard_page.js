import { HeaderSection } from "../common/header_section";
import { customElement } from "../helpers/custom_element";
import { ProfilePage } from "./profile_page";

export class DashboardPage extends HeaderSection {
  constructor() {
    super();
    this.changeProfile = customElement(".profile-action");
    this.firstNameSave = customElement("div[data-testid='name']");
    this.lastNameSave = customElement("div[data-testid='surname']");
    this.emailSave = customElement("div[data-testid='email']");
    this.phoneSave = customElement("div[data-testid='phone']");
    this.ageSave = customElement("div[data-testid='age']");
    this.addAccount = customElement(".account-action");
    this.accountNumber = customElement(".account-action");
    this.addAccount = customElement(".account-action");
    this.addAccount = customElement(".account-action");
  }

  clickChangeProfile() {
    this.changeProfile.click();
    return new ProfilePage();
  }

  changeProfileIsVisible() {
    this.changeProfile.isVisible();
    return this;
  }

  addAccountIsVisible() {
    this.addAccount.isVisible();
    return this;
  }

  firstNameHaveText(firstName) {
    this.firstNameSave.haveText(firstName).isVisible();
    return this;
  }

  lastNameHaveText(lastName) {
    this.lastNameSave.haveText(lastName).isVisible();
    return this;
  }

  emailHaveText(email) {
    this.emailSave.haveText(email).isVisible();
    return this;
  }

  phoneHaveText(phone) {
    this.phoneSave.haveText(phone).isVisible();
    return this;
  }

  ageHaveValue(age) {
    this.ageSave.haveValue(age).isVisible();
    return this;
  }
}
