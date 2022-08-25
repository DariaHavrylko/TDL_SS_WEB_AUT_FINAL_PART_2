import PracticeFormPage from "../pageObjects/practiceFormPage"
import SortablePage from "../pageObjects/sortablePage"


describe("Final_task_part_2", () => {


  context("Practice forms", () => {
    beforeEach(() => {
      cy.visit('https://demoqa.com/automation-practice-form')
    });
    
    it("Fill form:", () => {
      PracticeFormPage.firstName.type("UserFirstName");
      PracticeFormPage.lastName.type("UserLastName");
      PracticeFormPage.email.type("UserEmail@gmail.com");
      let x = Math.round(Math.random() * 3);
      if(x == 0){x = 1}
      PracticeFormPage.gender(x).click({force: true});
      PracticeFormPage.mobNumber.type("1234567");
      PracticeFormPage.calendar.click( {force: true} );
      PracticeFormPage.setMonth.select('February');
      PracticeFormPage.setYear.select('1984');
      PracticeFormPage.setDay.click();
      PracticeFormPage.subjects.type("Math{enter}");
      let y = Math.round(Math.random() * 3);
      if(y == 0){y = 1}
      PracticeFormPage.hobbies(y).click({force: true});
      PracticeFormPage.currentAddress.type("UserCurrentAddress");
      PracticeFormPage.state.click();
      PracticeFormPage.stateSelect.click();
      PracticeFormPage.city.click();
      PracticeFormPage.citySelect.click();
      PracticeFormPage.submitButton.click();
      PracticeFormPage.validName.should("have.text", "UserFirstName UserLastName");
      PracticeFormPage.validEmail.should("have.text", "UserEmail@gmail.com");
      PracticeFormPage.validmobNumber.should("have.text", "1234567");
      PracticeFormPage.validBirthDay.should("have.text", "29 February,1984");
      PracticeFormPage.validSubjects.should("have.text", "Maths");
      PracticeFormPage.validCurrentAddress.should("have.text", "UserCurrentAddress");
      PracticeFormPage.validStateAndCity.should("have.text", "NCR Delhi");
    });
  });



  context("Sortable", () => {
    beforeEach(() => {
      cy.visit('https://demoqa.com/sortable')
    });
    
    it("Valid order:", () => { 
      for(let i = 1; i < 7; i++){
       let item = ["One", "Two", "Three", "Four", "Five", "Six"];
        SortablePage.itemList(i).should("have.text", item[i-1])
        }
      
    });

    // it.only("Sort:", () => { 
      
    // });
  });

});


