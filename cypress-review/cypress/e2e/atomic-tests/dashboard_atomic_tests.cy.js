import { AccountApi } from "../../api/account_api";
import { DashboardPage } from "../../page_objects/dashboard_page";
import { LoginPage } from "../../page_objects/login_page";
import { faker } from "@faker-js/faker";

describe("DashBoard Atomic Tests", { testIsolation: false }, () => {
  let username;
  let password;
  let email;
  let firstName;
  let lastName;
  let startBalance = 1000;
  let type = "Test";

  before(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();

    username = faker.internet.userName();
    password = faker.internet.password();
    email = faker.internet.email();
    firstName = faker.person.firstName();
    lastName = faker.person.lastName();
    cy.log(password);
    cy.log(email);

    new LoginPage()
      .openTegb()
      .clickRegister()
      .typeRegisterUsername(username)
      .typeRegisterPassword(password)
      .typeRegisterEmail(email)
      .submitRegister();

    const api = new AccountApi();
    api.login(username, password).then((response) => {
      const token = response.body.access_token;
      cy.wrap(token).as("accessToken");
      cy.get("@accessToken").then((token) => {
        cy.setCookie("access_token", token);
      });

      api.createAccount(token, startBalance, type).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property("userId");
        expect(response.body.balance).to.eq(startBalance);
      });
    });

    new LoginPage().typeUsername(username).typePassword(password).clickLogin();
  });

  context("Header and Menu Section is Visible ", () => {
    it("Left Menu is Visible and Have Text", () => {
      new DashboardPage()
        .checkHomeLink("Domů")
        .checkAccountLink("Účty")
        .checkTransactionLink("Transakce")
        .checkSupportLink("Podpora");
    });

    it("Logos are Visible and Have Text", () => {
      new DashboardPage()
        .logoIsVisible()
        .logoInTheMiddleIsVisible()
        .logoInTheMiddleHaveText("TEG#B Dashboard");
    });
  });

  context("Profile and Account is Visible, Have Text and Click ", () => {
    it("Profile Check", () => {
      new DashboardPage()
        .profiletTitleCheck("Detaily Profilu")
        .changeProfileIsVisible()
        .changeProfileHaveText("Upravit profil")
        .clickChangeProfile()
        .clickCancelChangesButton();
    });

    it("Account Check", () => {
      new DashboardPage()
        .addAccountIsVisible()
        .addAccountHaveText("Přidat účet")
        // .clickAddAccount() - nefunguje
        .accountTitleCheck("Účty")
        .accountNumberHeaderCheck("Číslo účtu")
        .accountBalanceHeaderCheck("Zůstatek")
        .accountTypeHeaderCheck("Typ účtu");
    });
  });
  context("Logout ", () => {
    it("Logout Check", () => {
      new DashboardPage()
        .logoutButtonHaveText("Odhlásit se")
        .clickLogoutButton();
    });
  });
});
