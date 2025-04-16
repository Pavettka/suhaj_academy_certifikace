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
    this.successfulChangeProfilMessage = customElement(".update-message");
    cy.intercept("/tegb/profile").as("profile_api");
    cy.intercept("/tegb/dashboard").as("dashboard_api");
  }

  clickChangeProfile() {
    this.changeProfile.click();
    cy.wait("@profile_api");
    return new ProfilePage();
  }

  changeProfileIsVisible() {
    this.changeProfile.isVisible().exist();
    return this;
  }

  changeProfileHaveText(changeProfileText) {
    this.changeProfile.haveText(changeProfileText);
    return this;
  }

  successfulChangeProfilMessageHaveText(successfulMessageText){
    this.successfulChangeProfilMessage.haveText(successfulMessageText);
    return this;
  }
  
  addAccountIsVisible() {
    this.addAccount.isVisible().exist();
    return this;
  }

  addAccountHaveText(addAccountName) {
    this.addAccount.haveText(addAccountName);
    return this;
  }

  clickAddAccount() {
    this.addAccount.click();
    return this;
  }

  firstNameHaveText(firstName) {
    this.firstNameSave.containsText(firstName).isVisible().exist();
    return this;
  }

  lastNameHaveText(lastName) {
    this.lastNameSave.containsText(lastName).isVisible().exist();
    return this;
  }

  emailHaveText(email) {
    this.emailSave.containsText(email).isVisible().exist();
    return this;
  }

  phoneHaveText(phone) {
    this.phoneSave.containsText(phone).isVisible().exist();
    return this;
  }

  ageHaveValue(age) {
    this.ageSave.containsText(age).isVisible().exist();
    return this;
  }

  accountNumberIsVisible() {
    this.accountNumber.isVisible().exist();
    return this;
  }

  accountBalanceHaveValue(balance) {
    this.accountBalance.containsText(balance).isVisible().exist();
    return this;
  }

  accountTypeHaveText(type) {
    this.accountType.containsText(type).isVisible().exist();
    return this;
  }

  accountNumberHeaderCheck(title) {
    this.accountNumberHeader.isVisible().containsText(title).exist();
    return this;
  }

  accountBalanceHeaderCheck(title) {
    this.accountBalanceHeader.isVisible().containsText(title).exist();
    return this;
  }

  accountTypeHeaderCheck(title) {
    this.accountTypeHeader.isVisible().containsText(title).exist();
    return this;
  }

  profiletTitleCheck(title) {
    this.profileTitle.isVisible().containsText(title).exist();
    return this;
  }

  accountTitleCheck(title) {
    this.accountTitle.isVisible().containsText(title).exist();
    return this;
  }
}
