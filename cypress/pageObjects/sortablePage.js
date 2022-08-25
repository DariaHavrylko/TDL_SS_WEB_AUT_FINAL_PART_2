import BasePage from "./basePage";

class SortablePage extends BasePage {

  static get url() {
    return "/sortable";
  }

  static itemList(x) {
    return cy.get(`.vertical-list-container > :nth-child(${x})`);
  }




}

export default SortablePage;