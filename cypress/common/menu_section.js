import { customElement } from "../helpers/custom_element";
import { HeaderSection } from "./header_section";

export class MenuSection extends HeaderSection {
  constructor() {
    super();
    this.homeLink = customElement("li").eq(1);
    this.accountLink = customElement("li").eq(2);
    this.transactionLink = customElement("li").eq(3);
    this.supportLink = customElement("li").eq(4);
  }

  checkHomeLink(home) {
    this.homeLink.containsText(home);
    return this();
  }

  checkAccountLink(account) {
    this.homeLink.containsText(account);
    return this();
  }

  checkTransactionLink(transaction) {
    this.transactionLink.containsText(transaction);
    return this();
  }

  checkSupportLink(support) {
    this.supportLink.containsText(support);
    return this();
  }
}

//cy.get('li').eq(1).should('contain', 'siamese') - testování seznamu
