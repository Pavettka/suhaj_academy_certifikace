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
    this.accountNumber = customElement('[data-testid="account-number"]');
    this.accountBalance = customElement('[data-testid="account-balance"]');
    this.accountType = customElement('[data-testid="account-type"]');
    cy.intercept("/tegb/profile").as("profile_api");
  }

  clickChangeProfile() {
    this.changeProfile.click();
    cy.wait("@profile_api");
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
    this.firstNameSave.containsText(firstName).isVisible();
    return this;
  }

  lastNameHaveText(lastName) {
    this.lastNameSave.containsText(lastName).isVisible();
    return this;
  }

  emailHaveText(email) {
    this.emailSave.containsText(email).isVisible();
    return this;
  }

  phoneHaveText(phone) {
    this.phoneSave.containsText(phone).isVisible();
    return this;
  }

  ageHaveValue(age) {
    this.ageSave.containsText(age).isVisible();
    return this;
  }

  accountNumberIsVisible() {
    this.accountNumber.isVisible();
    return this;
  }

  accountBalanceHaveValue(balance) {
    this.accountBalance.containsText(balance).isVisible();
    return this;
  }

  accountTypeHaveText(type) {
    this.accountType.containsText(type).isVisible();
    return this;
  }
}
