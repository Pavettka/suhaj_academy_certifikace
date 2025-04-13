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
    this.accountNumberHeader = customElement(
      "th[data-testid='account-number-heading']"
    );
    this.accountNumber = customElement('[data-testid="account-number"]');
    this.accountBalance = customElement('[data-testid="account-balance"]');
    this.accountBalanceHeader = customElement(
      "th[data-testid='account-balance-heading']"
    );
    this.accountType = customElement('[data-testid="account-type"]');
    this.accountTypeHeader = customElement(
      "th[data-testid='account-type-heading']"
    );
    this.profileTitle = customElement(
      "h2[data-testid='profile-details-title']"
    );
    this.accountTitle = customElement("h2[data-testid='accounts-title']");
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

  clickAddAccount() {
    this.addAccount.click();
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

  accountNumberHeaderCheck(title) {
    this.accountNumberHeader.isVisible().containsText(title);
    return this;
  }

  accountBalanceHeaderCheck(title) {
    this.accountBalanceHeader.isVisible().containsText(title);
    return this;
  }

  accountTypeHeaderCheck(title) {
    this.accountTypeHeader.isVisible().containsText(title);
    return this;
  }

  profiletTitleCheck(title) {
    this.profileTitle.isVisible().containsText(title);
    return this;
  }

  accountTitleCheck(title) {
    this.accountTitle.isVisible().containsText(title);
    return this;
  }
}
