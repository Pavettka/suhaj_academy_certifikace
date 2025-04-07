export class AccountApi {
  createAccount(token, startBalance, type) {
    return cy.request({
      method: "POST",
      url: "https://tegb-backend-877a0b063d29.herokuapp.com/tegb/accounts/create",
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
    return cy.request({
      method: "POST",
      url: "https://tegb-backend-877a0b063d29.herokuapp.com/tegb/login",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        username,
        password,
      },
    });
  }
}
