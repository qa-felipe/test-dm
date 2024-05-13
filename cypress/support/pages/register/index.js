//Page interaction actions
//acoes
//acessar pagina de inscrição
//preencher inscrição
//salvar inscrição
//validar inscrição

const el = require('./elements').ELEMENTS;

class Register {
    
    acessRegisterForm(){
        cy.visit('/automation-practice-form/');
    }

    fillRequiredFields(name, lastName, phone, gender){
        cy.get(el.name).type(name);
        cy.get(el.lastName).type(lastName);   
        this.selectGender(gender);
        cy.get(el.phone).type(phone);
    }

    fillOptionalFields(hobbies,subjects,email,dateBirth,pic,currentAddress,state,city){
        cy.get(el.email).type(email);
        cy.get(el.dateBirth).type('{selectall}' + dateBirth + '{enter}');
        
        this.selectSubjects(subjects);
        this.selectHobbies(hobbies);

        cy.get(el.pic).selectFile(pic);
        cy.get(el.currentAddress).type(currentAddress);
        cy.get(el.state).type(state + '{enter}');
        cy.get(el.city).type(city + '{enter}');
    }

    submitRegisterForm(){
        cy.get(el.submit).click();
    }

    checkRegisterForm(){
        cy.get(el.submitModal).should('be.visible');
        cy.get(el.submitSuccess).contains('Thanks for submitting the form');
    }

    selectGender(gender){
        if(gender == "female") {
            cy.get(el.gender.female).click();
        }
        else if(gender == "male") {
            cy.get(el.gender.male).click();
        }
        else if(gender == "other") {
            cy.get(el.gender.other).click();
        }
        else {
            alert(
                "O genero " + gender + " não é válido!",
              );
              return false;
        }
    
    }

    selectHobbies(hobbies){
        for(let i = 0; i < hobbies.length; i = i + 1 ) {
            if(hobbies[i] == "sports") {
                cy.get(el.hobbies.sports).click();
            }
            else if(hobbies[i] == "reading") {
                cy.get(el.hobbies.reading).click();
            }
            else if(hobbies[i] == "music") {
                cy.get(el.hobbies.music).click();
            }
            else {
                alert(
                    "O hobbie " + hobbies[i] + " não é válido!",
                  );
                  return false;
            }
        };
    }

    selectSubjects(subjects) {
        for(let i = 0; i < subjects.length; i = i + 1 ) {         
            cy.get(el.subjects).type(subjects[i] + '{enter}');
        }
    }

}

export default new Register();