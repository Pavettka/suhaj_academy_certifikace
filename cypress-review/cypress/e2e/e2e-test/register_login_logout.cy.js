import { AccountApi } from "../../api/account_api";
import { LoginPage } from "../../page_objects/login_page";
import { faker } from "@faker-js/faker";

describe("E2E exercise", () => {
  let username;
  let password;
  let email;
  let firstName;
  let lastName;
  let startBalance = 1000;
  let type = "Test";

  beforeEach(() => {
    username = faker.internet.userName();
    password = faker.internet.password();
    email = faker.internet.email();
    firstName = faker.person.firstName();
    lastName = faker.person.lastName();
    cy.log(password);
    cy.log(email);
  });

  it("Register, create profile, login, logout", () => {
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

    new LoginPage()
      .typeUsername(username)
      .typePassword(password)
      .clickLogin()
      .clickChangeProfile()
      .typeFirstName(firstName)
      .typeLastName(lastName)
      .typeEmail(email)
      .typePhone("+420111111111")
      .typeAge(10)
      .clickSubmitButton()
      .successfulChangeProfilMessageHaveText("Profile updated successfully!")
      .firstNameHaveText(firstName)
      .lastNameHaveText(lastName)
      .emailHaveText(email)
      .phoneHaveText("+420111111111")
      .ageHaveValue(10)
      .accountNumberIsVisible()
      .accountBalanceHaveValue(startBalance)
      .accountTypeHaveText(type)
      .clickLogoutButton();
  });
});
