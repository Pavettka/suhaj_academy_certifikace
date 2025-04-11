import { AccountApi } from "../../api/account_api";
import { DashboardPage } from "../../page_objects/dashboard_page";
import { LoginPage } from "../../page_objects/login_page";

describe("DashBoard Atomic Tests", { testIsolation: false }, () => {
  before(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();

    const username = Cypress.env("tegb_username");
    const password = Cypress.env("tegb_password");

    const api = new AccountApi();
    api.login(username, password).then((response) => {
      const token = response.body.access_token;
    });

    new LoginPage()
      .openTegb()
      .typeUsername(username)
      .typePassword(password)
      .clickLogin();
  });

  context("Header and Menu Section is Visible ", () => {
    it("Left Menu is Visible and Have Text", () => {
      new DashboardPage()
        .checkHomeLink("Domů")
        .checkAccountLink("Účty")
        .checkTransactionLink("Transakce")
        .checkSupportLink("Podpora");
    });

    it("Logos are Visible", () => {
      new DashboardPage().logoIsVisible().logoInTheMiddleIsVisible();
    });
  });

  context("Profile and Account is Visible, Have Text and Click ", () => {
    it("Profile Check", () => {
      new DashboardPage()
        .profiletTitleCheck("Detaily Profilu")
        .changeProfileIsVisible()
        .clickChangeProfile()
        .clickCancelChangesButton();
    });

    it("Account Check", () => {
      new DashboardPage()
        .addAccountIsVisible()
        // .clickAddAccount() - nefunguje
        .accountTitleCheck("Účty")
        .accountNumberHeaderCheck("Číslo účtu")
        .accountBalanceHeaderCheck("Zůstatek")
        .accountTypeHeaderCheck("Typ účtu");
    });
  });
  context("Logout ", () => {
    it("Logout Check", () => {
      new DashboardPage().clickLogoutButton();
    });
  });
});
