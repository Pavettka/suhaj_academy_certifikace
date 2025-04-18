import { customElement } from "../helpers/custom_element";

export class MenuSection {
  constructor() {
    this.homeLink = customElement("ul > :nth-child(1)");
    this.accountLink = customElement("ul > :nth-child(2)");
    this.transactionLink = customElement("ul > :nth-child(3)");
    this.supportLink = customElement("ul > :nth-child(4)");
  }

  checkHomeLink(home) {
    this.homeLink.containsText(home).isVisible();
    return this;
  }

  checkAccountLink(account) {
    this.accountLink.containsText(account);
    return this;
  }

  checkTransactionLink(transaction) {
    this.transactionLink.containsText(transaction).isVisible();
    return this;
  }

  checkSupportLink(support) {
    this.supportLink.containsText(support).isVisible();
    return this;
  }
}
