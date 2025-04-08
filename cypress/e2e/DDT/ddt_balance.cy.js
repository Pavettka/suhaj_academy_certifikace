import { AccountApi } from "../../api/account_api";
import newBalanceData from "../../fixtures/ddt_balance_data.json";
import { LoginPage } from "../../page_objects/login_page";
import { faker } from "@faker-js/faker";

describe("DDT - Balance Check", () => {
  let username;
  let password;
  let email;
  let type = "Test";
  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBldHIuZmlma2EiLCJzdWIiOjUsImlhdCI6MTcwMTMzOTIyOSwiZXhwIjoxNzAxMzQyODI5fQ.e-mWFHJQmMZgEo0ZJN80bnNLo0iIfYyE95WliqVOLRQ";

  beforeEach(() => {
    username = faker.internet.userName();
    password = faker.internet.password();
    email = faker.internet.email();
    cy.log(password);
    cy.log(email);

    new LoginPage()
      .openTegb()
      .clickRegister()
      .typeRegisterUsername(username)
      .typeRegisterPassword(password)
      .typeRegisterEmail(email)
      .submitRegister();
  });

  newBalanceData.forEach((balanceData) => {
    it(`DDT Balance: ${balanceData.balance}`, () => {
      const balanceName =
        balanceData.name_prefix + faker.number.int({ max: 99999 });
      cy.log("Project name: " + balanceName);
      const startBalance = generateStartBalance(balanceData);
      cy.log(startBalance);

      const api = new AccountApi();
      api.login(username, password).then((response) => {
        const token = response.body.access_token;
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
        .accountBalanceHaveValue(startBalance);
    });
  });
});

function generateStartBalance(balanceData) {
  let generatedBalance;
  generatedBalance = balanceData.balance;
  return generatedBalance;
}
