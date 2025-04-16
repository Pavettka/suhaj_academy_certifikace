export class AccountApi {
  createAccount(token, startBalance, type) {
    return cy.request({
      method: "POST",
      url: Cypress.env("tegb_backEndUrl") + "tegb/accounts/create",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: {
        startBalance: startBalance,
        type: type,
      },
    });
  }

  login(username, password) {
    return cy
      .request({
        method: "POST",
        url: Cypress.env("tegb_backEndUrl") + "tegb/login",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          username,
          password,
        },
      })
      .then((response) => {
        expect(response.status).to.eq(201);
      });
  }
}
