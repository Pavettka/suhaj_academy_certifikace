import { AccountApi } from "../../api/account_api";
import { LoginPage } from "../../page_objects/login_page";
import { faker } from "@faker-js/faker";

describe("E2E exercise", () => {
  let username;
  let password;
  let email;
  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBldHIuZmlma2EiLCJzdWIiOjUsImlhdCI6MTcwMTMzOTIyOSwiZXhwIjoxNzAxMzQyODI5fQ.e-mWFHJQmMZgEo0ZJN80bnNLo0iIfYyE95WliqVOLRQ";
  let startBalance = "1000";
  let type = "Test";

  beforeEach(() => {
    username = faker.internet.userName();
    password = faker.internet.password();
    email = faker.internet.email();
    cy.log(username);
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
  });
});
