import BasePage from "./basePage";

class PracticeFormPage extends BasePage {

  static get url() {
    return "/automation-practice-form";
  }

  static get firstName() {
    return cy.get("#firstName");
  }

  static get lastName() {
    return cy.get("#lastName");
  }


  static get email() {
    return cy.get("#userEmail");
  }


  static gender(x) {
    return cy.get(`#gender-radio-${x}`);
  }

  static get mobNumber() {
    return cy.get("#userNumber");
  }


  static get calendar(){
    return cy.get("#dateOfBirthInput")
}
  static get setMonth(){
    return cy.get('[class="react-datepicker__month-select"]')
}
static get setYear(){
    return cy.get('[class="react-datepicker__year-select"]')
}
static get setDay(){
    return cy.get('[class="react-datepicker__day react-datepicker__day--029"]');
}


  static get subjects(){
    return cy.get(".subjects-auto-complete__value-container");
}

static hobbies(y) {
    return cy.get(`#hobbies-checkbox-${y}`);
  }


  static get currentAddress() {
    return cy.get("#currentAddress");
  }

  static get state() {
    return cy.get("#state > .css-yk16xz-control > .css-1hwfws3");
}

static get stateSelect() {
    return cy.get("#react-select-3-option-0");
}


static get city() {
    return cy.get("#city > .css-yk16xz-control > .css-1hwfws3");
}

static get citySelect() {
    return cy.get("#react-select-4-option-0");
}

static get submitButton() {
    return cy.get("#submit");
}




static get validName() {
    return cy.get("tbody > :nth-child(1) > :nth-child(2)");
  }



  static get validEmail() {
    return cy.get("tbody > :nth-child(2) > :nth-child(2)");
  }


  

  static get validmobNumber() {
    return cy.get("tbody > :nth-child(4) > :nth-child(2)");
  }


  static get validBirthDay() {
    return cy.get("tbody > :nth-child(5) > :nth-child(2)");
  }


  static get validSubjects(){
    return cy.get("tbody > :nth-child(6) > :nth-child(2)");
}
static get validCurrentAddress() {
    return cy.get("tbody > :nth-child(9) > :nth-child(2)");

  }
  static get validStateAndCity() {
    return cy.get("tbody > :nth-child(10) > :nth-child(2)");
}





}

export default PracticeFormPage;