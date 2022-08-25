class BasePage {
    static get url() {
      return "https://demoqa.com";
    }
  
    static visit() {
      cy.visit(this.url, { failOnStatusCode: false });
    }
  }
  
  export default BasePage;